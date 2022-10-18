import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import data from './uno';
import dos from './dos';
import tres from './tres';
import { QuestionsForm } from './terman.model';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

interface Question {
  question: any;
  answers: any[];
}

@Component({
  selector: 'app-terman-merril',
  templateUrl: './terman-merril.component.html',
  styleUrls: ['./terman-merril.component.css'],
})
export class TermanMerrilComponent implements OnInit {
  question$: Observable<Question>;
  questions: Question[];

  //formulario primera seccion
  formUno: QuestionsForm;
  //formulario primera seccion
  formDos: FormGroup;
  //formulario primera seccion
  formTres: FormGroup;

  ansUno = ['2', '1', '2', '1', '2'];
  ansDos = ['2', '1', '2', '1', '2'];
  ansTres = ['2', '1', '2', '1', '2'];
  userUno: string[] = [];
  userDos: string[] = [];
  userTres: string[] = [];
  show: number = 1;

  incorrectas: string[] = [];
  correctas: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.startForm();
  }

  startForm(seccion?: any): void {
    if (seccion === 2) {
      this.questions = dos;
      this.formDos = new FormGroup({
        1: new FormControl('', { nonNullable: true }),
        2: new FormControl('', { nonNullable: true }),
        3: new FormControl('', { nonNullable: true }),
        4: new FormControl('', { nonNullable: true }),
        5: new FormControl('', { nonNullable: true }),
      });
    }else if(seccion == 3){
      this.questions = tres;
      this.formTres = new FormGroup({
        1: new FormControl('', { nonNullable: true }),
        2: new FormControl('', { nonNullable: true }),
        3: new FormControl('', { nonNullable: true }),
        4: new FormControl('', { nonNullable: true }),
        5: new FormControl('', { nonNullable: true }),
      });
    } else {
      this.questions = data;
      this.formUno = new FormGroup({
        1: new FormControl('', { nonNullable: true }),
        2: new FormControl('', { nonNullable: true }),
        3: new FormControl('', { nonNullable: true }),
        4: new FormControl('', { nonNullable: true }),
        5: new FormControl('', { nonNullable: true }),
      });
    }
  }

  evaluateForm(arrAns: any, arrCom: any, seccion?: any, see?: any): void {
    /*if (seccion === 1) {
      //nombre de la variable que muestra, numero para inicializar formulario, nombre de arreglo donde se metera valor de respuestas, nombre de arreglo a comparar
      this.show=2;
      this.startForm(2);
      this.userUno = Object.values(this.formUno.getRawValue());
      console.log(this.userUno);
      for (let answer of this.userUno) {
        let res = this.ansUno.includes(answer);
        console.log(res);
        if (res == true) {
          this.correctas.push(answer);
          console.log(this.correctas);
        } else {
          this.incorrectas.push(answer);
          console.log(this.incorrectas);
        }
      }
    }*/

    console.log(arrAns, arrCom, seccion, see);
    if(seccion == 1){
     this.show=2
      this.startForm(2);
      arrAns = Object.values(this.formUno.getRawValue());
      console.log(arrAns);
    }else if(seccion == 2){
      this.show=3
      this.startForm(3);
      arrAns = Object.values(this.formDos.getRawValue());
    } else if(seccion == 3){
      this.show=4
      arrAns = Object.values(this.formTres.getRawValue());
    }

    for(let answer of arrAns)
    {
      let res = arrCom.includes(answer);
      console.log(res);
      if(res == true){
        this.correctas.push(answer);
        console.log(this.correctas);
      }else{
        this.incorrectas.push(answer);
        console.log(this.incorrectas);
      }
    }
    }
  
}
