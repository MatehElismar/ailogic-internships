import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }
