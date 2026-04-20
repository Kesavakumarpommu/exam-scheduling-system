export interface RoomAllocation {
    id: string;
    examId: string;
    roomNumber: string;
    capacity: number;
    seatsAllocated: number;
    invigilator: string;
}