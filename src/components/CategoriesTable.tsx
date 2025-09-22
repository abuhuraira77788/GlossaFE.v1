import React from "react";
import {
  Edit,
  Trash2,
  ChevronUp,
  ChevronDown,
  Download,
  Plus,
} from "lucide-react";
import { Category } from "../types/categories";

// Temporary static data
const staticCategories: Category[] = [
  {
    id: "1",
    name: "Hair Care",
    description: "Shampoos, conditioners, and treatments",
    status: "active",
    image: "https://via.placeholder.com/48x48.png?text=HC",
  },
  {
    id: "2",
    name: "Skin Care",
    description: "Lotions and moisturizers",
    status: "inactive",
    image: "https://via.placeholder.com/48x48.png?text=SC",
  },
  {
    id: "3",
    name: "Makeup",
    description: "Foundations, lipsticks, and more",
    status: "active",
    image: "https://via.placeholder.com/48x48.png?text=MU",
  },
  {
    id: "4",
    name: "Fragrance",
    description: "Perfumes and body sprays",
    status: "inactive",
    image: "https://via.placeholder.com/48x48.png?text=FR",
  },
  {
    id: "5",
    name: "Nail Care",
    description: "Nail polish and tools",
    status: "active",
    image: "https://via.placeholder.com/48x48.png?text=NC",
  },
  {
    id: "6",
    name: "Tools",
    description: "Brushes and accessories",
    status: "inactive",
    image: "https://via.placeholder.com/48x48.png?text=TL",
  },
  {
    id: "7",
    name: "Men’s Grooming",
    description: "Shaving creams and razors",
    status: "active",
    image: "https://via.placeholder.com/48x48.png?text=MG",
  },
  {
    id: "8",
    name: "Spa Products",
    description: "Relaxation essentials",
    status: "active",
    image: "https://via.placeholder.com/48x48.png?text=SP",
  },
];

// ✅ Props interface
interface CategoriesTableProps {
  onEdit?: (cat: Category) => void;
  onDelete?: (cat: Category) => void;
  onCreateNew?: () => void; // 🔹 NEW
}

const CategoriesTable: React.FC<CategoriesTableProps> = ({
  onEdit,
  onDelete,
  onCreateNew,
}) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow">
      {/* Top Controls */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Showing</span>
          <span className="bg-[#F9F9F9] px-2 py-1 rounded text-[#402B69] font-medium border border-[#BBB9F3]">
            {staticCategories.length}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={onCreateNew} // 🔹 trigger create flow
            className="flex items-center gap-2 px-4 py-2 bg-[#885ABB] hover:bg-[#6f47a2] text-white rounded-lg text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Create New
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium">
            <Trash2 className="w-4 h-4" />
            Delete All
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#885ABB] hover:bg-[#6f47a2] text-white rounded-lg text-sm font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-[#BBB9F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#402B69]/20 focus:border-[#402B69] text-sm w-48"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-[#BBB9F3]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F9F9F9] border-b border-[#BBB9F3]">
                {["#", "Image", "Name", "Description", "Status", "Action"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-6 py-4 text-left text-sm font-semibold text-[#402B69]"
                    >
                      <div className="flex items-center gap-2">
                        {header}
                        <div className="flex flex-col">
                          <ChevronUp className="w-3 h-3 text-gray-400" />
                          <ChevronDown className="w-3 h-3 text-gray-400 -mt-1" />
                        </div>
                      </div>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {staticCategories.map((cat, index) => (
                <tr
                  key={cat.id}
                  className={`border-b border-[#EEE] hover:bg-[#F9F9F9] ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 bg-gray-100 rounded border border-[#BBB9F3] flex items-center justify-center">
                      {cat.image ? (
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <div className="text-xs text-gray-400 text-center">
                          no image
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {cat.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {cat.description || "—"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        cat.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {cat.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onEdit?.(cat)}
                        className="p-2 text-[#402B69] hover:text-[#2d1f4a] hover:bg-[#F3F0FF] rounded-lg"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete?.(cat)}
                        className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTable;
