import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wonderlic',
  templateUrl: './wonderlic.component.html',
  styleUrls: ['./wonderlic.component.css'],
})
export class WonderlicComponent implements OnInit {
  formPreguntas: FormGroup;

  wonderlic = [
    { question: '1', answer: 4 },
    { question: '2', answer: 2,},
    { question: '3', answer: 3 },
    { question: '4', answer: 2 },
    { question: '5', answer: 3 },
    { question: '6', answer: 1 },
    { question: '7', answer: 3 },
    { question: '8', answer: 3 },
    { question: '9', answer: 1 },
    { question: '10', answer: 4 },
    { question: '11', answer: 3 },
    { question: '12', answer: 6000 },
    { question: '13', answer: 1 },
    { question: '14', answer: 2 },
    { question: '15', answer: 60 },
    { question: '16', answer: 2 },
    { question: '17', answer: 'o' },
    { question: '18', answer: 13 },
    { question: '19', answer: 3 },
    { question: '20', answer: 2 },
   
  ];

  

  respuestas: string[] = [];
  form: string[] = [];
  resultado = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.startForm();
    this.getAnswer();
  }

  startForm(): void {
    //Metodo para inicializar el formulario
    this.formPreguntas = this.formBuilder.group({
      one: ['', Validators.required],
      dos: ['', Validators.required],
      tres: ['', Validators.required],
      cuatro: ['', Validators.required],
      cinco: ['', Validators.required],
      seis: ['', Validators.required],
      siete: ['', Validators.required],
      ocho: ['', Validators.required],
      nueve: ['', Validators.required],
      diez: ['', Validators.required],
      once: ['', Validators.required],
      doce: ['', Validators.required],
      trece: ['', Validators.required],
      catorce: ['', Validators.required],
      quince: ['', Validators.required],
      dieciseis: ['', Validators.required],
      diecisiete: ['', Validators.required],
      dieciocho: ['', Validators.required],
      diecinueve: ['', Validators.required],
      veinte: ['', Validators.required],
    });
  }

  getAnswer() {
    for (let ans of this.wonderlic) {
      this.respuestas.push(ans.answer.toString());
    }
    console.log(this.respuestas);
  }

  change() {
    console.log('cambio');
  }

  answers() {

    let incorrectas = [];
    let correctas = [];
    this.form = [
      this.formPreguntas.get('one')?.value,
      this.formPreguntas.get('dos')?.value,
      this.formPreguntas.get('tres')?.value,
      this.formPreguntas.get('cuatro')?.value,
      this.formPreguntas.get('cinco')?.value,
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
    ];

    console.log(this.form)

    /*for (let ans of user) {
      this.form.push(ans);
    }*/

    for (let final of this.form) {
      let res = this.respuestas.includes(final);
      console.log(res);
      if (res == true) {
        correctas.push(final);
        console.log(correctas);
      } else if (res == false) {
        incorrectas.push(final);
        console.log(incorrectas);
      }
    }

    if (correctas.length < 14) {
      this.resultado = 'inferior';
      console.log('Inferior');
    } else if (correctas.length >= 14 && correctas.length <= 20) {
      console.log('Inferior a la media');
    } else if (correctas.length >= 21 && correctas.length <= 26) {
      console.log('Media');
    } else if (correctas.length >= 27 && correctas.length <= 32) {
      console.log('Superior a la media');
    } else if (correctas.length >= 33) {
      console.log('Superior');
    }
  }
}
