import { useParams } from "react-router-dom";
import FormBuilder from "./forms/[id]/builder/FormBuilder";

export default function FormBuilderPage() {
  const { id } = useParams();

  return (
    <div className="h-full flex">
      <FormBuilder templateId={id!} />
    </div>
  );
}
