import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  staff: string[];
  status: "active" | "inactive";
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
}

interface BundleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  categories: Category[];
  services: Service[];
}

export const BundleModal = ({
  isOpen,
  onClose,
  onSave,
  categories,
  services,
}: BundleModalProps) => {
  const [bundleName, setBundleName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [scheduleType, setScheduleType] = useState<"sequence" | "parallel">(
    "sequence"
  );
  const [priceType, setPriceType] = useState<"auto" | "custom">("auto");
  const [retailPrice, setRetailPrice] = useState<number>(0);
  const [onlineBooking, setOnlineBooking] = useState(true);
  const [availableFor, setAvailableFor] = useState("All genders");

  // 🔹 Auto-calc price if type = auto
  useEffect(() => {
    if (priceType === "auto") {
      const total = services
        .filter((s) => selectedServices.includes(s.id))
        .reduce((sum, s) => sum + s.price, 0);
      setRetailPrice(total);
    }
  }, [selectedServices, priceType, services]);

  const handleServiceToggle = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bundleName.trim() || !categoryId || selectedServices.length === 0)
      return;

    onSave({
      id: Date.now().toString(),
      name: bundleName,
      description,
      categoryId,
      services: selectedServices,
      scheduleType,
      priceType,
      retailPrice,
      onlineBooking,
      availableFor,
      status: "active" as "active" | "inactive",
      type: "bundle",
    });

    // Reset
    setBundleName("");
    setCategoryId("");
    setDescription("");
    setSelectedServices([]);
    setScheduleType("sequence");
    setPriceType("auto");
    setRetailPrice(0);
    setOnlineBooking(true);
    setAvailableFor("All genders");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-200 bg-[#F5F3FF]">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Create New Bundle
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Combine services into a package offering
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form Content - Scrollable */}
        <div className="overflow-y-auto max-h-[calc(92vh-140px)]">
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Basic Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#885ABB] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Basic Information
                </h3>
              </div>

              <div className="grid gap-6 pl-11">
                {/* Bundle Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bundle Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Premium Cut & Style Package"
                    value={bundleName}
                    onChange={(e) => setBundleName(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all duration-200 bg-gray-50 focus:bg-white cursor-pointer"
                  >
                    <option value="">Choose a category...</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Describe what makes this bundle special..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Services Selection Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#885ABB] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Select Services
                </h3>
              </div>

              <div className="pl-11">
                {categoryId ? (
                  <div className="space-y-3">
                    {services
                      .filter((s) => s.categoryId === categoryId)
                      .map((s) => (
                        <label
                          key={s.id}
                          className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl cursor-pointer hover:border-[#885ABB]/40 hover:bg-[#F5F3FF] transition-all duration-200"
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(s.id)}
                            onChange={() => handleServiceToggle(s.id)}
                            className="h-5 w-5 text-[#885ABB] border-gray-300 rounded focus:ring-[#885ABB]"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              {s.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {s.duration} minutes
                            </div>
                          </div>
                          <div className="text-lg font-semibold text-[#885ABB]">
                            ${s.price}
                          </div>
                        </label>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-8 px-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                    <p className="text-gray-500">
                      Select a category first to choose services
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Configuration Section */}
            <div className="border-t border-gray-200 pt-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#885ABB] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Configuration
                </h3>
              </div>

              <div className="grid gap-6 pl-11">
                {/* Schedule Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Schedule Type
                  </label>
                  <select
                    value={scheduleType}
                    onChange={(e) =>
                      setScheduleType(e.target.value as "sequence" | "parallel")
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all duration-200 bg-gray-50 focus:bg-white cursor-pointer"
                  >
                    <option value="sequence">
                      Sequential Booking (one after another)
                    </option>
                    <option value="parallel">
                      Parallel Booking (simultaneously)
                    </option>
                  </select>
                </div>

                {/* Pricing */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pricing Strategy
                  </label>
                  <div className="flex gap-4">
                    <select
                      value={priceType}
                      onChange={(e) =>
                        setPriceType(e.target.value as "auto" | "custom")
                      }
                      className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all duration-200 bg-gray-50 focus:bg-white cursor-pointer"
                    >
                      <option value="auto">Auto (Sum of Services)</option>
                      <option value="custom">Custom Price</option>
                    </select>

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={retailPrice}
                        onChange={(e) => setRetailPrice(Number(e.target.value))}
                        disabled={priceType === "auto"}
                        className="w-32 border border-gray-300 rounded-xl pl-8 pr-4 py-3 text-gray-900 text-right focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all duration-200 bg-gray-50 focus:bg-white disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Online Booking */}
                {/* <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Online Booking Settings
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl cursor-pointer hover:border-[#885ABB]/40 hover:bg-[#F5F3FF] transition-all duration-200">
                    <input
                      type="checkbox"
                      checked={onlineBooking}
                      onChange={() => setOnlineBooking(!onlineBooking)}
                      className="h-5 w-5 text-[#885ABB] border-gray-300 rounded focus:ring-[#885ABB]"
                    />
                    <span className="text-gray-900 font-medium">
                      Allow clients to book this bundle online
                    </span>
                  </label>

                  <select
                    value={availableFor}
                    onChange={(e) => setAvailableFor(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all duration-200 bg-gray-50 focus:bg-white cursor-pointer"
                  >
                    <option>All genders</option>
                    <option>Male only</option>
                    <option>Female only</option>
                  </select>
                </div> */}
              </div>
            </div>
          </form>
          {/* Footer */}
          <div className="flex justify-between items-center px-8 py-6 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-600">
              {selectedServices.length} service
              {selectedServices.length !== 1 ? "s" : ""} selected
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-white hover:border-gray-400 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={
                  !bundleName.trim() ||
                  !categoryId ||
                  selectedServices.length === 0
                }
                className="px-8 py-3 rounded-xl bg-[#885ABB] hover:bg-[#837EED] text-white font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Bundle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
