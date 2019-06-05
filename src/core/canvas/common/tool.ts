import {ToolObject} from "./toolObject";

export abstract class Tool {
    name: string;
    icon: string;

    protected constructor (name: string) {
        this.name = name;
//        this.iconSrc = src;
    };

    abstract createObject(x: number, y: number, ctx?: CanvasRenderingContext2D, canvas?: HTMLCanvasElement): ToolObject;


    drawObject(object: ToolObject, x: number, y: number, shiftKey?: boolean) {
    };
}