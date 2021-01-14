import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardManagementComponent } from './credit-card-management.component';

const routes: Routes = [
  { path: '', component: CreditCardManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardManagementRoutingModule { }
