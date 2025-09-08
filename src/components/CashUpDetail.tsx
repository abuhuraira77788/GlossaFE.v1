"use client";

import { Calculator, Calendar } from "lucide-react";
import { useState } from "react";
import ReportsCalculator from "./ReportsCalculator";

export default function CashUpDetail() {
  const [showCalculator, setShowCalculator] = useState(false);
  return (
    <div className="w-full">
      {/* Header Buttons */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm mb-4">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left buttons */}
          <div className="flex items-center gap-3">
            <button className="px-12 py-4 border border-[#885ABB79] rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-50">
              Print
            </button>
            <button className="px-6 py-4 border border-[#885ABB79] rounded-md text-sm font-semibold text-gray-800 hover:bg-purple-50">
              Open Cash Drawer
            </button>
            <button className="px-8 py-4 border border-[#885ABB79] rounded-md text-sm font-semibold text-gray-800 hover:bg-purple-50">
              Add Note
            </button>
            <button className="px-6 py-4 border border-[#885ABB79] rounded-md text-sm font-semibold text-gray-800 hover:bg-purple-50">
              Complete Transaction
            </button>
          </div>

          {/* Right button */}
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl">
            Print & Close
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[250px_1fr] gap-6">
        {/* Left Summary */}
        <div className="space-y-4">
          {/* Date + Opened By */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-[15px] font-semibold text-[#885ABB]">
              25th June 2025{" "}
              <span className="text-[#885ABB] font-medium ml-2">13:17:54</span>
            </p>
            <p className="text-sm text-gray-800 font-medium mt-1">
              Opened by{" "}
              <span className="font-medium ml-2 text-gray-500">Dave Smith</span>
            </p>
          </div>

          {/* Summary */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h2 className="font-bold text-[16px] text-[#402B69] mb-3">
              Summary
            </h2>

            {/* Shadow Divider */}
            <div className="-mx-4 mb-5 h-[2px] bg-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>

            <div className="space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <img
                  src="/payments/paid.svg"
                  alt="check"
                  className="w-5 h-5 drop-shadow-[0_0_1px_#22C55E]"
                />
                0 Open Orders
              </p>
              <p className="flex items-center gap-2">
                <img
                  src="/payments/paid.svg"
                  alt="check"
                  className="w-5 h-5 drop-shadow-[0_0_1px_#22C55E]"
                />
                0 Open Appointments
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Top Totals */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 grid grid-cols-5 text-left text-[15px]">
            <div>
              <p className="text-gray-800">Transactions</p>
              <p className="text-[17px] text-[#885ABB] font-semibold">7</p>
            </div>
            <div>
              <p className="text-gray-800">Counted</p>
              <p className="text-[17px] text-[#885ABB] font-semibold">
                £251.23
              </p>
            </div>
            <div>
              <p className="text-gray-800">Takings</p>
              <p className="text-[17px] text-[#885ABB] font-semibold">
                £151.23
              </p>
            </div>
            <div>
              <p className="text-gray-800">Float</p>
              <p className="text-[17px] text-[#885ABB] font-semibold">
                £100.00
              </p>
            </div>
            <div>
              <p className="text-gray-800">Total Variance</p>
              <p className="text-[#29BF6A]  text-[22px] font-bold">£0.00</p>
            </div>
          </div>

          {/* Cash / Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4 text-[15px]">
            {/* Cash */}
            <div className="grid grid-cols-4 items-center">
              <span className="text-[18px] ml-4 font-semibold">Cash</span>
              <div className="flex items-center border border-[#C7BEE5] rounded-xl ml-4 px-2 py-2 gap-3 w-fit">
                <button
                  onClick={() => setShowCalculator(true)}
                  className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 text-[#885ABB]" />
                </button>

                <span className="text-[16px] ml-2">£192.49</span>
              </div>
              <span className="text-[18px] ml-12">£92.49</span>
              <span className="text-[#29BF6A] text-[18px] ml-12 font-semibold">
                £100.00
              </span>
            </div>

            {/* Card */}
            <div className="grid grid-cols-4 items-center">
              <span className="text-[18px] ml-4 font-semibold">Card</span>
              <div className="flex items-center border border-[#C7BEE5] rounded-xl ml-4 px-2 py-2 gap-3 w-fit">
                <button
                  onClick={() => setShowCalculator(true)}
                  className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 text-[#885ABB]" />
                </button>

                <span className="text-[16px] ml-2">£54.83</span>
              </div>
              <span className="text-[18px] ml-12">£54.83</span>
              <span className="text-[#29BF6A] text-[18px] ml-12 font-semibold">
                £0.00
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Sub Total */}
            <div className="grid grid-cols-4 items-center">
              <span className=" text-[18px] ml-4 font-semibold">Sub Total</span>
              <div className="flex gap-8">
                <span className="ml-12 text-[18px] ">£192.49</span>
                <span className="text-[18px] ml-[120px]">£92.49</span>
                <span className="text-[#29BF6A] font-semibold text-[18px] ml-[140px]">
                  £100.00
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Float */}
            <div className="grid grid-cols-3 items-center">
              <span className=" text-[18px] ml-4 font-semibold">Float</span>
              <div className="flex gap-8">
                <span className="ml-[200px] text-[18px]">£92.49</span>
                <span className="text-[#BB5A5E] font-semibold text-[18px] ml-[125px] flex items-center gap-1">
                  <span>-</span>£100.00
                </span>
              </div>
            </div>
          </div>

          {/* Float Breakdown */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-[15px]">
            <h2 className="font-bold text-[#402B69] mb-3">Float</h2>

            {/* Shadow Divider */}
            <div className="-mx-4 mb-5 h-[2px] bg-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>

            <div className="space-y-4">
              <p className="flex justify-between">
                <span>Opening Balance</span>
                <span>£100.00</span>
              </p>
              <p className="flex justify-between">
                <span>Withdrawn</span>
                <span>£0.00</span>
              </p>
              <p className="flex justify-between">
                <span>Deposited</span>
                <span>£0.00</span>
              </p>
              <p className="flex justify-between">
                <span>Petty Cash</span>
                <span>£0.00</span>
              </p>
              <p className="flex justify-between">
                <span>Cash Tip Outs</span>
                <span>£0.00</span>
              </p>
              <p className="flex justify-between">
                <span>Closing Balance</span>
                <span>£100.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl">
            <ReportsCalculator onClose={() => setShowCalculator(false)} />
          </div>
          <div
            className="absolute inset-0"
            onClick={() => setShowCalculator(false)}
          ></div>
        </div>
      )}
    </div>
  );
}
