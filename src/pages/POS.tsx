import React from "react";
import { Search, Zap, ChevronDown } from "lucide-react";

const POS = () => {
  const products = [
    { id: 1, name: "Wax", price: null, bg: "bg-[#40C4E7]", large: true },
    { id: 2, name: "Shampoo", price: null, bg: "bg-[#4CCFC1]", large: true },
    { id: 3, name: "Hair Spray", price: null, bg: "bg-[#7E9AEF]", large: true },
    {
      id: 4,
      name: "Hair Wax",
      price: "£35.50",
      bg: "bg-black",
      large: true,
      hasImage: true,
    },
    {
      id: 5,
      name: "Hair Wax",
      price: "£35.50",
      bg: "bg-black",
      large: false,
      hasImage: true,
    },
    {
      id: 6,
      name: "Premium Hair Wax",
      price: "£15.00",
      bg: "bg-[#C49AF3]",
      large: false,
    },
    {
      id: 7,
      name: "Strong Hair Wax",
      price: "£22.50",
      bg: "bg-[#885ABB]",
      large: false,
    },
    {
      id: 8,
      name: "Hair Spray",
      price: null,
      bg: "bg-[#40C4E7]",
      large: false,
    },
    {
      id: 9,
      name: "Premium Hair Wax",
      price: "£15.00",
      bg: "bg-[#C49AF3]",
      large: false,
    },
    {
      id: 10,
      name: "Strong Hair Wax",
      price: "£22.50",
      bg: "bg-[#885ABB]",
      large: false,
    },
    {
      id: 11,
      name: "Hair Spray",
      price: null,
      bg: "bg-[#7E9AEF]",
      large: false,
    },
  ];

  const appointmentItems = [
    { label: "Product", value: "Premium Hair Wax", price: "£35" },
    { label: "Product", value: "Premium Hair Wax", price: "£35" },
    { label: "Product", value: "Premium Hair Wax", price: "£35" },
  ];

  return (
    <>
      {/* Search + Quick Payment (FULL WIDTH) */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-[#E5E0EB] rounded-md py-3 pl-4 pr-10 text-[16px] font-medium text-[#402B69] placeholder:text-[#402B69]/60 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#885ABB]" />
        </div>
        <button className="bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-md px-5 py-3 font-semibold flex items-center gap-2 transition">
          <Zap className="w-4 h-4" />
          Quick Payment
        </button>
      </div>
      <div className="min-h-screen bg-[#F9F9F9] p-6">
        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Section - Products */}
          <div className="col-span-2">
            <div className="grid grid-cols-4 gap-4">
              {products.map((p, i) => {
                const boxNumber = i + 1;
                const highlightBoxes = [1, 2, 3, 8, 11];
                const imageBoxes = [4, 5];
                const isHighlighted = highlightBoxes.includes(boxNumber);
                const isImageBox = imageBoxes.includes(boxNumber);

                return (
                  <div
                    key={p.id}
                    className={`${p.bg} aspect-square rounded-md p-4 text-white cursor-pointer overflow-hidden`}
                  >
                    {isHighlighted ? (
                      <div className="flex h-full items-center justify-center text-center">
                        <h3 className="text-[24px] font-bold">{p.name}</h3>
                      </div>
                    ) : isImageBox ? (
                      <div className="flex flex-col h-full">
                        <div className="flex-1 bg-gradient-to-b from-white/80 to-transparent rounded" />
                        <div className="mt-auto">
                          <h3 className="text-[16px] font-semibold">
                            {p.name}
                          </h3>
                          {p.price && (
                            <p className="text-[15px] font-bold">{p.price}</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-between h-full">
                        <h3 className="text-[16px] font-semibold">{p.name}</h3>
                        {p.price && (
                          <p className="text-[15px] font-bold">{p.price}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Section - Cart */}
          <div className="bg-white border border-[#E5E0EB] rounded-md p-6">
            {/* Stylist Dropdown */}
            <div className="mb-6">
              <label className="block text-[16px] font-medium text-[#402B69] mb-2">
                Stylist
              </label>
              <div className="relative">
                <select className="w-full border border-[#E5E0EB] rounded-md py-3 px-4 text-[#402B69] text-[15px] font-medium appearance-none focus:outline-none">
                  <option>Choose Stylist</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#885ABB]" />
              </div>
            </div>

            {/* Appointment Items */}
            <div className="space-y-4 mb-6">
              {appointmentItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-[#E5E0EB] pb-2"
                >
                  <div>
                    <span className="text-[14px] text-[#402B69]">
                      {item.label}
                    </span>
                    <p className="text-[15px] font-semibold text-[#402B69]">
                      {item.value}
                    </p>
                  </div>
                  <span className="text-[15px] font-bold text-[#402B69]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center border-t border-[#E5E0EB] pt-4 mb-6">
              <span className="text-[16px] font-semibold text-[#402B69]">
                Due
              </span>
              <span className="text-[18px] font-bold text-[#402B69]">£105</span>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-[#EADDF7] text-[#885ABB] rounded-md py-3 font-semibold hover:bg-[#d9c7f2] transition">
                Add to Appointment
              </button>
              <button className="w-full bg-[#22C55E] text-white rounded-md py-3 font-semibold hover:bg-[#16a34a] transition">
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default POS;
