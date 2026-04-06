import { useState } from "react";
import { PROJECTS } from "../constants";
import { PageHero } from "../components/Shared";

const FILTERS = ["All", "Commercial", "Residential"];

export default function ProjectsPage({ setPage }) {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="A curated selection of HVAC projects completed with precision and care."
        page="Projects"
        setPage={setPage}
      />

      <section className="py-24 px-[5%] bg-surface">
        <div className="max-w-[1200px] mx-auto">

          {/* Filter bar */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-none cursor-pointer ${
                  filter === f
                    ? "text-white"
                    : "bg-white text-muted hover:bg-tag hover:text-brand"
                }`}
                style={
                  filter === f
                    ? {
                        background: "linear-gradient(135deg,#1a73e8,#0d47a1)",
                        boxShadow: "0 4px 20px rgba(26,115,232,.3)",
                      }
                    : { boxShadow: "0 2px 10px rgba(0,0,0,.06)" }
                }
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {filtered.map((p) => (
              <div key={p.title} className="card overflow-hidden">
                <div className="relative overflow-hidden h-[220px] group">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`tag-badge ${p.type === "Commercial" ? "tag-commercial" : "tag-residential"}`}>
                      {p.type}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-muted">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
