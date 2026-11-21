import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "motion/react";

export default function Achievements() {
  const reduceMotion = useReducedMotion();
  const [achiv, setAchiv] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const cardsRef = useRef([]);

  useEffect(() => {
    const controller = new AbortController();

    Promise.all([
      fetch("https://go-porto-api.vercel.app/api/ac", { signal: controller.signal }).then((response) => {
        if (!response.ok) throw new Error("Gagal mengambil data pencapaian");
        return response.json();
      }),
      new Promise((resolve) => window.setTimeout(resolve, 900)),
    ])
      .then(([result]) => {
        setAchiv(
          (Array.isArray(result.data) ? result.data : []).map((item) => ({
            id: item.ID,
            type: item.type,
            title: item.title,
            date: item.date,
            description: item.description,
            link: item.link_url,
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
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        entry.target.setAttribute(
          "data-visible",
          entry.isIntersecting ? "true" : "false",
        );
      }),
      { threshold: 0.12 },
    );
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, [achiv]);

  return (
    <section id="achievements" className="site-section border-y border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">03 / Recognition</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Achievements
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Academic milestones and professional certifications that shaped my technical foundation.
          </p>
        </div>

        {loading && (
          <div className="api-loading-wrap" role="status" aria-live="polite">
            <div className="api-loading">
              <span className="api-loading-spinner" aria-hidden="true" />
              <div>
                <p>Sedang mengambil data dari GO API</p>
                <span>Menyiapkan pencapaian</span>
              </div>
            </div>
            <div className="achievement-skeleton">
              {[0, 1, 2, 3].map((item) => (
                <div key={item} className="achievement-skeleton-card">
                  <div><span /><i /></div>
                  <b /><i /><i /><span />
                </div>
              ))}
            </div>
          </div>
        )}
        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="grid gap-5 md:grid-cols-2">
          {achiv.map((item, index) => (
            <Motion.article
              key={item.id ?? index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-visible="false"
              style={{ transitionDelay: `${index * 90}ms` }}
              initial={reduceMotion ? false : { opacity: 0, y: 44, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: false, amount: 0.18 }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.62, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group min-h-[300px] rounded-2xl border border-white/8 bg-[#0b111d] p-7 transition-all duration-700 data-[visible=false]:translate-y-12 data-[visible=false]:opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  {item.type}
                </span>
                <span className="text-xs font-semibold text-slate-500">{item.date}</span>
              </div>
              <h3 className="mt-8 max-w-xl text-xl font-bold text-white transition group-hover:text-blue-300 sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex text-xs font-bold uppercase tracking-wider text-blue-400 transition hover:text-blue-300"
                >
                  View credential →
                </a>
              )}
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
