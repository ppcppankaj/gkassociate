"use client";

import { useState, useRef } from "react";

const jobTypeOptions = [
  "Security Guard",
  "Supervisor / Head Guard",
  "Housekeeping Staff",
  "Sanitation Worker",
  "General Labour",
  "Skilled Worker",
  "Driver",
  "Peon / Office Boy",
  "Other",
];

interface FormState {
  fullName: string;
  phone: string;
  altPhone: string;
  location: string;
  jobType: string;
  experience: string;
  aadhaar: string;
}

interface Errors { [key: string]: string; }

const ALLOWED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

function validateFile(f: File): string {
  if (!ALLOWED.includes(f.type)) return "Only PDF, DOC, DOCX, JPG, PNG allowed";
  if (f.size > 5 * 1024 * 1024) return "File must be under 5MB";
  return "";
}

interface FileUploadBoxProps {
  id: string;
  label: string;
  required?: boolean;
  file: File | null;
  error: string;
  onFile: (f: File | null) => void;
  accept?: string;
}

function FileUploadBox({ id, label, required, file, error, onFile, accept }: FileUploadBoxProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        onClick={() => ref.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); onFile(e.dataTransfer.files[0] ?? null); }}
        className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${
          error ? "border-red-300 bg-red-50" : file ? "border-green-300 bg-green-50" : "border-slate-200 hover:border-blue-300 hover:bg-blue-50"
        }`}
      >
        {file ? (
          <div className="flex items-center justify-center gap-2 text-green-700">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onFile(null); if (ref.current) ref.current.value = ""; }}
              className="text-red-500 hover:text-red-700 ml-1 flex-shrink-0"
            >✕</button>
          </div>
        ) : (
          <>
            <svg className="w-7 h-7 text-slate-400 mx-auto mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <p className="text-sm text-slate-500">Drop or <span className="text-blue-600 font-medium">browse</span></p>
            <p className="text-xs text-slate-400 mt-0.5">PDF, DOC, JPG, PNG · Max 5MB</p>
          </>
        )}
      </div>
      <input ref={ref} id={id} type="file" className="hidden" accept={accept ?? ".pdf,.doc,.docx,.jpg,.jpeg,.png"}
        onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
      {error && <p className="form-error"><span>⚠</span>{error}</p>}
    </div>
  );
}

export default function JobSeekerForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "", phone: "", altPhone: "", location: "",
    jobType: "", experience: "", aadhaar: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [resume, setResume] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);
  const [fileErrors, setFileErrors] = useState({ resume: "", photo: "", aadhaar: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleFile = (key: "resume" | "photo" | "aadhaar", f: File | null) => {
    if (!f) {
      if (key === "resume") setResume(null);
      else if (key === "photo") setPhoto(null);
      else setAadhaarFile(null);
      setFileErrors((fe) => ({ ...fe, [key]: "" }));
      return;
    }
    const err = validateFile(f);
    setFileErrors((fe) => ({ ...fe, [key]: err }));
    if (!err) {
      if (key === "resume") setResume(f);
      else if (key === "photo") setPhoto(f);
      else setAadhaarFile(f);
    }
  };

  const validate = () => {
    const e: Errors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!resume) e.resume = "Resume is required";
    return e;
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
    if (resume) data.append("resume", resume);
    if (photo) data.append("photo", photo);
    if (aadhaarFile) data.append("aadhaarFile", aadhaarFile);

    try {
      const res = await fetch("/api/jobseeker", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setSuccess(true);
        setForm({ fullName: "", phone: "", altPhone: "", location: "", jobType: "", experience: "", aadhaar: "" });
        setResume(null); setPhoto(null); setAadhaarFile(null);
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
        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-['Outfit']">Application Submitted!</h3>
        <p className="text-slate-500 mb-6">Your job application has been submitted successfully. Our HR team will contact you soon.</p>
        <button onClick={() => setSuccess(false)} className="btn-primary" id="jobseeker-submit-another">
          Submit Another Application
        </button>
      </div>
    );
  }

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100" noValidate>
      {/* Header */}
      <div className="flex items-center gap-3 mb-7 pb-5 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">Apply for Job</h2>
          <p className="text-sm text-slate-500">Fill in your details and upload your resume</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="sm:col-span-2">
          <label className="form-label" htmlFor="js-fullName">Full Name <span className="text-red-500">*</span></label>
          <input id="js-fullName" type="text" value={form.fullName} onChange={set("fullName")}
            placeholder="Enter your full name"
            className={`form-input ${errors.fullName ? "border-red-400" : ""}`} />
          {errors.fullName && <p className="form-error"><span>⚠</span>{errors.fullName}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="form-label" htmlFor="js-phone">Phone <span className="text-red-500">*</span></label>
          <input id="js-phone" type="tel" value={form.phone} onChange={set("phone")}
            placeholder="+91 98765 43210"
            className={`form-input ${errors.phone ? "border-red-400" : ""}`} />
          {errors.phone && <p className="form-error"><span>⚠</span>{errors.phone}</p>}
        </div>

        {/* Alt Phone */}
        <div>
          <label className="form-label" htmlFor="js-altPhone">Alternate Phone</label>
          <input id="js-altPhone" type="tel" value={form.altPhone} onChange={set("altPhone")}
            placeholder="Optional" className="form-input" />
        </div>

        {/* Location */}
        <div>
          <label className="form-label" htmlFor="js-location">Current Location</label>
          <input id="js-location" type="text" value={form.location} onChange={set("location")}
            placeholder="City, State" className="form-input" />
        </div>

        {/* Job Type */}
        <div>
          <label className="form-label" htmlFor="js-jobType">Job Type</label>
          <select id="js-jobType" value={form.jobType} onChange={set("jobType")} className="form-input">
            <option value="">Select job type...</option>
            {jobTypeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="form-label" htmlFor="js-experience">Work Experience</label>
          <input id="js-experience" type="text" value={form.experience} onChange={set("experience")}
            placeholder="e.g. 2 years, Fresher" className="form-input" />
        </div>

        {/* Aadhaar */}
        <div>
          <label className="form-label" htmlFor="js-aadhaar">Aadhaar Number (Optional)</label>
          <input id="js-aadhaar" type="text" value={form.aadhaar} onChange={set("aadhaar")}
            placeholder="XXXX XXXX XXXX" maxLength={14} className="form-input" />
        </div>

        {/* Resume Upload */}
        <div className="sm:col-span-2">
          <FileUploadBox id="js-resume" label="Upload Resume" required
            file={resume} error={errors.resume || fileErrors.resume}
            onFile={(f) => handleFile("resume", f)} />
        </div>

        {/* Photo Upload */}
        <FileUploadBox id="js-photo" label="Upload Photo (Optional)"
          file={photo} error={fileErrors.photo}
          onFile={(f) => handleFile("photo", f)}
          accept=".jpg,.jpeg,.png" />

        {/* Aadhaar File */}
        <FileUploadBox id="js-aadhaar-file" label="Aadhaar Card (Optional)"
          file={aadhaarFile} error={fileErrors.aadhaar}
          onFile={(f) => handleFile("aadhaar", f)} />
      </div>

      {apiError && (
        <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex gap-2">
          <span>⚠</span><span>{apiError}</span>
        </div>
      )}

      <button type="submit" disabled={loading}
        className="btn-primary w-full mt-6 py-3.5 text-base flex items-center justify-center gap-2"
        id="jobseeker-submit-btn">
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
            Submit Application
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
