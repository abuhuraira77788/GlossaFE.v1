import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import QuickPaymentPanel from "../components/QuickPaymentPanel";
import PosPaymentStep from "../components/PosPaymentStep";

interface NavigationBarProps {
  onQuickPayment?: () => void;
  onOtherAction?: () => void;
}

const NavigationBar = ({ onQuickPayment }: NavigationBarProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const handlePreviousDate = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDate = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const [showQuickPaymentPanel, setShowQuickPaymentPanel] = useState(false);
  const [sidebarMode, setSidebarMode] = useState<"quick" | "paynow" | null>(
    null
  );

  return (
    <div
      className="mb-4 flex items-center justify-between rounded-xl bg-white p-4 
               border border-transparent transition-shadow hover:shadow-sm hover:border-[#BBB9F3]"
    >
      {/* Date navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={handlePreviousDate}
          aria-label="Previous day"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#BBB9F3] text-[#402B69] transition hover:bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#885ABB]/40"
        >
          <ChevronLeft size={18} />
        </button>

        <h2 className="px-4 text-lg font-semibold text-[#402B69]">
          {formatDate(currentDate)}
        </h2>

        <button
          onClick={handleNextDate}
          aria-label="Next day"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#BBB9F3] text-[#402B69] transition hover:bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#885ABB]/40"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => {
            setShowQuickPaymentPanel(true);
            onQuickPayment?.();
          }}
          className="bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-lg px-5 py-2 font-bold flex items-center justify-center gap-2 transition"
        >
          <img src="/quick.svg" alt="Quick Payment" className="w-5 h-5" />
          Quick Payment
        </button>
      </div>

      {/* Quick Payment side panel */}
      {showQuickPaymentPanel && (
        <QuickPaymentPanel
          onClose={() => setShowQuickPaymentPanel(false)}
          onProceed={() => {
            setShowQuickPaymentPanel(false);
            setSidebarMode("quick");
          }}
        />
      )}

      {/* POS Payment step */}
      {sidebarMode && (
        <PosPaymentStep
          selectedService={{
            id: "1",
            name: "Quick Service",
            duration: "30 min",
            price: "£35",
          }}
          selectedCustomer="Walk-in"
          appointmentTime={currentDate.toISOString()}
          tip={0}
          setTip={() => {}}
          goToFinalPayment={() => setSidebarMode(null)}
          onClose={() => setSidebarMode(null)}
          mode={sidebarMode}
        />
      )}
    </div>
  );
};

export default NavigationBar;
