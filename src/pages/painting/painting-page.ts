import {createHeader} from "../../core/common_functions";
import {Page} from "../../core/router/page";
import {Line} from "../../core/canvas/tools/line/line";
import {Rect} from "../../core/canvas/tools/rect/rect";
import {Painter} from "../../core/canvas/painter";
import {Tool} from "../../core/canvas/common/tool";
import {setCurrentStyle} from "../../core/canvas/currentState";
import {dataBase, objectStores} from "../../app";
import {SavedPaintingParams} from "../../core/canvas/canvas_interfaces";
import {Filler} from "../../core/canvas/tools/filler/filler";
import {Eraser} from "../../core/canvas/tools/eraser/eraser";
import {Ellipse} from "../../core/canvas/tools/ellipse/ellipse";
import {StraightLine} from "../../core/canvas/tools/straight_line/straightLine";

export class PaintingPage extends Page {
   htmlAddress = require('./painting-page.html');
   activeColorBlock: HTMLDivElement;
   activeCurColorEl: HTMLDivElement;


    render() {
        return this.resolvedData.template;
    }

    async beforeRender(){
        await dataBase.init(this.objectStoreName, objectStores)
            .catch( (err) => console.log(err));
    }

    async afterRender() {
        document.getElementById('header').innerHTML = createHeader('РИСОВАЛКА');

        let canvas = <HTMLCanvasElement> document.getElementById('canvas'),
            currentStyleEl = <HTMLElement> document.getElementById('currentStyle'),
            toolbarEl = <HTMLElement> document.getElementById('toolbar');

        canvas.width = parseFloat(getComputedStyle(canvas).width);
        canvas.height = canvas.width * 0.7;

        let tools: Array<Tool> = [
            new Line(),
            new StraightLine(),
            new Rect(),
            new Ellipse(),
            new Filler(),
            new Eraser()
        ];

        let painter = new Painter(canvas, tools);

        await this.arrangeCurrentStyleEl(currentStyleEl);
        await this.arrangeToolbar(toolbarEl, tools, painter);
        this.arrangeColorBlocks();
        await this.setBtnListeners(canvas, painter);
    };

    async setBtnListeners(canvas, painter) {
        let downloadBtn = <HTMLButtonElement> document.getElementById('downloadBtn'),
            saveBtn = <HTMLButtonElement> document.getElementById('saveBtn'),
            clearBtn = <HTMLButtonElement> document.getElementById('clearBtn'),
            undoBtn = <HTMLButtonElement> document.getElementById('undoBtn'),
            returnBtn = <HTMLButtonElement> document.getElementById('returnBtn'),
            inputColorBtn = <HTMLInputElement> document.getElementById('inputColor');

        downloadBtn.addEventListener('click', async () => {
            let blob: Blob = await painter.export();
            let url: string = URL.createObjectURL(blob);
            let a: HTMLAnchorElement = document.createElement('a');
            a.href = url;
            a.download = 'Безымянный 1.png';
            a.dispatchEvent(new MouseEvent('click'));
            URL.revokeObjectURL(url);
        });

        saveBtn.addEventListener('click', async () => {
            let img = canvas.toDataURL('image/png');
            let name: string = prompt('Как назовёшь рисунок?', 'Красота');
            let savedObject: Map<string, SavedPaintingParams> = new Map([
                [img, {
                    name,
                    scene: await dataBase.get('scene')
                }]
            ]);
            await dataBase.init('MyPaintingsPage');
            await dataBase.put(savedObject, img);
            await dataBase.init(this.objectStoreName);
        });

        clearBtn.addEventListener('click', async () => {
            await painter.clear();
        });

        undoBtn.addEventListener('click', async () => {
            await painter.undo();
        });

        returnBtn.addEventListener('click', async () => {
            await painter.return();
        });

        inputColorBtn.addEventListener('input', (event) => {
            if (this.activeColorBlock) {
                //@ts-ignore
                this.activeColorBlock.style.backgroundColor = event.target.value;
            }
        });

    }

    async arrangeCurrentStyleEl(currentStyleEl) {
        let fillColor = <HTMLDivElement> document.getElementById('fillColor'),
            strokeColor = <HTMLDivElement> document.getElementById('strokeColor'),
            strokeWidth = <HTMLInputElement> document.getElementById('strokeWidth');

        let blocks = <HTMLCollectionOf<HTMLDivElement>> currentStyleEl.getElementsByClassName('color');
        let width = getComputedStyle(blocks[0]).width;
        for (let colorBlock of blocks) {
            colorBlock.style.height = width;
        }

        let index = 7;
        for (let el of currentStyleEl.children) {
            el.tabIndex = index++;
        }

        fillColor.style.backgroundColor = await dataBase.get('fillColor') || '#595959';
        strokeColor.style.backgroundColor = await dataBase.get('strokeColor') || '#7c7c7c';
        strokeWidth.value = await dataBase.get('strokeWidth') || 5;

        await setCurrentStyle(
            fillColor.style.backgroundColor,
            strokeColor.style.backgroundColor,
            strokeWidth.value
        );

        currentStyleEl.addEventListener('click', (event) => {
            let target = event.target.closest('.color');
            if (target) {
                this.activeCurColorEl = target;
            }
        });

        currentStyleEl.addEventListener('dblclick', async () => {
            await setCurrentStyle(
                fillColor.style.backgroundColor,
                strokeColor.style.backgroundColor,
                strokeWidth.value
            );
        }, true);

        currentStyleEl.addEventListener('change', async () => {
            await setCurrentStyle(
                fillColor.style.backgroundColor,
                strokeColor.style.backgroundColor,
                strokeWidth.value
            );
        });
    }



    arrangeColorBlocks() {
        let colorBlocksEl: HTMLElement = document.getElementById('colorBlocks'),
            blocks = <HTMLCollectionOf<HTMLDivElement>> colorBlocksEl.getElementsByClassName('color');

        let width = getComputedStyle(blocks[0]).width;
        for (let colorBlock of blocks) {
            colorBlock.style.height = width;
        }

        let index = 15;
        for (let el of blocks) {
            el.tabIndex = index++;
        }

        colorBlocksEl.addEventListener('click', (event) => {
            //@ts-ignore
            let block = <HTMLDivElement> event.target.closest('.color');
            if (block) {
                if (this.activeCurColorEl) {
                    this.activeCurColorEl.style.backgroundColor = getComputedStyle(block).backgroundColor;
                    let event = new Event('dblclick');
                    this.activeCurColorEl.dispatchEvent(event);

                }
                this.activeColorBlock = block;

            }
        });
    }

    async arrangeToolbar(toolbarEl, tools, painter) {
        const TOOLS_MAP: Map<HTMLDivElement, Tool> = new Map();
        let index = 3;

        toolbarEl.append(tools.reduce((fragment: DocumentFragment, tool: Tool) => {
            let div: HTMLDivElement = document.createElement('div');

            div.innerHTML = tool.icon;
            div.tabIndex = index++;
            //btn.classList.add(tool.name);
            fragment.appendChild(div);
            TOOLS_MAP.set(div, tool);
            return fragment;
        }, document.createDocumentFragment()));

        toolbarEl.addEventListener('click', (event: MouseEvent) => {
            //@ts-ignore
            let tool = TOOLS_MAP.get(event.target.closest('div'));
            if (tool) {
                painter.setTool(tool);
            }
        });
    }

}