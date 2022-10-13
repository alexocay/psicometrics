import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AnswerType } from '../types/answer.type';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input('answerText') answerTextProps!: string;
  @Input('index') indexProps!: number;
  
  @Output('selectAnswer') selectAnswerEvent = new EventEmitter<AnswerType>()
@HostListener('click', ['event'])
onClick(){
  this.selectAnswerEvent.emit(this.answerTextProps)
}


  letterMapping: string[] = ['A', 'B', 'C', 'D', 'E'];

  constructor() { }

  ngOnInit(): void {
    console.log('!!', this.answerTextProps, this.indexProps);
    if(!this.answerTextProps || !this.indexProps === undefined) {
      throw new Error('Inputs in answer ara not correc');
    }

    }

}
