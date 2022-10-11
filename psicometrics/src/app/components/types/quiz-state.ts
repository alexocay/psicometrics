import { AnswerType } from './answer.type';
import {Question} from './question';

export interface QuizState {
    questions: Question[];
    currentQuestionIndex: number;
    showResults: boolean;
    correctAnswerCount: number;
    answers: AnswerType[];
}
