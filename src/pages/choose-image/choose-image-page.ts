import {Page} from "../../core/router/page";
import {createGallery, createHeader} from "../../core/common_functions";
import {ColouringPage} from "../colouring/colouring-page";
import {dataBase, objectStores} from "../../app";
import {Scene} from "../../core/canvas/common/scene";



export class ChooseImagePage extends Page {
    htmlAddress = require('./choose-image-page.html');
    currentImage: HTMLImageElement;


    render() {
        return this.resolvedData.template;
    }

    afterRender() {
        document.getElementById('header').innerHTML = createHeader('Выбери рисунок');

        let chooseImageBtn = <HTMLButtonElement> document.getElementById('chooseImageBtn'),
            addImageBtn = <HTMLButtonElement> document.getElementById('addImageBtn');

        const SMALL_IMAGES_MAP: Map<string, string> = new Map([
            ['Самолет', require("../../assets/images/small/airplane.png")],
            ['Машинка', require("../../assets/images/small/car.png")],
            ['Кот', require("../../assets/images/small/cat.jpg")],
            ['Ёжик', require("../../assets/images/small/ezhik.jpg")],
            ['Рыбка', require("../../assets/images/small/fish.jpg")],
            ['Птица', require("../../assets/images/small/bird.png")],
            ['Корова', require("../../assets/images/small/cow.jpg")],
            ['Попугай', require("../../assets/images/small/popugai.jpg")],
            ['Поезд', require("../../assets/images/small/train.jpg")]

        ]);

        const LARGE_IMAGES_MAP: Map<string, string> = new Map([
            ['Самолет', require("../../assets/images/large/airplane.png")],
            ['Машинка', require("../../assets/images/large/car.png")],
            ['Кот', require("../../assets/images/large/cat.jpg")],
            ['Ёжик', require("../../assets/images/large/ezhik.jpg")],
            ['Рыбка', require("../../assets/images/large/fish.jpg")],
            ['Птица', require("../../assets/images/large/bird.png")],
            ['Корова', require("../../assets/images/large/cow.jpg")],
            ['Попугай', require("../../assets/images/large/popugai.jpg")],
            ['Поезд', require("../../assets/images/large/train.jpg")],
        ]);

       let galleryEl: HTMLTableSectionElement = document.querySelector('.gallery');

       createGallery([...SMALL_IMAGES_MAP.entries()])
            .then((fragment: DocumentFragment) => galleryEl.append(fragment));


        galleryEl.addEventListener('click', (event: MouseEvent) => {
            //@ts-ignore
            let imageEl = event.target.closest('img');
            if (imageEl) {
                this.currentImage = imageEl;
            }
        });

        chooseImageBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                let imageAlt: string = this.currentImage.alt;
                ColouringPage.outlineImage = {alt: imageAlt, src: LARGE_IMAGES_MAP.get(imageAlt)};
                await dataBase.init('ColouringPage');
                await dataBase.put(new Scene(ColouringPage.outlineImage), 'scene');

                let outerPage = '#colouring';
                history.pushState(outerPage, null, outerPage);
                history.pushState(outerPage, null, outerPage);
                history.back();

            }
        });

        

    }
}
