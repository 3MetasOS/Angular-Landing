import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'landing-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent {
  cards$: Observable<any[]>;
  mainCallOut$: Observable<any>;

  constructor() {
    this.cards$ = [];
    this.mainCallOut$ = [];
  }
  
}
