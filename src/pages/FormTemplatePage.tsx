import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import FormTemplatesHeader from "../components/FormTemplatesHeader";
import FormTemplatesTable from "../components/FormTemplatesTable";
import { useNavigate } from "react-router-dom";

const FormTemplatesPage = ({
  onNavigateBack,
}: {
  onNavigateBack: () => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState("10");
  const navigate = useNavigate();

  const formTemplates = [
    {
      id: 1,
      title: "Botox Consultation Form",
      description:
        "Comprehensive consultation form for Botox treatments including medical history, treatment goals, and consent forms.",
      frequency: "Per appointment",
      status: "Published" as const,
    },
    {
      id: 2,
      title: "Dermal Filler Assessment",
      description:
        "Detailed assessment form for dermal filler procedures covering facial analysis and treatment planning.",
      frequency: "Per session",
      status: "Published" as const,
    },
    {
      id: 3,
      title: "Skin Treatment Evaluation",
      description:
        "Standard evaluation form for various skin treatments including chemical peels and facial procedures.",
      frequency: "Monthly",
      status: "Draft" as const,
    },
    {
      id: 4,
      title: "Anti-Aging Consultation",
      description:
        "Comprehensive form for anti-aging consultations covering multiple treatment modalities.",
      frequency: "Quarterly",
      status: "Published" as const,
    },
    {
      id: 5,
      title: "Follow-up Assessment",
      description:
        "Post-treatment follow-up form to track patient satisfaction and treatment outcomes.",
      frequency: "2 weeks post-treatment",
      status: "Draft" as const,
    },
    {
      id: 6,
      title: "Medical History Intake",
      description:
        "Initial medical history and consent form for new patients including allergies and medications.",
      frequency: "One-time",
      status: "Published" as const,
    },
  ];

  const filtered = formTemplates.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditTemplate = (id: number) => {
    navigate(`/forms/${id}/builder`);
  };

  const handleCreateNew = () => {
    console.log("Create new template");
  };

  return (
    <div className="mx-auto max-w-8xl px-2 py-2 sm:px-6 lg:px-8">
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
    </div>
  );
};

export default FormTemplatesPage;
