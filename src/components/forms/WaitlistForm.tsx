"use client";

import { useState } from "react";

interface WaitlistValues {
  type: "manual" | "auto";
  priority: "first" | "value" | "all";
  allowOnline: boolean;
  requestMode: "any" | "business";
}

export default function WaitlistForm({
  values,
  onSave,
  onCancel,
}: {
  values: WaitlistValues;
  onSave: (vals: WaitlistValues) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(values);

  return (
    <div className="space-y-6">
      {/* Waitlist Type */}
      <section>
        <h3 className="font-medium text-gray-900 mb-2">
          Select a waitlist type
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setForm({ ...form, type: "manual" })}
            className={`p-4 border rounded-lg text-left ${
              form.type === "manual"
                ? "border-[#885ABB] bg-purple-50"
                : "border-gray-300"
            }`}
          >
            <p className="font-medium">You pick</p>
            <p className="text-sm text-gray-500">
              Manually select a client from the waitlist
            </p>
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, type: "auto" })}
            className={`p-4 border rounded-lg text-left ${
              form.type === "auto"
                ? "border-[#885ABB] bg-purple-50"
                : "border-gray-300"
            }`}
          >
            <p className="font-medium">Automatically book</p>
            <p className="text-sm text-gray-500">
              Automatically notify clients on the waitlist
            </p>
          </button>
        </div>
      </section>

      {/* Waitlist Priority */}
      <section>
        <h3 className="font-medium text-gray-900 mb-2">Waitlist priority</h3>
        <div className="space-y-2">
          {[
            {
              id: "first",
              label: "First in line",
              desc: "Offer in order of when they joined",
            },
            {
              id: "value",
              label: "Highest value",
              desc: "Offer in order of highest value appointment",
            },
            {
              id: "all",
              label: "Offer to all",
              desc: "Offer to all clients, first to book gets it",
            },
          ].map((opt) => (
            <label
              key={opt.id}
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="priority"
                value={opt.id}
                checked={form.priority === opt.id}
                onChange={() => setForm({ ...form, priority: opt.id as any })}
                className="mt-1"
              />
              <div>
                <p className="font-medium">{opt.label}</p>
                <p className="text-sm text-gray-500">{opt.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* Online Waitlist */}
      <section className="border-t pt-4">
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={form.allowOnline}
            onChange={(e) =>
              setForm({ ...form, allowOnline: e.target.checked })
            }
          />
          <span className="font-medium">
            Allow clients to join waitlist online
          </span>
        </label>
        {form.allowOnline && (
          <div className="space-y-2 pl-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requestMode"
                value="any"
                checked={form.requestMode === "any"}
                onChange={() => setForm({ ...form, requestMode: "any" })}
              />
              <span>Clients can request any preferred time</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requestMode"
                value="business"
                checked={form.requestMode === "business"}
                onChange={() => setForm({ ...form, requestMode: "business" })}
              />
              <span>Clients can only request times during business hours</span>
            </label>
          </div>
        )}
      </section>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t pt-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
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
