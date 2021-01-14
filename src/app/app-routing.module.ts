import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRoutes } from './core/data/routes';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: appRoutes.creditCardManagement,
    loadChildren: () => import('./credit-card-management/credit-card-management.module').then(m => m.CreditCardManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
