"use client";
import { useState, useMemo } from "react";
import { FormTemplate, FormSection } from "../../../../types/forms";
import Sidebar from "./Sidebar";
import Preview from "./Preview";

interface FormBuilderProps {
  template: FormTemplate;
  isNew: boolean;
  onClose: () => void;
}

export default function FormBuilder({
  template,
  isNew,
  onClose,
}: FormBuilderProps) {
  const [templateState, setTemplateState] = useState<FormTemplate>(template);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // === Helpers ===
  const updateTemplate = (updates: Partial<FormTemplate>) => {
    setTemplateState((prev) => ({ ...prev, ...updates }));
  };

  const deleteSection = (sectionId: string) => {
    setTemplateState((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== sectionId),
    }));
  };

  const addSection = (newSection: FormSection) => {
    setTemplateState((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
    }));
  };

  // === Completion Calculation ===
  const completion = useMemo(() => {
    let score = 0;

    // Title (ignore if still "Untitled")
    if (templateState.title.trim() && templateState.title !== "Untitled") {
      score += 25;
    }

    // Description (ignore if still empty)
    if (templateState.description.trim()) {
      score += 25;
    }

    // At least one service
    if (templateState.services.length > 0) {
      score += 25;
    }

    // At least one section
    if (templateState.sections.length > 0) {
      score += 25;
    }

    return score;
  }, [templateState]);

  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[320px] border-r border-gray-200 bg-white overflow-y-auto">
        <Sidebar
          template={templateState}
          updateTemplate={updateTemplate}
          deleteSection={deleteSection}
          addSection={addSection}
          onPreview={() => setIsPreviewOpen(true)}
          onClose={onClose}
          completion={completion}
        />
      </div>

      {/* Main Preview Panel */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <Preview template={templateState} />
      </div>

      {/* Fullscreen Modal Preview */}
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

            <Preview template={templateState} />
          </div>
        </div>
      )}
    </div>
  );
}
