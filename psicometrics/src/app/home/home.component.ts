import { Component, OnInit} from '@angular/core';
import { HelpersService } from '../terman-merril/helpers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  year = 2022
  holidays = ['01/06', '04/01', '12/25']
  constructor(public helpers: HelpersService) { }

  ngOnInit(): void {
    this.helpers.enter = 0;
    this.countHours(this.year, this.holidays)
  }

  countHours(year: number, holidays: string[]){
    let count = 0;
    let d = new Date(year, 0, 1);
    let e = new Date(year, 11, 31);
    console.log(d, e);
    console.log(d.getDay(), d.getMonth(), d.getDate());
    while (d <= e) {
      if (d.getDay() !== 0 && d.getDay() !== 6 && !holidays.includes(`${d.getMonth()+1}/${d.getDate()}`)) {
        count++;
        
      }
      d.setDate(d.getDate() + 1);
    }
    
    
    /*let count = 0;
    let date = new Date(year, 0, 1);
    let endDate = new Date(year, 11, 31);
    while (date <= endDate) {
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let dayMonth = `${day}/${month}`;
        if (!holidays.includes(dayMonth)) {
          count++;
        }
      }
      date.setDate(date.getDate() + 1);
    }
    this.helpers.hours = count * 8;*/
  }
  
  

}
