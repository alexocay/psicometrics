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
  answers: any[];
}

@Component({
  selector: 'app-serie-cuatro',
  templateUrl: './serie-cuatro.component.html',
  styleUrls: ['./serie-cuatro.component.css']
})
export class SerieCuatroComponent implements OnInit {

  questions: Question[] = data;
  arrClassType: any[] = [];

  formCuatro: FormGroup;
  correct = {} as any;
  incorrect = {} as any;

  ansTres = ['0', '1', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0', '1', '0', '0', '1', '0', '1', '0', '0', '0', '1', '1', '1', '0', '1', '1', '0', '1'];
  user: string[] = [];

  incorrectas: string[] = [];
  correctas: string[] = [];

  timeLeft: number = 120; //2 minutos
  interval: any;

  constructor(private router:Router, public helpers: HelpersService) { }

  ngOnInit(): void {
    if (this.helpers.enter == 4){
      this.startForm();
      this.startTimer();
        //this.getAnswer();
        console.log(this.questions);
      } else {
        this.router.navigate(['']);
      }
    
  }

  startForm(){
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

  // Funcion para agregar o quitar el tipo de clase
  addClassType(event: any, name:any) {
    if (event.target.checked) {
      this.arrClassType.push(event.target.value);
    } else {
      this.arrClassType = this.arrClassType.filter(
        (item) => item !== event.target.value
      );
    this.formCuatro.controls[name].setValue(this.arrClassType);
    }
    console.log(this.arrClassType)
    console.log(this.formCuatro.value); 
  }

  /*otherClassType(event: any, name:any) {
    //si el checkbox se deselecciona borro el valor del input del array
    if (!event.target.checked) {
      //quitar la ultima posicion del array y limpiar el input
      this.arrClassType.pop();
      //y actualizo el objeto mentor
      this.mentor.class_type = this.arrClassType;
      this.formCuatro.controls[name].setValue('');
    }
    this.otherOption = event.target.checked;
    /* console.log(this.arrClassType); 
  }*/

  evaluateForm(): void {
    this.pauseTimer();
    if(this.formCuatro.valid){
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
      this.pauseTimer();
      console.log(this.ansTres)
      this.user = Object.values(this.formCuatro.getRawValue());
      console.log(this.user);
      this.user.forEach((answer, index) => {
        if (answer == this.ansTres[index]) {
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

      this.helpers.fillAnswers({tres: this.correct});
      this.helpers.enter = 4;
      this.router.navigate(['/serieCuatro']);
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


}
