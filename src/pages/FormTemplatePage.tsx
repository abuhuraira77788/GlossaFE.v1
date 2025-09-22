import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import FormTemplatesHeader from "../components/FormTemplatesHeader";
import FormTemplatesTable from "../components/FormTemplatesTable";
import FormBuilder from "./forms/[id]/builder/FormBuilder";
import { FormTemplate } from "../types/forms";
import { useNavigate } from "react-router-dom";

const FormTemplatesPage = ({
  onNavigateBack,
}: {
  onNavigateBack: () => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState("10");

  // State for builder mode
  const [activeTemplate, setActiveTemplate] = useState<FormTemplate | null>(
    null
  );
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const navigate = useNavigate();

  // Mock templates (later replace with API)
  const formTemplates: FormTemplate[] = [
    {
      id: "1",
      title: "Botox Consultation Form",
      description:
        "Comprehensive consultation form for Botox treatments including medical history, treatment goals, and consent forms.",
      services: [],
      sections: [],
    },
    {
      id: "2",
      title: "Dermal Filler Assessment",
      description:
        "Detailed assessment form for dermal filler procedures covering facial analysis and treatment planning.",
      services: [],
      sections: [],
    },
    {
      id: "3",
      title: "Skin Treatment Evaluation",
      description:
        "Standard evaluation form for various skin treatments including chemical peels and facial procedures.",
      services: [],
      sections: [],
    },
    {
      id: "4",
      title: "Anti-Aging Consultation",
      description:
        "Comprehensive form for anti-aging consultations covering multiple treatment modalities.",
      services: [],
      sections: [],
    },
    {
      id: "5",
      title: "Follow-up Assessment",
      description:
        "Post-treatment follow-up form to track patient satisfaction and treatment outcomes.",
      services: [],
      sections: [],
    },
    {
      id: "6",
      title: "Medical History Intake",
      description:
        "Initial medical history and consent form for new patients including allergies and medications.",
      services: [],
      sections: [],
    },
  ];

  // Search filter
  const filtered = formTemplates.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // === Handlers ===

  // Edit existing template
  const handleEditTemplate = (id: string) => {
    const template = formTemplates.find((t) => t.id === id);
    if (template) {
      setActiveTemplate(template);
      setIsNew(false);
      setIsBuilderOpen(true);
    }
  };

  // Create new template
  const handleCreateNew = () => {
    setActiveTemplate({
      id: `tmp-${Date.now()}`, // temporary until backend assigns real ID
      title: "Untitled",
      description: "",
      services: [],
      sections: [],
    });
    setIsNew(true);
    setIsBuilderOpen(true);
  };

  // Back from builder
  const handleCloseBuilder = () => {
    setActiveTemplate(null);
    setIsBuilderOpen(false);
    setIsNew(false);
  };

  return (
    <div className="mx-auto max-w-8xl px-2 py-2 sm:px-6 lg:px-8">
      {!isBuilderOpen ? (
        <>
          {/* Back + Title */}
          <div className="mb-8 flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#402B69]"
            >
              <ArrowLeft size={18} />
              Back to Consultations
            </Button>
            <h1 className="text-2xl font-semibold text-[#402B69]">
              Form Templates
            </h1>
          </div>

          <FormTemplatesHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
            onCreateNew={handleCreateNew}
          />

          <FormTemplatesTable
            templates={filtered}
            onEditTemplate={handleEditTemplate}
          />

          <div className="mt-6 text-sm text-gray-600">
            Showing {Math.min(parseInt(itemsPerPage), filtered.length)} of{" "}
            {filtered.length} templates
          </div>
        </>
      ) : (
        <FormBuilder
          template={activeTemplate!}
          isNew={isNew}
          onClose={handleCloseBuilder}
        />
      )}
    </div>
  );
};

export default FormTemplatesPage;
