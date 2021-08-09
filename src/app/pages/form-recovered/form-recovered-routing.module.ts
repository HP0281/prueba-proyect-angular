import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRecoveredComponent } from './form-recovered.component';

const routes: Routes = [{ path: '', component: FormRecoveredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRecoveredRoutingModule { }
