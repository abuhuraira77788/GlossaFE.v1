"use client";

import * as React from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ReportsCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date(2025, 0, 10));
  const [open, setOpen] = React.useState(false);

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const prevMonthEnd = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  );

  const days: { date: Date; currentMonth: boolean }[] = [];

  // Fill leading
  for (let i = startOfMonth.getDay() - 1; i >= 0; i--) {
    const d = new Date(prevMonthEnd);
    d.setDate(prevMonthEnd.getDate() - i);
    days.push({ date: d, currentMonth: false });
  }

  // Current month
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    days.push({
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
      currentMonth: true,
    });
  }

  // Trailing
  while (days.length % 7 !== 0) {
    const nextDay = new Date(endOfMonth);
    nextDay.setDate(endOfMonth.getDate() + (days.length % 7));
    days.push({ date: nextDay, currentMonth: false });
  }

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const today = new Date();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 px-6 py-4 border border-[#bb9ae1] rounded-md text-sm font-medium text-gray-800 hover:bg-purple-50">
          <Calendar className="w-4 h-4 text-purple-500" />
          Change Date
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom" // ✅ opens below the button
        align="end" // ✅ sticks to the right
        alignOffset={0}
        className="w-[380px] p-4 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-purple-300 text-[#885ABB]"
              onClick={() => changeMonth(-12)}
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={4} />
              <ChevronLeft className="h-4 w-4 -ml-4" strokeWidth={4} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-purple-300 text-[#885ABB]"
              onClick={() => changeMonth(-1)}
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={4} />
            </Button>
          </div>

          <h2 className="text-[16px] font-normal text-black">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>

          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-purple-300 text-[#885ABB]"
              onClick={() => changeMonth(1)}
            >
              <ChevronRight className="h-4 w-4" strokeWidth={4} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-purple-300 text-[#885ABB]"
              onClick={() => changeMonth(12)}
            >
              <ChevronRight className="h-4 w-4" strokeWidth={4} />
              <ChevronRight className="h-4 w-4 -ml-4" strokeWidth={4} />
            </Button>
          </div>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 text-xs font-light text-[#885ABB] mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-2 text-center">
          {days.map(({ date, currentMonth }) => {
            const isSelected =
              date.toDateString() === currentDate.toDateString();

            return (
              <button
                key={date.toISOString()}
                onClick={() => setCurrentDate(date)}
                className={`h-9 w-9 mx-auto flex items-center justify-center rounded-full text-sm
                  ${
                    !currentMonth
                      ? "text-gray-300"
                      : isSelected
                      ? "bg-green-800 text-white font-bold"
                      : "text-gray-800 hover:bg-purple-50"
                  }
                `}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-4 flex ml-4 justify-start">
          <Button
            variant="outline"
            size="sm"
            className="w-[110px] h-9 border-purple-300 text-gray-800 font-poppins font-normal text-[15px]"
            onClick={() => setCurrentDate(today)}
          >
            Today
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ReportsCalendar;
