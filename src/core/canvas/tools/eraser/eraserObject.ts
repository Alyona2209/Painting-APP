
import {LineObject} from "../line/lineObject";

export class EraserObject extends LineObject{

    points: Array<Array<number>> = [];
    draggable: boolean = true;

    constructor(x: number, y: number) {
        super(x, y);
        this.points.push([this.startX, this.startY]);
        this.style.strokeColor = '#fff'
    }




}