import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import data from './data'
import { QuestionsForm} from './form.model'
import {  FormsService } from './forms.service';

interface Question{
  question: any;
  answers: any[];
  image: any
}

@Component({
  selector: 'app-wonderlic',
  templateUrl: './wonderlic.component.html',
  styleUrls: ['./wonderlic.component.css'],
})
export class WonderlicComponent implements OnInit {
  formPreguntas: QuestionsForm;

  time: number = 0;
  timetwo: any;
  interval: any;

  question$: Observable<Question>;
  questions: Question[] = data;

  wonderlic = [
    
    { question: '1', answer: 3},
    { question: '2', answer: 3},
    { question: '3', answer: 2 },
    { question: '4', answer: 2 },
   
  ];

  respuestas: string[] = [];
  form: string[] = [];
  resultado = '';

  new: any;

  constructor(private formBuilder: FormBuilder, private formService: FormsService  ) {}

  ngOnInit(): void {
    this.startForm();
    this.getAnswer();
    this.startTimer();
    console.log(this.questions);
  }

  startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
        this.timetwo = this.time;
        console.log(this.timetwo)
      } else if(this.time === 720){
        this.pauseTimer();
        console.log("se termino tu tiempo");
        this.answers();
      } else {
        this.time++
        this.timetwo == this.time;
        console.log(this.timetwo)
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  
transform (value: number, args?: any){

  const hours: number = Math.floor(value / 60);
  const minutes: number = (value - hours * 60);

  if (hours < 10 && minutes < 10) {
    return '0' + hours + ' : 0' + (value - hours * 60);
}
if (hours > 10 && minutes > 10) {
    return '0' + hours + ' : ' + (value - hours * 60);
}
if (hours > 10 && minutes < 10) {
    return hours + ' : 0' + (value - hours * 60);
}
if (minutes > 10) {
    return '0' + hours + ' : ' + (value - hours * 60);
}
}

  startForm(): void {

    this.formPreguntas = new FormGroup({
      1: new FormControl('', { nonNullable: true }),
      2: new FormControl('', { nonNullable: true }),
      3: new FormControl('', { nonNullable: true }),
      4: new FormControl('', { nonNullable: true }),
    });
  }

  getAnswer() {
    for (let ans of this.wonderlic) {
      this.respuestas.push(ans.answer.toString());
    }
    console.log(this.respuestas);
  }
  
  answers() {

    this.pauseTimer();
    this.formPreguntas.getRawValue()

    let incorrectas = [];
    let correctas = [];
    /*this.form = [
      1: this.formPreguntas.get('1')?.value,
      this.formPreguntas.get('2')?.value,
      this.formPreguntas.get('3')?.value,
      /*this.formPreguntas.get('4')?.value,
      this.formPreguntas.get('5')?.value,
      this.formPreguntas.get('seis')?.value,
      this.formPreguntas.get('siete')?.value,
      this.formPreguntas.get('ocho')?.value,
      this.formPreguntas.get('nueve')?.value,
      this.formPreguntas.get('diez')?.value,
      this.formPreguntas.get('once')?.value,
      this.formPreguntas.get('doce')?.value,
      this.formPreguntas.get('trece')?.value,
      this.formPreguntas.get('catorce')?.value,
      this.formPreguntas.get('quince')?.value,
      this.formPreguntas.get('dieciseis')?.value,
      this.formPreguntas.get('diecisiete')?.value.toLowerCase(),
      this.formPreguntas.get('dieciocho')?.value,
      this.formPreguntas.get('diecinueve')?.value,
      this.formPreguntas.get('veinte')?.value,
    ];*/

    /*this.form = {
      1: this.formPreguntas.get('1')?.value,
      2: this.formPreguntas.get('2')?.value,
      3: this.formPreguntas.get('3')?.value,
    }*/

    //this.formPreguntas.getRawValue();

    console.log(this.formPreguntas.value)

    this.form = Object.values(this.formPreguntas.value);
    console.log(this.form);
    console.log(this.form.length);

    

    /*for (let won of this.wonderlic) {
      if (won === this.formPreguntas.value[i]){
        correctas.push(won);
      } else {
        incorrectas.push(won);
      } 
    }*/

    for(let answer of this.form){
      let res = this.respuestas.includes(answer);
      console.log(res);
      if(res == true){
        correctas.push(answer);
        console.log(correctas);
      } else {
        incorrectas.push(answer);
        console.log(incorrectas);
    }
    }

    /*for (let final of this.form) {
      let res = this.respuestas.includes(final);
      console.log(res);
      if (res == true) {
        correctas.push(final);
        console.log(correctas);
      } else if (res == false) {
        incorrectas.push(final);
        console.log(incorrectas);
      }
    }*/

    if (correctas.length < 14) {
      this.resultado = 'Resultado: Inferior - ' + correctas.length + '/' + this.respuestas.length;
      console.log('Inferior');
    } else if (correctas.length >= 14 && correctas.length <= 20) {
      this.resultado = 'Resultado: Inferior a la media - ' + correctas.length + '/' + this.respuestas.length;
      console.log('Inferior a la media');
    } else if (correctas.length >= 21 && correctas.length <= 26) {
      this.resultado = 'Media';
      console.log('Media');
    } else if (correctas.length >= 27 && correctas.length <= 32) {
      this.resultado = 'Superior a la media';
      console.log('Superior a la media');
    } else if (correctas.length >= 33) {
      this.resultado = 'Superior';
      console.log('Superior');
    }
  }
}
