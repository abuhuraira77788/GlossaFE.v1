"use client";

import { useState } from "react";
import CashUpPage from "../pages/reports/CashUpPage";

export default function Reports() {
  const [active, setActive] = useState("cashup");

  return (
    <>
      {active === "cashup" && <CashUpPage />}
      {active !== "cashup" && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-lg">Coming Soon...</p>
        </div>
      )}
    </>
  );
}
