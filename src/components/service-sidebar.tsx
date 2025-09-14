"use client";

import { X, ChevronRight, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../lib/utils";

interface ServiceSidebarProps {
  onClose: () => void;
}

export default function ServiceSidebar({ onClose }: ServiceSidebarProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const navItems = [
    { id: "basic", label: "Basic Details", active: true },
    { id: "team", label: "Team Members" },
    { id: "resources", label: "Resources" },
    { id: "booking", label: "Online Booking" },
    { id: "forms", label: "Forms" },
    { id: "commissions", label: "Commissions" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      {/* Floating Close Button - OUTSIDE sidebar */}
      <button
        onClick={onClose}
        className="absolute -left-14 top-8 w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#885ABB] shadow-md hover:bg-[#f3e8ff] transition"
        aria-label="Close"
      >
        <X size={22} strokeWidth={3} />
      </button>

      <div className="relative h-full w-[60%] bg-white flex">
        {/* Floating Close Button - positioned relative to sidebar */}
        <button
          onClick={onClose}
          className="absolute -left-14 top-8 w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#885ABB] shadow-md hover:bg-[#f3e8ff] transition"
          aria-label="Close"
        >
          <X size={22} strokeWidth={3} />
        </button>
        {/* LEFT PANEL */}
        <div className="relative w-[30%] border-r bg-white">
          {/* Divider shadow */}
          <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-200 shadow-[4px_0_12px_rgba(0,0,0,0.15)]"></div>

          {/* Navigation */}
          <div className="mt-8 flex flex-col text-[15px] font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "relative flex items-center px-4 py-2 text-left transition-all duration-200 group",
                  item.active
                    ? "text-[#885ABB] font-semibold"
                    : "text-gray-800 hover:text-[#885ABB]"
                )}
              >
                <ChevronRight
                  className={cn(
                    "absolute left-0 w-4 h-4 opacity-0 transform transition-all duration-200",
                    item.active
                      ? "opacity-100 text-[#885ABB] translate-x-0"
                      : "group-hover:opacity-100 group-hover:text-[#885ABB] group-hover:translate-x-0"
                  )}
                />
                <span
                  className={cn(
                    "ml-5 transition-all duration-200",
                    item.active ? "translate-x-0" : "group-hover:translate-x-1"
                  )}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-[70%] px-10 py-8 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[22px] font-semibold text-[#1C2256]">
              Main details
            </h2>
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium text-red-600 hover:underline">
                Cancel
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2 rounded-lg">
                Save
              </button>
            </div>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-6">
            {/* Service Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service name
              </label>
              <input
                type="text"
                placeholder="Add service name"
                className="w-full border rounded-lg px-4 py-2.5 text-[15px] focus:ring-2 focus:ring-[#885ABB] outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <div className="relative">
                <select className="appearance-none w-full border rounded-lg px-4 py-2.5 text-[15px] focus:ring-2 focus:ring-[#885ABB] outline-none">
                  <option>Select category</option>
                </select>
                <ChevronDown
                  size={18}
                  strokeWidth={4}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#885ABB] pointer-events-none"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full border rounded-lg px-4 py-2.5 text-[15px] focus:ring-2 focus:ring-[#885ABB] outline-none"
              />
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-[18px] font-semibold text-[#1C2256] mb-4">
                Pricing and duration
              </h3>
              <div className="grid grid-cols-[1fr_1fr_1fr] gap-4">
                <select className="border rounded-lg px-4 py-2.5 text-[15px] focus:ring-2 focus:ring-[#885ABB] outline-none">
                  <option>Fixed</option>
                  <option>Variable</option>
                </select>
                <input
                  type="number"
                  placeholder="£ 0.00"
                  className="border rounded-lg px-4 py-2.5 text-[15px] focus:ring-2 focus:ring-[#885ABB] outline-none"
                />
                <select className="border rounded-lg px-4 py-2.5 text-[15px] focus:ring-2 focus:ring-[#885ABB] outline-none">
                  <option>1h</option>
                  <option>30m</option>
                </select>
              </div>
            </div>

            {/* Extra buttons */}
            {/* <div className="flex gap-4 mt-6">
              <button className="flex-1 bg-[#F1ECFB] text-[#885ABB] font-medium text-sm py-3 rounded-lg hover:bg-[#e6dffc]">
                + Add Extra Time
              </button>
              <button className="flex-1 bg-[#F1ECFB] text-[#885ABB] font-medium text-sm py-3 rounded-lg hover:bg-[#e6dffc]">
                + Add Options
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
