import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamSchedulingModule } from './exam-scheduling/exam-scheduling.module';
import { ResultProcessingModule } from './result-processing/result-processing.module';
import { ReportsModule } from './reports/reports.module';
import { NotificationsModule } from './notifications/notifications.module';

const routes: Routes = [
  { path: 'exam-scheduling', loadChildren: () => ExamSchedulingModule },
  { path: 'result-processing', loadChildren: () => ResultProcessingModule },
  { path: 'reports', loadChildren: () => ReportsModule },
  { path: 'notifications', loadChildren: () => NotificationsModule },
  { path: '', redirectTo: '/exam-scheduling', pathMatch: 'full' },
  { path: '**', redirectTo: '/exam-scheduling' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
