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
  formPreguntas: FormGroup;

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

  wonderlicDos = ['4', '2', '3', '2', '3', '1', '3', '3', '1', '4', '3', '6000', '1', '2', '60', '2', 'o', '13', '3', '1'] //vamos en la 20

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
      18: new FormControl('', { nonNullable: true }),
      19: new FormControl('', { nonNullable: true }),
      20: new FormControl('', { nonNullable: true }),
      21: new FormControl('', { nonNullable: true }),
      22: new FormControl('', { nonNullable: true }),
      23: new FormControl('', { nonNullable: true }),
      24: new FormControl('', { nonNullable: true }),
      25: new FormControl('', { nonNullable: true }),
      26: new FormControl('', { nonNullable: true }),
      27: new FormControl('', { nonNullable: true }),
      28: new FormControl('', { nonNullable: true }),
      29: new FormControl('', { nonNullable: true }),
      30: new FormControl('', { nonNullable: true }),
      31: new FormControl('', { nonNullable: true }),
      32: new FormControl('', { nonNullable: true }),
      33: new FormControl('', { nonNullable: true }),
      34: new FormControl('', { nonNullable: true }),
      35: new FormControl('', { nonNullable: true }),
      36: new FormControl('', { nonNullable: true }),
      37: new FormControl('', { nonNullable: true }),
      38: new FormControl('', { nonNullable: true }),
      39: new FormControl('', { nonNullable: true }),
      40: new FormControl('', { nonNullable: true }),
      41: new FormControl('', { nonNullable: true }),
      42: new FormControl('', { nonNullable: true }),
      43: new FormControl('', { nonNullable: true }),
      44: new FormControl('', { nonNullable: true }),
      45: new FormControl('', { nonNullable: true }),
      46: new FormControl('', { nonNullable: true }),
      47: new FormControl('', { nonNullable: true }),
      48: new FormControl('', { nonNullable: true }),
      49: new FormControl('', { nonNullable: true }),
      50: new FormControl('', { nonNullable: true }),
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
