"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import PosPaymentStep from "../components/PosPaymentStep";

interface Stylist {
  id: number;
  initials: string;
  name: string;
  lightColor: string;
  darkColor: string;
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
    initials: "IT",
    name: "Isla Thompson",
    lightColor: "bg-[#DDF4ED]",
    darkColor: "bg-[#29BF6A]",
  },
  {
    id: 4,
    initials: "SS",
    name: "Sophie Smith",
    lightColor: "bg-[#DDF4ED]",
    darkColor: "bg-[#29BF6A]",
  },
  {
    id: 5,
    initials: "RW",
    name: "Ruby Wilson",
    lightColor: "bg-[#E7E2F3]",
    darkColor: "bg-[#7E57C2]",
  },
  {
    id: 6,
    initials: "PC",
    name: "Poppy Clarke",
    lightColor: "bg-[#F9ECF8]",
    darkColor: "bg-[#EC4899]",
  },
  {
    id: 7,
    initials: "SH",
    name: "Sam Hughes",
    lightColor: "bg-[#F7EAF4]",
    darkColor: "bg-[#C2185B]",
  },
  {
    id: 8,
    initials: "MR",
    name: "Millie Robinson",
    lightColor: "bg-[#E7E2F3]",
    darkColor: "bg-[#7E57C2]",
  },
  {
    id: 9,
    initials: "IT",
    name: "Imogen Taylor",
    lightColor: "bg-[#F9ECF8]",
    darkColor: "bg-[#EC4899]",
  },
];

export default function QuickPaymentPanel({
  onClose,
  onProceed,
}: {
  onClose: () => void;
  onProceed: () => void;
}) {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(3);
  const [amount, setAmount] = useState("2.00");
  const [sidebarMode, setSidebarMode] = useState<"quick" | "paynow" | null>(
    null
  );

  const filtered = stylists.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleKey = (key: string) => {
    if (key === "del") {
      setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (key === "." && amount.includes(".")) {
      return;
    } else {
      setAmount((prev) => (prev === "0" ? key : prev + key));
    }
  };

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      {/* Sliding Panel */}
      <div className="relative bg-white w-[60%] h-full flex transform transition-transform duration-300 ease-out translate-x-0">
        {/* Left Side - Stylists */}
        <div className="w-[38%] relative p-6 flex flex-col">
          <h2 className="text-[20px] font-semibold text-[#402B69] mb-4">
            Select Stylist
          </h2>

          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-[#E5E0EB] rounded-md py-2.5 pl-4 pr-10 text-[#402B69] text-[15px] font-medium focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#885ABB]" />
          </div>

          {/* List */}
          <div className="space-y-3 overflow-y-auto flex-1 pr-2">
            {filtered.map((s) => {
              const isSelected = selectedId === s.id;
              return (
                <div
                  key={s.id}
                  onClick={() => setSelectedId(s.id)}
                  className={`flex items-center gap-3 p-3 rounded-md border cursor-pointer transition
                    ${
                      isSelected
                        ? "border-[#885ABB] bg-[#F9F9F9] shadow-sm"
                        : "border-[#E5E0EB] hover:bg-gray-50"
                    }
                  `}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all duration-200
                      ${
                        isSelected
                          ? `${s.darkColor} text-white ring-4 ring-white`
                          : `${s.lightColor} text-[#402B69]`
                      }
                    `}
                  >
                    {s.initials}
                  </div>

                  <span
                    className={`text-[15px] transition-colors duration-200
                      ${
                        isSelected
                          ? "font-semibold text-black"
                          : "text-[#402B69]"
                      }
                    `}
                  >
                    {s.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-200 shadow-[4px_0_12px_rgba(0,0,0,0.15)]"></div>
        </div>

        {/* Right Side - Amount */}
        <div className="w-[62%] flex flex-col items-center justify-center p-10">
          <h3 className="text-[16px] font-medium text-[#402B69] mb-2">
            Enter Amount
          </h3>
          <p className="text-[28px] font-bold text-[#402B69] mb-6">£{amount}</p>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "del"].map(
              (k) => (
                <button
                  key={k}
                  onClick={() => handleKey(k)}
                  className="w-20 h-16 border rounded-md text-[18px] font-semibold text-[#402B69] hover:bg-gray-100 transition flex items-center justify-center"
                >
                  {k === "del" ? "⌫" : k}
                </button>
              )
            )}
          </div>

          <button
            onClick={onProceed}
            className="w-[280px] h-[64px] bg-[#22C55E] text-white rounded-lg py-3 font-extrabold hover:bg-[#16a34a] transition"
          >
            PAY NOW
          </button>
        </div>
      </div>

      {sidebarMode && (
        <PosPaymentStep
          selectedService={{
            id: "service-1",
            name: "Hair Cut",
            duration: "60 mins",
            price: "£35",
          }}
          selectedCustomer="Karen Davies"
          appointmentTime="9.30–10.30 am"
          tip={0}
          setTip={() => {}}
          goToFinalPayment={() => {
            // handle finalization
            setSidebarMode(null);
          }}
          onClose={() => setSidebarMode(null)}
          mode={sidebarMode}
        />
      )}
    </div>
  );
}
