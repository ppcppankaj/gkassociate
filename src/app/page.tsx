import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GK Associate – Trusted Manpower & Security Services",
  description:
    "GK Associate delivers reliable manpower, security guards, housekeeping, and staffing solutions across India. 15+ years of experience, 500+ clients.",
};

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Companies Served" },
  { value: "5000+", label: "Staff Deployed" },
  { value: "98%", label: "Client Retention" },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Security Guards",
    desc: "Trained, verified, and professional security personnel for offices, malls, residential complexes, and industrial sites.",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Housekeeping",
    desc: "Expert housekeeping and sanitation staff ensuring spotless environments in corporate offices, hospitals, and hotels.",
    color: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Labour / Staffing",
    desc: "Flexible skilled and unskilled workforce solutions for manufacturing, construction, warehousing, and logistics sectors.",
    color: "from-amber-500 to-amber-700",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
];

const trustPoints = [
  { icon: "✓", text: "Police Verified Staff" },
  { icon: "✓", text: "Aadhaar & Background Checked" },
  { icon: "✓", text: "PF / ESI Compliant" },
  { icon: "✓", text: "24/7 Availability" },
  { icon: "✓", text: "Trained & Uniformed" },
  { icon: "✓", text: "Pan India Services" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient min-h-screen flex items-center relative">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-blue-200 text-sm font-medium">Trusted Across India since 2010</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-['Outfit']">
                Reliable Manpower &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Security Services
                </span>
              </h1>

              <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-xl">
                GK Associate delivers verified, trained manpower — security guards, housekeeping staff, and skilled labour — tailored to your business needs.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact?tab=company"
                  className="btn-accent flex items-center gap-2 text-base px-8"
                  id="hero-request-manpower"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Request Manpower
                </Link>
                <Link
                  href="/contact?tab=jobseeker"
                  className="btn-outline flex items-center gap-2 text-base px-8"
                  id="hero-apply-job"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Apply for Job
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {trustPoints.slice(0, 3).map((t) => (
                  <span
                    key={t.text}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur rounded-lg text-blue-200 text-xs font-medium border border-white/10"
                  >
                    <span className="text-green-400 font-bold">{t.icon}</span>
                    {t.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Stats card */}
            <div className="flex justify-center lg:justify-end">
              <div className="glass-card rounded-3xl p-8 w-full max-w-sm">
                <p className="text-blue-300 text-sm font-medium mb-6 uppercase tracking-wider">Our Numbers</p>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-4xl font-bold text-white font-['Outfit'] mb-1">{s.value}</p>
                      <p className="text-blue-300 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-blue-200 text-sm text-center">
                    🏆 Awarded Best Manpower Agency 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge mx-auto">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              What We Offer
            </span>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle mx-auto text-center">
              End-to-end manpower solutions for businesses of all sizes across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="service-card group">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} ${s.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link
                  href="/services"
                  className={`${s.text} text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all`}
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-badge">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                Why GK Associate
              </span>
              <h2 className="section-title">Trusted by 500+ Companies Across India</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                For over 15 years, we have been the go-to manpower partner for companies ranging from SMEs to large corporations. Our commitment to quality, compliance, and client satisfaction sets us apart.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {trustPoints.map((t) => (
                  <div key={t.text} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm font-bold">{t.icon}</span>
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{t.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold font-['Outfit'] mb-6">Ready to Get Started?</h3>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  Whether you need to hire security guards, housekeeping staff, or skilled labour — we have got you covered. Get a quote today.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact?tab=company"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors group"
                    id="home-request-manpower-card"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">For Companies</p>
                      <p className="text-blue-300 text-sm">Request manpower &amp; get a quote</p>
                    </div>
                    <svg className="w-5 h-5 ml-auto text-blue-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>

                  <Link
                    href="/contact?tab=jobseeker"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors group"
                    id="home-apply-job-card"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-400 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">For Job Seekers</p>
                      <p className="text-blue-300 text-sm">Apply now &amp; upload your resume</p>
                    </div>
                    <svg className="w-5 h-5 ml-auto text-blue-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Outfit']">
            Need Staff Urgently? We&apos;re Here 24/7
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Call us now or send a quick request — we respond within 2 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919999999999"
              className="bg-white text-amber-600 font-bold px-8 py-3.5 rounded-xl hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center gap-2"
              id="cta-call-now"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +91 99999 99999
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white hover:text-amber-600 transition-all hover:-translate-y-0.5"
              id="cta-contact-us"
            >
              Send Request Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
