"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function ServicesPage() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [categories] = useState(["Hair Styles", "Colour"]);
  const [activeCategory, setActiveCategory] = useState("Hair Styles");

  const services = [
    { id: 1, name: "Blow Dry", duration: "40mins", price: "£15" },
    { id: 2, name: "Cut & Blow Dry", duration: "40mins", price: "£15" },
    { id: 3, name: "Dry Cut", duration: "40mins", price: "£15" },
    { id: 4, name: "Cut & Finish", duration: "40mins", price: "£15" },
    { id: 5, name: "Cut & Finish", duration: "40mins", price: "£15" },
    { id: 6, name: "Cut & Finish", duration: "40mins", price: "£15" },
    { id: 7, name: "Cut & Finish", duration: "40mins", price: "£15" },
    { id: 8, name: "Cut & Finish", duration: "40mins", price: "£15" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      {/* Header (white background only) */}
      <div className="flex items-center justify-between px-6 py-5 bg-white relative">
        <h1 className="text-[24px] font-semibold text-[#885ABB]">Services</h1>

        {/* Add button + dropdown */}
        <div className="relative group">
          <button className="bg-[#885ABB] hover:bg-[#6f47a2] text-white px-6 py-3 rounded-lg text-[16px] font-semibold flex items-center gap-2">
            Add <ChevronDown className="w-4 h-4" strokeWidth={3} />
          </button>

          {/* Dropdown (only shows on hover) */}
          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block z-50">
            <ul className="flex flex-col py-2">
              <li>
                <button className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]">
                  Single Service
                </button>
              </li>
              <li>
                <button className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]">
                  Bundle
                </button>
              </li>
              <li>
                <button className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]">
                  Category
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 w-[90%]">
        {/* Search */}
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-[#885ABB] rounded-lg pl-8 pr-4 py-3 text-[15px] 
                 placeholder-black focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
          />
          <Search
            className="absolute right-3 top-3 w-5 h-5 text-[#885ABB]"
            strokeWidth={3}
          />
        </div>

        {/* Filters */}
        <button className="flex justify-between items-center w-[20%] border border-[#885ABB] rounded-lg px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-purple-50">
          <span>Filters</span>
          <SlidersHorizontal
            className="w-4 h-4 text-[#885ABB]"
            strokeWidth={3}
          />
        </button>

        {/* Services Options */}
        <div className="relative group w-[20%]">
          <button className="flex justify-between items-center w-full border border-[#885ABB] rounded-lg px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-purple-50">
            <span>Services Options</span>
            <ChevronDown className="w-4 h-4 text-[#885ABB]" strokeWidth={4} />
          </button>

          {/* Dropdown on hover */}
          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block z-50">
            <ul className="flex flex-col py-2">
              <li>
                <button className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]">
                  Quick Booking Link
                </button>
              </li>
              <li>
                <button className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]">
                  Set Menu Order
                </button>
              </li>
              <li>
                <button className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]">
                  Settings
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 px-6 py-6 gap-6">
        {/* Categories */}
        <div className="w-64 border rounded-lg bg-white">
          {/* Header */}
          <div className="px-4 py-3 font-semibold text-[15px] border-b shadow-sm">
            Categories
          </div>

          <div className="mb-3 h-[2px] bg-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>

          {/* Category list */}
          <div className="flex flex-col">
            {/* All Categories (always active) */}
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#885ABB] font-semibold"
              onClick={() => setActiveCategory("All")}
            >
              <ChevronRight
                className="w-4 h-4 text-[#885ABB]"
                strokeWidth={3}
              />
              All Categories
            </button>

            {/* Other categories (normal style) */}
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-sm text-left text-gray-700 hover:text-[#885ABB]"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Add button */}
          <div className="px-4 py-4">
            <button className="w-full bg-[#F1ECFB] text-[#885ABB] font-medium text-sm rounded-lg py-3 hover:bg-[#e6dffc]">
              + Add Category
            </button>
          </div>
        </div>

        {/* Services list */}
        <div className="flex-1 border rounded-lg bg-white">
          <div className="border-b px-4 py-3 font-semibold text-[15px]">
            {activeCategory}
          </div>

          <div className="mb-3 h-[2px] bg-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>

          {/* Services list */}
          <div className="flex flex-col gap-3 p-4">
            {services.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between px-4 py-3 border border-[#E5E0F8] rounded-lg bg-white hover:shadow-sm cursor-pointer"
              >
                <span className="text-[#885ABB] font-semibold text-[18px]">
                  {s.name}
                </span>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span>{s.duration}</span>
                  <span className="text-[#885ABB] font-semibold text-[18px] mr-12">
                    {s.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
