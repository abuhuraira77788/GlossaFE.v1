"use client";

import { useNavigate } from "react-router-dom";
import ReportsCalendar from "../../components/ReportsCalendar";

export default function CashUpPage() {
  const navigate = useNavigate();

  const rows = [
    {
      id: 1,
      date: "Friday, 7 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 2,
      date: "Thu, 7 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 3,
      date: "Thu, 7 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 4,
      date: "Thu, 7 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 5,
      date: "Thu, 7 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 6,
      date: "Thu, 7 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 7,
      date: "Thu, 7 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 8,
      date: "Thu, 7 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 9,
      date: "Wed, 6 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 10,
      date: "Tues, 5 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 11,
      date: "Mon, 4 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 12,
      date: "Sun, 3 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 13,
      date: "Sat, 1 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
    {
      id: 14,
      date: "Tues, 5 Aug 2025",
      by: "Dave Smith",
      notes: "Note goes here....",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm mb-4">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-[24px] font-semibold text-[#885ABB]">Cash Up</h1>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="px-6 py-4 border border-gray-300 rounded-md text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed"
            >
              Print
            </button>

            <button
              disabled
              className="px-6 py-4 border border-gray-300 rounded-md text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed"
            >
              Transaction
            </button>

            <button className="px-6 py-4 border border-[#bb9ae1] rounded-md text-sm font-medium text-[#402B69] hover:bg-purple-50">
              Open Cash Drawer
            </button>

            {/* ✅ New ReportsCalendar (handles its own popover) */}
            <ReportsCalendar />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[300px_200px_1fr] bg-[#885ABB] text-white font-semibold text-[15px]">
          <div className="flex items-start gap-2 px-4 py-3 ml-8 font-bold">
            Date
          </div>
          <div className="flex items-start px-4 py-3 font-bold">
            Completed By
          </div>
          <div className="flex items-start px-4 py-3 font-bold">Notes</div>
        </div>

        {/* Rows */}
        {rows.map((row) => (
          <div
            key={row.id}
            onClick={() => navigate(`/cashup/${row.id}`)}
            className="grid grid-cols-[300px_200px_1fr] border-t border-gray-200 text-[15px] text-gray-400 hover:text-black hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-2 px-4 py-3">
              <input
                type="checkbox"
                className="h-6 w-6 appearance-none border-2 border-purple-400 rounded-sm cursor-pointer
                  checked:bg-purple-600 checked:border-purple-600
                  relative checked:after:content-[''] checked:after:absolute
                  checked:after:left-1/2 checked:after:top-1/2
                  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2
                  checked:after:w-[6px] checked:after:h-[12px]
                  checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white
                  checked:after:rotate-45"
                onClick={(e) => e.stopPropagation()}
              />
              <span className="ml-1">{row.date}</span>
            </div>
            <div className="px-4 py-3">{row.by}</div>
            <div className="px-4 py-3">{row.notes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
