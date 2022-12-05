import { Component, OnInit } from '@angular/core';
import data from './data';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {HelpersService} from '../helpers.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Question {
  question: any;
}

@Component({
  selector: 'app-serie-ocho',
  templateUrl: './serie-ocho.component.html',
  styleUrls: ['./serie-ocho.component.css']
})
export class SerieOchoComponent implements OnInit {

  questions: Question[] = data;

  formOcho: FormGroup;
  correct = {} as any;
  incorrect = {} as any;
  selectedAnswers = {} as any; //respuestas usuario 
  
  timeLeft: number = 180; //3 minutos
  interval: any;
  user: string[] = [];
  ansOcho = ['v', 'f', 'v', 'v', 'v', 'f', 'f', 'v', 'v', 'f', 'f', 'f', 'v', 'v', 'v', 'f', 'f', 'f'];
  

  constructor(private router:Router, public helpers: HelpersService) { }

  ngOnInit(): void {
    if (this.helpers.enter == 8){
      this.startForm();
      this.startTimer();
        //this.getAnswer();
        console.log(this.questions);
      } else {
        this.router.navigate(['']);
      }
  }

  startForm(){
    this.formOcho = new FormGroup({
      1: new FormControl('', { nonNullable: true }),
      2: new FormControl('', { nonNullable: true }),
      3: new FormControl('', { nonNullable: true }),
      4: new FormControl('', { nonNullable: true }),
      5: new FormControl('', { nonNullable: true }),
      6: new FormControl('', { nonNullable: true }),
      7: new FormControl('', { nonNullable: true }),
      8: new FormControl('', { nonNullable: true }),
      9: new FormControl('', { nonNullable: true }),
      10: new FormControl('', { nonNullable: true }),
      11: new FormControl('', { nonNullable: true }),
      12: new FormControl('', { nonNullable: true }),
      13: new FormControl('', { nonNullable: true }),
      14: new FormControl('', { nonNullable: true }),
      15: new FormControl('', { nonNullable: true }),
      16: new FormControl('', { nonNullable: true }),
      17: new FormControl('', { nonNullable: true }),
    });
  }

  startTimer() {
    /*console.log('=====>');
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
        this.timetwo = this.time;
        console.log(this.timetwo);
      } else if (this.time === 720) {
        this.pauseTimer();
        console.log('se termino tu tiempo');
        this.answers();
      } else {
        this.time++;
        this.timetwo == this.time;
        console.log(this.timetwo);
      }
    }, 1000);*/
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft === 0) {
        console.log('se termino tu tiempo');
        this.evaluateForm();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  transform(value: number, args?: any) {
    
    const minutes: number = Math.floor(value / 60);
    const seconds: number = value - minutes * 60;

    if (minutes < 10 && seconds < 10) {
      return '0' + minutes + ' : 0' + seconds;
    } else if (minutes < 10 && seconds > 10) {
      return '0' + minutes + ' : ' + seconds;
    } else if (minutes > 10 && seconds < 10) {
      return minutes + ' : 0' + seconds;
    } else {
      return minutes + ' : ' + seconds;
    }
  }

  evaluateForm(): void {
    this.pauseTimer();
      console.log(this.ansOcho)
      this.user = Object.values(this.formOcho.getRawValue());
      console.log(this.user);
      this.user.forEach((answer, index) => {
        if (answer == this.ansOcho[index]) {
          this.correct[index] = answer;
          console.log(this.correct, 'correctas');
          //this.correctas.push(answer);
          //console.log(this.correctas, 'correctas');
        } else {
          //this.incorrectas.push(answer);
          //console.log(this.incorrectas, 'incorrectas');
          this.incorrect[index] = answer;
          console.log(this.incorrect, 'incorrectas');
        } 
      });

      let s8;
      if(this.correct.length > 0){
      s8 = Object.keys(this.correct).length - Object.keys(this.incorrect).length
      } else {
        s8 = 0;
      }
      console.log(s8, 'serie 6');
      let final = this.helpers.finalTM + s8;
      this.helpers.fillAnswers({seis: s8});
      this.helpers.finalTM = final;
      console.log('final', this.helpers.finalTM);
      this.helpers.enter = 9;
      this.router.navigate(['/serieNueve']);
    
  
    }
}
