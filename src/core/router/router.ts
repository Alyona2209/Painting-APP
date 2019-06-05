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
                //window.history.pushState(null, null, a.getAttribute('href'));
                await this.handleState(a.getAttribute('href'));
            }
        }
    }
}



/*export class Router {

    routes: Array<{path: RegExp, page: Constructor<Page>}>;
    currentPage: Page;
    container: HTMLElement;

    constructor(routes: Array<{path: string, page: Constructor<Page>}>, el: HTMLElement) {
        this.container = el;
        this.routes = routes.map(({path, page}) => {
            return {
                page,
                path: createPathRegExp(path)
            }
        });

        this.currentPage = null;
    }

    start(): void {
        window.addEventListener('hashchange', this);
        this.handleHash(location.hash);
    }

    stop(): void {
        window.removeEventListener('hashchange', this);
    }

    handleEvent(event: HashChangeEvent) {
        event.preventDefault();
        window.scrollTo(0, 0);
        this.handleHash(location.hash);
    }

    handleHash(hash: string) {
        let route = this.routes.find(route => route.path.test(hash));
        if (route) {
            let params = {...route.path.exec(hash).groups};
            this.startPage(route.page, params);

            console.log(document.location);
        }
    }

    async startPage(PageConstructor: Constructor<Page>, params: object) {
        if (this.currentPage) {
            await this.currentPage.destroy();
        }
        // @ts-ignore
        this.currentPage = new PageConstructor(params);
        await this.currentPage.load();
        await this.currentPage.beforeRender();
        this.container.innerHTML = await this.currentPage.render();
        await this.currentPage.afterRender();
    }
}

function createPathRegExp(path: string): RegExp {
    return new RegExp(
        `^#?${
            path.split('/')
                .map(fragment => {
                    if (fragment.charAt(0) === ':') {
                        return `(<${fragment.substr(1)}>[^/]+)`
                    } else {
                        return fragment;
                    }

                })
                .join('/')
            }$`,
        'i'
    );
}*/
