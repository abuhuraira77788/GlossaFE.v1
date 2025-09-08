"use client";

import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuickPaymentPanel from "../../components/QuickPaymentPanel";
import PosPaymentStep from "../../components/PosPaymentStep";

export default function DailySalesPage() {
  const [date] = useState("25th June 2025");
  const [showQuickPaymentPanel, setShowQuickPaymentPanel] = useState(false);
  const [sidebarMode, setSidebarMode] = useState<"quick" | "paynow" | null>(
    null
  );

  const leftSummary = [
    { label: "Services", sales: 2, refund: 2, total: "£0.00" },
    { label: "Products", sales: 2, refund: 2, total: "£0.00" },
    { label: "Shipping", sales: 2, refund: 2, total: "£0.00" },
    { label: "Gift cards", sales: 2, refund: 2, total: "£0.00" },
    { label: "Memberships", sales: 2, refund: 2, total: "£0.00" },
    { label: "Late cancellation fees", sales: 2, refund: 2, total: "£0.00" },
    { label: "No-show fees", sales: 2, refund: 2, total: "£0.00" },
    { label: "Refund amount", sales: 2, refund: 2, total: "£0.00" },
  ];

  const rightSummary = [
    { label: "Cash", payments: "£0.00", refunds: "£0.00" },
    { label: "Other", payments: "£0.00", refunds: "£0.00" },
    { label: "Gift card redemptions", payments: "£0.00", refunds: "£0.00" },
    { label: "Payments collected", payments: "£0.00", refunds: "£0.00" },
    { label: "Of which tips", payments: "£0.00", refunds: "£0.00" },
    { label: "Late cancellation fees", payments: "£0.00", refunds: "£0.00" },
  ];

  return (
    <div className="p-6">
      {/* Header Row */}
      <div className="bg-white border border-gray-200s -mx-6 -my-6 px-6 py-5 mb-4 flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-[#885ABB]">{date}</h1>
        <Button
          onClick={() => setShowQuickPaymentPanel(true)}
          size="lg"
          className="flex-[0.15] bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition"
        >
          <img src="/quick.svg" alt="Quick Payment" className="w-5 h-5" />
          Quick Payment
        </Button>
      </div>

      {/* Navigation Row */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          {/* Left controls */}
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800 text-[16px] font-normal"
          >
            <ChevronLeft
              className="h-5 w-5"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
            <ChevronLeft
              className="h-5 w-5 -ml-3"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
            Week
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800 text-[16px] font-normal"
          >
            <ChevronLeft
              className="h-5 w-5"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />{" "}
            Day
          </Button>

          {/* Middle group */}
          <div className="flex rounded-sm overflow-hidden ">
            {["Today", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, idx) => (
                <Button
                  key={day}
                  variant="outline"
                  size="sm"
                  className={`h-10 px-4 border-purple-300 text-gray-800 rounded-none text-[16px] font-normal
        ${idx !== 0 ? "border-l-0" : "first:rounded-l-md"} 
        ${idx === 6 ? "last:rounded-r-md" : ""}`}
                >
                  {day}
                </Button>
              )
            )}
          </div>

          {/* Right controls */}
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800 text-[16px] font-normal"
          >
            Day{" "}
            <ChevronRight
              className="h-5 w-5"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 border-purple-300 text-gray-800 text-[16px] font-normal"
          >
            Week
            <ChevronRight
              className="h-5 w-5"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
            <ChevronRight
              className="h-5 w-5 -ml-3"
              style={{ color: "#885ABB" }}
              strokeWidth={4}
            />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Transaction Summary */}
        <div className="border border-gray-200 rounded-xl bg-white shadow-sm">
          <div className="px-4 py-3 shadow-sm">
            <h2 className="font-semibold text-[20px] text-gray-900">
              Transaction summary
            </h2>
          </div>

          <div className="mb-3 h-[2px] bg-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>

          {/* Table */}
          <div className="divide-y">
            {/* Column headings */}
            <div className="grid grid-cols-4 px-4 py-4 font-semibold text-[14px] text-gray-700">
              <span>Item type</span>
              <span className="text-center">Sales qty</span>
              <span className="text-center">Refund qty</span>
              <span className="text-right">Gross total</span>
            </div>

            {/* Data rows */}
            {leftSummary.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-4 px-4 py-5 text-[13px] text-gray-500"
              >
                <span>{row.label}</span>
                <span className="text-center">{row.sales}</span>
                <span className="text-center">{row.refund}</span>
                <span className="text-right">{row.total}</span>
              </div>
            ))}

            {/* Totals row */}
            <div className="grid grid-cols-4 px-4 py-4 font-semibold text-[14px] text-gray-900">
              <span>Total</span>
              <span className="text-center">
                {leftSummary.reduce((acc, r) => acc + r.sales, 0)}
              </span>
              <span className="text-center">
                {leftSummary.reduce((acc, r) => acc + r.refund, 0)}
              </span>
              <span className="text-right">£0.00</span>
            </div>
          </div>
        </div>

        {/* Right Transaction Summary */}
        <div className="border border-gray-200 rounded-xl bg-white shadow-sm">
          {/* Header */}
          <div className="px-4 py-3 shadow-sm">
            <h2 className="font-semibold text-[20px] text-gray-900">
              Transaction summary
            </h2>
          </div>

          <div className="mb-3 h-[2px] bg-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>

          {/* Table */}
          <div className="divide-y">
            {/* Column headings */}
            <div className="grid grid-cols-3 px-4 py-5 font-semibold text-[14px] text-gray-700">
              <span>Payment type</span>
              <span className="text-center">Payments</span>
              <span className="text-right">Refunds</span>
            </div>

            {/* Data rows */}
            {rightSummary.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-3 px-4 py-4 text-[13px] text-gray-500"
              >
                <span>{row.label}</span>
                <span className="text-center">{row.payments}</span>
                <span className="text-right">{row.refunds}</span>
              </div>
            ))}

            {/* Bold footers */}
            <div className="grid grid-cols-3 px-4 py-4 font-semibold text-[14px] text-gray-900">
              <span>No-show fees</span>
              <span className="text-center">£0.00</span>
              <span className="text-right">£0.00</span>
            </div>
            <div className="grid grid-cols-3 px-4 py-4 font-semibold text-[14px] text-gray-900">
              <span>Refund amount</span>
              <span className="text-center">£0.00</span>
              <span className="text-right">£0.00</span>
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
  );
}
