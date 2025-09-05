"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Eye } from "lucide-react";
import QuickPaymentPanel from "../components/QuickPaymentPanel";
import PosPaymentStep from "../components/PosPaymentStep";

type SectionKey = "hero" | "service" | "testimonials";

const Website = () => {
  const [onlineOrdering, setOnlineOrdering] = useState("On");
  const [delivery, setDelivery] = useState("On");
  const [sections, setSections] = useState<Record<SectionKey, string>>({
    hero: "On",
    service: "On",
    testimonials: "On",
  });
  const [showQuickPaymentPanel, setShowQuickPaymentPanel] = useState(false);
  const [sidebarMode, setSidebarMode] = useState<"quick" | "paynow" | null>(
    null
  );

  return (
    <>
      {/* Top Row */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-[22px] font-semibold text-[#885ABB]">
          Store Settings
        </h1>
        <button
          onClick={() => setShowQuickPaymentPanel(true)}
          className="flex-[0.15] bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-lg py-3 font-bold flex items-center justify-center gap-2 transition"
        >
          <img src="/quick.svg" alt="Quick Payment" className="w-5 h-5" />
          Quick Payment
        </button>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* What’s available */}
          <div className="bg-white rounded-lg border p-5">
            <h2 className="text-[16px] font-bold text-black pb-3">
              What’s available
            </h2>
            <div className="-mx-5 h-[3px] mb-4 bg-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded"></div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-[15px] text-gray-500 font-medium">
                Online Ordering
              </span>

              <div className="flex rounded-md border border-gray-100 overflow-hidden shadow-sm">
                {["Off", "Snooze", "On"].map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => setOnlineOrdering(opt)}
                    className={`px-4 py-1 text-sm font-medium transition ${
                      onlineOrdering === opt
                        ? "bg-[#885ABB] text-white"
                        : "bg-gray-100 text-gray-500"
                    } ${i > 0 ? "border-l border-gray-300" : ""}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[15px] text-gray-500 font-medium">
                Delivery
              </span>

              <div className="flex rounded-md border border-gray-100 overflow-hidden shadow-sm">
                {["Off", "On"].map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => setDelivery(opt)}
                    className={`px-4 py-1 text-sm font-medium transition ${
                      delivery === opt
                        ? "bg-[#885ABB] text-white"
                        : "bg-gray-100 text-gray-500"
                    } ${i > 0 ? "border-l border-gray-300" : ""}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quote times */}
          <div className="bg-white rounded-lg border p-5">
            {/* Title + Divider */}
            <h2 className="text-[16px] font-bold text-black pb-3">
              Quote times
            </h2>
            <div className="-mx-5 h-[3px] mb-4 bg-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded"></div>

            <div className="space-y-4">
              {/* Takeout times */}
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-gray-700 font-medium">
                  Takeout times
                </span>
                <Select defaultValue="15">
                  <SelectTrigger className="w-[120px] bg-gray-100 border border-gray-300 text-gray-500 rounded-md px-3 py-2 text-sm focus:outline-none">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-md shadow-md">
                    <SelectItem value="15">15 mins</SelectItem>
                    <SelectItem value="30">30 mins</SelectItem>
                    <SelectItem value="45">45 mins</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Delivery times */}
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-gray-700 font-medium">
                  Delivery times
                </span>
                <Select defaultValue="45">
                  <SelectTrigger className="w-[120px] bg-gray-100 border border-gray-300 text-gray-500 rounded-md px-3 py-2 text-sm focus:outline-none">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-md shadow-md">
                    <SelectItem value="15">15 mins</SelectItem>
                    <SelectItem value="30">30 mins</SelectItem>
                    <SelectItem value="45">45 mins</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Website Template */}
          <div className="bg-white rounded-lg border p-5">
            <h2 className="text-[16px] font-bold text-black pb-3">
              Website Template
            </h2>
            <div className="-mx-5 h-[3px] mb-4 bg-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded"></div>

            {/* Full width Select */}
            <Select defaultValue="theme1">
              <SelectTrigger className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#885ABB]">
                <SelectValue placeholder="Select a template" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-md shadow-md">
                <SelectItem value="theme1">Salon Theme 1</SelectItem>
                <SelectItem value="theme2">Salon Theme 2</SelectItem>
                <SelectItem value="theme3">Salon Theme 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Section Settings */}
          <div className="bg-white rounded-lg border p-5">
            <h2 className="text-[16px] font-bold text-black pb-3">
              Section Settings
            </h2>
            <div className="-mx-5 h-[3px] mb-4 bg-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded"></div>

            {(
              [
                { key: "hero" as SectionKey, label: "Hero Section" },
                { key: "service" as SectionKey, label: "Service Section" },
                {
                  key: "testimonials" as SectionKey,
                  label: "Testimonials Section",
                },
              ] as { key: SectionKey; label: string }[]
            ).map(({ key, label }) => (
              <div
                key={key}
                className="bg-white border rounded-md p-3 flex items-center justify-between mb-2"
              >
                <span className="text-[15px] text-gray-500 font-medium">
                  {label}
                </span>
                <div className="flex rounded-md border border-gray-200 overflow-hidden shadow-sm">
                  {["Off", "On"].map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() =>
                        setSections((prev) => ({
                          ...prev,
                          [key]: opt,
                        }))
                      }
                      className={`px-5 py-1 text-sm font-medium transition ${
                        sections[key] === opt
                          ? "bg-[#885ABB] text-white"
                          : "bg-gray-100 text-gray-600"
                      } ${i > 0 ? "border-l border-gray-300" : ""}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-5 space-y-5">
            {/* Title */}
            <div>
              <div className="flex items-center justify-between pb-3">
                <h2 className="text-[16px] font-bold text-black">
                  Theme Settings
                </h2>
                <button className="flex items-center gap-2 rounded-lg px-4 py-1 text-[12px] font-bold bg-[#e7e7f3] text-[#885ABB] hover:bg-[#D6BCFA] transition">
                  <img src="/eye.svg" alt="View website" className="w-4 h-4" />
                  View website
                </button>
              </div>
              <div className="-mx-5 h-[3px] mb-4 bg-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded"></div>
            </div>

            {/* Website title */}
            <div>
              <label className="block text-[17px] font-medium text-gray-500 mb-1">
                Website Title
              </label>
              <input
                type="text"
                defaultValue="Ladies Hair Salon"
                className="w-full bg-gray-100 border border-gray-300 text-gray-500 text-[17px] rounded-md px-3 py-2"
              />
            </div>

            {/* Logo + Favicon */}
            <div className="flex items-center gap-4">
              <div className="w-[80%]">
                <label className="block text-[17px] font-medium text-gray-500 mb-1">
                  Logo
                </label>
                <div className="border rounded-md px-4 flex items-center justify-center h-[120px] bg-white">
                  <img
                    src="/logo-design.svg"
                    alt="Logo design"
                    className="h-20 w-auto mr-3"
                  />
                  <img
                    src="/logo-text.svg"
                    alt="Logo text"
                    className="h-5 w-auto"
                  />
                </div>
              </div>

              <div className="w-[20%]">
                <label className="block text-[17px] font-medium text-gray-500 mb-1">
                  Favicon
                </label>
                <img
                  src="/ns-icon.svg"
                  alt="Favicon"
                  className="w-full h-[120px] object-contain"
                />
              </div>
            </div>

            {/* Hero image */}
            <div>
              <label className="block text-[17px] font-medium text-gray-500 mb-1">
                Hero image
              </label>
              <img
                src="/hero.svg"
                alt="Hero"
                className="w-full h-[240px] object-cover"
              />
            </div>

            {/* About */}
            <div>
              <label className="block text-[17px] font-medium text-gray-500 mb-1">
                About
              </label>
              <div className="border border-gray-200 rounded-xl">
                <img
                  src="/salon-about.svg"
                  alt="Salon About"
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {showQuickPaymentPanel && (
          <QuickPaymentPanel
            onClose={() => setShowQuickPaymentPanel(false)}
            onProceed={() => {
              setShowQuickPaymentPanel(false);
              setSidebarMode("quick");
            }}
          />
        )}

        {sidebarMode && (
          <PosPaymentStep
            selectedService={{
              id: "1",
              name: "Quick Service",
              duration: "30 min",
              price: "£35",
            }}
            selectedCustomer="Walk-in"
            appointmentTime={new Date().toISOString()}
            tip={0}
            setTip={() => {}}
            goToFinalPayment={() => setSidebarMode(null)}
            onClose={() => setSidebarMode(null)}
            mode={sidebarMode}
          />
        )}
      </div>
    </>
  );
};

export default Website;
