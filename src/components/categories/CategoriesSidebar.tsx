import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

interface CategoriesSidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategorySelect: (id: string) => void;
  onCategoryAdd: () => void;
  onCategoryEdit: (category: Category) => void;
  onCategoryDelete: (id: string, name: string) => void;
}

export const CategoriesSidebar = ({
  categories,
  activeCategory,
  onCategorySelect,
  onCategoryAdd,
  onCategoryEdit,
  onCategoryDelete,
}: CategoriesSidebarProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string>("");

  return (
    <div className="h-full bg-[#F9F9F9] border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        <button
          onClick={onCategoryAdd}
          className="w-full flex items-center justify-center bg-[#885ABB] hover:bg-[#6f47a2] text-white rounded-xl px-4 py-2 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </button>
      </div>

      {/* Categories List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative group p-4 rounded-xl cursor-pointer transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-[#885ABB] text-white shadow-md"
                : "hover:bg-gray-100"
            }`}
            onClick={() => onCategorySelect(category.id)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory("")}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{category.name}</span>

              {/* Action buttons */}
              <div
                className={`flex gap-1 transition-opacity duration-200 ${
                  hoveredCategory === category.id ||
                  activeCategory === category.id
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                {/* Edit */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCategoryEdit(category);
                  }}
                  className={`p-1.5 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? "hover:bg-white/20 text-white"
                      : "text-gray-500 hover:text-[#885ABB] hover:bg-purple-50"
                  }`}
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </button>

                {/* Delete */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCategoryDelete(category.id, category.name);
                  }}
                  className={`p-1.5 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? "hover:bg-white/20 text-white"
                      : "text-gray-500 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Active indicator */}
            {activeCategory === category.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
