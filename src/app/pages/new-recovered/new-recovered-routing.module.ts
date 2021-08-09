import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecoveredComponent } from './new-recovered.component';

const routes: Routes = [{ path: '', component: NewRecoveredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRecoveredRoutingModule { }
