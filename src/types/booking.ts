export interface Booking {
  id: string;
  staff: "Ava" | "Jenny" | "Katie" | "Amelie";
  service: string;
  client: string;
  start: string; // ISO string
  end: string; // ISO string
  status?: "paid" | "unpaid";
}

export const mockBookings: Booking[] = [
  {
    id: "1",
    staff: "Ava",
    service: "Root Touch-Up",
    client: "Debbie Smith",
    start: "2025-06-30T09:30:00",
    end: "2025-06-30T10:30:00",
    status: "unpaid",
  },
  {
    id: "2",
    staff: "Jenny",
    service: "Root Touch-Up",
    client: "Debbie Smith",
    start: "2025-06-30T12:30:00",
    end: "2025-06-30T13:30:00",
    status: "unpaid",
  },
  {
    id: "3",
    staff: "Katie",
    service: "Hair Cut",
    client: "Karen Davies",
    start: "2025-06-30T11:00:00",
    end: "2025-06-30T12:15:00",
    status: "paid",
  },
  {
    id: "4",
    staff: "Amelie",
    service: "Root Touch-Up",
    client: "Debbie Smith",
    start: "2025-06-30T09:30:00",
    end: "2025-06-30T10:30:00",
    status: "unpaid",
  },
];
