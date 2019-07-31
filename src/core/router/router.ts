import {Page} from "./page";
import {Constructor} from "./router_interfaces";


export class Router {

    routes: Array<{path: string, page: Constructor<Page>}>;
    currentPage: Page;
    container: HTMLElement;
    originalLocation: string;

    constructor(routes: Array<{path: string, page: Constructor<Page>}>, el: HTMLElement) {
        this.container = el;
        this.routes = routes;

        this.currentPage = null;
    }

    async start() {
        window.addEventListener('popstate', this);

        await this.handleState(location.pathname);
    }

    stop(): void {
        window.removeEventListener('popstate', this);
    }

    async handleEvent(event: PopStateEvent) {

            let route = this.routes.find(route => route.path === event.state);
            if (route) {
                await this.startPage(route.page);

        }
    }

    async handleState(path: string) {
        let route = this.routes.find(route => route.path === path);
        if (route) {
            window.history.pushState(path, null, path);

            await this.startPage(route.page);
        }
    }

    async startPage(PageConstructor: Constructor<Page>, params?: object) {
        if (this.currentPage) {
            await this.currentPage.destroy();
        }
        // @ts-ignore
        this.currentPage = new PageConstructor();
        await this.currentPage.load();
        await this.currentPage.beforeRender();
        this.container.innerHTML = await this.currentPage.render();
        await this.currentPage.afterRender();
        this.arrangeATags();
    }

    arrangeATags() {
        let aTags = document.getElementsByTagName('a');
        for (let a of aTags) {
            a.onclick = async (e) => {
                e.preventDefault();
                await this.handleState(a.getAttribute('href'));
            }
        }
    }
}



