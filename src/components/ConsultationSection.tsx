import ConsultationCard from "./ConsultationCard";
import { ReactNode } from "react";

interface Consultation {
  id: string;
  clientName: string;
  consultationType: string;
  time: string;
  services: string;
}

interface ConsultationSectionProps {
  title: string;
  consultations: Consultation[];
  onConsultationClick: (id: string) => void;
  actionButton?: ReactNode;
}

const ConsultationSection = ({
  title,
  consultations,
  onConsultationClick,
  actionButton,
}: ConsultationSectionProps) => {
  return (
    <section className="mb-8">
      {/* Title row with optional button */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[#402B69]">{title}</h3>
        {actionButton}
      </div>

      <div className="space-y-4">
        {consultations.map((c) => (
          <ConsultationCard
            key={c.id}
            clientName={c.clientName}
            consultationType={c.consultationType}
            time={c.time}
            services={c.services}
            onClick={() => onConsultationClick(c.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default ConsultationSection;
