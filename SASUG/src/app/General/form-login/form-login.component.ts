import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor() { }
  x: number
  ngOnInit() {
  }

  form_radion(num: number){
    this.x = num;
  }

}
