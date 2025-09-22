"use client";

import { useState } from "react";
import { Category } from "../types/categories";

interface CategoryFormProps {
  initialData?: Partial<Category>;
  onSubmit: (data: Partial<Category>) => void;
  onCancel: () => void;
}

export default function CategoryForm({
  initialData = {},
  onSubmit,
  onCancel,
}: CategoryFormProps) {
  const [formData, setFormData] = useState<Partial<Category>>(initialData);

  const handleChange = (field: keyof Category, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Image */}
      <div className="flex flex-col items-center justify-center border rounded-lg bg-gray-50 h-[250px]">
        {formData.image ? (
          <img
            src={formData.image}
            alt="Category"
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-400">
            <img
              src="/no-image.png"
              alt="No image"
              className="w-20 h-20 opacity-70 mb-2"
            />
            <span>No Image</span>
          </div>
        )}
      </div>

      {/* Right: Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Name
          </label>
          <input
            type="text"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#885ABB]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Color
          </label>
          <input
            type="text"
            value={(formData as any).color || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, color: e.target.value }))
            }
            className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#885ABB]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Slug
          </label>
          <input
            type="text"
            value={(formData as any).slug || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, slug: e.target.value }))
            }
            className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#885ABB]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={formData.status || "active"}
            onChange={(e) => handleChange("status", e.target.value)}
            className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#885ABB]/20"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Footer */}
      <div className="col-span-2 flex justify-end gap-4 mt-4">
        <button
          onClick={onCancel}
          className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={() => onSubmit(formData)}
          className="px-6 py-2 bg-[#885ABB] hover:bg-[#6f47a2] text-white rounded-lg font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
}
