import {Tool} from "../../common/tool";
import {EllipseObject} from "./ellipseObject";
import {ellipseIcon} from "./ellipseIcon";

export class Ellipse extends Tool{
    icon = ellipseIcon;

    constructor() {
        super('ellipse');
    }

    createObject(x: number, y: number): EllipseObject {
        return new EllipseObject(x, y);
    }

    drawObject(object: EllipseObject, x: number, y: number, shiftKey: boolean): void {
        object.addItem(x, y, shiftKey);
    }
}