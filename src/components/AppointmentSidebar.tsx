import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Pencil, Trash2 } from "lucide-react";

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

interface AppointmentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  stylist: string;
  appointmentTime: string;
  services: Service[];
}

const AppointmentSidebar: React.FC<AppointmentSidebarProps> = ({
  isOpen,
  onClose,
  stylist,
  appointmentTime,
  services,
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  const dummyCustomers = Array(8).fill({
    name: "Debbie Smith",
    email: "debbie.smith@gmail.com",
  });

  useEffect(() => {
    if (!isOpen) {
      setSelectedService(null);
      setSelectedCustomer(null);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-[#F9F9F9] shadow-xl border-l border-gray-200 transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Floating Close Button */}
        {isOpen && (
          <button
            onClick={onClose}
            className="absolute -left-16 top-10 w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#885ABB] shadow-md hover:bg-[#f3e8ff] transition"
            aria-label="Close"
          >
            <X size={22} strokeWidth={4} />
          </button>
        )}

        {/* Header */}
        <div className="px-8 py-10">
          <h2 className="font-[600] text-[27px] leading-[33px] text-[#402B69] font-[Poppins,sans-serif]">
            Add an appointment
          </h2>
        </div>

        {/* Slot Info Section */}
        <div className="px-6 -mt-5">
          <div
            className={`flex items-center justify-between ${
              selectedService ? "border-b pb-3" : ""
            }`}
          >
            {/* Stylist Selector */}
            <div className="flex items-center gap-3">
              <span className="text-[15px] font-medium text-[#402B69]">
                Stylist
              </span>
              <Select defaultValue="ava">
                <SelectTrigger className="w-44 h-[54px] border border-[#C4A6E1] rounded-md text-[15px] font-medium text-[#402B69] focus:ring-2 focus:ring-[#885ABB]">
                  <SelectValue placeholder="Select stylist" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-md rounded-md text-[15px]">
                  <SelectItem value="ava">Ava Broadbent</SelectItem>
                  <SelectItem value="jenny">Jenny</SelectItem>
                  <SelectItem value="katie">Katie</SelectItem>
                  <SelectItem value="amelie">Amelie</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Appointment Time */}
            <div className="text-right">
              <span className="text-[15px] font-normal text-[#402B69]">
                9:15am
              </span>{" "}
              <span className="text-[15px] font-bold text-[#402B69]">
                Fri 1 Aug
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 p-6 space-y-3 overflow-hidden">
          {/* Show Services if none selected */}
          {!selectedService &&
            (services.length > 0 ? (
              services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-5 border rounded-lg hover:bg-purple-50 cursor-pointer transition bg-white"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex-1 flex items-center">
                    <h3 className="text-[21px] font-semibold text-[#885ABB]">
                      {service.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-8">
                    <p className="text-[16px] text-gray-600">
                      {service.duration}
                    </p>
                    <p className="text-[21px] font-semibold text-[#885ABB]">
                      {service.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No services available.</p>
            ))}

          {/* Show Customer section if service selected */}
          {/* Customer selection step */}
          {selectedService && !selectedCustomer && (
            <div className="space-y-6">
              {/* Selected Service Summary */}
              <div className="flex items-center justify-between border-b pb-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-[16px] font-medium text-[#402B69]">
                    Service
                  </span>
                  <span className="text-[16px] font-bold text-[#402B69]">
                    {selectedService.name}
                  </span>
                  <span className="text-[15px] text-gray-600">
                    {selectedService.duration}
                  </span>
                </div>
                <span className="text-[18px] font-bold text-[#885ABB]">
                  {selectedService.price}
                </span>
              </div>

              {/* Customer Search Section */}
              <div className="bg-white rounded-lg shadow-sm border p-5 flex flex-col h-[500px]">
                <h3 className="text-[24px] font-semibold text-[#885ABB] mt-2 mb-4">
                  Customer
                </h3>

                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 px-3 py-4 border border-[#C4A6E1] rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#885ABB]"
                  />
                  <button className="px-6 py-2 bg-[#E9D8FD] text-[#402B69] rounded-md font-medium hover:bg-[#d6bcfa]">
                    + Add
                  </button>
                </div>

                {/* Dummy Customers */}
                <div
                  className="flex-1 overflow-y-auto border-t divide-y -mx-5"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {dummyCustomers.map((c, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedCustomer(c.name)}
                      className="group flex items-center justify-between py-3 px-5 cursor-pointer transition hover:bg-gray-50 [&::-webkit-scrollbar]:hidden"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-[#885ABB]">
                        {c.name}
                      </span>
                      <span className="text-gray-500 text-sm group-hover:text-black">
                        {c.email}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Show Final Summary if customer is selected or skipped */}
          {selectedService && selectedCustomer && (
            <div className="space-y-6">
              {/* Customer Row */}
              <div className="flex items-center gap-8 border-b pb-3">
                <span className="text-[16px] font-medium text-[#402B69]">
                  Customer
                </span>
                <span className="text-[16px] font-bold text-[#402B69]">
                  {selectedCustomer || "Debbie Smith"}
                </span>
              </div>

              {/* Service Row */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-8">
                  <span className="text-[16px] font-medium text-[#402B69]">
                    Service
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-[16px] font-bold text-[#402B69]">
                      {selectedService.name}
                    </span>
                    <span className="text-[15px] text-gray-600">
                      {selectedService.duration}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <span className="text-[22px] font-semibold text-[#885ABB]">
                  {selectedService.price}
                </span>
              </div>

              {/* Add Service / Add Product Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-[#E9D8FD] text-[#885ABB] rounded-md font-semibold hover:bg-[#d6bcfa] transition">
                  + Add Service
                </button>
                <button className="flex-1 py-4 bg-[#E9D8FD] text-[#885ABB] rounded-md font-semibold hover:bg-[#d6bcfa] transition">
                  + Add Product
                </button>
              </div>

              {/* Notes */}
              <textarea
                placeholder="Note"
                className="w-full h-28 p-3 border border-[#C4A6E1] rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#885ABB]"
              />

              {/* Footer */}
              <div className="pt-52">
                {/* Due Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[18px] font-semibold text-[#402B69]">
                    Due
                  </span>
                  <span className="text-[22px] font-semibold text-[#885ABB]">
                    {selectedService.price}
                  </span>
                </div>

                {/* Save + Pay Buttons */}
                <div className="flex gap-4">
                  <button className="w-[30%] py-4 bg-[#885ABB] text-white rounded-md font-semibold hover:bg-[#6f3fa8] transition">
                    Save
                  </button>
                  <button className="w-[70%] py-4 bg-[#22c55e] text-white rounded-md font-semibold hover:bg-[#16a34a] transition">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {selectedService && !selectedCustomer && (
          <div className="p-6">
            <button
              onClick={() => setSelectedCustomer("Skipped")}
              className="w-full py-4 bg-[#E9D8FD] text-[#885ABB] rounded-md font-semibold hover:bg-[#d6bcfa] transition"
            >
              Skip
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AppointmentSidebar;
