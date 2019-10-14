'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-40c90e91.js');

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
        core.registerInstance(this, hostRef);
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
        return (core.h("div", null, core.h("div", null, "TRACER 14-OCT 09:45 Hello, World! I'm ", this.getText()), core.h("div", null, "survey id: ", this.surveyId), core.h("div", null, "user id: ", this.userId), this.questions.map(question => {
            return (core.h("div", null, core.h("h3", null, question.desc), core.h("p", null, "id: ", question.id, ", logicalName: ", question.logicalName)));
        })));
    }
    static get style() { return ""; }
};

exports.my_component = MyComponent;
