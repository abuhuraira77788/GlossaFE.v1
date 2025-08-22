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
import { ChevronDown } from "lucide-react";

const CalendarHeader: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-2 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Select defaultValue="all-staff">
            <SelectTrigger className="w-36 h-9 border-gray-300 focus:ring-2 focus:ring-purple-400">
              <SelectValue placeholder="All Staff" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-md rounded-md">
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
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Center: Date */}
        <h1 className="text-lg font-semibold">Monday 30th June 2025</h1>

        <div className="flex items-center gap-2">
          <div className="flex border border-purple-300 rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="sm"
              className="h-9 px-4 rounded-none text-gray-800 bg-purple-100"
            >
              Week
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-4 rounded-none text-gray-800"
            >
              Day
            </Button>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-1 border-purple-300 text-gray-800"
          >
            <Calendar className="h-4 w-4 text-purple-500" />
            Date
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          {" "}
          {/* increased gap 1 → 2 */}
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            <ChevronLeft className="h-5 w-5 text-purple-500" />
            <ChevronLeft className="h-5 w-5 -ml-2 text-purple-500" />
            Week
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            <ChevronLeft className="h-5 w-5 text-purple-500" /> Day
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Today
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Tue
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Wed
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Thu
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Fri
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Sat
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Sun
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Day <ChevronRight className="h-5 w-5 text-purple-500" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800"
          >
            Week
            <ChevronRight className="h-5 w-5 text-purple-500" />
            <ChevronRight className="h-5 w-5 -ml-3 text-purple-500" />
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
