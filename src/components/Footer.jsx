import { PHONE, EMAIL_TO, WHATSAPP } from "../constants";

const SOCIALS = [
  { label: "FB", color: "#1877f2", href: "#" },
  { label: "IG", color: "#e4405f", href: "#" },
  { label: "LI", color: "#0a66c2", href: "#" },
  { label: "YT", color: "#ff0000", href: "#" },
];

const COLS = [
  { title: "Quick Links", items: ["Home", "About", "Services", "Projects", "Contact"] },
  { title: "Services", items: ["HVAC Installation", "AC Repair", "Heating Systems", "Ventilation", "Energy Audit"] },
  { title: "Contact", items: [PHONE, EMAIL_TO, "Kuwait", "Open: 9AM – 9PM"] },
];

export default function Footer({ setPage }) {
  return (
    <footer style={{ background: "#0a1628", color: "rgba(255,255,255,.7)" }} className="px-[5%] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-[38px] h-[38px] rounded-xl flex items-center justify-center text-xl"
                style={{ background: "linear-gradient(135deg,#1a73e8,#0d47a1)" }}
              >
                ❄️
              </div>
              <div>
                <div className="font-extrabold text-lg text-white">HVAC Pro</div>
                <div className="text-[11px] text-blue-400 font-semibold tracking-widest">
                  ENGINEERING SOLUTIONS
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-[280px] mb-6">
              Kuwait's trusted HVAC engineering firm. Certified, reliable, and
              energy-efficient solutions for every space.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-extrabold no-underline transition-all duration-200"
                  style={{ background: "rgba(255,255,255,.08)" }}
                  onMouseOver={(e) => (e.currentTarget.style.background = s.color)}
                  onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.08)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-5 tracking-wide">{col.title}</h4>
              {col.items.map((item) => (
                <div
                  key={item}
                  className="text-sm mb-3 cursor-pointer transition-colors duration-200 hover:text-blue-400"
                  onClick={() => {
                    const nav = ["Home", "About", "Services", "Projects", "Contact"];
                    if (nav.includes(item)) { setPage(item); window.scrollTo({ top: 0, behavior: "smooth" }); }
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm">© 2025 HVAC Pro Engineering Solutions. All rights reserved.</p>
          { }
        </div>

      </div>
    </footer>
  );
}
