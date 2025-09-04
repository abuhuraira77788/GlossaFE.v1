import React, { useState } from "react";
import CalendarHeader from "../components/CalendarHeader";
import CalendarGrid from "../components/CalendarGrid";
import { mockBookings } from "../types/booking";

const BookingsPage: React.FC = () => {
  const [bookings] = useState(mockBookings);

  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <CalendarHeader />
        <div>
          <CalendarGrid bookings={bookings} />
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
