import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamCreateComponent } from './exam-create/exam-create.component';
import { ExamTimetableComponent } from './exam-timetable/exam-timetable.component';
import { RoomAllocationComponent } from './room-allocation/room-allocation.component';

@NgModule({
  declarations: [
    ExamListComponent,
    ExamCreateComponent,
    ExamTimetableComponent,
    RoomAllocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExamListComponent,
    ExamCreateComponent,
    ExamTimetableComponent,
    RoomAllocationComponent
  ]
})
export class ExamSchedulingModule { }
