import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ConsultationSection from "../components/ConsultationSection";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const ConsultationsPage = ({
  onNavigateToTemplates,
}: {
  onNavigateToTemplates?: () => void;
}) => {
  const [currentDate, setCurrentDate] = useState("Tuesday, September 16");
  const navigate = useNavigate();

  const incompleteConsultations = [
    {
      id: "1",
      clientName: "Susan Wraith",
      consultationType: "Botox consultation form",
      time: "10:00 am",
      services:
        "1 Area No More Lines, 2 Areas No More Lines, 3 Areas No More Lines, 5 Areas No More Lines, Acne Appearance Injections, Calf Hypertrophy, Free Consultation, Christmas package, Hyperhidrosis - Anti Sweat, Lip Flip, Neck 2 Areas - Anti Wrinkle Injections",
    },
    {
      id: "2",
      clientName: "Gail Hunt",
      consultationType: "Botox consultation form",
      time: "10:00 am",
      services:
        "1 Area No More Lines, 2 Areas No More Lines, 3 Areas No More Lines, 5 Areas No More Lines, Acne Appearance Injections, Calf Hypertrophy, Free Consultation, Christmas package, Hyperhidrosis - Anti Sweat, Lip Flip, Neck 2 Areas - Anti Wrinkle Injections",
    },
    {
      id: "3",
      clientName: "Lorna Newell",
      consultationType: "Botox consultation form",
      time: "10:15 am",
      services:
        "1 Area No More Lines, 2 Areas No More Lines, 3 Areas No More Lines, 5 Areas No More Lines, Acne Appearance Injections, Calf Hypertrophy, Free Consultation, Christmas package, Hyperhidrosis - Anti Sweat, Lip Flip, Neck 2 Areas - Anti Wrinkle Injections",
    },
    {
      id: "4",
      clientName: "Gillian Denton",
      consultationType: "Botox consultation form",
      time: "10:55 am",
      services:
        "1 Area No More Lines, 2 Areas No More Lines, 3 Areas No More Lines, 5 Areas No More Lines, Acne Appearance Injections, Calf Hypertrophy, Free Consultation, Christmas package, Hyperhidrosis - Anti Sweat, Lip Flip, Neck 2 Areas - Anti Wrinkle Injections",
    },
  ];

  const completeConsultations = [
    {
      id: "5",
      clientName: "Emma Thompson",
      consultationType: "Dermal Filler consultation form",
      time: "2:00 pm",
      services:
        "Lip Enhancement, Cheek Augmentation, Nasolabial Fold Treatment, Marionette Lines, Jawline Contouring",
    },
    {
      id: "6",
      clientName: "James Wilson",
      consultationType: "Skin Treatment consultation form",
      time: "3:30 pm",
      services:
        "Chemical Peel, Microneedling, Vitamin C Infusion, Hydrating Facial, LED Light Therapy",
    },
  ];

  const handlePreviousDate = () => {
    // TODO: real date state later
    console.log("Previous date");
  };

  const handleNextDate = () => {
    console.log("Next date");
  };

  const handleConsultationClick = (id: string) => {
    console.log("Navigate to consultation:", id);
  };

  return (
    <div className="mx-auto max-w-8xl px-2 py-2 sm:px-6 lg:px-8">
      <NavigationBar
        onQuickPayment={() => console.log("Quick payment clicked")}
        onOtherAction={() => console.log("New consultation clicked")}
      />

      <div className="space-y-8">
        <ConsultationSection
          title="Incomplete"
          consultations={incompleteConsultations}
          onConsultationClick={handleConsultationClick}
          actionButton={
            <Button
              onClick={() => navigate("/form-templates")}
              className="px-6 bg-[#885ABB] text-white hover:opacity-90"
            >
              Form Templates
            </Button>
          }
        />

        <ConsultationSection
          title="Complete"
          consultations={completeConsultations}
          onConsultationClick={handleConsultationClick}
        />
      </div>
    </div>
  );
};

export default ConsultationsPage;
