import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { IconModule } from '../icon/icon.module';

import { TextInputComponent } from './text-input/text-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    TextInputComponent,
    DatePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    TextInputComponent,
    DatePickerComponent,
  ],
})
export class InputModule { }
