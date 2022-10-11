import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Question } from '../types/question';
import { map, Observable } from 'rxjs';
import { AnswerType } from '../types/answer.type';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
question$: Observable<Question>;
answers$: Observable<AnswerType[]>

  constructor(private quizService: QuizService) { 
    this.question$ = this.quizService.state$.pipe(
      map((state) => state.questions[state.currentQuestionIndex])
    );

    this.answers$ = this.quizService.state$.pipe(
      map((state) => state.answers)
    );
  }

  ngOnInit(): void {
  }

}
