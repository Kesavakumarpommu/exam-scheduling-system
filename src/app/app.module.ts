import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExamSchedulingModule } from './exam-scheduling/exam-scheduling.module';
import { ResultProcessingModule } from './result-processing/result-processing.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReportGenerationModule } from './report-generation/report-generation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExamSchedulingModule,
    ResultProcessingModule,
    NotificationsModule,
    ReportGenerationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }