import { Component, OnInit } from '@angular/core';
import data from './data';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { HelpersService } from '../helpers.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { __values } from 'tslib';

interface Question {
  question: any;
  answers: any[];
}

@Component({
  selector: 'app-serie-cuatro',
  templateUrl: './serie-cuatro.component.html',
  styleUrls: ['./serie-cuatro.component.css'],
})
export class SerieCuatroComponent implements OnInit {
  questions: Question[] = data;
  arrClassType: any[] = [];

  formCuatro: FormGroup;
  formCuatroD: FormGroup;

  correct = {} as any;
  incorrect = {} as any;

  ansUser: {} = {
    1: ['2', '5'],
    2: ['1', '3'],
    3: ['3', '4'],
    4: ['1', '5'],
    5: ['2', '5'],
    6: ['3', '5'],
    7: ['2', '5'],
    8: ['2', '5'],
    9: ['1', '2'],
    10: ['1', '3'],
    11: ['2', '3'],
    12: ['1', '2'],
    13: ['4', '5'],
    14: ['1', '4'],
    15: ['1', '2'],
    16: ['2', '5'],
    17: ['1', '2'],
    18: ['1','3'],
  };

  objResp = {} as any;

  ansCuatro = [
    'a2',
    'a5',
    'b1',
    'b3',
    'c3',
    'c4',
    'd1',
    'd5',
    'e1',
    'e5',
    'f3',
    'f5',
    'g2',
    'g5',
    'h2',
    'h5',
    'i1',
    'i2',
    'j1',
    'j3',
    'k2',
    'k3',
    'l1',
    'l4',
    'm2',
    'm4',
    'n1',
    'n4',
    'o1',
    'o2',
    'p2',
    'p5',
    'q1',
    'q2',
    'r1',
    'r3',
  ];
  user: string[] = [];

  incorrectas: string[] = [];
  correctas: string[] = [];

  timeLeft: number = 180; //3 minutos
  interval: any;

  selectedItemsList: any[] = [];
  checkedIDs = [];

  constructor(
    private router: Router,
    public helpers: HelpersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.helpers.enter == 4) {
      this.startForm();
      this.startTimer();
      //this.getAnswer();
      console.log(this.questions);
    } else {
      this.router.navigate(['']);
    }
  }

  startForm() {
    this.formCuatro = new FormGroup({
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
    });
  }

  prueba(){
    console.log('evento')
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft === 0) {
        console.log('se termino tu tiempo');
        this.deepEqual();
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

  /*saveResponses(question: any, event: any) {
    if(Object.keys(this.objResp).includes(question.toString())) {
      if(this.objResp[question].includes(event.target.value)) {
        this.objResp[question].splice(this.objResp[question].indexOf(event.target.value), 1);
      } else {
      this.objResp[question].push(event.target.value);
      }
    } else {
      this.objResp[question] = [event.target.value];
    }
    console.log(this.objResp);
  }*/

  changeValue(event:any, question:any){
    if(!this.objResp[question])this.objResp[question]=[];

    if(event.target.checked){ //Si el checkbox esta seleccionado
      console.log(event.target.checked)
      if(this.objResp[question]?.length < 2){ //Si el array tiene menos de 2 elementos
        if(this.objResp[question].includes(event.target.value)){ //Si el array ya contiene el valor
          this.objResp[question].splice(this.objResp[question].indexOf(event.target.value), 1); //Elimina el valor del array
        } else{
            this.objResp[question]?.length!=0? this.objResp[question].push(event.target.value): this.objResp[question] = [event.target.value]; //Si el array esta vacio, agrega el valor, si no, agrega el valor al array
        }
      } else {
        event.target.checked = false //Si el array tiene 2 elementos, deshabilita el checkbox
      }
    } else {
      console.log(event.target.checked)
      this.objResp[question].splice(this.objResp[question].indexOf(event.target.value), 1); //Elimina el valor del array
    }
    console.log(this.objResp);
  }

  
  deepEqual() {
    this.pauseTimer();
    this.correct = {};
    this.incorrect = {};
    (Object.keys(this.ansUser) as (keyof typeof this.ansUser)[]).forEach((key, index) => {
      // 👇️ name Tom 0, country Chile 1
      console.log(key, this.ansUser[key], index);
      Object.entries(this.objResp).forEach(([key2, value], index2) => {
        // 👇️ name Tom 0, country Chile 1
        console.log(key2, value, index2);
        if (key == key2) {
          console.log(key, key2)

          if (JSON.stringify(this.objResp[key2] === this.ansUser[key])) {
            console.log(this.ansUser[key], this.objResp[key2])
            this.correctas.push(key);
            console.log('correctas', this.correctas);
            this.correct[key] = value;
            console.log('correct', this.correct);
          } else {
            console.log(this.ansUser[key], this.objResp[key2])
            this.incorrectas.push(key);
            console.log('incorrectas', this.incorrectas);
            this.incorrect[key] = value;
            console.log('incorrect', this.incorrect);
          }
        }
      });
    });


    let final = this.helpers.finalTM + Object.keys(this.correct).length;
      this.helpers.fillAnswers({cuatro: Object.keys(this.correct).length});
      this.helpers.finalTM = final;
      console.log('final', this.helpers.finalTM);
    this.helpers.enter = 5;
    this.router.navigate(['/serieCinco']);
   /* for (const key of keys1) {
      const val1 = this.objResp[key];
      //const val2 = this.ansUser[key]=[];
      //const areObjects = this.isObject(val1) && this.isObject(val2);
      /*if (
        //areObjects && !this.deepEqual(val1, val2) ||
        //!areObjects && val1 !== val2
      ) {
        this.incorrect.push('incorrect');
        console.log(this.incorrect);
        return false;

      }
      this.correct.push('correct');
      console.log(this.correct);
      return true;
    }*/
  }

  evaluateForm(): void {
    this.pauseTimer();
    /*console.log(this.ansUno)
      this.userUno = Object.values(this.formUno.getRawValue());
      console.log(this.userUno);
      for (let answer of this.userUno) {
        let res = this.ansUno.includes(answer);
        console.log(res);
        if (res == true) {
          this.correctas.push(answer);
          console.log(this.correctas, 'correctas');
        } else {
          this.incorrectas.push(answer);
          console.log(this.incorrectas, 'incorrectas');
        }
      } */
    console.log(this.ansCuatro);
    //this.user = Object.values(this.formCuatro.getRawValue());
    this.user = this.arrClassType.sort();
    console.log(this.user);
    this.user.forEach((answer, index) => {
      if (answer == this.ansCuatro[index]) {
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

    console.log(Object.keys(this.correct).length);
    let s4 = Object.keys(this.correct).length;
    let final = this.helpers.finalTM + s4;
    this.helpers.fillAnswers({ cuatro: Object.keys(this.correct).length});
    this.helpers.finalTM = final;
    console.log('final', this.helpers.finalTM);
    this.helpers.enter = 5;
    this.router.navigate(['/serieCinco']);
  }

  /*console.log(arrAns, arrCom, seccion, see);
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
    }*/
}
