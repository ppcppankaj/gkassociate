import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services – Security Guards, Housekeeping & Staffing | GK Associate",
  description:
    "GK Associate offers security guards, housekeeping staff, skilled labour, facility management, and complete manpower solutions across India.",
};

const services = [
  {
    id: "security",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Security Guards",
    tagline: "Protecting What Matters Most",
    desc: "Our security personnel are rigorously trained, police-verified, and deployed across offices, malls, factories, hospitals, residential complexes, and event venues.",
    features: [
      "Armed & unarmed security personnel",
      "24/7 rotating guard deployment",
      "CCTV monitoring specialists",
      "Fire & emergency response trained",
      "Corporate & industrial security",
      "Event & VIP security",
    ],
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  {
    id: "housekeeping",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Housekeeping",
    tagline: "Spotless Environments, Every Day",
    desc: "We supply professional housekeeping and sanitation staff for corporate offices, hospitals, hotels, malls, and residential buildings to maintain hygiene and cleanliness.",
    features: [
      "Daily & deep cleaning specialists",
      "Uniform & equipment provided",
      "Hospital-grade sanitation trained",
      "Pantry & cafeteria management",
      "Restroom hygiene specialists",
      "Waste management & recycling",
    ],
    gradient: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
  },
  {
    id: "labour",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Labour / Staffing",
    tagline: "Right Workforce, Right Time",
    desc: "From skilled technicians to general labour, we provide flexible manpower solutions for manufacturing, construction, warehousing, logistics, and seasonal staffing.",
    features: [
      "Skilled & semi-skilled workers",
      "General & casual labour",
      "Production line workers",
      "Warehouse & logistics staff",
      "Construction site labour",
      "Seasonal & contract staffing",
    ],
    gradient: "from-amber-500 to-amber-700",
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
  },
];

const industries = [
  { name: "Corporate Offices", icon: "🏢" },
  { name: "Hospitals & Clinics", icon: "🏥" },
  { name: "Hotels & Hospitality", icon: "🏨" },
  { name: "Shopping Malls", icon: "🛍️" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Construction", icon: "🏗️" },
  { name: "Warehouses", icon: "📦" },
  { name: "Residential Complexes", icon: "🏘️" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-5">
              What We Provide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-['Outfit'] mb-5">
              Our Services
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl">
              Comprehensive manpower and facility solutions, tailored to meet the unique needs of your business — from day one.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${s.bg} ${s.text} text-sm font-semibold mb-4`}>
                  Service {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 font-['Outfit'] mb-2">{s.title}</h2>
                <p className={`text-lg font-semibold ${s.text} mb-4`}>{s.tagline}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className={`w-5 h-5 rounded-full ${s.bg} ${s.text} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/contact?tab=company&service=${s.id}`}
                  className="btn-primary inline-flex items-center gap-2"
                  id={`service-${s.id}-cta`}
                >
                  Request {s.title}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Visual card */}
              <div className={i % 2 !== 0 ? "lg:col-start-1" : ""}>
                <div className={`bg-gradient-to-br ${s.gradient} rounded-3xl p-10 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-10 translate-x-10" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-8 -translate-x-8" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                      {s.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-['Outfit'] mb-3">{s.title}</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">{s.tagline}</p>
                    <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-white/60">Call for quick deployment</p>
                        <p className="font-semibold">+91 9991865220</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries we serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-badge mx-auto">Sectors We Cover</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle mx-auto text-center">
              Our manpower solutions span across diverse industries
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col items-center gap-3 p-6 bg-slate-50 hover:bg-blue-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:-translate-y-1 cursor-default"
              >
                <span className="text-4xl">{ind.icon}</span>
                <p className="text-sm font-semibold text-slate-700 text-center">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-['Outfit']">
            Need a Custom Manpower Solution?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Every business is different. Let us create a tailored plan that fits your exact requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent px-8 py-3.5 text-base" id="services-get-quote">
              Get Free Quote
            </Link>
            <a href="tel:+919991865220" className="btn-outline px-8 py-3.5 text-base" id="services-call-now">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
