"use client";

import { useState } from "react";

interface OnlineBookingOptionsValues {
  allowTeamSelect: boolean;
  showStarRatings: boolean;
  allowGroupBooking: boolean;
  showFeaturedServices: boolean;
}

export default function OnlineBookingOptionsForm({
  values,
  onSave,
  onCancel,
}: {
  values: OnlineBookingOptionsValues;
  onSave: (vals: OnlineBookingOptionsValues) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(values);

  const toggle = (field: keyof OnlineBookingOptionsValues) => {
    setForm((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Online booking options
        </h2>
        <p className="text-sm text-gray-500">
          Customize the experience for clients booking online
        </p>
      </div>

      <div className="space-y-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.allowTeamSelect}
            onChange={() => toggle("allowTeamSelect")}
            className="mt-1"
          />
          <span>
            <p className="font-medium">Allow clients to select team members</p>
            <p className="text-sm text-gray-500">
              Clients can select a specific team member when booking online
            </p>
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.showStarRatings}
            onChange={() => toggle("showStarRatings")}
            className="mt-1"
          />
          <span>
            <p className="font-medium">
              Display star ratings next to team members
            </p>
            <p className="text-sm text-gray-500">
              Show clients average star ratings for your team members when
              booking
            </p>
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.allowGroupBooking}
            onChange={() => toggle("allowGroupBooking")}
            className="mt-1"
          />
          <span>
            <p className="font-medium">
              Allow clients to book group appointments
            </p>
            <p className="text-sm text-gray-500">
              Clients can book and manage appointments for multiple people at
              once
            </p>
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.showFeaturedServices}
            onChange={() => toggle("showFeaturedServices")}
            className="mt-1"
          />
          <span>
            <p className="font-medium">
              Display featured services to your clients
            </p>
            <p className="text-sm text-gray-500">
              Show clients your most popular services when booking
            </p>
          </span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t pt-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Close
        </button>
        <button
          onClick={() => onSave(form)}
          className="px-4 py-2 bg-[#885ABB] text-white rounded-lg text-sm font-medium hover:bg-[#6f47a2]"
        >
          Save
        </button>
      </div>
    </div>
  );
}
