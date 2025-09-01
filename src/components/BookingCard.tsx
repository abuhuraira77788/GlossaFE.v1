import React from "react";
import { Booking } from "../types/booking";
import { Check } from "lucide-react";

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

  // exact HEX background colors per staff
  const staffColors: Record<string, string> = {
    ava: "#DDC4FA",
    jenny: "#83DCE0",
    katie: "#F3B9EC",
    amelie: "#ADAAEF",
  };

  const bgColor = staffColors[booking.staff.toLowerCase()] || "#DDC4FA";

  return (
    <div
      className="absolute rounded-lg p-3 shadow-sm text-sm"
      style={{ backgroundColor: bgColor, ...style }}
    >
      <div className="font-semibold text-gray-900 mb-14">{booking.service}</div>
      <div className="text-gray-800 text-xs mb-1">{booking.client}</div>
      <div className="text-gray-700 text-xs">{timeRange}</div>

      {booking.status === "paid" && (
        <div className="absolute bottom-1 right-2 flex items-center gap-1 text-[11px] font-bold text-white">
          <div className="flex items-center justify-center w-4 h-4 rounded-full border border-white">
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </div>
          PAID
        </div>
      )}
    </div>
  );
};

export default BookingCard;
