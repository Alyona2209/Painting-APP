import {Page} from "../../core/router/page";
import {dataBase, objectStores} from "../../app";
import {createGallery, createHeader} from "../../core/common_functions";
import {SavedPaintingParams} from "../../core/canvas/canvas_interfaces";
import {ColouringPage} from "../colouring/colouring-page";
import {Scene} from "../../core/canvas/common/scene";

export class MyPaintingsPage extends Page {

    htmlAddress = require('./my_paintings-page.html');
    currentImage: HTMLImageElement;
    currentScene: Scene;


    async beforeRender(){
        await dataBase.init(this.objectStoreName, objectStores)
            .catch ((e) => {
                console.log(e);
            });
    }

    async afterRender() {
        document.getElementById('header').innerHTML = createHeader('Мои рисунки');

        let galleryEl: HTMLTableSectionElement = document.querySelector('.gallery');

        let chooseImageBtn = <HTMLButtonElement> document.getElementById('chooseImageBtn'),
            saveImageBtn = <HTMLButtonElement> document.getElementById('saveImageBtn'),
            deleteBtn = <HTMLButtonElement> document.getElementById('deleteBtn');


        let images: Array<Map<string, SavedPaintingParams>> = await dataBase.getAll();

        let imgArr = images.reduce((arr, map) => {
            let src = [...map.keys()][0],
                alt = map.get(src).name;
            arr.push([alt, src]);
            return arr;
        }, []);

        let galleryFragment = await createGallery(imgArr);
        galleryEl.append(galleryFragment);

        galleryEl.addEventListener('click', (event: MouseEvent) => {
            //@ts-ignore
            let image = event.target.closest('img');
            if (image) {
                this.currentImage = image;
                image.style.borderBottomColor = "orange";

                let savedEl: Map<string, SavedPaintingParams> = images.find((map) => {
                    return map.has(this.currentImage.src);
                });
                this.currentScene = savedEl.get(this.currentImage.src).scene;
            }
        });

        chooseImageBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                let outerPage: string;

                if (this.currentScene.outlineImage) {
                    await dataBase.init('ColouringPage');
                    ColouringPage.outlineImage = this.currentScene.outlineImage;
                    outerPage = '/colouring';
                } else {
                    await dataBase.init('PaintingPage');
                    outerPage = '/painting';
                }

                await dataBase.put(this.currentScene, 'scene');
                await dataBase.init(this.objectStoreName, objectStores);

                history.pushState(outerPage, null, outerPage);
                history.pushState(outerPage, null, outerPage);
                history.back();
            }
        });

        deleteBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                this.currentImage.closest('figure').remove();

                await dataBase.delete(this.currentImage.src);
            }
        });

        saveImageBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                let a: HTMLAnchorElement = document.createElement('a');
                a.href = this.currentImage.src;
                a.download = 'Безымянный 1.png';
                a.dispatchEvent(new MouseEvent('click'));
            }
        });


    };
}