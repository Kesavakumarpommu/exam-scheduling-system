export interface Timetable {
    id: number;
    examId: number;
    date: string; // in YYYY-MM-DD format
    startTime: string; // in HH:MM:SS format
    endTime: string; // in HH:MM:SS format
    room: string;
}