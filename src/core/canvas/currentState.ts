import {Style} from "./canvas_interfaces";
import {dataBase} from "../../app";

export let currentStyle: Style = {
    fillColor: '#000000',
    strokeColor: '#000000',
    strokeWidth: 2
};

export async function setCurrentStyle (fillColor, strokeColor, strokeWidth) {
    currentStyle.fillColor = fillColor;
    currentStyle.strokeColor = strokeColor;
    currentStyle.strokeWidth = strokeWidth;
    await dataBase.put (fillColor, 'fillColor');
    await dataBase.put (strokeColor, 'strokeColor');
    await dataBase.put (strokeWidth, 'strokeWidth');
}

