import { Injectable } from '@angular/core';
import { Exam } from '../models/exam.model';
import { Timetable } from '../models/timetable.model';
import { RoomAllocation } from '../models/room-allocation.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private exams: Exam[] = [];
  private timetables: Timetable[] = [];
  private roomAllocations: RoomAllocation[] = [];

  constructor() {
    // Initialization if required
  }

  // Method to manage exams
  addExam(exam: Exam): void {
    this.exams.push(exam);
  }

  getExams(): Exam[] {
    return this.exams;
  }

  // Method to manage timetables
  addTimetable(timetable: Timetable): void {
    this.timetables.push(timetable);
  }

  getTimetables(): Timetable[] {
    return this.timetables;
  }

  // Method to manage room allocations
  allocateRoom(allocation: RoomAllocation): void {
    this.roomAllocations.push(allocation);
  }

  getRoomAllocations(): RoomAllocation[] {
    return this.roomAllocations;
  }
}