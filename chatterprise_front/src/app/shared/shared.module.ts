import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterielModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterielModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterielModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
