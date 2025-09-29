import { AlertTriangle } from "lucide-react";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  type: "category" | "service";
  name: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmModal = ({
  isOpen,
  type,
  name,
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Delete {type === "category" ? "Category" : "Service"}
          </h2>
        </div>

        {/* Body */}
        <div className="space-y-3 mb-6">
          <p className="text-gray-600">
            Are you sure you want to delete{" "}
            <span className="font-medium text-gray-900">"{name}"</span>?
          </p>
          {type === "category" && (
            <p className="text-sm text-red-600">
              Warning: This will also delete all services in this category.
            </p>
          )}
          <p className="text-sm text-gray-500">This action cannot be undone.</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-colors"
          >
            Delete {type === "category" ? "Category" : "Service"}
          </button>
        </div>
      </div>
    </div>
  );
};
