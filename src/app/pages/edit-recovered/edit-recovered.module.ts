import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRecoveredRoutingModule } from './edit-recovered-routing.module';
import { EditRecoveredComponent } from './edit-recovered.component';
import { FormRecoveredModule } from '../form-recovered/form-recovered.module';


@NgModule({
  declarations: [
    EditRecoveredComponent
  ],
  imports: [
    CommonModule,
    EditRecoveredRoutingModule,
    FormRecoveredModule
  ]
})
export class EditRecoveredModule { }
