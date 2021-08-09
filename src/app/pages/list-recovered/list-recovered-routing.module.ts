import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecoveredComponent } from './list-recovered.component';

const routes: Routes = [{ path: '', component: ListRecoveredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRecoveredRoutingModule { }
