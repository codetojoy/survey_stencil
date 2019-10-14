import { Question } from "../interfaces/question";
export declare class QuestionController {
    private questions;
    constructor();
    load(): Promise<Question[]>;
}
