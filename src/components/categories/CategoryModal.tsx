import { useState, useEffect } from "react";

interface Category {
  id: string;
  name: string;
}

interface CategoryModalProps {
  isOpen: boolean;
  mode: "add" | "edit";
  category?: Category;
  onClose: () => void;
  onSave: (data: { name: string }) => void;
}

export const CategoryModal = ({
  isOpen,
  mode,
  category,
  onClose,
  onSave,
}: CategoryModalProps) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName(category?.name || "");
    }
  }, [isOpen, category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave({ name: name.trim() });
      setName("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {mode === "add" ? "Add New Category" : "Edit Category"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="categoryName"
              className="text-sm font-medium text-gray-700"
            >
              Category Name
            </label>
            <input
              id="categoryName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name..."
              className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#885ABB] focus:border-[#885ABB]"
              autoFocus
            />
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
              disabled={!name.trim()}
              className="px-4 py-2 rounded-xl bg-[#885ABB] hover:bg-[#6f47a2] text-white transition-colors disabled:opacity-50"
            >
              {mode === "add" ? "Add Category" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
