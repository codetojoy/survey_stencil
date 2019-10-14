import { Question } from '../../interfaces/question';
export declare class MyComponent {
    first: string;
    middle: string;
    last: string;
    surveyId: string;
    userId: string;
    questions: Question[];
    private questionController;
    componentWillLoad(): Promise<void>;
    private getText;
    render(): any;
}
