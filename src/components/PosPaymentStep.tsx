import React, { useState } from "react";
import { X, Pencil, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

type SidebarMode = "quick" | "paynow";

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

interface PosPaymentStepProps {
  selectedService: Service;
  selectedCustomer: string;
  appointmentTime: string;
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  goToFinalPayment: () => void;
  onClose: () => void;
  mode: SidebarMode;
}

const PosPaymentStep: React.FC<PosPaymentStepProps> = ({
  selectedService,
  selectedCustomer,
  appointmentTime,
  tip,
  setTip,
  goToFinalPayment,
  onClose,
  mode,
}) => {
  const [selectedTip, setSelectedTip] = useState<number>(5);
  const [isPaid, setIsPaid] = useState(false);

  // Fake data for now
  const totalAmount = mode === "quick" ? 35 : 105;
  const dueAmount = mode === "quick" ? 35 : 105;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[60%] bg-[#F9F9F9] shadow-xl border-l border-gray-200 
    transform transition-transform duration-300 z-50 flex`}
    >
      {/* Floating Close Button */}
      <button
        onClick={onClose}
        className="absolute -left-16 top-10 w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#885ABB] shadow-md hover:bg-[#f3e8ff] transition"
        aria-label="Close"
      >
        <X size={22} strokeWidth={4} />
      </button>

      {/* Left Side: Select Payment */}
      <div className="w-[35%] p-6 relative">
        <h3 className="text-[22px] mt-4 font-semibold text-[#402B69] mb-6">
          Select Payment
        </h3>

        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-5 rounded-lg border-2 border-[#BBB9F3] bg-[#f9f9f9] text-[18px] font-medium text-[#402B69]">
            <img
              src="/payments/payment-terminal.svg"
              alt="Payment Terminal"
              className="w-7 h-7"
            />
            Payment Terminal
          </button>

          <button className="w-full flex items-center gap-3 p-5 rounded-lg border-2 border-gray-200 hover:border-gray-300 text-[18px] font-medium text-[#402B69]">
            <img src="/payments/cash.svg" alt="Cash" className="w-7 h-7" />
            Cash
          </button>

          <button className="w-full flex items-center gap-3 p-5 rounded-lg border-2 border-gray-200 hover:border-gray-300 text-[18px] font-medium text-[#402B69]">
            <img
              src="/payments/gift-card.svg"
              alt="Gift Card"
              className="w-7 h-7"
            />
            Gift Card
          </button>

          <button className="w-full flex items-center gap-3 p-5 rounded-lg border-2 border-gray-200 hover:border-gray-300 text-[18px] font-medium text-[#402B69]">
            <img src="/payments/split.svg" alt="Split" className="w-7 h-7" />
            Split
          </button>

          <button className="w-full flex items-center gap-3 p-5 rounded-lg border-2 border-gray-200 hover:border-gray-300 text-[18px] font-medium text-[#402B69]">
            <img
              src="/payments/qr-code.svg"
              alt="QR Code"
              className="w-7 h-7"
            />
            QR Code
          </button>

          <button className="w-full flex items-center gap-3 p-5 rounded-lg border-2 border-gray-200 hover:border-gray-300 text-[18px] font-medium text-[#402B69]">
            <img src="/payments/other.svg" alt="Other" className="w-7 h-7" />
            Other
          </button>
        </div>

        <button className="w-full mt-4 p-4 border-2 border-gray-200 rounded-lg text-[16px] font-medium text-[#402B69] hover:border-gray-300 transition-all text-left">
          + Custom Tip
        </button>

        {/* Divider */}
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-200 shadow-[4px_0_12px_rgba(0,0,0,0.15)]"></div>
      </div>

      {/* Right Side: Payment Details */}
      <div className="w-[65%] p-6 flex flex-col h-full">
        {/* Header */}
        <h2 className="text-[24px] mt-4 font-semibold text-[#402B69] mb-6">
          Payment
        </h2>

        {/* Scrollable content above totals */}
        <div className="flex-1 overflow-y-auto">
          {mode === "quick" ? (
            // Quick Payment row
            <div className="flex justify-between items-center border-b border-t pt-4 pb-4">
              <span className="text-[16px] font-semibold text-[#402B69]">
                Quick Payment
              </span>
              <div className="flex items-center gap-4 text-[#885ABB]">
                <button className="hover:text-[#6f3fa8]">
                  <Pencil className="w-5 h-5" />
                </button>
                <button className="hover:text-red-500">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Stylist Row */}
              <div className="mb-6 flex items-center gap-3 py-3 px-5">
                <label className="text-[16px] font-medium text-[#402B69] w-16">
                  Stylist
                </label>
                <Select>
                  <SelectTrigger className="min-w-[200px] h-[56px] bg-white border border-[#ab7de0] rounded-md px-4 text-[#402B69] text-[15px] font-medium flex items-center justify-between">
                    <SelectValue placeholder="Choose Stylist" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stylist-1">Nicola Jones</SelectItem>
                    <SelectItem value="stylist-2">Freya Bennett</SelectItem>
                    <SelectItem value="stylist-3">Isla Thompson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Appointment Items */}
              <div className="space-y-5 mb-6 px-5">
                {[
                  { label: "Product", value: "Premium Hair Wax", price: "£35" },
                  { label: "Product", value: "Premium Hair Wax", price: "£35" },
                  { label: "Product", value: "Premium Hair Wax", price: "£35" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-[#E5E0EB] pb-2"
                  >
                    <div className="flex items-center gap-7">
                      <span className="text-[14px] text-[#402B69]">
                        {item.label}
                      </span>
                      <span className="text-[15px] font-bold text-[#402B69]">
                        {item.value}
                      </span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#402B69]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Totals + Buttons pinned at bottom */}
        <div className="border-t pt-3">
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-[16px] font-medium text-[#402B69]">
                Total
              </span>
              <span className="text-[16px] font-medium text-[#402B69]">
                £{totalAmount}
              </span>
            </div>
            <div className="flex justify-between border-t pt-4 items-center">
              <span className="text-[24px] font-normal text-[#402B69]">
                Due
              </span>
              <span className="text-[24px] font-normal text-[#402B69]">
                £{dueAmount}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            {isPaid ? (
              <button className="w-full py-4 bg-white border rounded-xl font-extrabold text-[#29BF6A] flex items-center justify-center gap-3">
                <img src="/payments/paid.svg" alt="Paid" className="w-6 h-6" />
                PAID
              </button>
            ) : (
              <>
                <button className="w-[30%] py-4 bg-[#BB5A5E] text-white rounded-xl font-extrabold hover:bg-[#b91c1c] transition">
                  CANCEL
                </button>
                <button
                  onClick={() => setIsPaid(true)}
                  className="w-[70%] py-4 bg-[#29BF6A] text-white rounded-xl font-extrabold hover:bg-[#16a34a] transition"
                >
                  PAY NOW
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosPaymentStep;
