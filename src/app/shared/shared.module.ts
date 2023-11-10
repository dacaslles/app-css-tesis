import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './components/spinner/spinner.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [
      CommonModule,
      SpinnerModule,
      FormsModule,
      ReactiveFormsModule,
  ],
  imports: [
  ]
})

export class SharedModule { }
