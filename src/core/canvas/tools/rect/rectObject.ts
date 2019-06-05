import {ToolObject} from "../../common/toolObject";

export class RectObject extends ToolObject{
    x: number;
    y: number;
    width: number = 0;
    height: number = 0;
    draggable: boolean = true;

    constructor(x: number, y: number) {
        super(x, y);
        this.x = this.startX;
        this.y = this.startY;
    }

    addItem(x: number, y: number, shiftKey: boolean): void {
        this.x = Math.min(this.startX, x);
        this.y = Math.min(this.startY, y);
        this.width = Math.abs(this.startX - x);

        if (!shiftKey) {
            this.height = Math.abs(this.startY - y);
        } else {
            this.height = this.width;
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        super.render(ctx);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.stroke();
    }


}