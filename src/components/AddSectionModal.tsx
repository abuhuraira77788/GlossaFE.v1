"use client";
import {
  X,
  Plus,
  User,
  Stethoscope,
  Megaphone,
  HelpCircle,
  Heading,
  FileText,
  ShieldCheck,
  FileWarning,
} from "lucide-react";
import { FormSection } from "../types/forms";

interface AddSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (section: FormSection) => void;
}

const sectionOptions = [
  {
    type: "contact",
    title: "Contact Details",
    description: "Collect contact information",
    icon: User,
  },
  {
    type: "medical",
    title: "Medical Conditions",
    description: "Select applicable medical conditions",
    icon: Stethoscope,
  },
  {
    type: "marketing",
    title: "Marketing Details",
    description: "Opt-in for SMS and Email notifications",
    icon: Megaphone,
  },
  {
    type: "question",
    title: "General Question",
    description: "Add custom questions with various answer types",
    icon: HelpCircle,
  },
  {
    type: "heading",
    title: "Heading",
    description: "To name a section of your form",
    icon: Heading,
  },
  {
    type: "text",
    title: "Text Block",
    description: "For instructions or terms and conditions",
    icon: FileText,
  },
  {
    type: "policy",
    title: "Privacy Policy",
    description: "Standard privacy policy text block",
    icon: ShieldCheck,
  },
  {
    type: "disclaimer",
    title: "Client Disclaimer",
    description: "Standard client disclaimer text block",
    icon: FileWarning,
  },
];

export default function AddSectionModal({
  isOpen,
  onClose,
  onAdd,
}: AddSectionModalProps) {
  if (!isOpen) return null;

  const handleAdd = (type: string, title: string) => {
    const newSection: FormSection = {
      id: `s${Date.now()}`,
      type: type as FormSection["type"],
      title,
    };
    onAdd(newSection);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Add Form Field
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {sectionOptions.map(({ type, title, description, icon: Icon }) => (
            <button
              key={type}
              onClick={() => handleAdd(type, title)}
              className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-purple-50 transition"
            >
              <div className="flex items-center gap-3 text-left">
                <Icon size={20} className="text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{title}</p>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
              </div>
              <Plus size={18} className="text-[#885ABB]" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="w-full text-[#885ABB] font-medium py-2 mt-4 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
