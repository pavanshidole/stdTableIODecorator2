import { Component, OnInit } from '@angular/core';
import { Istd } from '../../modules/std';

@Component({
  selector: 'app-std-dash-boared',
  templateUrl: './std-dash-boared.component.html',
  styleUrls: ['./std-dash-boared.component.scss']
})
export class StdDashBoaredComponent implements OnInit {

  stdArray :Array<Istd>=[
    {
      fname:'pavan',
      lname:'shidole',
      email:'ps@gmail.com',
      contact:1234567890,
      stdId:'123'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  sendObj(std:Istd){
console.log(std);
   this.stdArray.push(std)
  }
}
