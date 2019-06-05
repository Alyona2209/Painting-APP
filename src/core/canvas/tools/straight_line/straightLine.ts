import {Tool} from "../../common/tool";
import {StraightLineObject} from "./straightLineObject";
import {straightLineIcon} from "./straightLineIcon";

export class StraightLine extends Tool{
    icon = straightLineIcon;

    constructor() {
        super('straightLine');
    }

    createObject(x: number, y: number): StraightLineObject {
        return new StraightLineObject(x, y);
    }

    drawObject(object: StraightLineObject, x: number, y: number): void {
        object.changeEndPoint(x, y);
    }
}