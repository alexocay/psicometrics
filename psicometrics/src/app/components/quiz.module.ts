import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from 'app/components/quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from 'app/components/answer/answer.component';
import { QuestionComponent } from 'app/components/question/question.component';
import { QuizService } from 'app/components/services/quiz.service';


const routes: Routes = [
  {
    path: 'prueba',
    component: QuizComponent,
  }
];

@NgModule({
  declarations: [QuizComponent, AnswerComponent, QuestionComponent],
  imports: [ RouterModule.forChild(routes), CommonModule ], 
  providers: [QuizService],
})
export class QuizModule { }
