import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My name is ${this.firstName} ${this.lastName}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }


}
