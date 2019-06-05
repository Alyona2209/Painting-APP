import {ToolObject} from "../../common/toolObject";

export class EllipseObject extends ToolObject{
    xCenter: number;
    yCenter: number;
    radiusX: number;
    radiusY: number;
    rotation = Math.PI / 2;
    startAngle = 0;
    endAngle = Math.PI * 2;
    draggable: boolean = true;

    constructor(x: number, y: number) {
        super(x, y);
        this.xCenter = this.startX;
        this.yCenter = this.startY;
    }

    addItem(x: number, y: number, shiftKey: boolean): void {
        this.radiusX = Math.abs((x - this.startX));

        if (!shiftKey) {
            this.radiusY = Math.abs(y - this.startY);
        } else {
            this.radiusY = this.radiusX;
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        super.render(ctx);
        ctx.beginPath();
        ctx.ellipse(this.xCenter, this.yCenter, this.radiusX, this.radiusY, this.rotation, this.startAngle, this.endAngle);
        ctx.fill();
        ctx.stroke();
    }


}