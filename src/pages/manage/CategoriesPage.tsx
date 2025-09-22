"use client";

import { useState } from "react";
import { Button } from "../../components/ui/Button";
import CategoriesTable from "../../components/CategoriesTable";
import CategoryForm from "../../components/CategoriesForm";
import { Category } from "../../types/categories";
import QuickPaymentPanel from "../../components/QuickPaymentPanel";
import PosPaymentStep from "../../components/PosPaymentStep";
import CreateCategoryLayout from "../../components/CreateCategoryLayout";

export default function CategoriesPage() {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);

  // 🔹 Quick Payment states
  const [showQuickPaymentPanel, setShowQuickPaymentPanel] = useState(false);
  const [sidebarMode, setSidebarMode] = useState<"quick" | "paynow" | null>(
    null
  );

  // Handlers
  const handleCreateNew = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (cat: Category) => {
    setEditing(cat);
    setShowForm(true);
  };

  const handleDelete = (cat: Category) => {
    alert(`Delete ${cat.name}? (stub handler)`);
  };

  return (
    <div className="">
      {/* Header Row */}
      <div className="bg-white border border-gray-200 -mx-6 -my-6 px-6 py-5 mb-6 flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-[#885ABB]">Categories</h1>

        <Button
          onClick={() => setShowQuickPaymentPanel(true)}
          size="lg"
          className="flex-[0.15] bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition"
        >
          <img src="/quick.svg" alt="Quick Payment" className="w-5 h-5" />
          Quick Payment
        </Button>
      </div>

      {/* Main Content */}
      {!showForm ? (
        <CategoriesTable
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCreateNew={handleCreateNew}
        />
      ) : editing ? (
        // 🔹 Edit mode
        <CategoryForm
          initialData={editing}
          onSubmit={() => setShowForm(false)}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        // 🔹 Create new mode
        <CreateCategoryLayout onCancel={() => setShowForm(false)} />
      )}

      {/* 🔹 Quick Payment Panel */}
      {showQuickPaymentPanel && (
        <QuickPaymentPanel
          onClose={() => setShowQuickPaymentPanel(false)}
          onProceed={() => {
            setShowQuickPaymentPanel(false);
            setSidebarMode("quick");
          }}
        />
      )}

      {/* 🔹 Sidebar (POS Payment Flow) */}
      {sidebarMode && (
        <PosPaymentStep
          selectedService={{
            id: "1",
            name: "Quick Service",
            duration: "30 min",
            price: "£35",
          }}
          selectedCustomer="Walk-in"
          appointmentTime={new Date().toISOString()}
          tip={0}
          setTip={() => {}}
          goToFinalPayment={() => setSidebarMode(null)}
          onClose={() => setSidebarMode(null)}
          mode={sidebarMode}
        />
      )}
    </div>
  );
}
