import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  sendNotificationToStudents(message: string, studentIds: string[]): void {
    // Logic to send notification to students
    studentIds.forEach(studentId => {
      console.log(`Sending notification to Student ID: ${studentId} - Message: ${message}`);
    });
  }

  sendNotificationToFaculty(message: string, facultyIds: string[]): void {
    // Logic to send notification to faculty
    facultyIds.forEach(facultyId => {
      console.log(`Sending notification to Faculty ID: ${facultyId} - Message: ${message}`);
    });
  }

  sendNotificationToParents(message: string, parentIds: string[]): void {
    // Logic to send notification to parents
    parentIds.forEach(parentId => {
      console.log(`Sending notification to Parent ID: ${parentId} - Message: ${message}`);
    });
  }
}