import {Router} from "./core/router/router";
import {routes} from "./core/router/routes";
import {PainterDB} from "./DataBase/painterDB";
import {createHeader} from "./core/common_functions";



document.getElementById('homeIcon').innerHTML = `<img src="${require('./assets/icons/home-icon.png')}" alt="Home">`;
document.getElementById('header').innerHTML = createHeader('Раскраска');



export let dataBase = new PainterDB();

export let objectStores = [];
for (let route of routes) {
    if (route.needsDB) {
        objectStores.push(route.page.name);
    }
}

let router = new Router(routes, document.getElementById('routerContainer'));
router.start();

