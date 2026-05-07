import type { Metadata } from "next";
import { Suspense } from "react";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us – Request Manpower or Apply for Job | GK Associate",
  description:
    "Contact GK Associate to request manpower services or apply for a security/housekeeping job. Submit your details and we'll respond within 2 hours.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call / WhatsApp",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "info@gkassociate.in",
    href: "mailto:info@gkassociate.in",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Office Address",
    value: "123 Business Park, Industrial Area, Delhi – 110001",
    href: "https://maps.google.com/?q=Delhi+India",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Business Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
    href: null,
    color: "text-purple-600 bg-purple-50",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-5">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-['Outfit'] mb-5">
              Contact Us
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
              Whether you need manpower for your business or are looking for a job — fill the form below and we'll get back to you within 2 hours.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 font-['Outfit'] mb-2">Get In Touch</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reach us directly or fill the form on the right. We respond to all enquiries within 2 hours during business hours.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}>
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-slate-800 text-sm font-semibold hover:text-blue-600 transition-colors leading-snug">
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-slate-800 text-sm font-semibold leading-snug">{c.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919999999999?text=Hello%2C%20I%20need%20manpower%20services."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-4 transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-green-100 text-xs">Quick response guaranteed</p>
                </div>
              </a>

              {/* Google Map embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.84104676517!2d77.06889754541423!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GK Associate Office Location"
                />
              </div>
            </div>

            {/* Right: Forms */}
            <div className="lg:col-span-2">
              <Suspense fallback={
                <div className="bg-white rounded-3xl p-10 animate-pulse">
                  <div className="h-8 bg-slate-100 rounded w-1/2 mx-auto mb-6" />
                  <div className="space-y-4">
                    {[1,2,3,4].map(i => <div key={i} className="h-12 bg-slate-100 rounded-xl" />)}
                  </div>
                </div>
              }>
                <ContactClient />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
