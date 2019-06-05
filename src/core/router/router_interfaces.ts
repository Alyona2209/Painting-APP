export interface Constructor<T> extends Function {
    new (...args: Array<any>): T
}

export interface PopStateEvent {
    target: EventTarget;
    type: HTMLElement;
    bubbles: boolean;
    cancelable: boolean	;
    state: any;
}