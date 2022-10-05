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
    { question: 1, answer: 'paris' },
    {
      question: 2,
      answer: { a: 'Bagdad', b: 'Teherán', c: 'Islamabad', d: 'Madrid' },
    },
    {
      question: 3,
      answer: { a: 'Bagdad', b: 'Teherán', c: 'Islamabad', d: 'Rome' },
    },
    {
      question: 4,
      answer: { a: 'Bagdad', b: 'Teherán', c: 'Islamabad', d: 'Berlin' },
    },
    {
      question: 1,
      answer: { a: 'Bagdad', b: 'Teherán', c: 'Islamabad', d: 'London' },
    },
    {
      question: 5,
      answer: { a: 'Bagdad', b: 'Teherán', c: 'Islamabad', d: 'Lisbon' },
    },
  ];

  respuestas: string[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.answers();
    this.startForm();
  }

  startForm(): void {
    //Metodo para inicializar el formulario
    this.formPreguntas = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  answers() {
    const preguntasYrespuestas = [];
  }
}
