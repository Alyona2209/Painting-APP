import {createHeader} from "../../core/common_functions";
import {Tool} from "../../core/canvas/common/tool";
import {Line} from "../../core/canvas/tools/line/line";
import {Painter} from "../../core/canvas/painter";
import {dataBase} from "../../app";
import {PaintingPage} from "../painting/painting-page";
import {OutlineImageParams} from "../../core/canvas/canvas_interfaces";
import {Scene} from "../../core/canvas/common/scene";
import {Filler} from "../../core/canvas/tools/filler/filler";
import {Eraser} from "../../core/canvas/tools/eraser/eraser";
import {StraightLine} from "../../core/canvas/tools/straight_line/straightLine";
import {currentStyle, setCurrentStyle} from "../../core/canvas/currentState";

export class ColouringPage extends PaintingPage {
    htmlAddress = require('./colouring-page.html');
    static outlineImage: OutlineImageParams;
    activeColorBlock: HTMLDivElement;
    activeCurColorEl: HTMLDivElement;

   async beforeRender(){
       await super.beforeRender();
       let curScene: Scene = await dataBase.get('scene');
       if (curScene) {
           if (!ColouringPage.outlineImage) {
               ColouringPage.outlineImage = curScene.outlineImage;
           } else {
               curScene.outlineImage = ColouringPage.outlineImage;
               curScene.hasChanges = true;
               await dataBase.put(curScene,'scene');
           }
       }

   }

    async afterRender() {
        document.getElementById('header').innerHTML = createHeader('Раскраска');

        let canvas = <HTMLCanvasElement> document.getElementById('canvas'),
            chooseImageBtn = document.getElementById('chooseImageBtn'),
            currentStyleEl = <HTMLElement> document.getElementById('currentStyle'),
            toolbarEl = <HTMLElement> document.getElementById('toolbar'),
            strokeWidthEl = <HTMLElement> document.getElementById('strokeWidth');

        canvas.width = parseFloat(getComputedStyle(canvas).width);
        canvas.height = canvas.width * 0.7;

        let tools: Array<Tool> = [
            new Line(),
            new StraightLine(),
            new Eraser(),
            new Filler()

        ];

        let painter = new Painter(canvas, tools, ColouringPage.outlineImage);

        await super.arrangeCurrentStyleEl(currentStyleEl);
        await super.arrangeToolbar(toolbarEl, tools, painter);
        this.arrangeStrokeWidthEl(strokeWidthEl);
        super.arrangeColorBlocks();
        await super.setBtnListeners(canvas, painter);




    };

    arrangeStrokeWidthEl(strokeWidthEl) {
        let fragment = document.createDocumentFragment();
        let value = 5,
            step = 4,
            index = 9;
        for (let el = 0; el < 5; el++) {
            let div = document.createElement('div');
            div.classList.add('strokeWidthEl');
            div.dataset.value = value.toString();
            div.tabIndex = index++;
            div.innerHTML =
                `<svg width="90" height="90"  fill="#f8ae5d" stroke="#485263" stroke-width="3">` +
                    `<circle r=${value * 2} cx="45" cy="45">` +
                `</svg>`;
            fragment.append(div);
            value += step;
        }
        strokeWidthEl.append(fragment);

        strokeWidthEl.addEventListener('click', async (event) => {
            let target = event.target.closest('div');
            if(target) {
                let fillColor = currentStyle.fillColor,
                    strokeColor = currentStyle.strokeColor,
                    strokeWidth = parseInt(target.dataset.value);
                await setCurrentStyle(fillColor, strokeColor,strokeWidth);
            }
        })
    }
}
