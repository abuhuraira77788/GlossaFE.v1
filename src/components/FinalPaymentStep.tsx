import React, { useState } from "react";
import {
  ChevronDown,
  CreditCard,
  Wallet,
  Gift,
  Split,
  QrCode,
  HelpCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

interface FinalPaymentStepProps {
  selectedService: Service;
  selectedCustomer: string;
  appointmentTime: string;
  onRebook: () => void;
}

const FinalPaymentStep: React.FC<FinalPaymentStepProps> = ({
  selectedService,
  selectedCustomer,
  appointmentTime,
  onRebook,
}) => {
  const services = [
    { name: "Hair Cut", duration: "60 mins", price: 35 },
    { name: "Blow Dry", duration: "15 mins", price: 35 },
  ];
  const [isPaid, setIsPaid] = useState(false);

  const products = [{ name: "Premium Hair Wax", price: 35 }];

  return (
    <div className="flex h-full bg-[#F9F9F9]">
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

        <button className="w-full mt-4 p-4 border-2 border-gray-200 rounded-lg text-[16px] font-medium text-[#402B69] hover:border-gray-300 transition-all">
          + Custom Tip
        </button>
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-200 shadow-[4px_0_12px_rgba(0,0,0,0.15)]"></div>
      </div>

      {/* Right Side: Hair Cut Details */}
      <div className="w-[65%] p-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-[24px] mt-4 font-semibold text-[#402B69] mb-6">
            Hair Cut
          </h2>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-[15px] font-medium text-[#402B69]">
                Stylist
              </span>
              <Select defaultValue="katie">
                <SelectTrigger className="w-44 h-[54px] border border-[#C4A6E1] rounded-md text-[15px] font-medium text-[#402B69] focus:ring-2 focus:ring-[#885ABB]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-md rounded-md">
                  <SelectItem value="ava">Ava Broadbent</SelectItem>
                  <SelectItem value="jenny">Jenny</SelectItem>
                  <SelectItem value="katie">Katie</SelectItem>
                  <SelectItem value="amelie">Amelie</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-right">
              <div className="text-[15px] font-normal text-[#402B69]">
                9.30–10.30 am
              </div>
              <div className="text-[15px] font-bold text-[#402B69]">
                Fri 1 Aug
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-3"
            >
              <div className="flex items-center gap-10">
                <span className="text-[16px] font-medium text-[#6B7280] w-20">
                  Service
                </span>
                <span className="text-[16px] font-semibold text-[#402B69]">
                  {service.name}
                </span>
                <span className="text-[16px] ml-8 text-[#402B69]">
                  {service.duration}
                </span>
              </div>
              <span className="text-[16px] font-semibold text-[#402B69]">
                £{service.price}
              </span>
            </div>
          ))}

          {products.map((product, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-3"
            >
              <div className="flex items-center gap-10">
                <span className="text-[16px] font-medium text-[#6B7280] w-20">
                  Product
                </span>
                <span className="text-[16px] font-semibold text-[#402B69]">
                  {product.name}
                </span>
              </div>
              <span className="text-[16px] font-semibold text-[#402B69]">
                £{product.price}
              </span>
            </div>
          ))}
        </div>

        {/* Customer */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-10">
            <span className="text-[16px] font-medium text-[#6B7280] w-20">
              Customer
            </span>
            <span className="text-[16px] font-semibold text-[#402B69]">
              {selectedCustomer}
            </span>
          </div>
        </div>

        {/* Add Service/Product Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 py-3 bg-[#d6d5f0] text-[#885ABB] rounded-lg font-semibold hover:bg-[#d6bcfa] transition">
            + Add Service
          </button>
          <button className="flex-1 py-3 bg-[#d6d5f0] text-[#885ABB] rounded-lg font-semibold hover:bg-[#d6bcfa] transition">
            + Add Product
          </button>
        </div>

        {/* Note */}
        <textarea
          placeholder="Note"
          className="w-full h-24 p-3 border border-[#C4A6E1] rounded-lg text-[14px] resize-y
             focus:outline-none focus:ring-2 focus:ring-[#885ABB] 
             placeholder:text-black mb-8"
        />

        {/* Totals */}
        <div className="space-y-2 border-t pt-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-medium text-[#402B69]">
              Total
            </span>
            <span className="text-[16px] font-medium text-[#402B69]">£70</span>
          </div>
          <div className="flex justify-between mt-2 items-center">
            <span className="text-[16px] font-medium text-[#402B69]">Paid</span>
            <span className="text-[16px] font-medium text-[#402B69]">
              - £35
            </span>
          </div>
          <div className="flex justify-between border-t pt-4 items-center">
            <span className="text-[24px] font-normal text-[#402B69]">Due</span>
            <span className="text-[24px] font-normal text-[#402B69]">£35</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          {!isPaid ? (
            <>
              {/* Cancel */}
              <button className="w-[30%] py-4 bg-[#BB5A5E] text-white rounded-xl font-extrabold hover:bg-[#b91c1c] transition">
                CANCEL
              </button>

              {/* Pay Now */}
              <button
                onClick={() => setIsPaid(true)}
                className="w-[70%] py-4 bg-[#29BF6A] text-white rounded-xl font-extrabold hover:bg-[#16a34a] transition"
              >
                PAY NOW
              </button>
            </>
          ) : (
            <>
              {/* Rebook */}
              <button
                onClick={onRebook}
                className="w-[30%] py-4 bg-[#885ABB] text-white rounded-xl font-extrabold hover:bg-[#6f3fa8] transition"
              >
                REBOOK
              </button>

              {/* Paid */}
              <div className="w-[70%] py-4 bg-white border border-gray-200 rounded-xl font-extrabold flex items-center justify-center gap-2">
                <img src="/payments/paid.svg" alt="Paid" className="w-6 h-6" />
                <span className="text-[#29BF6A]">PAID</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalPaymentStep;
