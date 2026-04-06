import { SERVICES, TESTIMONIALS, WHATSAPP } from "../constants";

const WA_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function HomePage({ setPage }) {
  const wa = () =>
    window.open(`https://wa.me/${WHATSAPP}?text=Hello! I need HVAC services.`, "_blank");

  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-screen relative flex items-center overflow-hidden px-[5%] pt-[120px] pb-20"
        style={{ background: "linear-gradient(135deg,#0a1628 0%,#0d2654 40%,#1a3a7e 70%,#1565c0 100%)" }}
      >
        {/* Decorative rings */}
        {[{ s: 500, x: "-10%", y: "-20%", o: 0.06 }, { s: 300, x: "70%", y: "60%", o: 0.05 }, { s: 200, x: "85%", y: "10%", o: 0.08 }].map((c, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{ width: c.s, height: c.s, left: c.x, top: c.y, border: `1px solid rgba(255,255,255,${c.o})` }}
          />
        ))}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 75% 50%, rgba(26,115,232,.2) 0%, transparent 60%)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1200px] mx-auto w-full">
          {/* Left */}
          <div className="animate-fadeup">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-0.5 bg-blue-400" />
              <span className="text-blue-400 text-[13px] font-bold tracking-[1.5px] uppercase">
                Certified HVAC Engineering
              </span>
            </div>
            <h1
              className="font-extrabold text-white leading-[1.15] mb-6"
              style={{ fontSize: "clamp(32px,4.5vw,58px)" }}
            >
              Reliable HVAC Solutions for{" "}
              <span className="text-blue-400">Residential & Commercial</span> Needs
            </h1>
            <p className="text-lg text-white/75 leading-[1.8] mb-10 max-w-[520px]">
              Certified HVAC Engineer specializing in installation, maintenance, and repair.
              Delivering comfort, efficiency, and peace of mind — guaranteed.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="btn-primary" onClick={() => go("Contact")}>
                Get a Free Quote
              </button>
              <button className="btn-outline" onClick={wa}>
                💬 Contact Now
              </button>
            </div>
            <div className="flex gap-10 mt-14 flex-wrap">
              {[["15+", "Years Experience"], ["500+", "Projects Done"], ["98%", "Client Satisfaction"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-[36px] font-extrabold text-blue-400 leading-none">{n}</div>
                  <div className="text-[13px] text-white/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – floating orb */}
          <div className="hidden md:flex justify-center relative animate-float">
            <div
              className="w-[420px] h-[420px] rounded-full flex items-center justify-center relative"
              style={{ background: "rgba(100,181,246,.08)", border: "1px solid rgba(100,181,246,.2)" }}
            >
              <div
                className="w-[340px] h-[340px] rounded-full flex items-center justify-center"
                style={{ background: "rgba(100,181,246,.1)", border: "1px solid rgba(100,181,246,.25)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=85"
                  alt="HVAC Engineer"
                  className="w-[280px] h-[280px] rounded-full object-cover"
                  style={{ border: "4px solid rgba(100,181,246,.4)" }}
                />
              </div>
              {[{ e: "❄️", x: -20, y: 60 }, { e: "🔧", x: 360, y: 100 }, { e: "⚡", x: 180, y: -20 }].map((b, i) => (
                <div
                  key={i}
                  className="absolute w-14 h-14 rounded-2xl flex items-center justify-center text-2xl animate-pulse2"
                  style={{
                    left: b.x, top: b.y,
                    background: "rgba(255,255,255,.1)",
                    backdropFilter: "blur(10px)",
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  {b.e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Complete HVAC Solutions</h2>
            <p className="section-sub mx-auto">
              From design and installation to maintenance and repair — we cover every aspect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {SERVICES.slice(0, 3).map((s) => (
              <div key={s.title} className="card p-9 relative overflow-hidden cursor-default">
                <div
                  className="absolute -top-5 -right-5 w-24 h-24 rounded-full opacity-60"
                  style={{ background: "linear-gradient(135deg,#e8f0fe,#bbdefb)" }}
                />
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-[15px] text-muted leading-[1.75]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="btn-primary" onClick={() => go("Services")}>
              View All Services →
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <div className="py-16 px-[5%]" style={{ background: "linear-gradient(135deg,#0a1628,#0d47a1)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[["15+", "Years Experience"], ["500+", "Projects Done"], ["98%", "Client Satisfaction"], ["24/7", "Emergency Support"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-[42px] font-extrabold text-blue-400 leading-none">{n}</div>
              <div className="text-[13px] text-white/60 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS PREVIEW ── */}
      <section className="py-24 px-[5%] bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-sub mx-auto">Hundreds of happy customers. Here are a few of their stories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div key={t.name} className="card p-10 relative">
                <div className="text-[52px] text-tag font-serif leading-none mb-2">"</div>
                <p className="text-base text-muted leading-[1.8] mb-7 -mt-4">{t.text}</p>
                <div className="flex gap-3.5 items-center border-t border-tag pt-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#1a73e8,#0d47a1)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[15px] text-navy">{t.name}</div>
                    <div className="text-[13px] text-muted">{t.location}</div>
                  </div>
                  <div className="ml-auto text-yellow-500">{"★".repeat(t.rating)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="btn-primary" onClick={() => go("Testimonials")}>
              Read All Reviews →
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-[5%]" style={{ background: "linear-gradient(135deg,#0a1628,#0d47a1)" }}>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Upgrade Your HVAC System?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free consultation and quote within 2 hours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary" onClick={() => go("Contact")}>
              Get a Free Quote
            </button>
            <button className="btn-outline" onClick={wa}>
              {WA_SVG} WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
