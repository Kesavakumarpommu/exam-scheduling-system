export interface Exam {
    id: number;
    name: string;
    subject: string;
    date: string;
    time: string;
    duration: number; // in minutes
    totalMarks: number;
    passingMarks: number;
}