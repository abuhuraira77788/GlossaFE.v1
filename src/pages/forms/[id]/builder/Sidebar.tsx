"use client";
import { useState } from "react";
import { FormTemplate, FormSection } from "../../../../types/forms";
import { X, Edit2, Trash2, Plus } from "lucide-react";
import AddSectionModal from "../../../../components/AddSectionModal";

interface SidebarProps {
  template: FormTemplate;
  updateTemplate: (updates: Partial<FormTemplate>) => void;
  deleteSection: (sectionId: string) => void;
  addSection: (section: FormSection) => void;
  onPreview: () => void;
}

export default function Sidebar({
  template,
  updateTemplate,
  deleteSection,
  addSection,
  onPreview,
}: SidebarProps) {
  const [localTitle, setLocalTitle] = useState(template.title);
  const [localDescription, setLocalDescription] = useState(
    template.description
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTitleBlur = () => {
    updateTemplate({ title: localTitle });
  };

  const handleDescriptionBlur = () => {
    updateTemplate({ description: localDescription });
  };

  return (
    <div className="p-4 space-y-6 h-full relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[#402B69]">Form Editor</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
          <X size={16} />
        </button>
      </div>

      {/* Progress */}
      <div>
        <p className="text-sm text-gray-600 mb-2">Template Completion</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-[#885ABB] h-2 rounded-full w-[100%] transition-all duration-300"></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">100% Complete</p>
      </div>

      {/* Form Info */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            onBlur={handleTitleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#885ABB] focus:border-transparent transition-all"
            placeholder="Enter form title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Form Description
          </label>
          <textarea
            value={localDescription}
            onChange={(e) => setLocalDescription(e.target.value)}
            onBlur={handleDescriptionBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#885ABB] focus:border-transparent transition-all resize-none"
            rows={3}
            placeholder="Enter form description"
          />
        </div>
      </div>

      {/* Services */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Services
        </label>
        <div className="flex flex-wrap gap-2">
          {template.services.map((service) => (
            <div
              key={service}
              className="inline-flex items-center text-xs bg-purple-100 text-purple-700 px-3 py-1.5 rounded-md border border-purple-200"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">Sections</p>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {template.sections.length}
          </span>
        </div>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {template.sections.map((section) => (
            <div
              key={section.id}
              className="flex items-center justify-between border border-gray-200 bg-white px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-gray-900 block truncate">
                  {section.title}
                </span>
                <span className="text-xs text-gray-500 capitalize">
                  {section.type}
                </span>
              </div>

              <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => deleteSection(section.id)}
                  className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Open Modal Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:text-gray-700 hover:border-[#885ABB] hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
        >
          <Plus size={16} />
          Add New Section
        </button>
      </div>

      {/* Actions */}
      <div className="pt-4 space-y-3 mt-auto">
        <button className="w-full bg-[#885ABB] text-white py-2.5 rounded-lg hover:bg-[#724a9e] transition-colors font-medium">
          Save Template
        </button>
        <button
          onClick={onPreview}
          className="w-full border border-gray-300 bg-white text-gray-700 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
        >
          Preview
        </button>
      </div>

      {/* Add Section Modal */}
      <AddSectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(section) => addSection(section)}
      />
    </div>
  );
}
