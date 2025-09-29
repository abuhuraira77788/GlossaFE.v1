"use client";

import { useState } from "react";

interface DateTimeSettingsValues {
  timeZone: string;
  timeFormat: string;
  firstDayOfWeek: string;
}

export default function DateTimeSettingsForm({
  values,
  onSave,
  onCancel,
}: {
  values: DateTimeSettingsValues;
  onSave: (vals: DateTimeSettingsValues) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(values);

  return (
    <div className="space-y-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Time and calendar settings
      </h2>

      {/* Time Zone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time zone
        </label>
        <select
          value={form.timeZone}
          onChange={(e) => setForm({ ...form, timeZone: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>(GMT +05:00) Karachi</option>
          <option>(GMT +00:00) UTC</option>
          <option>(GMT +01:00) London</option>
        </select>
      </div>

      {/* Time Format */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time format
        </label>
        <select
          value={form.timeFormat}
          onChange={(e) => setForm({ ...form, timeFormat: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>12 hours (e.g. 9:00pm)</option>
          <option>24 hours (e.g. 21:00)</option>
        </select>
      </div>

      {/* First Day of Week */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First day of the week
        </label>
        <select
          value={form.firstDayOfWeek}
          onChange={(e) => setForm({ ...form, firstDayOfWeek: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>Monday</option>
          <option>Sunday</option>
        </select>
      </div>

      <p className="text-sm text-gray-500">
        Daylight savings changes will automatically apply based on your selected
        time zone.
      </p>

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
