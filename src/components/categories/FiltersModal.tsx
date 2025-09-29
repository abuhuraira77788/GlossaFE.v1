"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
  teamMembers: string[];
}

export const FiltersModal = ({
  isOpen,
  onClose,
  onApply,
  teamMembers,
}: FiltersModalProps) => {
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");
  const [teamMember, setTeamMember] = useState("all");
  const [onlineBookings, setOnlineBookings] = useState("all");
  const [commissions, setCommissions] = useState("all");

  if (!isOpen) return null;

  const handleApply = () => {
    onApply({ status, type, teamMember, onlineBookings, commissions });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-130px)] px-6 py-6 space-y-6">
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all cursor-pointer"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all cursor-pointer"
            >
              <option value="all">All types</option>
              <option value="single">Single Service</option>
              <option value="bundle">Bundle</option>
            </select>
          </div>

          {/* Team Member */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team Member
            </label>
            <select
              value={teamMember}
              onChange={(e) => setTeamMember(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all cursor-pointer"
            >
              <option value="all">Any team member</option>
              {teamMembers.map((member, i) => (
                <option key={i} value={member}>
                  {member}
                </option>
              ))}
            </select>
          </div>

          {/* Online Bookings */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Online Bookings
            </label>
            <select
              value={onlineBookings}
              onChange={(e) => setOnlineBookings(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all cursor-pointer"
            >
              <option value="all">All status</option>
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>

          {/* Commissions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Commissions
            </label>
            <select
              value={commissions}
              onChange={(e) => setCommissions(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#885ABB]/50 focus:border-[#885ABB] transition-all cursor-pointer"
            >
              <option value="all">All status</option>
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-5 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-white hover:border-gray-400 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-8 py-2 rounded-lg bg-[#885ABB] hover:bg-[#6f47a2] text-white font-semibold transition-all"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
