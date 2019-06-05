
export abstract class Page {

    pageParams: object;
    resolvedData: any;
    htmlAddress: string;
    objectStoreName: string = this.constructor.name;

    constructor(params: object) {
        this.pageParams = params;
    }

    async load() {
        this.resolvedData = await this.resolve();
    }

    async resolve(): Promise<any> {
        return {
            template: await fetch(this.htmlAddress).then(res => res.text())
        };
    }

    beforeRender(){};

    afterRender(){};

    render() {
        return this.resolvedData.template;
    }

    destroy() {
        this.resolvedData = null;
    };
}