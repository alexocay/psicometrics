import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../terman-merril/helpers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor(public helpers: HelpersService) {}

  ngOnInit(): void {
    this.helpers.enter = 0;
   
  }

}
