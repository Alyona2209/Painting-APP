import {Tool} from "./canvas/common/tool";
import {Constructor} from "./router/router_interfaces";
import {ToolObject} from "./canvas/common/toolObject";

export function createHeader(name: string): string {
    let pageName: string[] = name.split(''),
        counter: number = 1,
        newPageName: string[] = [];
    for (let letter of pageName) {
        if (counter > 7) {
            counter = 1;
        }
        if (letter === ' ') {
            letter = `<span class="space"></span>`;
        } else {
            letter = `<span class="letter-${counter++}">${letter.toUpperCase()} </span>`;
        }
        newPageName.push(letter);
    }
    return newPageName.join('');
}

export function loadImage(alt: string, src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        let img: HTMLImageElement = new Image();
        img.onload = () => resolve(img);
        img.onerror = err => reject(err);
        img.src = src;
        img.alt = alt;
    });
}

export async function createGallery(srcArr: Array<Array<string>>) {
    return await srcArr.reduce(async (promise: Promise<DocumentFragment>, [alt, src]) => {
        let counter = 1;
        return promise.then(async (fragment) => {
            let img = await loadImage(alt, src);
            let figure = document.createElement('figure');
            figure.tabIndex = counter++;
            let figcaption = document.createElement('figcaption');
            figcaption.innerHTML = alt;
            figure.append(img, figcaption);
            fragment.append(figure);
            return fragment;
        })
    }, Promise.resolve(document.createDocumentFragment()))
};

export function makeObjectsMap (tools: Array<Tool>): Map<string, Constructor<ToolObject>> {
    let map = new Map();
    for (let tool of tools) {
        let object = tool.createObject(0,0);
        map.set(object.constructor.name, object.constructor)
    }
    return map;
}