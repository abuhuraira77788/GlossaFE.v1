"use client";
import { useState } from "react";

const ScheduleOptimizationForm = ({
  values,
  onSave,
  onCancel,
}: {
  values: { interval: string; slotMode: string };
  onSave: (vals: any) => void;
  onCancel: () => void;
}) => {
  const [form, setForm] = useState(values);

  return (
    <div className="space-y-8">
      {/* Interval */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Time slot interval
        </h3>
        <select
          className="w-full border rounded-lg p-2 mt-2"
          value={form.interval}
          onChange={(e) => setForm({ ...form, interval: e.target.value })}
        >
          <option>10 minutes</option>
          <option>15 minutes</option>
          <option>30 minutes</option>
          <option>60 minutes</option>
        </select>
      </div>

      {/* Slot mode */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Intelligent time slots
        </h3>
        <p className="text-sm text-gray-500">
          Show only specific time slots to clients booking online to prevent
          gaps in your calendar that are unable to be filled
        </p>

        <div className="space-y-3 mt-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="slotMode"
              checked={form.slotMode === "regular"}
              onChange={() => setForm({ ...form, slotMode: "regular" })}
            />
            <span>
              Regular time slots{" "}
              <span className="ml-2 text-xs text-purple-600 border border-purple-300 rounded px-1">
                Max availability
              </span>
              <p className="text-xs text-gray-500">
                Show all available time slots. This may create gaps.
              </p>
            </span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="slotMode"
              checked={form.slotMode === "reduce"}
              onChange={() => setForm({ ...form, slotMode: "reduce" })}
            />
            <span>
              Reduce calendar gaps
              <p className="text-xs text-gray-500">
                Show plenty of slots while preventing difficult-to-fill gaps.
              </p>
            </span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="slotMode"
              checked={form.slotMode === "eliminate"}
              onChange={() => setForm({ ...form, slotMode: "eliminate" })}
            />
            <span>
              Eliminate calendar gaps
              <p className="text-xs text-gray-500">
                Show only slots before/after existing appointments.
              </p>
            </span>
          </label>
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

export default ScheduleOptimizationForm;
