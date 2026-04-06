import { REASONS } from "../constants";
import { PageHero } from "../components/Shared";

const CERTS = [
  ["🎓", "PEC Certified",      "Pakistan Engineering Council member in good standing"],
  ["🌿", "Energy Star Partner","Recognised for energy-efficient HVAC systems"],
  ["📋", "ASHRAE Member",      "Adhering to global HVAC & refrigeration standards"],
  ["🛡️", "2-Year Warranty",   "Full coverage on all installation and repair work"],
];

export default function WhyUsPage({ setPage }) {
  return (
    <>
      <PageHero
        title="Why Choose Us"
        subtitle="Four pillars that make HVAC Pro the first call for thousands of satisfied clients."
        page="Why Us"
        setPage={setPage}
      />

      {/* ── REASONS ── */}
      <section
        className="py-24 px-[5%] relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0a1628,#0d47a1)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(100,181,246,.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(13,71,161,.3) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="rounded-[24px] p-10 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,.07)",
                  border: "1px solid rgba(255,255,255,.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="text-[44px] mb-5">{r.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
                <p className="text-[15px] leading-[1.75]" style={{ color: "rgba(255,255,255,.65)" }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="section-tag">Certifications</span>
          <h2 className="section-title">Industry-Recognised Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
            {CERTS.map(([e, t, d]) => (
              <div key={t} className="card p-8">
                <div className="text-4xl mb-4">{e}</div>
                <h3 className="font-bold text-navy mb-2">{t}</h3>
                <p className="text-sm text-muted leading-[1.6]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
