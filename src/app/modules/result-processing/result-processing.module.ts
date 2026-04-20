import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';
import { GradeCalculationComponent } from './grade-calculation/grade-calculation.component';
import { ResultDeclarationComponent } from './result-declaration/result-declaration.component';

@NgModule({
  declarations: [
    MarkEntryComponent,
    GradeCalculationComponent,
    ResultDeclarationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResultProcessingModule { }