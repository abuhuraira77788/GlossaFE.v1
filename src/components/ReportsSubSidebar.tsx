"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const reportsLinks = [
  { id: "cashup", label: "Cash Up", path: "/cashup/1" },
  { id: "daily", label: "Daily Sales", path: "/daily-sales" },
  { id: "appointments", label: "Appointments", path: "/appointments" },
  { id: "staff", label: "Staff Sales", path: "/staff-sales" },
  { id: "payments", label: "Payments", path: "/payments" },
  { id: "giftcards", label: "Gift Cards", path: "/giftcards" },
  { id: "memberships", label: "Memberships", path: "/memberships" },
  { id: "orders", label: "Orders", path: "/orders" },
];

export default function ReportsSubSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col ml-2 mt-3 w-56 bg-white py-4">
      {reportsLinks.map((item) => {
        const isActive = location.pathname.startsWith(item.path);
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={cn(
              "relative flex items-center px-4 py-2 text-[15px] font-medium text-left transition-all duration-200 group",
              isActive
                ? "text-purple-600"
                : "text-gray-800 hover:text-purple-600"
            )}
          >
            <ChevronRight
              className={cn(
                "absolute left-0 w-4 h-4 opacity-0 transform transition-all duration-200",
                isActive
                  ? "opacity-100 text-purple-600 translate-x-0"
                  : "group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-0"
              )}
            />
            <span
              className={cn(
                "transition-all duration-200",
                isActive ? "translate-x-4" : "group-hover:translate-x-4"
              )}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
