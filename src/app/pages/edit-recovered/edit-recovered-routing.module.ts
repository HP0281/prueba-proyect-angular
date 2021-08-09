import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecoveredComponent } from './edit-recovered.component';

const routes: Routes = [{ path: '', component: EditRecoveredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRecoveredRoutingModule { }
