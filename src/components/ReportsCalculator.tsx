"use client";

import { X } from "lucide-react";

interface ReportsCalculatorProps {
  onClose: () => void;
}

export default function ReportsCalculator({ onClose }: ReportsCalculatorProps) {
  return (
    <div className="w-[460px] rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-center relative">
        <h2 className="text-xl font-bold text-[#402B69]">Enter Amount</h2>
        <X
          className="w-6 h-6 text-gray-500 cursor-pointer absolute right-6"
          onClick={onClose}
        />
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-gray-200"></div>

      {/* Calculator body */}
      <div className="bg-gray-50 p-6 space-y-6">
        {/* Input */}
        <div className="w-full border border-[#885ABB] rounded-md px-4 py-4 text-xl font-normal bg-white text-left flex items-center gap-1">
          <span className="text-gray-400 mr-2">£</span>
          <span className="text-gray-800">0.00</span>
        </div>

        {/* Keypad */}
        <div className="space-y-3">
          {/* Row 1 */}
          <div className="grid grid-cols-5 gap-3">
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              7
            </button>
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              8
            </button>
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              9
            </button>
            <button className="col-span-2 py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              -
            </button>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-5 gap-3">
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              4
            </button>
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              5
            </button>
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              6
            </button>
            <button className="col-span-2 py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              Clear
            </button>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-5 gap-3">
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              1
            </button>
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              2
            </button>
            <button className="py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              3
            </button>
            <button className="col-span-2 py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              Cancel
            </button>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-5 gap-3">
            <button className="col-span-3 py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              0
            </button>
            <button className="col-span-2 py-5 rounded-md border border-[#885ABB] bg-white font-bold hover:bg-purple-50">
              .
            </button>
          </div>
        </div>

        {/* Submit */}
        <button className="w-full py-4 rounded-md bg-green-500 hover:bg-green-600 text-white font-bold text-[16px]">
          SUBMIT
        </button>
      </div>
    </div>
  );
}
