import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cuestionario',
  templateUrl: './form-cuestionario.component.html',
  styleUrls: ['./form-cuestionario.component.css']
})
export class FormCuestionarioComponent implements OnInit {

  constructor() { }
  x: number = 1;
  ngOnInit() {
  }

  form_radion(num: number){
    this.x = num;
  }

}
