import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AnimatePresence, motion as Motion, useReducedMotion } from "motion/react";
import {
  TypingText,
  TypingTextCursor,
} from "@animate-ui/react/primitives/texts/typing";

export default function Project() {
  const reduceMotion = useReducedMotion();
  const compactMotion = reduceMotion || (typeof window !== "undefined" && window.innerWidth < 768);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const cardsRef = useRef([]);
  const restoreScrollRef = useRef(true);

  useEffect(() => {
    const controller = new AbortController();

    Promise.all([
      fetch("https://go-porto-api.vercel.app/api/featured-projects", { signal: controller.signal }).then((response) => {
        if (!response.ok) throw new Error("Gagal mengambil data proyek");
        return response.json();
      }),
      new Promise((resolve) => window.setTimeout(resolve, 900)),
    ])
      .then(([result]) => {
        setProjects(
          (Array.isArray(result.data) ? result.data : []).map((item) => ({
            id: item.ID,
            title: item.title,
            subtitle: item.subtitle,
            detail: item.detail,
            image: item.image_url,
            github: item.github_url,
            linkedin: item.linkedin_url,
            youtube: item.youtube_url,
          })),
        );
      })
      .catch((fetchError) => {
        if (fetchError.name !== "AbortError") setError(fetchError.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;
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
      setSelectedProject(null);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
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
  }, [selectedProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        entry.target.setAttribute("data-visible", entry.isIntersecting ? "true" : "false");
      }),
      { threshold: 0.12 },
    );
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, [projects]);

  return (
    <section id="projects" className="site-section py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">04 / Selected work</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Featured Projects
            </h2>
          </div>
          <div className="flex gap-5 text-sm">
            <a href="https://github.com/adrianKiv" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition hover:text-blue-400">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/adrianmulianto" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition hover:text-blue-400">LinkedIn ↗</a>
          </div>
        </div>

        {loading && (
          <div className="api-loading-wrap" role="status" aria-live="polite">
            <div className="api-loading">
              <span className="api-loading-spinner" aria-hidden="true" />
              <div>
                <p>Sedang mengambil data dari GO API</p>
                <span>Menyiapkan proyek unggulan</span>
              </div>
            </div>
            <div className="project-skeleton">
              {[0, 1, 2].map((item) => (
                <div key={item} className={`project-skeleton-card ${item === 0 ? "is-featured" : ""}`}>
                  <i /><div><b /><span /><span /></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Motion.article
              key={project.id ?? index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-visible="false"
              initial={compactMotion ? { opacity: 0, y: 24 } : { opacity: 0, x: index % 2 === 0 ? -54 : 54, y: 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.72, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`reveal-${index % 2 === 0 ? "left" : "right"} group overflow-hidden rounded-3xl border border-white/8 bg-[#0b111d] transition duration-500 hover:-translate-y-1 hover:border-blue-400/25 ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="block w-full text-left"
              >
                <div className={`relative overflow-hidden bg-slate-900 ${index === 0 ? "h-72 sm:h-[440px]" : "h-64 sm:h-72"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-80" />
                </div>
              </button>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 rounded-xl border border-blue-400/10 bg-blue-500/[0.035] p-3">
                  {project.subtitle.split(",").map((tech) => (
                    <span key={tech} className="rounded-md border border-white/8 bg-[#111827] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                      {tech.trim().replace(/^&\s*/, "")}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                  {project.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-400">
                  {project.detail}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-white/8 pt-5">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="View on GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white">
                      <FaGithub className="text-lg" />
                    </a>
                  )}
                  {project.youtube && (
                    <a href={project.youtube} target="_blank" rel="noopener noreferrer" title="View on YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-red-400/15 bg-red-500/[0.07] text-red-400 transition hover:border-red-400/40 hover:bg-red-500/15">
                      <FaYoutube className="text-lg" />
                    </a>
                  )}
                  {project.linkedin && (
                    <a href={project.linkedin} target="_blank" rel="noopener noreferrer" title="View on LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-blue-400/15 bg-blue-500/[0.07] text-blue-400 transition hover:border-blue-400/40 hover:bg-blue-500/15">
                      <FaLinkedin className="text-lg" />
                    </a>
                  )}
                  <button type="button" onClick={() => setSelectedProject(project)} className="ml-auto text-xs font-bold uppercase tracking-wider text-blue-400 transition hover:text-blue-300">
                    View details →
                  </button>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
      {selectedProject && (
        <Motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/92 p-3 backdrop-blur-xl sm:p-6"
          onClick={() => setSelectedProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Motion.div
            className="detail-modal relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] border border-blue-400/15 bg-[#0b111d] shadow-[0_30px_120px_rgba(0,0,0,.65)]"
            onClick={(event) => event.stopPropagation()}
            initial={compactMotion ? false : { opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          >
            <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#080c14]/85 text-xl text-slate-300 backdrop-blur transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
            <div className="max-h-[92vh] overflow-y-auto">
              <div className="relative h-52 overflow-hidden sm:h-80">
                <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b111d] via-[#0b111d]/20 to-transparent" />
              </div>
              <div className="px-6 pb-8 sm:px-9 sm:pb-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">
                  Featured project
                </span>
                <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                  {selectedProject.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.subtitle.split(",").map((tech) => (
                    <span key={tech} className="rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                      {tech.trim().replace(/^&\s*/, "")}
                    </span>
                  ))}
                </div>
                <div className="mt-8 border-l border-blue-400/30 pl-5 sm:pl-7">
                  <TypingText
                    text={selectedProject.detail}
                    duration={14}
                    delay={180}
                    inView
                    className="text-[15px] leading-8 text-slate-300 sm:text-base sm:leading-9"
                  >
                    <TypingTextCursor className="text-blue-400" />
                  </TypingText>
                </div>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
