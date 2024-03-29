import { Question } from "../interfaces/question";

export class QuestionController {
    private questions: Question[] = [];

    constructor() {
    }

    async load(): Promise<Question[]> {
        let result: Question[];

        if (this.questions.length != 0) {
          // console.log('TRACER controller then no-op');
          // no-op
        } else {
          // ******* CHANGE THIS for your machine
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
