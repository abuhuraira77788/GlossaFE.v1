import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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

interface PaymentStepProps {
  selectedService: Service;
  selectedCustomer: string;
  appointmentTime: string;
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  goToFinalPayment: () => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({
  selectedService,
  selectedCustomer,
  appointmentTime,
  tip,
  setTip,
  goToFinalPayment,
}) => {
  const [selectedTip, setSelectedTip] = useState<number>(5);

  // Calculate tip amount based on base price
  const basePrice = 35; // £35 from the image
  const tipOptions = [
    { percentage: 0, label: "No Tip", amount: 0 },
    { percentage: 5, label: "5%", amount: 1.7 },
    { percentage: 10, label: "10%", amount: 3.4 },
    { percentage: 15, label: "15%", amount: 5.7 },
    { percentage: 20, label: "20%", amount: 8.7 },
    { percentage: 30, label: "30%", amount: 12.7 },
  ];

  const services = [
    { name: "Hair Cut", duration: "60 mins", price: 35 },
    { name: "Blow Dry", duration: "15 mins", price: 35 },
  ];

  const products = [{ name: "Premium Hair Wax", price: 35 }];

  const totalAmount = 105; // £35 + £35 + £35 = £105
  const paidAmount = 35;
  const dueAmount = 35;

  return (
    <div className="flex h-full bg-[#F9F9F9]">
      {/* Left Side: Add Tip */}
      <div className="w-[35%] p-6 relative">
        <h3 className="text-[22px] mt-4 font-semibold text-[#402B69] mb-6">
          Add tip
        </h3>

        <div className="space-y-3">
          {tipOptions.map((option) => (
            <button
              key={option.percentage}
              onClick={() => setSelectedTip(option.percentage)}
              className={`w-full flex justify-between items-center p-5 rounded-lg border-2 transition-all ${
                selectedTip === option.percentage
                  ? "border-[#BBB9F3] bg-[#f9f9f9]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span
                className={`text-[18px] ${
                  selectedTip === option.percentage
                    ? "font-semibold text-[#402B69]"
                    : "font-medium text-[#402B69]"
                }`}
              >
                {option.label}
              </span>
              <span
                className={`text-[16px] ${
                  selectedTip === option.percentage
                    ? "font-semibold text-[#402B69]"
                    : "font-medium text-[#402B69]"
                }`}
              >
                £{option.amount.toFixed(2)}
              </span>
            </button>
          ))}

          <button className="w-full p-4 border-2 border-gray-200 rounded-lg text-[16px] font-medium text-[#402B69] hover:border-gray-300 transition-all">
            + Custom Tip
          </button>
        </div>
        {/* Shadow Divider */}
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-200 shadow-[4px_0_12px_rgba(0,0,0,0.15)]"></div>
      </div>

      {/* Right Side: Hair Cut Details */}
      <div className="w-[65%] p-6">
        {/* Header */}
        <div className="mb-8">
          {/* Main Heading */}
          <h2 className="text-[24px] mt-4 font-semibold text-[#402B69] mb-6">
            Hair Cut
          </h2>

          {/* Stylist + Appointment Time Row */}
          <div className="flex justify-between items-center">
            {/* Stylist Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-[15px] font-medium text-[#402B69]">
                Stylist
              </span>
              <Select defaultValue="ava">
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

            {/* Appointment Time */}
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

          {/* Products */}
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
              Karen Davies
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
          className="w-full h-24 p-3 border border-[#C4A6E1] rounded-lg text-[14px] 
             resize-y focus:outline-none focus:ring-2 focus:ring-[#885ABB] 
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
          <button className="px-8 py-4 bg-[#885ABB] text-white rounded-xl font-extrabold hover:bg-[#6f3fa8] transition">
            SAVE
          </button>
          <button
            onClick={goToFinalPayment}
            className="flex-1 py-4 bg-[#22c55e] text-white rounded-xl font-extrabold hover:bg-[#16a34a] transition"
          >
            CONTINUE TO PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
