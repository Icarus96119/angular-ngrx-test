import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../ui-kit/input/input.module';
import { PipesModule } from '../ui-kit/pipes/pipes.module';

import { CreditCardManagementRoutingModule } from './credit-card-management-routing.module';

import { CreditCardManagementComponent } from './credit-card-management.component';

@NgModule({
  declarations: [
    CreditCardManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    PipesModule,
    CreditCardManagementRoutingModule
  ]
})
export class CreditCardManagementModule { }
