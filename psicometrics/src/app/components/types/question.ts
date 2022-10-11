import { AnswerType } from "./answer.type";

export interface Question {
    question: string;
    incorrectAnswers: AnswerType[];
    correctAnswer: AnswerType;
}
