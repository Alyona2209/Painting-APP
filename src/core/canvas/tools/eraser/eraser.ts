import {Tool} from "../../common/tool";
import {EraserObject} from "./eraserObject";
import {eraserIcon} from "./eraserIcon";

export class Eraser extends Tool{
    icon = eraserIcon;

    constructor() {
        super('eraser');
    }

    createObject(x: number, y: number): EraserObject {
        return new EraserObject(x, y);
    }

    drawObject(object: EraserObject, x: number, y: number): void {
        object.addPoint(x, y);
    }
}