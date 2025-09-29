import { useState, useEffect } from "react";

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  staff: string[];
  status: "active" | "inactive";
  categoryId: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  mode: "add" | "edit";
  service?: Service;
  onClose: () => void;
  onSave: (data: Omit<Service, "id" | "categoryId">) => void;
}

const availableStaff = ["Sarah", "Mike", "Lisa", "Emma", "David", "Jessica"];

export const ServiceModal = ({
  isOpen,
  mode,
  service,
  onClose,
  onSave,
}: ServiceModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    duration: 30,
    price: 0,
    staff: [] as string[],
    status: "active" as "active" | "inactive",
  });

  useEffect(() => {
    if (isOpen) {
      if (service) {
        setFormData({
          name: service.name,
          duration: service.duration,
          price: service.price,
          staff: service.staff,
          status: service.status,
        });
      } else {
        setFormData({
          name: "",
          duration: 30,
          price: 0,
          staff: [],
          status: "active",
        });
      }
    }
  }, [isOpen, service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.duration > 0 && formData.price >= 0) {
      onSave({
        name: formData.name.trim(),
        duration: formData.duration,
        price: formData.price,
        staff: formData.staff,
        status: formData.status,
      });
    }
  };

  const handleStaffChange = (staffMember: string) => {
    setFormData((prev) => ({
      ...prev,
      staff: prev.staff.includes(staffMember)
        ? prev.staff.filter((s) => s !== staffMember)
        : [...prev.staff, staffMember],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {mode === "add" ? "Add New Service" : "Edit Service"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Name */}
          <div className="space-y-2">
            <label
              htmlFor="serviceName"
              className="text-sm font-medium text-gray-700"
            >
              Service Name
            </label>
            <input
              id="serviceName"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter service name..."
              className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#885ABB]"
              autoFocus
            />
          </div>

          {/* Duration and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="duration"
                className="text-sm font-medium text-gray-700"
              >
                Duration (minutes)
              </label>
              <input
                id="duration"
                type="number"
                min="5"
                step="5"
                value={formData.duration}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    duration: parseInt(e.target.value) || 30,
                  }))
                }
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#885ABB]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-700"
              >
                Price ($)
              </label>
              <input
                id="price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    price: parseFloat(e.target.value) || 0,
                  }))
                }
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#885ABB]"
              />
            </div>
          </div>

          {/* Staff Assignment */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">
              Assigned Staff
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableStaff.map((staffMember) => (
                <label
                  key={staffMember}
                  className="flex items-center space-x-2 p-3 rounded-xl border border-gray-300 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={formData.staff.includes(staffMember)}
                    onChange={() => handleStaffChange(staffMember)}
                    className="rounded border-gray-300 text-[#885ABB] focus:ring-[#885ABB]"
                  />
                  <span className="text-sm text-gray-700">{staffMember}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-300">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Service Status
              </label>
              <p className="text-xs text-gray-500">
                {formData.status === "active"
                  ? "Service is available for booking"
                  : "Service is temporarily unavailable"}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  status: prev.status === "active" ? "inactive" : "active",
                }))
              }
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                formData.status === "active" ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  formData.status === "active"
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={
                !formData.name.trim() ||
                formData.duration <= 0 ||
                formData.price < 0
              }
              className="px-4 py-2 rounded-xl bg-[#885ABB] hhover:bg-[#6f47a2] text-white transition-colors disabled:opacity-50"
            >
              {mode === "add" ? "Add Service" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
