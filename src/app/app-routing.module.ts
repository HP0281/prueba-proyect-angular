import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listRecovered'},
  { path: 'listRecovered', loadChildren: () => import('./pages/list-recovered/list-recovered.module').then(m => m.ListRecoveredModule) },
 { path: 'formRecovered', loadChildren: () => import('./pages/form-recovered/form-recovered.module').then(m => m.FormRecoveredModule) },
  { path: 'newRecovered', loadChildren: () => import('./pages/new-recovered/new-recovered.module').then(m => m.NewRecoveredModule) },
   { path: 'editRecovered', loadChildren: () => import('./pages/edit-recovered/edit-recovered.module').then(m => m.EditRecoveredModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
