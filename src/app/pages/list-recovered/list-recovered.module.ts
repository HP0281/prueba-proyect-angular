import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRecoveredRoutingModule } from './list-recovered-routing.module';
import { ListRecoveredComponent } from './list-recovered.component';


@NgModule({
  declarations: [
    ListRecoveredComponent
  ],
  imports: [
    CommonModule,
    ListRecoveredRoutingModule
  ]
})
export class ListRecoveredModule { }
