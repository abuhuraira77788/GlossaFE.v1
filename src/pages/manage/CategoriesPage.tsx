"use client";

import { useState } from "react";
import { Button } from "../../components/ui/Button";
import CategoriesTable from "../../components/CategoriesTable";
import CategoryForm from "../../components/CategoriesForm";
import { Category } from "../../types/categories";

export default function CategoriesPage() {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);

  const handleCreateNew = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (cat: Category) => {
    setEditing(cat);
    setShowForm(true);
  };

  const handleSubmit = async (data: Partial<Category>) => {
    console.log("Saving category:", data);
    setShowForm(false);
    setEditing(null);
  };

  return (
    <div className="p-6">
      {/* 🔹 Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[22px] font-semibold text-[#885ABB]">Categories</h1>
        {!showForm && (
          <Button
            onClick={handleCreateNew}
            className="bg-[#885ABB] hover:bg-[#6f47a2] text-white px-6 py-2 rounded-lg font-semibold"
          >
            Add Category
          </Button>
        )}
      </div>

      {/* 🔹 Conditional Render */}
      {!showForm ? (
        <CategoriesTable
          // just pass static data for now
          onEdit={handleEdit}
        />
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <CategoryForm
            initialData={editing || {}}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}
    </div>
  );
}
