import {ToolObject} from "../../common/toolObject";
import {RGBColor} from "../../canvas_interfaces";

export class FillerObject extends ToolObject{

    draggable: boolean = false;
    pixelStack: Array<Array<number>>;
    fillColor: RGBColor;
    colorLayer: ImageData;

    constructor(x: number, y: number, ctx?: CanvasRenderingContext2D, canvas?: HTMLCanvasElement) {
        super(x, y);
        this.pixelStack = [[this.startX, this.startY]];
        this.fillColor = this.divideRgb(this.style.fillColor) || this.hexToRgb (this.style.fillColor);
        if (ctx && canvas) {
            this.colorLayer = this.changeColorLayer(ctx, canvas);
        }
    }

    private hexToRgb (hex: string): RGBColor {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    private divideRgb(color) {
        let result = /^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i.exec(color);
        return result ? {
            r: parseInt(result[1]),
            g: parseInt(result[2]),
            b: parseInt(result[3])
        } : null;
    }


    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement)/*: void*/ {
        super.render(ctx);
        //let newColorLayer = this.changeColorLayer(ctx, canvas);

        ctx.putImageData(this.colorLayer, 0, 0);
        return ctx;

    }

    private changeColorLayer(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): ImageData {
        let colorLayer: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
            startPixelPosition = (this.startY*canvas.width + this.startX) * 4,
            startR = colorLayer.data[startPixelPosition],
            startG = colorLayer.data[startPixelPosition + 1],
            startB = colorLayer.data[startPixelPosition + 2];

        let pixelStack = this.pixelStack.slice(0),
            fillColor = this.fillColor;

        function matchStartColor(pixelPos: number): boolean {
            let r = colorLayer.data[pixelPos];
            let g = colorLayer.data[pixelPos+1];
            let b = colorLayer.data[pixelPos+2];

            return (r == startR && g == startG && b == startB);
        }

        function colorPixel(pixelPos: number): void {
            colorLayer.data[pixelPos] = fillColor.r;
            colorLayer.data[pixelPos+1] = fillColor.g;
            colorLayer.data[pixelPos+2] = fillColor.b;
            colorLayer.data[pixelPos+3] = 255;
        }

        let newPos, x, y, pixelPos, reachLeft, reachRight;

        while (pixelStack.length) {

            newPos = pixelStack.pop();
            x = newPos[0];
            y = newPos[1];

            pixelPos = (y * canvas.width + x) * 4;

            while (y >= 0 && matchStartColor(pixelPos)) {
                pixelPos -= canvas.width * 4;
                y--;
            }

            pixelPos += canvas.width * 4;
            ++y;
            reachLeft = false;
            reachRight = false;

            while(y <= canvas.height-1 && matchStartColor(pixelPos)) {
                colorPixel(pixelPos);

                if(x >= 1) {
                    if(matchStartColor(pixelPos - 4)) {
                        if(!reachLeft) {
                            pixelStack.push([x - 1, y]);
                            reachLeft = true;
                        }
                    } else if(reachLeft) {
                        reachLeft = false;
                    }
                }

                if(x < canvas.width-1) {
                    if(matchStartColor(pixelPos + 4)) {
                        if(!reachRight) {
                            pixelStack.push([x + 1, y]);
                            reachRight = true;
                        }
                    } else if(reachRight) {
                        reachRight = false;
                    }
                }

                pixelPos += canvas.width * 4;
                y++;
            }
        }
        return colorLayer;
    }

}