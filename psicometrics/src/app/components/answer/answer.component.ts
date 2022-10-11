import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input('answerText') answerTextProps!: string;
  @Input('index') indexProps!: number;

  letterMapping: string[] = ['A', 'B', 'C', 'D', 'E'];

  constructor() { }

  ngOnInit(): void {
    console.log('!!', this.answerTextProps, this.indexProps);
    if(!this.answerTextProps || !this.indexProps === undefined) {
      throw new Error('Inputs in answer ara not correc');
    }
    console.log('aaa',this.answerTextProps)
  }

}
