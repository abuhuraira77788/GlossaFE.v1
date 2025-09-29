"use client";

import { useState } from "react";

interface BlockedTimeType {
  type: string;
  duration: string;
  compensation: "Paid" | "Unpaid";
}

export default function BlockedTimeTypesForm({
  values,
  onSave,
  onCancel,
}: {
  values: { blockTypes: BlockedTimeType[] };
  onSave: (vals: { blockTypes: BlockedTimeType[] }) => void;
  onCancel: () => void;
}) {
  const [blockTypes, setBlockTypes] = useState<BlockedTimeType[]>(
    values.blockTypes || []
  );

  const addBlock = () => {
    setBlockTypes([
      ...blockTypes,
      { type: "", duration: "30 minutes", compensation: "Unpaid" },
    ]);
  };

  const updateBlock = (
    i: number,
    field: keyof BlockedTimeType,
    val: string
  ) => {
    const updated = [...blockTypes];
    updated[i] = { ...updated[i], [field]: val } as BlockedTimeType;
    setBlockTypes(updated);
  };

  const removeBlock = (i: number) => {
    setBlockTypes(blockTypes.filter((_, idx) => idx !== i));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Add a blocked time type
        </h2>
        <p className="text-sm text-gray-500">Create new blocked time types</p>
      </div>

      <div className="space-y-6">
        {blockTypes.map((bt, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-4">
            {/* Type Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <input
                type="text"
                placeholder="e.g. Training break, Coffee break"
                value={bt.type}
                onChange={(e) => updateBlock(i, "type", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <select
                value={bt.duration}
                onChange={(e) => updateBlock(i, "duration", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>Custom</option>
              </select>
            </div>

            {/* Compensation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Compensation
              </label>
              <select
                value={bt.compensation}
                onChange={(e) =>
                  updateBlock(i, "compensation", e.target.value as any)
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>

            <button
              onClick={() => removeBlock(i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4 border-t">
        <button
          onClick={addBlock}
          className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          + Add Block Type
        </button>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ blockTypes })}
            className="px-4 py-2 bg-[#885ABB] text-white rounded-lg text-sm font-medium hover:bg-[#6f47a2]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
