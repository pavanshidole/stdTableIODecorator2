import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../modules/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {


  @ViewChild('fname') fname !:ElementRef;
  @ViewChild('lname') lname !:ElementRef;
  @ViewChild('email') email !:ElementRef;
  @ViewChild('contact') contact !:ElementRef;

  @Output() event:EventEmitter<Istd> =new EventEmitter<Istd>()

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
  
  constructor() { }

  ngOnInit(): void {
  }


  stdAdd(){

    if(this.validInputs()){
      let newstd:Istd={
        fname:this.fname.nativeElement.value,
        lname:this.lname.nativeElement.value,
        email:this.email.nativeElement.value,
        contact:this.contact.nativeElement.value,
        stdId:this.uuid()
      }
      
      this.fname.nativeElement.value='';
      this.lname.nativeElement.value='';
      this.email.nativeElement.value='';
      this.contact.nativeElement.value='';
      this.event.emit(newstd);
    }
  }
 
  validInputs():boolean{
    return this.fname.nativeElement.value.trim() !== "" &&
      this.lname.nativeElement.value.trim() !== "" &&
      this.email.nativeElement.value.trim() !== "" &&
      this.contact.nativeElement.value.trim() !== ""; 
  }


    
  }
  

