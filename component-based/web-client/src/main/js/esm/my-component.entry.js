import { r as registerInstance, h } from './core-0bf5ab64.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        let response = await fetch("http://localhost:8880/api-server/rest/v1/surveys/302");
        let json = await response.json();
        let jsonStr = JSON.stringify(json);
        console.log(`TRACER json : ${jsonStr}`);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, h("div", null, "TRACER 12-OCT 21:24 Hello, World! I'm ", this.getText()), h("div", null, "more here"));
    }
    static get style() { return ""; }
};

export { MyComponent as my_component };
