import { useState, useEffect } from "react";
import { NAV_LINKS, WHATSAPP } from "../constants";

const WA_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar({ currentPage, setPage }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isHome = currentPage === "Home";
  const light  = !scrolled && isHome;

  const wa = () =>
    window.open(`https://wa.me/${WHATSAPP}?text=Hello! I need HVAC services.`, "_blank");

  const go = (page) => {
    setPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[5%] flex items-center justify-between"
        style={{
          height: "72px",
          background: scrolled || !isHome ? "rgba(255,255,255,.97)" : "transparent",
          backdropFilter: scrolled || !isHome ? "blur(20px)" : "none",
          boxShadow: scrolled || !isHome ? "0 2px 30px rgba(15,31,61,.1)" : "none",
        }}
      >
        {/* Logo */}
        <button onClick={() => go("Home")} className="flex items-center gap-2.5 border-none bg-transparent cursor-pointer">
          <div
            className="w-[38px] h-[38px] rounded-xl flex items-center justify-center text-xl"
            style={{ background: "linear-gradient(135deg,#1a73e8,#0d47a1)" }}
          >
            ❄️
          </div>
          <div>
            <div className={`font-extrabold text-[17px] leading-tight ${light ? "text-white" : "text-navy"}`}>
              Malik HVAC
            </div>
            <div className={`text-[11px] font-semibold tracking-widest ${light ? "text-blue-300" : "text-brand"}`}>
              ENGINEERING SOLUTIONS
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="desktop-nav items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => go(l)}
              className={`nav-link ${
                currentPage === l
                  ? "text-brand bg-tag"
                  : light
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-muted hover:text-brand hover:bg-tag"
              }`}
            >
              {l}
            </button>
          ))}
          <button
            onClick={wa}
            className="btn-primary ml-2"
            style={{ padding: "10px 22px", fontSize: 14 }}
          >
            {WA_SVG} WhatsApp Us
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`hamburger text-2xl bg-transparent border-none cursor-pointer ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-[72px] left-0 right-0 z-40 bg-white flex flex-col gap-2 px-[5%] py-5"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,.1)" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => go(l)}
              className={`nav-link text-left ${
                currentPage === l ? "text-brand bg-tag" : "text-navy"
              }`}
            >
              {l}
            </button>
          ))}
          <button onClick={wa} className="btn-primary mt-2">
            {WA_SVG} WhatsApp Us
          </button>
        </div>
      )}
    </>
  );
}
