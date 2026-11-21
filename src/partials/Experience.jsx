import React, { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState([]);
  const timelineRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const controller = new AbortController();

    Promise.all([
      fetch("https://go-porto-api.vercel.app/api/experiences", { signal: controller.signal }).then((response) => {
        if (!response.ok) throw new Error("Gagal mengambil data pengalaman");
        return response.json();
      }),
      new Promise((resolve) => window.setTimeout(resolve, 900)),
    ])
      .then(([result]) => setExperiences(Array.isArray(result.data) ? result.data : []))
      .catch((fetchError) => {
        if (fetchError.name !== "AbortError") setError(fetchError.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedExperience ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedExperience]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const trigger = window.innerHeight * 0.5;
      const distance = trigger - rect.top;
      setScrollProgress(
        Math.max(0, Math.min(100, (distance / rect.height) * 100)),
      );

      const active = [];
      nodesRef.current.forEach((node, index) => {
        if (node) {
          const nodeRect = node.getBoundingClientRect();
          if (trigger >= nodeRect.top + nodeRect.height / 2) active.push(index);
        }
      });
      setActiveNodes(active);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [experiences]);

  return (
    <section id="experiences" className="site-section py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <span className="section-kicker">02 / Journey</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
            Experience
          </h2>
        </div>

        {loading && (
          <div className="api-loading-wrap" role="status" aria-live="polite">
            <div className="api-loading">
              <span className="api-loading-spinner" aria-hidden="true" />
              <div>
                <p>Sedang mengambil data dari GO API</p>
                <span>Menyiapkan pengalaman</span>
              </div>
            </div>
            <div className="experience-skeleton">
              {[0, 1, 2, 3].map((item) => (
                <div key={item} className="experience-skeleton-row">
                  <span />
                  <div>
                    <i />
                    <b />
                  </div>
                  <i />
                  <b />
                </div>
              ))}
            </div>
          </div>
        )}
        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="experience-stack relative" ref={timelineRef}>
          <div className="experience-top-line" aria-hidden="true">
            <div
              className="experience-top-progress"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          {experiences.map((exp, index) => (
            (() => {
              const isActive = activeNodes.includes(index);
              return (
            <button
              key={exp.ID ?? index}
              ref={(el) => (nodesRef.current[index] = el)}
              type="button"
              onClick={() => setSelectedExperience(exp)}
              className={`experience-row group relative grid w-full gap-4 overflow-hidden border-b border-white/[0.07] py-8 text-left transition-all duration-700 md:grid-cols-[70px_minmax(280px,1fr)_minmax(180px,.55fr)_44px] md:items-center ${
                isActive
                  ? "is-active border-blue-400/35"
                  : ""
              }`}
            >
              <span className="ml-3 experience-number">0{index + 1}</span>
              <div>
                <h3 className="experience-title text-xl font-bold text-white transition sm:text-2xl">
                  {exp.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{exp.subtitle}</p>
              </div>
              <p className="text-sm font-medium text-slate-400">{exp.date}</p>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-lg text-slate-400 transition group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                ↗
              </span>
            </button>
              );
            })()
          ))}
        </div>
      </div>

      {selectedExperience && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-blue-400/15 bg-[#0b111d] p-7 shadow-[0_30px_100px_rgba(0,0,0,.55)] sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {selectedExperience.date}
            </span>
            <h3 className="mt-5 pr-10 text-2xl font-bold text-white sm:text-3xl">
              {selectedExperience.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-blue-400">@{selectedExperience.subtitle}</p>
            <div className="mt-7 border-t border-white/8 pt-7">
              <p className="leading-8 text-slate-300">{selectedExperience.detail}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
