import {ToolObject} from "./common/toolObject";
import {OutlineImageParams} from "./canvas_interfaces";
import {Tool} from "./common/tool";
import {loadImage, makeObjectsMap} from "../common_functions";
import {dataBase} from "../../app";
import {Constructor} from "../router/router_interfaces";
import {Scene} from "./common/scene";

export class Painter {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D ;
    frameId: number;

    scene: Scene;
    undoScene: Array<{string: ToolObject}> = [];

    objectsMap: Map<string, Constructor<ToolObject>>;
    currentTool: Tool;
    currentObject: ToolObject;
    currentOutlineImage: HTMLImageElement;

    constructor (canvas: HTMLCanvasElement, tools: Array<Tool>, outlineImage?: OutlineImageParams) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.canvas.addEventListener('mousedown', this);
        this.objectsMap = makeObjectsMap(tools);

        if (outlineImage) {
            this.scene = new Scene(outlineImage);
        } else {
            this.scene = new Scene();
        }

        dataBase.get('scene')
            .then((value: Scene) => {
                if (value) {
                    this.scene = Object.assign(this.scene, value);
                    this.scene.hasChanges = true;
                }
            })
            .then(async () => {
                if (this.scene.outlineImage) {
                    let {alt, src} = outlineImage;
                    this.currentOutlineImage = await loadImage(alt, src);
                    this.scene.hasChanges = true;
                }

                this.start();
            })
            .catch(err => console.log(err))
    }

    setTool (tool: Tool) {
        this.currentTool = tool;
    }

    handleEvent (event: MouseEvent) {
        switch (event.type) {
        case 'mousedown':
            return this.onMouseDown(event);
        case 'mousemove':
            return this.onMouseMove(event);
        case 'mouseup':
            return this.onMouseUp();
        }
    }

    async onMouseDown ({offsetX, offsetY}: MouseEvent) {
        if (this.currentTool) {
            this.currentObject = this.currentTool.createObject(offsetX, offsetY, this.ctx, this.canvas);
            // @ts-ignore
            this.objectsMap.set(this.currentObject.constructor.name, this.currentObject.constructor);

            this.scene.addChanges(this.currentObject);
            await this.scene.toDataBase();
            if (this.currentObject.draggable) {
                this.canvas.addEventListener('mousemove', this);
            }
            document.addEventListener('mouseup', this);
        }
    }


     onMouseMove ({offsetX, offsetY, shiftKey}: MouseEvent): void {
        this.currentTool.drawObject(this.currentObject, offsetX, offsetY, shiftKey);
         this.scene.hasChanges = true;
    }

    async onMouseUp () {
        this.scene.hasChanges = true;
        this.canvas.removeEventListener('mousemove', this);
        document.removeEventListener('mouseup', this);
        this.currentObject = null;
        await this.scene.toDataBase();
    }

    render (): void {
        if (this.scene.hasChanges) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            if (this.currentOutlineImage) {
                this.ctx.drawImage(this.currentOutlineImage,0, 0, this.canvas.width, this.canvas.height);
            } else {
                this.ctx.fillStyle = 'white';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            }

            if (this.scene.items) {
                for (let item of this.scene.items) {
                    let objectName: string = Object.keys(item)[0];
                    let itemConstructor: Constructor<ToolObject> = this.objectsMap.get(objectName);
                    let curItem: ToolObject = new itemConstructor(item[objectName].startX, item[objectName].startY);
                    curItem = Object.assign(curItem, item[objectName]);
                    curItem.render(this.ctx, this.canvas);
                }
            }
        }

        this.scene.hasChanges = false;
    }

    async clear() {
        let confirmation = confirm("Ты уверен, что хочешь очистить всё? Назад дороги нет :)");
        if (confirmation) {
            this.scene = new Scene();
            this.scene.hasChanges = true;
            this.currentOutlineImage = undefined;
            await this.scene.toDataBase();
            this.render();
        }
    }

    start (): void {
        this.frameId = requestAnimationFrame(() => {
            this.render();
            this.start();
        });
    }

    stop (): void {
        cancelAnimationFrame(this.frameId);
    }

    async undo() {
        if (this.scene.items.length) {
            this.undoScene.push(this.scene.items.pop());
            this.scene.hasChanges = true;
            await this.scene.toDataBase();
            this.render();
        }
    }

    async return() {
        if (this.undoScene.length) {
            this.scene.items.push(this.undoScene.pop());
            this.scene.hasChanges = true;
            await this.scene.toDataBase();
            this.render();
        }
    }

    destroy () {
        this.stop();
        this.canvas.removeEventListener('mousedown', this);
    }

    export (): Promise<Blob> {
        return new Promise(resolve => {
            this.canvas.toBlob(blob => resolve(blob));
        });
    }
}
