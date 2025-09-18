"use client";
import { useState } from "react";
import { FormTemplate, FormSection } from "../../../../types/forms";
import Sidebar from "./Sidebar";
import Preview from "./Preview";

const mockTemplate: FormTemplate = {
  id: "3fd4e5cf-4cf4-4719-bbd8-1141d32d26bf",
  title: "B12 Injections",
  description: "B12 Injections",
  services: [
    "Vitamin B12 Injection - Single",
    "Vitamin B12 Injection - 4 Weekly",
  ],
  sections: [
    {
      id: "s1",
      type: "disclaimer",
      title: "Client Disclaimer",
      content:
        "Client Disclaimer I understand that the B12 injection is a medical procedure and I consent to receive this treatment.",
    },
    { id: "s2", type: "contact", title: "Contact Details" },
    { id: "s3", type: "medical", title: "Medical Conditions" },
    {
      id: "s4",
      type: "text",
      title: "Text Block",
      content:
        "Vitamin B-12 helps maintain good health and supports energy levels. This injection provides essential nutrients your body needs.",
    },
    {
      id: "s5",
      type: "question",
      title: "General Question",
      question: "Can you confirm you are not pregnant?",
      options: ["Yes", "No"],
    },
    {
      id: "s6",
      type: "policy",
      title: "Privacy Policy",
      content:
        "Introduction: The following privacy notice explains how we collect, use, and protect your personal information in accordance with GDPR regulations.",
    },
  ],
};

interface FormBuilderProps {
  templateId?: string;
}

export default function FormBuilder({ templateId }: FormBuilderProps) {
  const [template, setTemplate] = useState<FormTemplate>(mockTemplate);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const updateTemplate = (updates: Partial<FormTemplate>) => {
    setTemplate((prev) => ({ ...prev, ...updates }));
  };

  const deleteSection = (sectionId: string) => {
    setTemplate((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== sectionId),
    }));
  };

  const addSection = (newSection: FormSection) => {
    setTemplate((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
    }));
  };

  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[320px] border-r border-gray-200 bg-white overflow-y-auto">
        <Sidebar
          template={template}
          updateTemplate={updateTemplate}
          deleteSection={deleteSection}
          addSection={addSection}
          onPreview={() => setIsPreviewOpen(true)}
        />
      </div>

      {/* Normal Preview Panel */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <Preview template={template} />
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <Preview template={template} />
          </div>
        </div>
      )}
    </div>
  );
}
