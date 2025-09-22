import { ChevronRight, Clock } from "lucide-react";

interface ConsultationCardProps {
  clientName: string;
  consultationType: string;
  time: string;
  services: string;
  onClick?: () => void;
}

const ConsultationCard = ({
  clientName,
  consultationType,
  time,
  services,
  onClick,
}: ConsultationCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left rounded-xl bg-white p-5 transition-shadow hover:shadow-sm border border-transparent hover:border-[#BBB9F3]"
      aria-label={`Open consultation for ${clientName}`}
    >
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-4">
            <h3 className="truncate text-lg font-semibold text-[#402B69]">
              {clientName}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock size={14} />
              <span className="whitespace-nowrap">{time}</span>
            </div>
          </div>

          <p className="mb-2 text-sm font-medium text-[#885ABB]">
            {consultationType}
          </p>

          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
            {services}
          </p>
        </div>

        <ChevronRight
          size={20}
          className="ml-4 shrink-0 text-gray-400 transition-colors group-hover:text-[#885ABB]"
          aria-hidden="true"
        />
      </div>
    </button>
  );
};

export default ConsultationCard;
