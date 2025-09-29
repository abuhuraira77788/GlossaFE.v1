"use client";

import { useState } from "react";

export default function CancellationReasonForm({
  values,
  onSave,
  onCancel,
}: {
  values: { reasons: string[] };
  onSave: (vals: { reasons: string[] }) => void;
  onCancel: () => void;
}) {
  const [reasons, setReasons] = useState<string[]>(values.reasons || []);

  const addReason = () => {
    setReasons([...reasons, ""]);
  };

  const updateReason = (i: number, val: string) => {
    const updated = [...reasons];
    updated[i] = val;
    setReasons(updated);
  };

  const removeReason = (i: number) => {
    setReasons(reasons.filter((_, idx) => idx !== i));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Add cancellation reason
        </h2>
        <p className="text-sm text-gray-500">
          Create and manage cancellation reasons
        </p>
      </div>

      <div className="space-y-3">
        {reasons.map((r, i) => (
          <div key={i} className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="e.g. Client not available"
              value={r}
              onChange={(e) => updateReason(i, e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <button
              onClick={() => removeReason(i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4 border-t">
        <button
          onClick={addReason}
          className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          + Add Reason
        </button>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ reasons })}
            className="px-4 py-2 bg-[#885ABB] text-white rounded-lg text-sm font-medium hover:bg-[#6f47a2]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
