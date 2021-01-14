import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPipe } from './color.pipe';
import { DateStringPipe } from './date-string.pipe';

@NgModule({
  declarations: [
    ColorPipe,
    DateStringPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorPipe,
    DateStringPipe
  ]
})
export class PipesModule { }
