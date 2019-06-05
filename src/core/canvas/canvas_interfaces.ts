import {Scene} from "./common/scene";

export interface Style {
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
}


export interface OutlineImageParams {
    alt: string;
    src: string;
}

export interface SavedPaintingParams {
    name: string;
    scene: Scene;
}

export interface RGBColor {
    r: number;
    g: number;
    b: number;
}

