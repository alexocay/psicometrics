import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  public correctas = {} as any;

  constructor() { }

  public fillAnswers(arr:any){
    for (let ans in arr){
      this.correctas[ans] = arr[ans];
    }
    console.log(this.correctas);

    return this.correctas;
  }

  
}
