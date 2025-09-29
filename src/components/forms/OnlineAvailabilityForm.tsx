"use client";
import { useState } from "react";

const OnlineAvailabilityForm = ({
  values,
  onSave,
  onCancel,
}: {
  values: { leadTimeMin: string; leadTimeMax: string; cancelPolicy: string };
  onSave: (vals: any) => void;
  onCancel: () => void;
}) => {
  const [form, setForm] = useState(values);

  return (
    <div className="space-y-8">
      {/* New appointment lead time */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          New appointment lead time
        </h3>
        <p className="text-sm text-gray-500">
          Set how close to the appointment time clients can book, and how far in
          advance bookings are allowed
        </p>
        <div className="flex gap-4 mt-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              Clients can book
            </label>
            <select
              className="w-full border rounded-lg p-2"
              value={form.leadTimeMin}
              onChange={(e) =>
                setForm({ ...form, leadTimeMin: e.target.value })
              }
            >
              <option>Immediately</option>
              <option>1 hour before</option>
              <option>24 hours before</option>
              <option>3 days before</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              and no more than
            </label>
            <select
              className="w-full border rounded-lg p-2"
              value={form.leadTimeMax}
              onChange={(e) =>
                setForm({ ...form, leadTimeMax: e.target.value })
              }
            >
              <option>1 month in the future</option>
              <option>3 months in the future</option>
              <option>6 months in the future</option>
              <option>12 months in the future</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cancellation */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Cancellation and rescheduling
        </h3>
        <p className="text-sm text-gray-500">
          Set how far in advance clients can cancel or reschedule online. After
          this timeframe clients must call to change their appointment
        </p>
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-1">
            Clients can cancel or reschedule
          </label>
          <select
            className="w-full border rounded-lg p-2"
            value={form.cancelPolicy}
            onChange={(e) => setForm({ ...form, cancelPolicy: e.target.value })}
          >
            <option>Anytime</option>
            <option>Up to 24 hours before</option>
            <option>Up to 48 hours before</option>
            <option>Up to 1 week before</option>
          </select>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
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
};

export default OnlineAvailabilityForm;
