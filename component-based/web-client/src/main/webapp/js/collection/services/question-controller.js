export class QuestionController {
    constructor() {
        this.questions = [];
    }
    async load() {
        let result;
        if (this.questions.length != 0) {
            // console.log('TRACER controller then no-op');
            // no-op
        }
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
