import {Style} from "../canvas_interfaces";
import {currentStyle} from "../currentState";

export class ToolObject {
    startX: number;
    startY: number;
    style: Style;
    draggable: boolean;


    constructor(x: number, y: number) {
        this.startX = x;
        this.startY = y;
        this.style = Object.assign({}, currentStyle);
    }

    render (ctx: CanvasRenderingContext2D, canvas?: HTMLCanvasElement): void | CanvasRenderingContext2D {
        ctx.fillStyle = this.style.fillColor;
        ctx.strokeStyle = this.style.strokeColor;
        ctx.lineWidth = this.style.strokeWidth;
    }





}