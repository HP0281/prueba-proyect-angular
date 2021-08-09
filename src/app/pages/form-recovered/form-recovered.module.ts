import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRecoveredRoutingModule } from './form-recovered-routing.module';
import { FormRecoveredComponent } from './form-recovered.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormRecoveredComponent
  ],
  imports: [
    CommonModule,
    FormRecoveredRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    FormRecoveredComponent
  ]
})
export class FormRecoveredModule { }
