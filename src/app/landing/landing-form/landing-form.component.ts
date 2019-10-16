import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.css']
})
export class LandingFormComponent implements OnInit {

  email: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My email is ${this.email}.`;
    alert(allInfo); 
  }

}
