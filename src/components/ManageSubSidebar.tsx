"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const manageLinks = [
  { id: "services", label: "Services", path: "/manage/services" },
  { id: "memberships", label: "Memberships", path: "/manage/memberships" },
  { id: "products", label: "Products", path: "/manage/products" },
  { id: "stocktakes", label: "Stocktakes", path: "/manage/stocktakes" },
  { id: "stockorders", label: "Stock Orders", path: "/manage/stockorders" },
  { id: "suppliers", label: "Suppliers", path: "/manage/suppliers" },
];

export default function ManageSubSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("services");

  // Sync activeId with current pathname
  useEffect(() => {
    const current = manageLinks.find((link) =>
      location.pathname.startsWith(link.path)
    );
    if (current) {
      setActiveId(current.id);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col ml-2 mt-3 w-56 bg-white py-4">
      {manageLinks.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              setActiveId(item.id);
              navigate(item.path);
            }}
            className={cn(
              "relative flex items-center px-4 py-2 text-[15px] text-left transition-all duration-200 group",
              isActive
                ? "text-purple-600 font-semibold"
                : "text-gray-800 hover:text-purple-600 hover:font-semibold"
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
