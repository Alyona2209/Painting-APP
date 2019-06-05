import {ToolObject} from "../../common/toolObject";

export class StraightLineObject extends ToolObject{

    startPoint: Array<number>;
    endPoint: Array<number>;
    draggable: boolean = true;

    constructor(x: number, y: number) {
        super(x, y);
        this.startPoint = this.endPoint = [this.startX, this.startY];
    }


    changeEndPoint(x: number, y: number): void {
        this.endPoint = [x, y];
    }

    render(ctx: CanvasRenderingContext2D): void {
        super.render(ctx);
        ctx.beginPath();
        // @ts-ignore
        ctx.moveTo(...this.startPoint);
        // @ts-ignore
        ctx.lineTo(...this.endPoint);

        ctx.stroke();
    }

}