import { Component, State, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Question } from '../../interfaces/question';
import { QuestionController } from '../../services/question-controller';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  @Prop() surveyId: string;
  @Prop() userId: string;

  @State() questions: Question[];

  private questionController: QuestionController = new QuestionController();

  async componentWillLoad() {
    let response = await fetch("http://localhost:5151/api-server/rest/v1/surveys/302");
    let json = await response.json();
    this.surveyId = json.id;
    this.userId = json.userId;
    this.questions = await this.questionController.load();
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (<div>
      <div>TRACER 14-OCT 09:45 Hello, World! I'm {this.getText()}</div>
      <div>survey id: {this.surveyId}</div>
      <div>user id: {this.userId}</div>
      {
        this.questions.map(question => {
          return (
            <div>
              <h3>{question.desc}</h3>
              <p>id: {question.id}, logicalName: {question.logicalName}</p>
            </div>);
        })
      }
    </div>);
  }
}
