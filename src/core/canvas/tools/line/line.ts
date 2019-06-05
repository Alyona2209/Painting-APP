import {Tool} from "../../common/tool";
import {LineObject} from "./lineObject";
import {lineIcon} from "./lineIcon";

export class Line extends Tool{
    icon = lineIcon;

    constructor() {
        super('line');
    }

    createObject(x: number, y: number): LineObject {
        return new LineObject(x, y);
    }

    drawObject(object: LineObject, x: number, y: number): void {
        object.addPoint(x, y);
    }
}