import {HomePage} from "../../pages/home/home-page";
import {ColouringPage} from "../../pages/colouring/colouring-page";
import {MyPaintingsPage} from "../../pages/my-paintings/my_paintings-page";
import {PaintingPage} from "../../pages/painting/painting-page";
import {ChooseImagePage} from "../../pages/choose-image/choose-image-page";
import {Page} from "./page";
import {Constructor} from "./router_interfaces";


export const routes: Array<{path: string, page: Constructor<Page>, needsDB: boolean}> = [
    {
        path: '/',
        page: HomePage,
        needsDB: false
    },
   {
        path: '/home',
        page: HomePage,
        needsDB: false
    },

    {
        path: '/colouring',
        page: ColouringPage,
        needsDB: true
    },

    {
        path: '/painting',
        page: PaintingPage,
        needsDB: true
    },

    {
        path: '/my_paintings',
        page: MyPaintingsPage,
        needsDB: true
    },

    {
        path: '/choose_image',
        page: ChooseImagePage,
        needsDB: false
    }
];