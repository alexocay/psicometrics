import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { QuizState } from '../types/quiz-state';
import mockData from '../data';
import { AnswerType } from '../types/answer.type';
import { Question } from '../types/question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  initialState: QuizState = {
    questions: mockData,
    currentQuestionIndex: 0,
    showResults: false,
    correctAnswerCount: 0,
    answers: this.shuffleAnswers(mockData[0]),
  }
  state$ = new BehaviorSubject<QuizState>({...this.initialState});

  setState(partialState: Partial<QuizState>): void {
    this.state$.next({ ...this.state$.getValue(), ...partialState });
  }

  getState(): QuizState {
    return this.state$.getValue();
  }

  nextQuestion(): void {
    const state = this.getState();
    const newShowResults =
      state.currentQuestionIndex === state.questions.length - 1;
    const newCurrentQuestionIndex = newShowResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
    const newAnswers = newShowResults ? [] : this.shuffleAnswers(state.questions[newCurrentQuestionIndex])

    this.setState({
      currentQuestionIndex: newCurrentQuestionIndex,
      showResults: newShowResults,
      answers: newAnswers,
    });
  }

  restart(): void {
    this.setState(
      this.initialState
    );
  }

  shuffleAnswers(question: Question): AnswerType[] {
    const unshuffledAnswers = [
      ...question.incorrectAnswers,
      question.correctAnswer,
    ];

    return unshuffledAnswers
      .map((unshuffledAnswers) => ({
        sort: Math.random(),
        value: unshuffledAnswers,
      }))
      .sort((a, b) => a.sort - b.sort)
      .map((el) => el.value);
  }
}
