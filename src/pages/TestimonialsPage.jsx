import { TESTIMONIALS } from "../constants";
import { PageHero } from "../components/Shared";

export default function TestimonialsPage({ setPage }) {
  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Hundreds of happy customers. Here are their stories."
        page="Testimonials"
        setPage={setPage}
      />

      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {TESTIMONIALS.map((t) => (
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
                  <div className="ml-auto text-yellow-500 text-base">
                    {"★".repeat(t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating summary */}
          <div
            className="mt-16 text-center py-16 px-8 rounded-[28px]"
            style={{ background: "linear-gradient(135deg,#0a1628,#0d47a1)" }}
          >
            <div className="text-6xl font-extrabold text-white mb-2">4.9</div>
            <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
            <p className="text-white/70 text-base">
              Based on 200+ verified reviews across Kuwait
            </p>
          </div>

        </div>
      </section>
    </>
  );
}