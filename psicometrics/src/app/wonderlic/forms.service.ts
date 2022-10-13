import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

interface QuestionsFormControls {
  1: FormControl<string>;
  2: FormControl<string>;
  3: FormControl<string>;
  4: FormControl<string>;
}

export type FormValue<T extends AbstractControl> = T extends AbstractControl<infer TValue, any> ? TValue : never;

export type FormRawValue<T extends AbstractControl> = T extends AbstractControl<any, infer TRawValue> ? TRawValue : never;

export type QuestionsForm = FormGroup<QuestionsFormControls>;

export type QuestionF = FormRawValue<QuestionsForm>;


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }
  
  public add(ans: QuestionF): void {
    console.log('Add user', ans);
  }
}
