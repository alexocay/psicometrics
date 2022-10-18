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

interface QuestionDos {
  question: any;
}

@Component({
  selector: 'app-terman-merril',
  templateUrl: './terman-merril.component.html',
  styleUrls: ['./terman-merril.component.css'],
})
export class TermanMerrilComponent implements OnInit {
  question$: Observable<Question>;
  questions: Question[];
  questionsDos: QuestionDos[];

  //formulario primera seccion
  formUno: QuestionsForm;
  //formulario primera seccion
  formDos: FormGroup;
  //formulario primera seccion
  formTres: FormGroup;
    //formulario primera seccion
  formCuatro: FormGroup;
   //formulario primera seccion
   formCinco: FormGroup;
    //formulario primera seccion
  formTSeis: FormGroup;
   //formulario primera seccion
   formSiete: FormGroup;
    //formulario primera seccion
  formOcho: FormGroup;
   //formulario primera seccion
   formNuevo: FormGroup;
    //formulario primera seccion
  formDiez: FormGroup;

  //Respuestas correctas por sección
  ansUno = ['2', '1', '2', '1', '2', '4', '3', '1', '3', '3', '3', '2', '2', '3', '2', '3'];
  ansDos = ['3', '1', '2', '3', '3', '2', '3', '3', '2', '1', '2'];
  ansTres = ['2', '1', '2', '1', '2'];
  ansCuatro = ['2', '1', '2', '1', '2'];
  ansCinco = ['2', '1', '2', '1', '2'];
  ansSeis = ['2', '1', '2', '1', '2'];
  ansSiete = ['2', '1', '2', '1', '2'];
  ansOcho = ['2', '1', '2', '1', '2'];
  ansNueve = ['2', '1', '2', '1', '2'];
  ansDiez = ['2', '1', '2', '1', '2']; 

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
        6: new FormControl('', { nonNullable: true }),
        7: new FormControl('', { nonNullable: true }),
        8: new FormControl('', { nonNullable: true }),
        9: new FormControl('', { nonNullable: true }),
        10: new FormControl('', { nonNullable: true }),
        11: new FormControl('', { nonNullable: true }),
      });
    }else if(seccion == 3){
      this.questionsDos = tres;
      this.formTres = new FormGroup({
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
      });
    } else {
      this.questions = data;
      this.formUno = new FormGroup({
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
      this.finalizar();
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

    finalizar(){
      let total = (this.correctas.length/133)*100;
      console.log(total);
    }
  
}
