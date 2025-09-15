import { Edit } from "lucide-react";
import { Button } from "../components/ui/Button";

interface FormTemplate {
  id: number;
  title: string;
  description: string;
  frequency: string;
  status: "Published" | "Draft";
}

interface FormTemplatesTableProps {
  templates: FormTemplate[];
  onEditTemplate: (id: number) => void;
}

const FormTemplatesTable = ({
  templates,
  onEditTemplate,
}: FormTemplatesTableProps) => {
  return (
    <div
      className="overflow-hidden rounded-xl bg-white
               border border-transparent transition-shadow hover:shadow-sm hover:border-[#BBB9F3]"
    >
      <table className="w-full">
        <thead className="bg-[#F9F9F9] shadow-[0_1px_2px_rgba(0,0,0,0.06)] border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-[#402B69]">
              #
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-[#402B69]">
              Title
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-[#402B69]">
              Description
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-[#402B69]">
              Frequency
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-[#402B69]">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-[#402B69]">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {templates.map((t, i) => (
            <tr key={t.id} className="even:bg-[#F9F9F9]">
              <td className="px-6 py-4 text-sm font-medium text-[#402B69]">
                {t.id}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-[#402B69]">
                {t.title}
              </td>
              <td className="px-6 py-4 max-w-xs text-sm text-gray-600">
                <div className="truncate">{t.description}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{t.frequency}</td>
              <td className="px-6 py-4">
                <span
                  className={[
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    t.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700",
                  ].join(" ")}
                >
                  {t.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEditTemplate(t.id)}
                  className="h-8 w-8 p-0 hover:bg-[#dbd3f1]"
                  aria-label={`Edit ${t.title}`}
                >
                  <Edit size={16} className="text-gray-500" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormTemplatesTable;
