import React from "react";
import BookingCard from "./BookingCard";
import { Booking } from "../types/booking";

interface CalendarGridProps {
  bookings: Booking[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ bookings }) => {
  const timeSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"];

  const staff = ["Ava", "Jenny", "Katie", "Amelie"];

  const getBookingPosition = (booking: Booking) => {
    const startHour = new Date(booking.start).getHours();
    const startMinute = new Date(booking.start).getMinutes();
    const endHour = new Date(booking.end).getHours();
    const endMinute = new Date(booking.end).getMinutes();

    // minutes from 9AM
    const startFromNine = (startHour - 9) * 60 + startMinute;
    const endFromNine = (endHour - 9) * 60 + endMinute;
    const duration = endFromNine - startFromNine;

    // each hour = 80px → each min = 1.33px
    const top = (startFromNine * 80) / 60;
    const height = (duration * 80) / 60;

    return { top: `${top}px`, height: `${height}px` };
  };

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Staff header row */}
      <div className="grid grid-cols-5 border-b border-gray-200">
        <div className="h-12"></div>
        {staff.map((s) => (
          <div
            key={s}
            className="text-white text-center py-3 font-medium border-r border-gray-200 last:border-r-0"
          >
            {s}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-5 flex-1">
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
        {staff.map((staffName) => (
          <div
            key={staffName}
            className="relative border-r border-gray-200 last:border-r-0"
          >
            {/* Grid lines */}
            {timeSlots.map((_, idx) => (
              <div key={idx} className="h-20 border-b border-gray-200" />
            ))}

            {/* Bookings */}
            {bookings
              .filter((b) => b.staff === staffName)
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
