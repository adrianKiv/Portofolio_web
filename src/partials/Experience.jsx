import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "motion/react";
import {
  TypingText,
  TypingTextCursor,
} from "@animate-ui/react/primitives/texts/typing";

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const compactMotion = reduceMotion || (typeof window !== "undefined" && window.innerWidth < 768);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState([]);
  const timelineRef = useRef(null);
  const nodesRef = useRef([]);
  const restoreScrollRef = useRef(true);

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
    if (!selectedExperience) return undefined;
    document.body.classList.add("modal-open");
    window.dispatchEvent(new Event("portfolio:modal-open"));

    const scrollY = window.scrollY;
    const previous = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    const closeOnNavigation = () => {
      restoreScrollRef.current = false;
      setSelectedExperience(null);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedExperience(null);
    };
    window.addEventListener("portfolio:close-modals", closeOnNavigation);
    window.addEventListener("hashchange", closeOnNavigation);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.dispatchEvent(new Event("portfolio:modal-close"));
      window.removeEventListener("portfolio:close-modals", closeOnNavigation);
      window.removeEventListener("hashchange", closeOnNavigation);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.position = previous.position;
      document.body.style.top = previous.top;
      document.body.style.width = previous.width;
      document.body.style.overflow = previous.overflow;
      if (restoreScrollRef.current) {
        window.requestAnimationFrame(() => window.scrollTo(0, scrollY));
      }
      restoreScrollRef.current = true;
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
            <Motion.button
              key={exp.ID ?? index}
              ref={(el) => (nodesRef.current[index] = el)}
              type="button"
              onClick={() => setSelectedExperience(exp)}
              initial={compactMotion ? { opacity: 0, y: 20 } : { opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              whileHover={reduceMotion ? undefined : { x: 5 }}
              transition={{ duration: 0.58, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
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
            </Motion.button>
              );
            })()
          ))}
        </div>
      </div>

      <AnimatePresence>
      {selectedExperience && (
        <Motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/92 p-3 backdrop-blur-xl sm:p-6"
          onClick={() => setSelectedExperience(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <Motion.div
            className="detail-modal relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-[28px] border border-blue-400/15 bg-[#0b111d] shadow-[0_30px_120px_rgba(0,0,0,.65)]"
            onClick={(event) => event.stopPropagation()}
            initial={compactMotion ? false : { opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 sm:px-9">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">
                Experience / {selectedExperience.date}
              </span>
              <button
              onClick={() => setSelectedExperience(null)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-xl text-slate-400 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
            </div>
            <div className="max-h-[calc(92vh-73px)] overflow-y-auto px-6 pb-8 pt-7 sm:px-9 sm:pb-10 sm:pt-9">
              <h3 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                {selectedExperience.title}
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,.9)]" />
                @{selectedExperience.subtitle}
              </p>
              <div className="mt-8 border-l border-blue-400/30 pl-5 sm:pl-7">
                <TypingText
                  text={selectedExperience.detail}
                  duration={14}
                  delay={180}
                  inView
                  className="text-[15px] leading-8 text-slate-300 sm:text-base sm:leading-9"
                >
                  <TypingTextCursor className="text-blue-400" />
                </TypingText>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
