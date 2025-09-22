import { FormTemplate } from "../../../../types/forms";

interface PreviewProps {
  template: FormTemplate;
}

const medicalConditions = [
  "Heart Condition",
  "Diabetes",
  "Epilepsy",
  "High Blood Pressure",
  "Allergies",
  "Pregnancy",
];

export default function Preview({ template }: PreviewProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {template.title}
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {template.description}
          </p>
        </div>

        {/* Sections */}
        {template.sections.length > 0 ? (
          template.sections.map((section, index) => (
            <div
              key={section.id}
              className={`space-y-4 ${
                index !== template.sections.length - 1
                  ? "border-b border-gray-200 pb-6"
                  : ""
              }`}
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {section.title}
              </h2>

              {section.type === "disclaimer" && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              )}

              {section.type === "contact" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Enter your first name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#885ABB] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Enter your last name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#885ABB] focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#885ABB] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              {section.type === "medical" && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Please select any conditions that apply to you:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {medicalConditions.map((condition) => (
                      <label
                        key={condition}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#885ABB] bg-white border-gray-300 rounded focus:ring-[#885ABB] focus:ring-2"
                        />
                        <span className="text-sm text-gray-700">
                          {condition}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "question" && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-700 font-medium">
                    {section.question}
                  </p>
                  <div className="space-y-2">
                    {section.options?.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={section.id}
                          className="w-4 h-4 text-[#885ABB] bg-white border-gray-300 focus:ring-[#885ABB] focus:ring-2"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "text" && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              )}

              {section.type === "policy" && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 italic">No sections added yet.</p>
            <p className="text-sm text-gray-400 mt-2">
              Add sections using the form editor to see your form preview.
            </p>
          </div>
        )}

        {template.sections.length > 0 && (
          <div className="pt-6 border-t border-gray-200">
            <button className="w-full bg-[#885ABB] text-white py-3 rounded-lg hover:bg-[#724a9e] transition-colors font-medium">
              Submit Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
