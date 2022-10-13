import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Question } from '../types/question';
import { map, Observable, Subscription } from 'rxjs';
import { AnswerType } from '../types/answer.type';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
@Input('questionText') questionTextProps!: string;

  question$: Observable<Question>;
  answers$: Observable<AnswerType[]>;
  correctAnswer: AnswerType | null = null;
  currentAnswer: AnswerType | null = null;
  correctAnswerSubscription!: Subscription;
  currentAnswerSubscription!: Subscription;

  constructor(private quizService: QuizService) {
    this.question$ = this.quizService.state$.pipe(
      map((state) => state.questions[state.currentQuestionIndex])
    );

    this.answers$ = this.quizService.state$.pipe(map((state) => state.answers));
  }

  ngOnInit(): void {

    console.log('ttt', this.questionTextProps);
    
    this.correctAnswerSubscription = this.question$.pipe(
      map((question) => question.correctAnswer)
    ).subscribe(correctAnswer => this.correctAnswer = correctAnswer);

    this.currentAnswerSubscription = this.quizService.state$.pipe(
      map((state) => state.currentAnswer)).subscribe(currentAnswer => this.currentAnswer = currentAnswer);
  }

  ngOnDestroy():void{
    this.correctAnswerSubscription.unsubscribe();
    this.currentAnswerSubscription.unsubscribe();
  }

  selectAnswer(answer: AnswerType): void {
    this.quizService.selectAnswer(answer);
  }

  isWrongAnswer(answer: AnswerType): boolean {
    if(!this.correctAnswer || !this.currentAnswer){
      return false;
    }

    return (this.currentAnswer === answer && this.currentAnswer !== this.correctAnswer);
  }

  isCorrectAnswer(answer: AnswerType): boolean {
    if(!this.correctAnswer || !this.currentAnswer){
      return false;
    }

    return Boolean(this.currentAnswer);
  }

  isDisabledAnswer(answer: AnswerType): boolean {
    if(!this.correctAnswer || !this.currentAnswer){
      return false;
    }

    return Boolean(this.currentAnswer) && answer === this.correctAnswer
  }
}
