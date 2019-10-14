import { h } from "@stencil/core";
import { format } from '../../utils/utils';
export class MyComponent {
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
        return h("div", null,
            h("div", null,
                "TRACER 12-OCT 21:24 Hello, World! I'm ",
                this.getText()),
            h("div", null, "more here"));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get properties() { return {
        "first": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "first",
            "reflect": false
        },
        "middle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "middle",
            "reflect": false
        },
        "last": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "last",
            "reflect": false
        }
    }; }
}
