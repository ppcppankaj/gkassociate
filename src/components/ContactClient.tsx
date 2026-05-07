"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CompanyForm from "@/components/CompanyForm";
import JobSeekerForm from "@/components/JobSeekerForm";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"company" | "jobseeker">("company");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "jobseeker") setActiveTab("jobseeker");
    else setActiveTab("company");
  }, [searchParams]);

  return (
    <>
      {/* Tab Switcher */}
      <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl mb-10 max-w-md mx-auto">
        <button
          onClick={() => setActiveTab("company")}
          id="tab-company"
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            activeTab === "company"
              ? "bg-white text-blue-700 shadow-md shadow-slate-200"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          For Companies
        </button>
        <button
          onClick={() => setActiveTab("jobseeker")}
          id="tab-jobseeker"
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            activeTab === "jobseeker"
              ? "bg-white text-blue-700 shadow-md shadow-slate-200"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Apply for Job
        </button>
      </div>

      {/* Forms */}
      <div className="transition-all duration-300">
        {activeTab === "company" ? <CompanyForm /> : <JobSeekerForm />}
      </div>
    </>
  );
}
