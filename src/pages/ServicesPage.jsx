import { SERVICES } from "../constants";
import { PageHero } from "../components/Shared";

const STEPS = [
  ["1", "Consultation", "We assess your space and requirements through a detailed site visit or virtual call."],
  ["2", "Design",       "Our engineers design a custom HVAC solution optimised for your space and budget."],
  ["3", "Installation", "Certified technicians install your system with minimal disruption."],
  ["4", "Support",      "Ongoing maintenance and 24/7 emergency support keep you comfortable year-round."],
];

export default function ServicesPage({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete heating, ventilation, and air conditioning solutions for every need."
        page="Services"
        setPage={setPage}
      />

      {/* ── SERVICE CARDS ── */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {SERVICES.map((s) => (
              <div key={s.title} className="card p-9 relative overflow-hidden cursor-default">
                <div
                  className="absolute -top-5 -right-5 w-24 h-24 rounded-full opacity-60"
                  style={{ background: "linear-gradient(135deg,#e8f0fe,#bbdefb)" }}
                />
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-[15px] text-muted leading-[1.75] mb-6">{s.desc}</p>
                <button
                  onClick={() => go("Contact")}
                  className="flex items-center gap-2 text-brand text-sm font-semibold
                             bg-transparent border-none cursor-pointer p-0 transition-all
                             hover:gap-3"
                >
                  Get Quote <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-[5%] bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
            {STEPS.map(([n, t, d]) => (
              <div key={t} className="card p-8 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg,#1a73e8,#0d47a1)" }}
                >
                  {n}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{t}</h3>
                <p className="text-sm text-muted leading-[1.7]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
