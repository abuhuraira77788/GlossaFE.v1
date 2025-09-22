import React from "react";

interface Props {
  onCancel: () => void;
}

const CreateCategoryLayout: React.FC<Props> = ({ onCancel }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Bulk upload */}
      <div className="bg-white rounded-lg border border-[#885ABB] p-4">
        <h2 className="text-lg font-semibold text-[#402B69] mb-4">
          Add Bulk Category
        </h2>
        <div className="bg-[#F3F0FF] border border-[#D6CCF7] rounded-lg p-8 flex flex-col items-center justify-center h-56">
          <p className="text-[#885ABB] text-xl font-medium">
            Upload a CSV file
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-[#885ABB] hover:bg-[#6f47a2] text-white rounded-lg font-medium">
          Upload
        </button>
      </div>

      {/* Right: Manual form */}
      <div className="bg-white rounded-lg border border-[#885ABB] p-4">
        <h2 className="text-lg font-semibold text-[#402B69] mb-4">
          Add Category
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#402B69] mb-1">
              Category Name
            </label>
            <input
              type="text"
              className="w-full border border-[#BBB9F3] rounded px-3 py-2 bg-[#F9F9F9] focus:ring-2 focus:ring-[#885ABB]/40 focus:border-[#885ABB] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#402B69] mb-1">
              Category Slug
            </label>
            <input
              type="text"
              className="w-full border border-[#BBB9F3] rounded px-3 py-2 bg-[#F9F9F9] focus:ring-2 focus:ring-[#885ABB]/40 focus:border-[#885ABB] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#402B69] mb-1">
              Image
            </label>
            <div className="bg-[#F3F0FF] border border-[#D6CCF7] rounded-lg p-8 flex items-center justify-center h-40">
              <p className="text-[#885ABB]">Drag and drop</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#885ABB] hover:bg-[#6f47a2] text-white rounded-lg font-medium">
              Save
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryLayout;
