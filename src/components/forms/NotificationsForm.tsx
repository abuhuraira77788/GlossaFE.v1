"use client";

import { useState } from "react";

interface NotificationsValues {
  sendToTeam: boolean;
  sendToEmails: boolean;
  emails: string;
}

export default function NotificationsForm({
  values,
  onSave,
  onCancel,
}: {
  values: NotificationsValues;
  onSave: (vals: NotificationsValues) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(values);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        <p className="text-sm text-gray-500">
          Send emails to team members when clients book, reschedule or cancel
          appointments online
        </p>
      </div>

      {/* Options */}
      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.sendToTeam}
            onChange={(e) => setForm({ ...form, sendToTeam: e.target.checked })}
          />
          <span>Send to team member booked</span>
        </label>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={form.sendToEmails}
            onChange={(e) =>
              setForm({ ...form, sendToEmails: e.target.checked })
            }
          />
          <span>Send to specific email addresses</span>
        </label>

        {form.sendToEmails && (
          <textarea
            value={form.emails}
            onChange={(e) => setForm({ ...form, emails: e.target.value })}
            placeholder="Enter multiple addresses separated by commas"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        )}
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
