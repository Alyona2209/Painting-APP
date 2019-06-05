import {ToolObject} from "../../common/toolObject";

export class LineObject extends ToolObject{

    points: Array<Array<number>> = [];
    draggable: boolean = true;

    constructor(x: number, y: number) {
        super(x, y);
        this.points.push([this.startX, this.startY]);
    }


    addPoint(x: number, y: number): void {
        this.points.push([x, y]);
    }

    render(ctx: CanvasRenderingContext2D): void {
        super.render(ctx);
        ctx.beginPath();
        for (let [index, [x, y]] of this.points.entries()) {
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }

}