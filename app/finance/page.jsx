"use client";

import React from "react";
import { FinanceSection } from "@/components/FinanceSection";
import { LoanCalculator } from "@/components/LoanCalculator";

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-[#30475E]">Finance Options</h1>
          </div>
        </div>
      </header>

      <main className="py-16 space-y-16">
        {/* Finance Section */}
        <FinanceSection />

       
      </main>
    </div>
  );
}