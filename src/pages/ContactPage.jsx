import { useState } from "react";
import { PageHero } from "../components/Shared";
import { PHONE, EMAIL_TO, ADDRESS, WHATSAPP } from "../constants";

const WA_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const INFO = [
  { icon: "📞", label: "Phone", val: PHONE, href: `tel:${PHONE}` },
  { icon: "📧", label: "Email", val: EMAIL_TO, href: `mailto:${EMAIL_TO}` },
  { icon: "📍", label: "Office", val: ADDRESS, href: "#" },
];

export default function ContactPage({ setPage }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const wa = () =>
    window.open(`https://wa.me/${WHATSAPP}?text=Hello! I need HVAC services.`, "_blank");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`mailto:${EMAIL_TO}?subject=HVAC Inquiry from ${form.name}&body=${body}`);
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out via form, WhatsApp, or give us a call. We respond within 2 hours."
        page="Contact"
        setPage={setPage}
      />

      <section className="py-24 px-[5%] bg-surface">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* ── Info panel ── */}
          <div>
            <h3 className="text-[22px] font-bold text-navy mb-7">Contact Information</h3>

            {INFO.map((c) => (
              <a key={c.label} href={c.href} className="flex gap-5 items-start mb-7 no-underline group">
                <div
                  className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#e8f0fe,#bbdefb)" }}
                >
                  {c.icon}
                </div>
                <div>
                  <div className="text-[13px] text-muted font-semibold mb-1">{c.label}</div>
                  <div className="text-base text-navy font-semibold group-hover:text-brand transition-colors">
                    {c.val}
                  </div>
                </div>
              </a>
            ))}

            <button onClick={wa} className="btn-primary w-full mt-2">
              {WA_SVG} Chat on WhatsApp
            </button>

            {/* Map */}
            <div className="mt-7 rounded-[20px] overflow-hidden h-[220px]">
              <iframe
                title="Office Location"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781319.4260615546!2d46.36040649705291!3d29.307583262287235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2sus!4v1775501645839!5m2!1sen!2sus"
              />
            </div>
          </div>

          {/* ── Form panel ── */}
          <div
            className="bg-white rounded-[28px] p-11"
            style={{ boxShadow: "0 4px 30px rgba(15,31,61,.08)" }}
          >
            <h3 className="text-[22px] font-bold text-navy mb-2">Send Us a Message</h3>
            <p className="text-sm text-muted mb-8">Fill in the form and we'll get back to you within 2 hours.</p>

            {sent && (
              <div className="bg-green-50 text-green-900 px-5 py-3.5 rounded-xl mb-6 font-semibold text-[15px]">
                ✅ Message sent! We'll contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-semibold text-muted mb-2">Full Name *</label>
                  <input
                    required
                    placeholder="Muhammad Ali"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="field"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-muted mb-2">Phone Number *</label>
                  <input
                    required
                    placeholder="+92 300 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="field"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-muted mb-2">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="field"
                />
              </div>

              <div className="mb-7">
                <label className="block text-[13px] font-semibold text-muted mb-2">Your Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your HVAC needs — building size, current system, timeline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field"
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full text-base justify-center"
              >
                {sending ? "Sending…" : "Send Message →"}
              </button>

              <p className="text-xs text-muted text-center mt-3.5">
                Or{" "}
                <span
                  onClick={wa}
                  className="text-brand cursor-pointer font-semibold hover:underline"
                >
                  chat on WhatsApp
                </span>{" "}
                for instant response
              </p>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
