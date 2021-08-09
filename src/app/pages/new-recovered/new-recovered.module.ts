import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRecoveredRoutingModule } from './new-recovered-routing.module';
import { NewRecoveredComponent } from './new-recovered.component';

import { FormRecoveredModule } from '../form-recovered/form-recovered.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewRecoveredComponent
  ],
  imports: [
    CommonModule,
    NewRecoveredRoutingModule,
    FormRecoveredModule,
    ReactiveFormsModule
  ]
})
export class NewRecoveredModule { }
