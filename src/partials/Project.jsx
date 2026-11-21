import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const cardsRef = useRef([]);

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
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
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
            <article
              key={project.id ?? index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-visible="false"
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
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-blue-400/15 bg-[#0b111d]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#080c14]/80 text-xl text-white backdrop-blur"
              aria-label="Close"
            >
              ×
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="h-56 w-full object-cover sm:h-96" />
            <div className="p-6 sm:p-9">
              <h3 className="text-2xl font-bold text-white sm:text-4xl">
                {selectedProject.title.replace(/^\d+\.\s*/, "")}
              </h3>
              <p className="mt-3 text-sm font-medium text-blue-400">{selectedProject.subtitle}</p>
              <p className="mt-7 border-t border-white/8 pt-7 leading-8 text-slate-300">
                {selectedProject.detail}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
