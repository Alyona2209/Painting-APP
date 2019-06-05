import {Tool} from "../../common/tool";
import {RectObject} from "./rectObject";
import {rectIcon} from "./rectIcon";

export class Rect extends Tool {
    icon = rectIcon;

    constructor() {
        super('rect');
    }

    createObject(x: number, y: number) {
        return new RectObject(x, y);
    }

    drawObject(object: RectObject, x: number, y: number, shiftKey: boolean) {
        object.addItem(x, y, shiftKey);
    }
}