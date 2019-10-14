import { h } from "@stencil/core";
import { format } from '../../utils/utils';
import { QuestionController } from '../../services/question-controller';
export class MyComponent {
    constructor() {
        this.questionController = new QuestionController();
    }
    async componentWillLoad() {
        let response = await fetch("http://localhost:5151/api-server/rest/v1/surveys/302");
        let json = await response.json();
        this.surveyId = json.id;
        this.userId = json.userId;
        this.questions = await this.questionController.load();
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return (h("div", null,
            h("div", null,
                "TRACER 14-OCT 09:45 Hello, World! I'm ",
                this.getText()),
            h("div", null,
                "survey id: ",
                this.surveyId),
            h("div", null,
                "user id: ",
                this.userId),
            this.questions.map(question => {
                return (h("div", null,
                    h("h3", null, question.desc),
                    h("p", null,
                        "id: ",
                        question.id,
                        ", logicalName: ",
                        question.logicalName)));
            })));
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
        },
        "surveyId": {
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
            "attribute": "survey-id",
            "reflect": false
        },
        "userId": {
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
            "attribute": "user-id",
            "reflect": false
        }
    }; }
    static get states() { return {
        "questions": {}
    }; }
}
