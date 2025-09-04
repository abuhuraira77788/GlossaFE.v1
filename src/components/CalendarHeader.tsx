import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// import your new DateCalendar component
import DateCalendar from "../components/DateCalendar";

const CalendarHeader: React.FC = () => {
  return (
    <div>
      {/* Top header row - white background */}
      <div className="bg-white border-b border-gray-200 px-0 py-3">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <Select defaultValue="all-staff">
              <SelectTrigger className="w-36 h-9 border-gray-300 focus:ring-2 focus:ring-purple-400 text-[15px] font-normal">
                <SelectValue placeholder="All Staff" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-md rounded-md ">
                <SelectItem value="all-staff">All Staff</SelectItem>
                <SelectItem value="ava">Ava</SelectItem>
                <SelectItem value="jenny">Jenny</SelectItem>
                <SelectItem value="katie">Katie</SelectItem>
                <SelectItem value="amelie">Amelie</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="sm"
              className="h-9 border-purple-300 text-purple-500 hover:bg-purple-50"
            >
              <SlidersHorizontal
                className="h-4 w-4"
                style={{ color: "#885ABB" }}
                strokeWidth={3}
              />
            </Button>
          </div>

          {/* Center: Date */}
          <h1 className="text-lg font-semibold">Monday 30th June 2025</h1>

          <div className="flex items-center gap-2">
            <div className="flex border border-purple-300 rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="h-9 px-4 rounded-none text-gray-800 bg-purple-100 text-[16px] font-normal"
              >
                Week
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-4 rounded-none text-gray-800 text-[16px] font-normal"
              >
                Day
              </Button>
            </div>

            <DateCalendar />
          </div>
        </div>
      </div>

      {/* Bottom navigation row - no bg */}
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center gap-2">
          {/* Left controls */}
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800 text-[16px] font-normal"
          >
            <ChevronLeft
              className="h-5 w-5"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
            <ChevronLeft
              className="h-5 w-5 -ml-3"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
            Week
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800 text-[16px] font-normal"
          >
            <ChevronLeft
              className="h-5 w-5"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />{" "}
            Day
          </Button>

          {/* Middle group */}
          <div className="flex rounded-md overflow-hidden ">
            {["Today", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, idx) => (
                <Button
                  key={day}
                  variant="outline"
                  size="sm"
                  className={`h-10 px-4 border-purple-300 text-gray-800 rounded-none text-[16px] font-normal
        ${idx !== 0 ? "border-l-0" : "first:rounded-l-md"} 
        ${idx === 6 ? "last:rounded-r-md" : ""}`}
                >
                  {day}
                </Button>
              )
            )}
          </div>

          {/* Right controls */}
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800 text-[16px] font-normal"
          >
            Day{" "}
            <ChevronRight
              className="h-5 w-5"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800 text-[16px] font-normal"
          >
            Week
            <ChevronRight
              className="h-5 w-5"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
            <ChevronRight
              className="h-5 w-5 -ml-3"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
          </Button>
        </div>

        <Select defaultValue="6+">
          <SelectTrigger className="w-20 h-10 border-purple-300 text-gray-800 focus:ring-2 focus:ring-purple-400">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-md rounded-md">
            <SelectItem value="6+">6+</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="4">4</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CalendarHeader;
