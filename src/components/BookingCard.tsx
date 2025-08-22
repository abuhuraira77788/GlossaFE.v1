import React from "react";
import { Booking } from "../types/booking";
import { CheckCircle2 } from "lucide-react";

interface BookingCardProps {
  booking: Booking;
  style?: React.CSSProperties;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking, style }) => {
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  const timeRange = `${formatTime(booking.start)} - ${formatTime(booking.end)}`;

  // staff → background pastel
  const staffColors: Record<string, string> = {
    ava: "bg-purple-300",
    jenny: "bg-teal-300",
    katie: "bg-pink-300",
    amelie: "bg-indigo-300",
  };

  const bgClass = staffColors[booking.staff.toLowerCase()] || "bg-purple-300";

  return (
    <div
      className={`absolute rounded-lg p-3 shadow-sm text-sm ${bgClass}`}
      style={style}
    >
      <div className="font-semibold text-gray-900">{booking.service}</div>
      <div className="text-gray-800 text-xs">{booking.client}</div>
      <div className="text-gray-700 text-xs">{timeRange}</div>

      {booking.status === "paid" && (
        <div className="absolute bottom-1 right-2 flex items-center gap-1 text-[11px] font-medium text-gray-800">
          <CheckCircle2 className="h-3.5 w-3.5 text-white bg-gray-800 rounded-full p-[1px]" />
          PAID
        </div>
      )}
    </div>
  );
};

export default BookingCard;
