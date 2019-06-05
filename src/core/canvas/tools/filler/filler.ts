import {Tool} from "../../common/tool";
import {FillerObject} from "./fillerObject";
import {fillerIcon} from "./fillerIcon";

export class Filler extends Tool{
    icon = fillerIcon;

    constructor() {
        super('filler');
    }

    createObject(x: number, y: number, ctx?: CanvasRenderingContext2D, canvas?: HTMLCanvasElement): FillerObject {
        return new FillerObject(x, y, ctx, canvas);
    }

    /*drawObject(object: FillerObject, x: number, y: number): void {
        object.makeFilling(x, y);
    }*/
}