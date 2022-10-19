import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  selector: 'app-serie-tres',
  templateUrl: './serie-tres.component.html',
  styleUrls: ['./serie-tres.component.css']
})
export class SerieTresComponent implements OnInit {
  questions: Question[] = data;

  formTres: FormGroup;
  correct = {} as any;
  incorrect = {} as any;

  ansTres = ['0', '1', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0', '1', '0', '0', '1', '0', '1', '0', '0', '0', '1', '1', '1', '0', '1', '1', '0', '1'];
  user: string[] = [];

  incorrectas: string[] = [];
  correctas: string[] = [];

  constructor(private router:Router, public helpers: HelpersService) { }

  ngOnInit(): void {
    this.startForm();
  }

  startForm(){
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
      26: new FormControl('', { nonNullable: true }),
      27: new FormControl('', { nonNullable: true }),
      28: new FormControl('', { nonNullable: true }),
      29: new FormControl('', { nonNullable: true }),
      30: new FormControl('', { nonNullable: true }),
    });
  }

  evaluateForm(): void {
    
    if(this.formTres.valid){
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
      console.log(this.ansTres)
      this.user = Object.values(this.formTres.getRawValue());
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
