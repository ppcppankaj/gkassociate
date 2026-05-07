import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – GK Associate Manpower & Security",
  description:
    "Learn about GK Associate's 15+ years of experience providing trusted manpower, security, and staffing solutions across India.",
};

const milestones = [
  { year: "2010", title: "Founded", desc: "GK Associate was established in Delhi with a vision to provide reliable manpower." },
  { year: "2013", title: "Pan-India Expansion", desc: "Expanded operations to 10+ states and onboarded 100+ corporate clients." },
  { year: "2017", title: "ISO Certified", desc: "Achieved ISO 9001:2015 certification for quality management systems." },
  { year: "2020", title: "Digital Transformation", desc: "Launched digital onboarding for seamless staff deployment and management." },
  { year: "2023", title: "5000+ Staff Deployed", desc: "Reached a milestone of 5000+ active staff deployments across India." },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Trust & Integrity",
    desc: "Every staff member is verified, background-checked, and trained before deployment.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Quick Response",
    desc: "We respond to all manpower requests within 2 hours and deploy within 24 hours.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Client-Centric",
    desc: "Tailored solutions for every client — from SMEs to Fortune 500 companies.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Compliance First",
    desc: "Full PF, ESI, and labour law compliance to protect both clients and workers.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-5">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-['Outfit'] mb-5">
              About GK Associate
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl">
              For over 15 years, we have been connecting businesses with the reliable manpower they need — with integrity, speed, and compliance.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-badge">Who We Are</span>
              <h2 className="section-title">India&apos;s Trusted Manpower Partner</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800">GK Associate – Manpower & Security Services</strong> was founded in 2010 with a mission to bridge the gap between businesses seeking reliable staff and job seekers looking for stable employment.
                </p>
                <p>
                  Based in Delhi, we serve clients across pan-India — from small retail shops to large factories, hospitals, hotels, and corporate offices. Our services span security, housekeeping, general labour, and specialized staffing.
                </p>
                <p>
                  We pride ourselves on a rigorous verification process: every candidate undergoes police verification, Aadhaar-linked background checks, and skill assessments before joining our roster. This ensures our clients receive only the most trustworthy and capable personnel.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "15+", label: "Years in Business", color: "bg-blue-600" },
                { value: "500+", label: "Active Clients", color: "bg-emerald-600" },
                { value: "5000+", label: "Staff Deployed", color: "bg-amber-500" },
                { value: "98%", label: "Client Retention", color: "bg-purple-600" },
              ].map((s) => (
                <div key={s.label} className={`${s.color} rounded-2xl p-6 text-white text-center`}>
                  <p className="text-4xl font-bold font-['Outfit'] mb-1">{s.value}</p>
                  <p className="text-white/80 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge mx-auto">Our Principles</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="service-card text-center group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2 font-['Outfit']">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge mx-auto">Our Journey</span>
            <h2 className="section-title">Milestones & Growth</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform md:-translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md transform -translate-x-1/2 mt-1" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                      <span className="text-blue-600 font-bold text-lg font-['Outfit']">{m.year}</span>
                      <h3 className="font-bold text-slate-800 mt-1 mb-2">{m.title}</h3>
                      <p className="text-slate-500 text-sm">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-['Outfit']">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Contact us today for a free consultation and customized manpower solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent px-8 py-3.5 text-base" id="about-contact-btn">
              Get in Touch
            </Link>
            <Link href="/services" className="btn-outline px-8 py-3.5 text-base" id="about-services-btn">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
