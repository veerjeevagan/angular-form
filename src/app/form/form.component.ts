
import { formPattern } from './../formpattern';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(value , userForm2 ) { 
    console.log("second step details:" + JSON.stringify(value));
    alert("form has been submitted");
    
    userForm2.reset();
    location.reload();
    
  }

  log(value){
    console.log("first step details:" + JSON.stringify(value));
  }

}
