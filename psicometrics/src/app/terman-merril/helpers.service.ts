import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  public correctas = {} as any;
  public enter: number = 0;
  public fecha: any;
  public finalTM: number;
  public test: number = 0;

  constructor(public router : Router) { }

  public fillAnswers(arr:any){
    for (let ans in arr){
      this.correctas[ans] = arr[ans];
    }
    console.log(this.correctas);

    return this.correctas;
  }


  public access(id:any){
    if(id == 1){
    this.router.navigate(['/wonderlic']);
    this.enter = 1;
    this.test = 1;
    }else if(id == 2){
      this.router.navigate(['/serieUno']);
      this.enter = 1;
    }
  }

  public termanMeril(number:any){
    this.finalTM =+ number;
    console.log(this.finalTM);
    return this.finalTM;
  }

  
}
