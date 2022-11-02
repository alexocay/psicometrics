import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import dataWonder from '../data/wonderlic';
import { HelpersService } from '../terman-merril/helpers.service';
import { formatDate } from '@angular/common';
import { Wonderlic } from 'app/interfaces/wonderlic';

interface Question {
  question: any;
  answers: any[];
  image: any;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  formPreguntas: FormGroup;
  currentDate: any;

  /*time: number = 0;
  timetwo: any;
  interval: any;*/

  timeLeft: number = 720;
  interval: any;

  questions: Wonderlic[] = dataWonder;

  ansWonderlic = [
    '4',
    '2',
    '3',
    '2',
    '3',
    '1',
    '3',
    '3',
    '1',
    '4',
    '3',
    '6000',
    '1',
    '2',
    '60',
    '2',
    'o',
    '13',
    '3',
    '1',
    '20',
    '2',
    '2',
    '2',
    '3',
    '1',
    '1',
    '3',
    '6',
    '10',
    '2',
    '1',
    '3',
    '20',
    '1',
    '24',
    '0.625',
    '4',
    '2',
    '1',
    '2',
    '3',
    '0.33',
    '2',
    '2',
    '2',
    '3',
    '175',
    '1',
    '12',
  ];

  userAns: string[] = [];

  respuestas: string[] = [];
  form: string[] = [];
  resultado = '';
  aplicacion = '';

  new: any;

  incorrectas: string[] = [];
  correctas: string[] = [];

  enter: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public helpers: HelpersService
  ) {}

  ngOnInit(): void {
    if (this.helpers.enter == 1) {
      this.currentDate = new Date();
      this.startForm();
      this.startTimer();
      //this.getAnswer();
      console.log(this.questions);
    } else {
      this.router.navigate(['']);
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft === 0) {
        console.log('se termino tu tiempo');
        this.answers();
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

  startForm(): void {
    if(this.helpers.test == 1){
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
  } else if(this.helpers.test == 2){
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
    });
  }
  }


  answers() {
    this.pauseTimer();
    let date = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
    this.helpers.fecha = date;
    console.log(date)
    console.log(this.formPreguntas.value);
    console.log(this.formPreguntas.getRawValue());

    if(this.helpers.test === 1){
    this.userAns = Object.values(this.formPreguntas.getRawValue());
    console.log(this.ansWonderlic);
    console.log(this.userAns);
    this.userAns.forEach((answer, index) => {
      if (answer == this.ansWonderlic[index]) {
        //this.correct[index] = answer;
        this.correctas.push(answer);
        console.log(this.correctas, 'correctas');
        //console.log(this.correct, 'correct');
      } else {
        this.incorrectas.push(answer);
        console.log(this.incorrectas, 'incorrectas');
      }
    });

    console.log(this.correctas.length);

    if (this.correctas.length < 14) {
      this.resultado =
        'Resultado: Inferior - ' +
        this.correctas.length +
        '/' +
        this.ansWonderlic.length;
        this.aplicacion = 'Fecha de aplicación: ' + date + 'Puedas aplicar la prueba de nuevo en 6 meses';
      console.log('Inferior');
    } else if (this.correctas.length >= 14 && this.correctas.length <= 20) {
      this.resultado =
        'Resultado: Inferior a la media - ' +
        this.correctas.length +
        '/' +
        this.ansWonderlic.length;
        this.aplicacion = 'Fecha de aplicación: ' + date + 'Puedas aplicar la prueba de nuevo en 6 meses';
      console.log('Inferior a la media');
    } else if (this.correctas.length >= 21 && this.correctas.length <= 26) {
      this.resultado =
        'Media - ' + this.correctas.length + '/' + this.ansWonderlic.length;
        this.aplicacion = 'Fecha de aplicación: ' + date + 'Puedas aplicar la prueba de nuevo en 6 meses';
      console.log('Media');
    } else if (this.correctas.length >= 27 && this.correctas.length <= 32) {
      this.resultado =
        'Superior a la media - ' +
        this.correctas.length +
        '/' +
        this.ansWonderlic.length;
        this.aplicacion = 'Fecha de aplicación: ' + date + 'Puedas aplicar la prueba de nuevo en 6 meses';
      console.log('Superior a la media');
    } else if (this.correctas.length >= 33) {
      this.resultado =
        'Superior - ' + this.correctas.length + '/' + this.ansWonderlic.length;
        this.aplicacion = 'Fecha de aplicación: ' + date + 'Puedas aplicar la prueba de nuevo en 6 meses';
      console.log('Superior');
    }
  } else if(this.helpers.test === 2){
    console.log('nada');
  }
  }
}

