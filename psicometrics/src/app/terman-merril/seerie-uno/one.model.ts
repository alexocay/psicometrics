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
}

export type FormValue<T extends AbstractControl> = T extends AbstractControl<infer TValue, any> ? TValue : never;

export type FormRawValue<T extends AbstractControl> = T extends AbstractControl<any, infer TRawValue> ? TRawValue : never;

export type QuestionsForm = FormGroup<QuestionsFormControls>;

export type QuestionF = FormRawValue<QuestionsForm>;