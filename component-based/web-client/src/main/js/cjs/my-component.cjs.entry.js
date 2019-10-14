'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-40c90e91.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return core.h("div", null, core.h("div", null, "TRACER 12-OCT 21:24 Hello, World! I'm ", this.getText()), core.h("div", null, "more here"));
    }
    static get style() { return ""; }
};

exports.my_component = MyComponent;
