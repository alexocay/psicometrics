import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

interface QuestionsFormControls {
  1: FormControl<string>;
  2: FormControl<string>;
  3: FormControl<string>;
  4: FormControl<string>;
  5: FormControl<string>;
  6: FormControl<string>;
  7: FormControl<string>;
  8: FormControl<string>;
  9: FormControl<string>;
  10: FormControl<string>;
  11: FormControl<string>;
  12: FormControl<string>;
  13: FormControl<string>;
  14: FormControl<string>;
  15: FormControl<string>;
  16: FormControl<string>;
  17: FormControl<string>;
  18: FormControl<string>;
  19: FormControl<string>;
  20: FormControl<string>;
  21: FormControl<string>;
  22: FormControl<string>;
  23: FormControl<string>;
  24: FormControl<string>;
  25: FormControl<string>;
  26: FormControl<string>;
  27: FormControl<string>;
  28: FormControl<string>;
  29: FormControl<string>;
  30: FormControl<string>;
  31: FormControl<string>;
  32: FormControl<string>;
  33: FormControl<string>;
  34: FormControl<string>;
  35: FormControl<string>;
  36: FormControl<string>;
  37: FormControl<string>;
  38: FormControl<string>;
  39: FormControl<string>;
  40: FormControl<string>;
  41: FormControl<string>;
  42: FormControl<string>;
  43: FormControl<string>;
  44: FormControl<string>;
  45: FormControl<string>;
  46: FormControl<string>;
  47: FormControl<string>;
  48: FormControl<string>;
  49: FormControl<string>;
  50: FormControl<string>;
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
