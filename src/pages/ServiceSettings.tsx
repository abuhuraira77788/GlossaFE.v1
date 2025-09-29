"use client";

import { useState } from "react";
import {
  Clock,
  ListChecks,
  Ban,
  Info,
  Globe,
  CheckCircle2,
  X,
} from "lucide-react";

// Import forms
import OnlineAvailabilityForm from "../components/forms/OnlineAvailabilityForm";
import ScheduleOptimizationForm from "../components/forms/ScheduleOptimizationForm";
import WaitlistForm from "../components/forms/WaitlistForm";
import BlockedTimeTypesForm from "../components/forms/BlockedTimeTypesForm";
import CancellationReasonForm from "../components/forms/CancellationReasonForm";
import OnlineBookingOptionsForm from "../components/forms/OnlineBookingOptionsForm";
import NotificationsForm from "../components/forms/NotificationsForm";
import DateTimeSettingsForm from "../components/forms/DateTimeSettingsForm";
import CalendarSettingsForm from "../components/forms/CalendarSettingsForm";

// Registry for forms
const formRegistry: Record<string, React.FC<any>> = {
  dateTimeSettings: DateTimeSettingsForm,
  calendarSettings: CalendarSettingsForm,
  onlineAvailability: OnlineAvailabilityForm,
  scheduleOptimization: ScheduleOptimizationForm,
  waitlist: WaitlistForm,
  blockedTime: BlockedTimeTypesForm,
  cancellation: CancellationReasonForm,
  onlineBookingOptions: OnlineBookingOptionsForm,
  notifications: NotificationsForm,
};

type CardData = {
  id: string;
  title: string;
  desc: string;
  type: string;
  values: any;
};

export default function ServiceSettings() {
  const [active, setActive] = useState("time");
  const [editCard, setEditCard] = useState<CardData | null>(null);

  // Card definitions (only keep wanted ones)
  const [cards, setCards] = useState<Record<string, CardData[]>>({
    time: [
      {
        id: "dateTimeSettings",
        title: "Date and time settings",
        desc: "",
        type: "dateTimeSettings",
        values: {
          timezone: "(GMT +05:00) Karachi",
          format: "12 hours (e.g. 9:00pm)",
          firstDay: "Monday",
        },
      },
      {
        id: "calendarSettings",
        title: "Calendar settings",
        desc: "",
        type: "calendarSettings",
        values: {
          colorSource: "Category",
          processingTime: true,
          showBlocked: true,
        },
      },
    ],

    waitlist: [
      {
        id: "waitlist",
        title: "Waitlist Settings",
        desc: "Manage how clients are added to and managed in the waitlist.",
        type: "waitlist",
        values: {
          type: "auto",
          priority: "firstInLine",
          allowOnline: true,
          preferredTime: true,
        },
      },
    ],
    blocked: [
      {
        id: "blocked",
        title: "Blocked Time Types",
        desc: "Define types of blocked time (e.g., breaks, meetings).",
        type: "blockedTime",
        values: {
          blockTypes: [
            { type: "Coffee break", duration: "1 hour", compensation: "Paid" },
            { type: "Meeting", duration: "30 minutes", compensation: "Unpaid" },
          ],
        },
      },
    ],
    cancellation: [
      {
        id: "cancellation",
        title: "Cancellation Reasons",
        desc: "Customize reasons shown to clients when canceling appointments.",
        type: "cancellation",
        values: {
          reasons: [
            { name: "Sick" },
            { name: "Duplicate appointment" },
            { name: "Client not available" },
          ],
        },
      },
    ],

    online: [
      {
        id: "onlineAvail",
        title: "Online Availability",
        desc: "Choose when clients can book and change appointments online.",
        type: "onlineAvailability",
        values: {
          leadTimeMin: "Immediately",
          leadTimeMax: "12 months in the future",
          cancelPolicy: "Anytime",
        },
      },
      {
        id: "scheduleOpt",
        title: "Schedule Optimization",
        desc: "Reduce gaps in your calendar by selecting how slots are shown.",
        type: "scheduleOptimization",
        values: {
          interval: "15 minutes",
          slotMode: "regular",
        },
      },
      {
        id: "onlineBookingOptions",
        title: "Online Booking Options",
        desc: "Customize the experience for clients booking online.",
        type: "onlineBookingOptions",
        values: {
          allowTeamSelect: true,
          showStarRatings: true,
          allowGroupBooking: false,
          showFeaturedServices: true,
        },
      },
      {
        id: "notifications",
        title: "Notifications",
        desc: "Send notifications to staff about bookings.",
        type: "notifications",
        values: {
          sendToTeam: false,
          sendToEmails: true,
          emails: "test@example.com",
        },
      },
    ],
  });

  // Update card after save
  const updateCard = (id: string, newValues: any) => {
    setCards((prev) => {
      const updated: Record<string, CardData[]> = {};
      for (const [section, sectionCards] of Object.entries(prev)) {
        updated[section] = sectionCards.map((c) =>
          c.id === id ? { ...c, values: newValues } : c
        );
      }
      return updated;
    });
    setEditCard(null);
  };

  const sidebarItems = [
    { id: "time", label: "Time and calendar", icon: Clock },
    { id: "waitlist", label: "Waitlist", icon: ListChecks },
    { id: "blocked", label: "Blocked time types", icon: Ban },
    { id: "cancellation", label: "Cancellation reasons", icon: Info },
    { id: "online", label: "Online bookings", icon: Globe },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        <h2 className="px-6 py-4 font-semibold text-gray-900">Scheduling</h2>
        <nav className="flex-1 px-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#885ABB] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto space-y-6">
        {(cards[active] || []).map((card) => (
          <Card key={card.id} card={card} onEdit={setEditCard} />
        ))}
      </main>

      {/* Edit Modal */}
      {editCard && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Edit {editCard.title}
              </h2>
              <button
                onClick={() => setEditCard(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {(() => {
                const Form = formRegistry[editCard.type];
                if (!Form) {
                  return (
                    <p className="text-gray-500 text-sm">
                      No editor available yet for this section.
                    </p>
                  );
                }
                return (
                  <Form
                    values={editCard.values}
                    onSave={(vals: any) => updateCard(editCard.id, vals)}
                    onCancel={() => setEditCard(null)}
                  />
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* --- Reusable Card --- */
const Card = ({
  card,
  onEdit,
}: {
  card: CardData;
  onEdit: (c: CardData) => void;
}) => {
  const renderContent = () => {
    switch (card.type) {
      case "waitlist":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-900">Waitlist type</p>
                <p>{card.values.type || "Automatically book"}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Waitlist priority</p>
                <p>{card.values.priority || "First in line"}</p>
              </div>
              <div className="col-span-2">
                <p className="font-medium text-gray-900">
                  Waitlist for online bookings
                </p>
                <p>
                  {card.values.onlineActive ? "Active" : "Inactive"} •{" "}
                  {card.values.requestMode || "Request any preferred time"}
                </p>
              </div>
            </div>
            <div className="pt-3 border-t">
              <p className="font-medium text-gray-900">Client notifications</p>
              <p className="text-sm text-gray-500">
                Configure how clients are notified about the waitlist in{" "}
                <a href="#" className="text-[#885ABB] hover:underline">
                  automated messages
                </a>
              </p>
            </div>
          </div>
        );

      case "blockedTime":
        return (
          <div className="space-y-3">
            {card.values.blockTypes?.map((bt: any, i: number) => (
              <div
                key={i}
                className="flex items-center justify-between border rounded-lg px-4 py-3"
              >
                <div>
                  <p className="font-medium text-gray-900">{bt.type}</p>
                  <p className="text-sm text-gray-500">
                    {bt.duration} • {bt.compensation}
                  </p>
                </div>
                <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">
                  Actions
                </button>
              </div>
            ))}
          </div>
        );

      case "cancellation":
        return (
          <div className="space-y-3">
            {card.values.reasons?.map((r: any, i: number) => (
              <div
                key={i}
                className="flex items-center justify-between border rounded-lg px-4 py-3"
              >
                <p className="text-gray-900">{r.name}</p>
                <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">
                  Actions
                </button>
              </div>
            ))}
          </div>
        );

      case "dateTimeSettings":
        return (
          <div className="space-y-4 text-sm text-gray-700">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-900">Time zone</p>
                <p>{card.values.timezone}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Time format</p>
                <p>{card.values.format}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  First day of the week
                </p>
                <p>{card.values.firstDay}</p>
              </div>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-600">
              Daylight savings changes will automatically apply based on your
              selected time zone
            </div>
          </div>
        );

      case "calendarSettings":
        return (
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-900">
                Appointment color source
              </p>
              <p>{card.values.colorSource}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                Display processing time
              </p>
              <p>{card.values.processingTime ? "Enabled" : "Disabled"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Display blocked time</p>
              <p>{card.values.showBlocked ? "Enabled" : "Disabled"}</p>
            </div>
          </div>
        );

      default:
        return (
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {Object.entries(card.values).map(([key, val]) => (
              <li key={key} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                {Array.isArray(val) ? val.join(", ") : String(val)}
              </li>
            ))}
          </ul>
        );
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
        <div className="mt-4">{renderContent()}</div>
      </div>
      <button
        onClick={() => onEdit(card)}
        className="ml-6 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50"
      >
        Edit
      </button>
    </div>
  );
};
