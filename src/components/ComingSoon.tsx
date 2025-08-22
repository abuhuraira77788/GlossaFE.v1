import React from "react";
import { Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white shadow-xl rounded-2xl p-12 text-center max-w-lg w-full border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-50 shadow-inner">
            <Clock size={40} className="text-purple-600" />
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Coming Soon
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          The <span className="font-semibold text-purple-600">{title}</span>{" "}
          page is currently under development. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
