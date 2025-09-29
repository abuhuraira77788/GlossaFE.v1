"use client";

import { useState } from "react";

interface CalendarSettingsValues {
  colorSource: string;
  displayProcessing: boolean;
  displayBlocked: boolean;
}

export default function CalendarSettingsForm({
  values,
  onSave,
  onCancel,
}: {
  values: CalendarSettingsValues;
  onSave: (vals: CalendarSettingsValues) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(values);

  return (
    <div className="space-y-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Calendar settings
      </h2>

      {/* Appointment Color Source */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Appointment color source
        </label>
        <select
          value={form.colorSource}
          onChange={(e) => setForm({ ...form, colorSource: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>Category</option>
          <option>Service</option>
          <option>Staff</option>
        </select>
      </div>

      {/* Processing Time */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={form.displayProcessing}
          onChange={(e) =>
            setForm({ ...form, displayProcessing: e.target.checked })
          }
          className="mt-1"
        />
        <div>
          <p className="text-sm font-medium text-gray-900">
            Display processing time segments within appointment tiles
          </p>
          <p className="text-sm text-gray-500">
            Extra processing time will be shown as a faded segment in the same
            color as the appointment tile.
          </p>
        </div>
      </div>

      {/* Blocked Time */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={form.displayBlocked}
          onChange={(e) =>
            setForm({ ...form, displayBlocked: e.target.checked })
          }
          className="mt-1"
        />
        <div>
          <p className="text-sm font-medium text-gray-900">
            Highlight blocked time segments within appointment tiles
          </p>
          <p className="text-sm text-gray-500">
            Extra blocked time will be shown as a grey segment within the
            appointment tile.{" "}
            <a href="#" className="text-[#885ABB] hover:underline">
              Learn more
            </a>
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t">
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
