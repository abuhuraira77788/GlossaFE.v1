"use client";

import { X } from "lucide-react";

interface Appointment {
  id: number;
  customer: string;
  service: string;
  date: string;
  time: string;
}

interface AddToAppointmentProps {
  onClose: () => void;
}

const dummyAppointments: Appointment[] = [
  {
    id: 1,
    customer: "Katie Jones",
    service: "Hair Cut",
    date: "Fri 1 Aug",
    time: "09:30 am - 10:30 am",
  },
  {
    id: 2,
    customer: "Katie Jones",
    service: "Hair Cut",
    date: "Fri 1 Aug",
    time: "09:30 am - 10:30 am",
  },
  {
    id: 3,
    customer: "Katie Jones",
    service: "Hair Cut",
    date: "Fri 1 Aug",
    time: "09:30 am - 10:30 am",
  },
  {
    id: 4,
    customer: "Debbie Smith",
    service: "Root Touch-Up",
    date: "Fri 1 Aug",
    time: "09:30 am - 10:30 am",
  },
];

export default function AddToAppointment({ onClose }: AddToAppointmentProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Modal */}
      <div className="bg-white rounded-2xl shadow-lg w-[700px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-[20px] font-semibold text-[#402B69]">
            Add to appointment
          </h2>
          <div className="flex items-center gap-4">
            <button className="bg-[#d6d5f0] hover:bg-[#d9c7f2] text-[#885ABB] font-medium px-4 py-2 rounded-md text-[14px]">
              + New Appointment
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Appointment list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-[#f9f9f9]">
          {dummyAppointments.map((a) => (
            <div
              key={a.id}
              className="flex items-center justify-between bg-white border border-[#E5E0EB] rounded-lg px-5 py-5 hover:shadow-sm transition"
            >
              {/* Left side: customer + service */}
              <div className="flex items-center gap-6">
                <span className="text-[14px] font-medium text-[#402B69]">
                  {a.customer}
                </span>
                <span className="text-[14px] font-bold text-[#402B69]">
                  {a.service}
                </span>
              </div>

              {/* Right side: date + time */}
              <div className="flex items-center gap-6 text-right">
                <span className="text-[13px] text-[#402B69]">{a.date}</span>
                <span className="text-[13px] text-[#402B69]">{a.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t">
          <button
            onClick={onClose}
            className="w-full bg-[#FDE8E8] hover:bg-[#fbd5d5] text-[#BB5A5E] font-semibold py-3 rounded-md transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
