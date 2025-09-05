import React, { useState } from "react";
import { Search, Pencil, Trash2, ChevronDown } from "lucide-react";
import SelectStylistModal from "../components/StylistsModal";
import QuickPaymentPanel from "../components/QuickPaymentPanel";
import PosPaymentStep from "../components/PosPaymentStep";
import AddToAppointment from "../components/AddToAppointment";

const POS = () => {
  const [showStylistModal, setShowStylistModal] = useState(false);
  const [selectedStylist, setSelectedStylist] = useState<string>("");
  const [selectedStylistId, setSelectedStylistId] = useState<number | null>(
    null
  );
  const [showQuickPaymentPanel, setShowQuickPaymentPanel] = useState(false);
  const [sidebarMode, setSidebarMode] = useState<"quick" | "paynow" | null>(
    null
  );
  const [showAddToAppointment, setShowAddToAppointment] = useState(false);

  const products = [
    { id: 1, name: "Wax", price: null, bg: "bg-[#40C4E7]", large: true },
    { id: 2, name: "Shampoo", price: null, bg: "bg-[#4CCFC1]", large: true },
    { id: 3, name: "Hair Spray", price: null, bg: "bg-[#7E9AEF]", large: true },
    {
      id: 4,
      name: "Hair Wax",
      price: "£35.50",
      bg: "bg-gradient-to-b from-white to-black",
      large: true,
      hasImage: true,
    },
    {
      id: 5,
      name: "Hair Wax",
      price: "£35.50",
      bg: "bg-gradient-to-b from-white to-black",
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
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-[0.85]">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-[#E5E0EB] rounded-md py-3 pl-4 pr-10 text-[16px] font-medium text-[#402B69] placeholder:text-[#402B69]/60 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#885ABB]" />
        </div>
        <button
          onClick={() => setShowQuickPaymentPanel(true)}
          className="flex-[0.15] bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-lg py-3 font-bold flex items-center justify-center gap-2 transition"
        >
          <img src="/quick.svg" alt="Quick Payment" className="w-5 h-5" />
          Quick Payment
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6 items-stretch min-h-screen">
        {/* Left Section - Products */}
        <div className="col-span-2 min-h-screen bg-[#ffffff] rounded-xl p-6">
          <div className="col-span-2">
            <div className="grid grid-cols-4 gap-2">
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
                        <h3 className="text-[22px] font-bold">{p.name}</h3>
                      </div>
                    ) : isImageBox ? (
                      <div className="relative h-full w-full rounded-md overflow-hidden">
                        {" "}
                        {/* Product image */}{" "}
                        <img
                          src="/hair-wax.png"
                          alt={p.name}
                          className="h-full w-full object-cover transform -translate-y-14"
                        />{" "}
                        {/* Gradient overlay */}{" "}
                        <div className="absolute -bottom-4 -left-2 right-0  from-black/90 to-black/20 p-3">
                          {" "}
                          <h3 className="text-[18px] font-bold text-white">
                            {" "}
                            {p.name}{" "}
                          </h3>{" "}
                          {p.price && (
                            <p className="text-[18px] font-extrabold text-white">
                              {" "}
                              {p.price}{" "}
                            </p>
                          )}{" "}
                        </div>{" "}
                      </div>
                    ) : (
                      <div className="flex flex-col justify-between h-full">
                        <h3 className="text-[18px] font-semibold">{p.name}</h3>
                        {p.price && (
                          <p className="text-[16px] font-bold">{p.price}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Section - Cart */}
        <div className="bg-white border border-[#E5E0EB] rounded-md p-6 flex flex-col h-full">
          {/* Stylist Dropdown */}
          <div className="flex items-center justify-between border-b border-[#E5E0EB] pb-4 mb-6">
            <label className="text-[16px] font-medium text-[#402B69]">
              Stylist
            </label>
            <div
              onClick={() => setShowStylistModal(true)}
              className="relative flex-1 ml-4 cursor-pointer"
            >
              <div className="w-full border border-[#ab7de0] rounded-md py-2.5 px-4 text-[#402B69] text-[15px] font-medium flex items-center justify-between">
                {selectedStylist || "Choose Stylist"}
                <ChevronDown
                  strokeWidth={4}
                  className={`w-5 h-5 text-[#885ABB] transition-transform ${
                    showStylistModal ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Appointment Items */}
          <div className="space-y-4 mb-6">
            {appointmentItems.map((item, i) => (
              <div
                key={i}
                className="group flex items-center justify-between border-b border-[#E5E0EB] pb-2"
              >
                {/* Left side: product + name */}
                <div className="flex items-center gap-4">
                  <span className="text-[14px] text-[#402B69]">
                    {item.label}
                  </span>
                  <span className="text-[15px] font-bold text-[#402B69]">
                    {item.value}
                  </span>
                </div>

                <span className="text-[15px] font-semibold text-[#402B69] group-hover:hidden">
                  {item.price}
                </span>

                <div className="hidden group-hover:flex items-center gap-3 text-[#885ABB]">
                  <button className="hover:text-[#6f3fa8]">
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button className="hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Spacer to push footer down */}
          <div className="flex-grow" />

          {/* Total + Buttons (footer) */}
          <div>
            <div className="flex justify-between items-center border-t border-b pb-3 border-[#E5E0EB] pt-4 mb-6">
              <span className="text-[28px] font-normal text-[#402B69]">
                Due
              </span>
              <span className="text-[28px] font-normal text-[#402B69]">
                £105
              </span>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowAddToAppointment(true)}
                className="w-full bg-[#d6d5f0] text-[#885ABB] rounded-md py-3 font-semibold hover:bg-[#d9c7f2] transition"
              >
                Add to Appointment
              </button>

              <button
                onClick={() => setSidebarMode("paynow")}
                className="w-full bg-[#22C55E] text-white rounded-md py-3 font-extrabold hover:bg-[#16a34a] transition"
              >
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {showStylistModal && (
        <SelectStylistModal
          onClose={() => setShowStylistModal(false)}
          onSelect={(id: number, name: string) => {
            setSelectedStylistId(id);
            setSelectedStylist(name);
            setShowStylistModal(false);
          }}
          selectedId={selectedStylistId}
        />
      )}

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

      {showAddToAppointment && (
        <AddToAppointment onClose={() => setShowAddToAppointment(false)} />
      )}
    </>
  );
};

export default POS;
