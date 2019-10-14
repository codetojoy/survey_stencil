import { r as registerInstance, h } from './core-0bf5ab64.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

class QuestionController {
    constructor() {
        this.questions = [];
    }
    async load() {
        let result;
        if (this.questions.length != 0) ;
        else {
            let response = await fetch("http://localhost:5151/api-server/rest/v1/surveys/302");
            let json = await response.json();
            json.questions.map(question => {
                this.questions.push(question);
            });
        }
        result = this.questions;
        return result;
    }
}

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", null, h("div", null, "TRACER 14-OCT 09:45 Hello, World! I'm ", this.getText()), h("div", null, "survey id: ", this.surveyId), h("div", null, "user id: ", this.userId), this.questions.map(question => {
            return (h("div", null, h("h3", null, question.desc), h("p", null, "id: ", question.id, ", logicalName: ", question.logicalName)));
        })));
    }
    static get style() { return ""; }
};

export { MyComponent as my_component };
