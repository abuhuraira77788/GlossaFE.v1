import React from "react";
import BookingCard from "./BookingCard";
import { Booking } from "../types/booking";

interface CalendarGridProps {
  bookings: Booking[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ bookings }) => {
  const timeSlots = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
  ];

  const staff = [
    { name: "Ava", color: "#885ABB" },
    { name: "Jenny", color: "#5AB7BB" },
    { name: "Katie", color: "#C96EBE" },
    { name: "Amelie", color: "#837EED" },
  ];

  const getBookingPosition = (booking: Booking) => {
    const startHour = new Date(booking.start).getHours();
    const startMinute = new Date(booking.start).getMinutes();
    const endHour = new Date(booking.end).getHours();
    const endMinute = new Date(booking.end).getMinutes();

    const startFromNine = (startHour - 9) * 60 + startMinute;
    const endFromNine = (endHour - 9) * 60 + endMinute;
    const duration = endFromNine - startFromNine;

    const top = (startFromNine * 80) / 60;
    const height = (duration * 80) / 60;

    return { top: `${top}px`, height: `${height}px` };
  };

  const formatTime = (hour: number, minute: number) => {
    const d = new Date();
    d.setHours(hour);
    d.setMinutes(minute);
    return d.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden max-w-full">
      {/* Staff colored header row */}
      <div className="grid grid-cols-[80px_repeat(4,minmax(140px,1fr))]">
        <div className="h-12"></div>
        {staff.map((s) => (
          <div
            key={s.name}
            style={{ backgroundColor: s.color }}
            className="text-white text-center py-3 font-medium border-r border-gray-200 last:border-r-0"
          >
            {s.name}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-[80px_repeat(4,minmax(140px,1fr))] flex-1">
        {/* Time column */}
        <div className="border-r border-gray-200">
          {timeSlots.map((time) => (
            <div
              key={time}
              className="h-20 border-b border-gray-200 flex items-start justify-end pr-3 pt-1"
            >
              <span className="text-xs text-gray-500">{time}</span>
            </div>
          ))}
        </div>

        {/* Staff columns */}
        {staff.map((staffMember, idx) => (
          <div
            key={staffMember.name}
            className="relative border-r border-gray-200 last:border-r-0"
          >
            {timeSlots.map((_, hourIdx) => {
              const baseHour = 9 + hourIdx;
              return (
                <React.Fragment key={hourIdx}>
                  {/* First half-hour */}
                  <div className="relative h-10 border-b border-gray-200 grid grid-rows-2">
                    {[0, 15].map((m) => (
                      <div
                        key={m}
                        className="relative group hover:bg-purple-50 transition cursor-pointer flex items-center justify-center"
                      >
                        <span className="text-[11px] text-black opacity-0 group-hover:opacity-100">
                          {formatTime(baseHour, m)}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Second half-hour */}
                  <div className="relative h-10 border-b border-gray-200 grid grid-rows-2">
                    {[30, 45].map((m) => (
                      <div
                        key={m}
                        className="relative group hover:bg-purple-50 transition cursor-pointer flex items-center justify-center"
                      >
                        <span className="text-[11px] text-black opacity-0 group-hover:opacity-100">
                          {formatTime(baseHour, m)}
                        </span>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              );
            })}

            {/* Bookings */}
            {bookings
              .filter((b) => b.staff === staffMember.name)
              .map((b) => (
                <BookingCard
                  key={b.id}
                  booking={b}
                  style={{
                    ...getBookingPosition(b),
                    left: "4px",
                    right: "4px",
                  }}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
