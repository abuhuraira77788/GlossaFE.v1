import React, { useState } from "react";
import BookingCard from "./BookingCard";
import { Booking } from "../types/booking";
import AppointmentSidebar from "./AppointmentSidebar";
import { sampleServices } from "../data/appointments";

interface CalendarGridProps {
  bookings: Booking[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ bookings }) => {
  const [selectedSlot, setSelectedSlot] = useState<{
    time: string;
    staff: string;
  } | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);

  // new state to track rebooking flow
  const [rebookMode, setRebookMode] = useState(false);

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

  // each hour row = 100px
  const rowHeight = 100;

  const getBookingPosition = (booking: Booking) => {
    const startHour = new Date(booking.start).getHours();
    const startMinute = new Date(booking.start).getMinutes();
    const endHour = new Date(booking.end).getHours();
    const endMinute = new Date(booking.end).getMinutes();

    const startFromNine = (startHour - 9) * 60 + startMinute;
    const endFromNine = (endHour - 9) * 60 + endMinute;
    const duration = endFromNine - startFromNine;

    const top = (startFromNine * rowHeight) / 60;
    const height = (duration * rowHeight) / 60;

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

  const handleSlotClick = (hour: number, minute: number, staffName: string) => {
    setSelectedSlot({ time: formatTime(hour, minute), staff: staffName });
    setIsSidebarOpen(true);
    setRebookMode(false);
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
          <div className="border-b border-gray-200"></div>
          {timeSlots.map((time) => (
            <div
              key={time}
              className="h-[100px] border-b border-gray-200 flex items-start justify-end pr-3 pt-1"
            >
              <span className="text-sm text-gray-500">{time}</span>
            </div>
          ))}
        </div>

        {/* Staff columns */}
        {staff.map((staffMember) => (
          <div
            key={staffMember.name}
            className="relative border-r border-gray-200 last:border-r-0"
          >
            <div className="border-b border-gray-200"></div>
            {timeSlots.map((_, hourIdx) => {
              const baseHour = 9 + hourIdx;
              return (
                <React.Fragment key={hourIdx}>
                  {/* First half-hour (0–30 min) */}
                  <div className="relative h-[50px] border-b border-gray-200 grid grid-rows-2">
                    {[0, 15].map((m) => (
                      <div
                        key={m}
                        className="relative group hover:bg-purple-50 transition cursor-pointer flex items-center justify-center"
                        onClick={() =>
                          handleSlotClick(baseHour, m, staffMember.name)
                        }
                      >
                        <span className="text-[11px] text-black opacity-0 group-hover:opacity-100">
                          {formatTime(baseHour, m)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Second half-hour (30–60 min) */}
                  <div className="relative h-[50px] border-b border-gray-200 grid grid-rows-2">
                    {[30, 45].map((m) => (
                      <div
                        key={m}
                        className="relative group hover:bg-purple-50 transition cursor-pointer flex items-center justify-center"
                        onClick={() =>
                          handleSlotClick(baseHour, m, staffMember.name)
                        }
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
                  onClick={() => {
                    const durationMinutes =
                      (new Date(b.end).getTime() -
                        new Date(b.start).getTime()) /
                      60000;

                    setSelectedBooking({
                      customer: b.client,
                      service: {
                        id: "service-" + b.id,
                        name: b.service,
                        duration: `${durationMinutes} min`,
                        price: b.status === "paid" ? "$0" : "$50",
                      },
                      note: "",
                    });
                    setIsSidebarOpen(true);
                    setRebookMode(false);
                  }}
                />
              ))}
          </div>
        ))}
      </div>

      {/* Rebook full-width button */}
      {rebookMode && (
        <button className="w-full py-4 bg-[#885ABB] text-white font-extrabold rounded-lg mt-2">
          SELECT A TIME TO REBOOK
        </button>
      )}

      <AppointmentSidebar
        isOpen={isSidebarOpen}
        onClose={() => {
          setIsSidebarOpen(false);
          setSelectedBooking(null);
        }}
        stylist={selectedSlot?.staff || ""}
        appointmentTime={selectedSlot?.time || ""}
        services={sampleServices}
        bookingData={selectedBooking}
        onRebook={() => setRebookMode(true)}
      />
    </div>
  );
};

export default CalendarGrid;
