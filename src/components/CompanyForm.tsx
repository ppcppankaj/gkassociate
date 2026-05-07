"use client";

import { useState, useRef } from "react";

const serviceOptions = [
  "Security Guards",
  "Housekeeping Staff",
  "General Labour",
  "Skilled Workers",
  "Facility Management",
  "Event Security",
  "Other",
];

interface FormState {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  location: string;
  serviceType: string;
  staffCount: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

export default function CompanyForm() {
  const [form, setForm] = useState<FormState>({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    location: "",
    serviceType: "",
    staffCount: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const e: Errors = {};
    if (!form.companyName.trim()) e.companyName = "Company name is required";
    if (!form.contactPerson.trim()) e.contactPerson = "Contact person is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    return e;
  };

  const handleFile = (f: File | null) => {
    if (!f) return;
    const allowed = ["application/pdf", "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg", "image/png"];
    if (!allowed.includes(f.type)) {
      setFileError("Only PDF, DOC, DOCX, JPG, PNG allowed");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setFileError("File size must be under 5MB");
      return;
    }
    setFileError("");
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setApiError("");
    setLoading(true);

    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    if (file) data.append("document", file);

    try {
      const res = await fetch("/api/company", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setSuccess(true);
        setForm({ companyName: "", contactPerson: "", phone: "", email: "", location: "", serviceType: "", staffCount: "", message: "" });
        setFile(null);
        if (fileRef.current) fileRef.current.value = "";
      } else {
        setApiError(json.message);
      }
    } catch {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 text-center max-w-lg mx-auto">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-['Outfit']">Request Submitted!</h3>
        <p className="text-slate-500 mb-6">Your request has been submitted successfully. Our team will contact you within 2 hours.</p>
        <button
          onClick={() => setSuccess(false)}
          className="btn-primary"
          id="company-submit-another"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  const Field = ({ name, label, required = false, type = "text", placeholder = "" }: {
    name: keyof FormState; label: string; required?: boolean; type?: string; placeholder?: string;
  }) => (
    <div>
      <label className="form-label" htmlFor={`company-${name}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={`company-${name}`}
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        placeholder={placeholder}
        className={`form-input ${errors[name] ? "border-red-400 focus:ring-red-400" : ""}`}
      />
      {errors[name] && <p className="form-error"><span>⚠</span>{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100" noValidate>
      {/* Header */}
      <div className="flex items-center gap-3 mb-7 pb-5 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">Request Manpower</h2>
          <p className="text-sm text-slate-500">Tell us your requirements, we'll respond within 2 hours</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="companyName" label="Company Name" required placeholder="ABC Pvt. Ltd." />
        <Field name="contactPerson" label="Contact Person" required placeholder="Mr. Sharma" />
        <Field name="phone" label="Phone Number" required type="tel" placeholder="+91 98765 43210" />
        <Field name="email" label="Email Address" type="email" placeholder="hr@company.com" />
        <Field name="location" label="Location / City" placeholder="Delhi, Mumbai..." />

        {/* Service type dropdown */}
        <div>
          <label className="form-label" htmlFor="company-serviceType">Service Required</label>
          <select
            id="company-serviceType"
            value={form.serviceType}
            onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
            className="form-input"
          >
            <option value="">Select service...</option>
            {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div className="sm:col-span-2">
          <Field name="staffCount" label="Number of Staff Required" type="number" placeholder="e.g. 5" />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="form-label" htmlFor="company-message">Additional Message</label>
          <textarea
            id="company-message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            placeholder="Describe your requirements, shift timings, location details..."
            className="form-input resize-none"
          />
        </div>

        {/* File upload */}
        <div className="sm:col-span-2">
          <label className="form-label">Attach Document (Optional)</label>
          <div
            onClick={() => fileRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
              fileError ? "border-red-300 bg-red-50" : file ? "border-green-300 bg-green-50" : "border-slate-200 hover:border-blue-300 hover:bg-blue-50"
            }`}
            id="company-file-drop"
          >
            {file ? (
              <div className="flex items-center justify-center gap-3 text-green-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">{file.name}</span>
                <button type="button" onClick={(ev) => { ev.stopPropagation(); setFile(null); if (fileRef.current) fileRef.current.value = ""; }}
                  className="text-red-500 hover:text-red-700 ml-1">✕</button>
              </div>
            ) : (
              <>
                <svg className="w-8 h-8 text-slate-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <p className="text-sm text-slate-500">Drop file or <span className="text-blue-600 font-medium">browse</span></p>
                <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX, JPG, PNG · Max 5MB</p>
              </>
            )}
          </div>
          <input ref={fileRef} type="file" className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)} id="company-file-input" />
          {fileError && <p className="form-error"><span>⚠</span>{fileError}</p>}
        </div>
      </div>

      {apiError && (
        <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex gap-2">
          <span>⚠</span><span>{apiError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full mt-6 py-3.5 text-base flex items-center justify-center gap-2"
        id="company-submit-btn"
      >
        {loading ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Submit Request
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
