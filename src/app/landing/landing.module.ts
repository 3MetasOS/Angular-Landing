import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';


import { LandingRoutingModule } from './landing-routing.module';

import { LandingComponent } from './landing.component';
import { WebComponent } from './web/web.component';


@NgModule({
  declarations: [
    LandingComponent,
    WebComponent  
  ],
  imports:
    [
      CommonModule,
      NgbModule,
      FormsModule,
      LandingRoutingModule
    ],
  providers: []
})
export class LandingModule { }