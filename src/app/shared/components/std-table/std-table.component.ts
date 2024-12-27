import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../modules/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
   
  @Input() getStdArray !:Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}
