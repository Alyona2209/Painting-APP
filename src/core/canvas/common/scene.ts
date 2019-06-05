import {ToolObject} from "./toolObject";
import {dataBase} from "../../../app";
import {OutlineImageParams} from "../canvas_interfaces";

export class Scene {
    hasChanges: boolean = false;
    items: Array<{string: ToolObject}>;
    outlineImage: OutlineImageParams;

    constructor(outlineImage?: OutlineImageParams) {
        if (outlineImage) {
            this.outlineImage = outlineImage;
        }
        this.items = [];
    }

    addChanges(curObject: ToolObject) {
        //@ts-ignore
        this.items.push({[curObject.constructor.name]: curObject});
        this.hasChanges =true;
    }

    async toDataBase() {
        if (this.outlineImage) {
            await dataBase.put({
                hasChanges: this.hasChanges,
                items: this.items,
                outlineImage: this.outlineImage
            }, 'scene');
        } else {
            await dataBase.put({
                hasChanges: this.hasChanges,
                items: this.items
            }, 'scene');
        }
    }

}