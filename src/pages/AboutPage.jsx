import { PageHero } from "../components/Shared";

const BADGES = [
  ["🎓", "MOW Certified",    "Kuwait Ministry of Works Approved"],
  ["🌿", "Energy Star",      "Efficiency Specialist"],
  ["🛡️", "2-Year Warranty",  "On All Labor & Parts"],
  ["📋", "ASHRAE Member",    "Global HVAC Standards"],
];

export default function AboutPage({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="15+ years of certified HVAC engineering excellence across Kuwait."
        page="About"
        setPage={setPage}
      />

      {/* ── MAIN ABOUT ── */}
      <section className="py-24 px-[5%] bg-surface">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=700&q=85"
              alt="Engineer at work"
              className="w-full rounded-[24px] object-cover h-[480px]"
            />
            <div
              className="absolute bottom-7 -left-7 bg-white rounded-[20px] px-7 py-5"
              style={{ boxShadow: "0 8px 40px rgba(26,115,232,.18)" }}
            >
              <div className="text-4xl font-extrabold text-brand">15+</div>
              <div className="text-sm text-muted font-semibold">Years of Excellence</div>
            </div>
            <div
              className="absolute top-7 -right-7 rounded-[20px] px-7 py-5 text-white"
              style={{ background: "linear-gradient(135deg,#1a73e8,#0d47a1)" }}
            >
              <div className="text-3xl font-extrabold">500+</div>
              <div className="text-[13px] opacity-85">Projects Completed</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Your Trusted HVAC Engineering Partner</h2>
            <p className="section-sub mb-7">
              With over 15 years of hands-on experience, we are a certified HVAC engineering firm
              serving Kuwait City and across Kuwait. Our team brings technical mastery, safety-first
              protocols, and a commitment to energy-efficient solutions to every project.
            </p>
            <p className="text-base text-muted leading-[1.8] mb-9">
              We hold certifications from ASHRAE, ACCA, and Kuwait Ministry of Works (MOW).
              Whether it's a luxury villa or a multi-story commercial complex, we deliver
              precision-engineered climate control systems that last.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4 mb-9">
              {BADGES.map(([e, t, s]) => (
                <div
                  key={t}
                  className="flex gap-3.5 items-start p-4 bg-white rounded-2xl"
                  style={{ boxShadow: "0 2px 16px rgba(26,115,232,.08)" }}
                >
                  <span className="text-2xl">{e}</span>
                  <div>
                    <div className="font-bold text-sm text-navy">{t}</div>
                    <div className="text-xs text-muted mt-0.5">{s}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={() => go("Contact")}>
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="section-tag">Our Mission</span>
          <h2 className="section-title">Engineering Comfort, Delivering Trust</h2>
          <p className="section-sub mx-auto">
            Our mission is simple: provide every client — homeowner or enterprise — with the
            highest-quality HVAC engineering possible. We combine cutting-edge technology, industry
            best practices, and genuine care to ensure your indoor environment is perfect year-round.
          </p>
        </div>
      </section>
    </>
  );
}