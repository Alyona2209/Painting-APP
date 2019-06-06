import {Page} from "./page";
import {Constructor} from "./router_interfaces";


export class Router {

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
}
