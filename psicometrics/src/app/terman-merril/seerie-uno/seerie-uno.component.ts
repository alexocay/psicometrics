import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import data from './data'
import { QuestionsForm } from './one.model'
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
  answers: any[];
}


@Component({
  selector: 'app-seerie-uno',
  templateUrl: './seerie-uno.component.html',
  styleUrls: ['./seerie-uno.component.css']
})
export class SeerieUnoComponent implements OnInit {
  question$: Observable<Question>;
  questions: Question[] = data;

  //formulario primera seccion
  formUno: QuestionsForm;
  

  //Respuestas correctas por sección
  ansUno = ['2', '1', '2', '1', '2', '4', '3', '1', '3', '3', '3', '2', '2', '3', '2', '3'];

  userUno: string[] = [];

 correct = {} as any;
 incorrect = {} as any;

  incorrectas: string[] = [];
  correctas: string[] = [];

  timeLeft: number = 120; //2 minutos
  interval: any;


  constructor(private router:Router, public helpers: HelpersService) {}

  ngOnInit(): void {
    if (this.helpers.enter == 1) {
      this.startForm();
      this.startTimer();
      //this.getAnswer();
      console.log(this.questions);
    } else {
      this.router.navigate(['']);
    }
  }

  startForm(): void {
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
    if(this.formUno.valid){
      //nombre de la variable que muestra, numero para inicializar formulario, nombre de arreglo donde se metera valor de respuestas, nombre de arreglo a comparar
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
      console.log(this.ansUno)
      this.userUno = Object.values(this.formUno.getRawValue());
      console.log(this.userUno);
      this.userUno.forEach((answer, index) => {
        if (answer == this.ansUno[index]) {
          this.correct[index] = answer;
          //this.correctas.push(answer);
          //console.log(this.correctas, 'correctas');
          console.log(this.correct, 'correct');
        } else {
          this.incorrect[index] = answer;
          console.log(this.incorrectas, 'incorrectas');
        } 
      });

      this.helpers.fillAnswers({uno: Object.keys(this.correct).length});
      this.helpers.finalTM = Object.keys(this.correct).length;
      console.log('final', this.helpers.finalTM);
      this.helpers.enter = 2;
      this.router.navigate(['/serieDos']);
    } else {
      //si el primer formulario no es valido
      //muestro un mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor complete todos los campos',
      });
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

    finalizar(){
      let total = (this.correctas.length/133)*100;
      console.log(total);
    }
  
}
