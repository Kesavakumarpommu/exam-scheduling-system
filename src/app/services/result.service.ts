import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }

  // Method to enter marks for a student
  enterMarks(studentId: string, subjectId: string, marks: number): void {
    // Logic to enter marks
  }

  // Method to calculate grade based on marks
  calculateGrade(marks: number): string {
    let grade: string;
    if (marks >= 90) {
      grade = 'A';
    } else if (marks >= 75) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else {
      grade = 'F';
    }
    return grade;
  }

  // Method to process results after exams
  processResults(results: { studentId: string, marks: number }[]): void {
    results.forEach(result => {
      const grade = this.calculateGrade(result.marks);
      // Logic to process results and assign grades
    });
  }
}