"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface Stylist {
  id: number;
  initials: string;
  name: string;
  lightColor: string;
  darkColor: string;
}

interface Props {
  onClose: () => void;
  onSelect: (id: number, name: string) => void;
  selectedId: number | null;
}

const stylists: Stylist[] = [
  {
    id: 1,
    initials: "NJ",
    name: "Nicola Jones",
    lightColor: "bg-[#E7E2F3]",
    darkColor: "bg-[#7E57C2]",
  },
  {
    id: 2,
    initials: "FB",
    name: "Freya Bennett",
    lightColor: "bg-[#F7EAF4]",
    darkColor: "bg-[#C2185B]",
  },
  {
    id: 3,
    initials: "KJ",
    name: "Katie Jones",
    lightColor: "bg-[#DDF4ED]",
    darkColor: "bg-[#29BF6A]",
  },
  {
    id: 4,
    initials: "SL",
    name: "Sam Hughes",
    lightColor: "bg-[#F7EAF4]",
    darkColor: "bg-[#EC4899]",
  },
  {
    id: 5,
    initials: "SS",
    name: "Sophie Smith",
    lightColor: "bg-[#DDF4ED]",
    darkColor: "bg-[#29BF6A]",
  },
  {
    id: 6,
    initials: "RW",
    name: "Ruby Wilson",
    lightColor: "bg-[#E6E4F8]",
    darkColor: "bg-[#6366F1]",
  },
  {
    id: 7,
    initials: "PC",
    name: "Poppy Clarke",
    lightColor: "bg-[#F9ECF8]",
    darkColor: "bg-[#EC4899]",
  },
  {
    id: 8,
    initials: "MR",
    name: "Millie Robinson",
    lightColor: "bg-[#DDF4ED]",
    darkColor: "bg-[#29BF6A]",
  },
  {
    id: 9,
    initials: "NJ",
    name: "Nicola Jones",
    lightColor: "bg-[#E7E2F3]",
    darkColor: "bg-[#7E57C2]",
  },
  {
    id: 10,
    initials: "FB",
    name: "Freya Bennett",
    lightColor: "bg-[#F7EAF4]",
    darkColor: "bg-[#C2185B]",
  },
  {
    id: 11,
    initials: "SS",
    name: "Sophie Smith",
    lightColor: "bg-[#DDF4ED]",
    darkColor: "bg-[#29BF6A]",
  },
  {
    id: 12,
    initials: "RW",
    name: "Ruby Wilson",
    lightColor: "bg-[#E6E4F8]",
    darkColor: "bg-[#6366F1]",
  },
];

export default function SelectStylistModal({
  onClose,
  onSelect,
  selectedId,
}: Props) {
  const [selected, setSelected] = useState<number | null>(selectedId);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl w-[720px] max-w-[95%] shadow-xl">
        {/* Header */}
        <div className="relative flex items-center justify-center px-6 py-5 border-b">
          <h2 className="text-[22px] font-semibold text-[#402B69]">
            Select Stylist
          </h2>
          <button
            onClick={onClose}
            className="absolute right-6 text-gray-600 hover:text-gray-800"
          >
            <X className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>

        {/* Grid: 6 per row, 2 rows */}
        <div className="grid grid-cols-6 gap-y-10 gap-x-8 px-10 py-10 bg-[#F9F9F9] rounded-md">
          {stylists.map((s) => {
            const isSelected = selected === s.id;
            return (
              <div
                key={s.id}
                className="flex flex-col items-center cursor-pointer text-center"
                onClick={() => {
                  setSelected(s.id);
                  onSelect(s.id, s.name);
                }}
              >
                <div
                  className={`flex items-center justify-center w-[80px] h-[80px] rounded-full font-bold text-[20px] transition-all duration-200
                    ${
                      isSelected
                        ? `${s.darkColor} text-white ring-8 ring-white`
                        : `${s.lightColor} text-[#402B69]`
                    }
                  `}
                >
                  {s.initials}
                </div>

                <span
                  className={`mt-3 text-[14px] whitespace-nowrap ${
                    isSelected ? "font-semibold text-black" : "text-[#402B69]"
                  }`}
                >
                  {s.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-md bg-[#E7E2F3] text-[#402B69] font-medium hover:bg-[#d9d3e8] transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
