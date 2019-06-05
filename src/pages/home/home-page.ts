import {Page} from "../../core/router/page";
import {createHeader} from "../../core/common_functions";

export class HomePage extends Page {

    htmlAddress = require('./home-page.html');


    render() {
        return this.resolvedData.template;
    }

    afterRender() {
        document.getElementById('header').innerHTML = createHeader('Выбери режим');
    }
}