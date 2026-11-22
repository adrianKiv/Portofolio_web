import React, { useEffect, useRef } from "react";
import { motion as Motion, useReducedMotion } from "motion/react";
import GBRcss from "../assets/images/logos_css.svg";
import GBRgit from "../assets/images/logos_git.svg";
import GBRhtml from "../assets/images/logos_html.svg";
import GBRjs from "../assets/images/logos_javascript.svg";
import GBRc from "../assets/images/logos_c.svg";
import GBRlaravel from "../assets/images/logos_laravel.svg";
import GBRmysql from "../assets/images/logos_mysql.svg";
import GBRnodejs from "../assets/images/logos_nodejs.svg";
import GBRphp from "../assets/images/logos_php.svg";
import GBRphyton from "../assets/images/logos_phyton.svg";
import GBRpostgresql from "../assets/images/logos_postgresql.svg";
import GBRreact from "../assets/images/logos_react.svg";
import GBRtailwind from "../assets/images/logos_tailwindcss.svg";
import GBRjmeter from "../assets/images/apachejmeter.svg";
import GBRcpp from "../assets/images/cpp.svg";
import GBRdart from "../assets/images/dart.svg";
import GBRflutter from "../assets/images/flutter.svg";
import GBRmongodb from "../assets/images/mongodb.svg";
import GBRselenium from "../assets/images/selenium.svg";
import GBRsqlite from "../assets/images/sqlite.svg";
import GBRGO from "../assets/images/GoLogo.png";
import GBRvite from "/vite.svg";

const techCategories = [
  {
    title: "Frontend & Mobile",
    techs: [
      { name: "HTML", image: GBRhtml },
      { name: "CSS", image: GBRcss },
      { name: "JavaScript", image: GBRjs },
      { name: "React", image: GBRreact },
      { name: "Tailwind CSS", image: GBRtailwind },
      { name: "Vite", image: GBRvite },
      { name: "Dart", image: GBRdart },
      { name: "Flutter", image: GBRflutter },
    ],
  },
  {
    title: "Backend & Languages",
    techs: [
      { name: "NodeJS", image: GBRnodejs },
      { name: "Laravel", image: GBRlaravel },
      { name: "PHP", image: GBRphp },
      { name: "Python", image: GBRphyton },
      { name: "C++", image: GBRcpp },
      { name: "C", image: GBRc },
      { name: "Go", image: GBRGO },
    ],
  },
  {
    title: "Database & Tools",
    techs: [
      { name: "MySQL", image: GBRmysql },
      { name: "PostgreSQL", image: GBRpostgresql },
      { name: "MongoDB", image: GBRmongodb },
      { name: "SQLite", image: GBRsqlite },
      { name: "Git", image: GBRgit },
      { name: "Selenium", image: GBRselenium },
      { name: "Jmeter", image: GBRjmeter },
    ],
  },
];

export default function TechStack() {
  const cardsRef = useRef([]);
  const reduceMotion = useReducedMotion();
  const compactMotion = reduceMotion || (typeof window !== "undefined" && window.innerWidth < 768);

  useEffect(() => {
    // Observer untuk memantau visibilitas setiap box tech di layar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Box masuk layar -> Nyalakan efek (tambahkan atribut data-visible)
            entry.target.setAttribute("data-visible", "true");
          } else {
            // Box keluar layar -> Matikan efek
            entry.target.setAttribute("data-visible", "false");
          }
        });
      },
      {
        threshold: 0.2, // Efek terpicu jika minimal 20% box terlihat
        rootMargin: "0px 0px -50px 0px", // Animasi aktif sedikit sebelum menyentuh bawah layar
      },
    );

    const validCards = cardsRef.current.filter(Boolean);
    validCards.forEach((card) => observer.observe(card));

    return () => {
      validCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // Variabel untuk melacak urutan unik ref dari semua kategori
  let globalCardIndex = 0;

  return (
    <section
      id="techstacks"
      className="site-section border-y border-white/5 py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <span className="section-kicker">05 / Toolkit</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
            Technology Stack
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Languages and tools used across frontend, backend, databases, testing, and deployment.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 lg:grid-cols-3">
          {techCategories.map((category, catIndex) => (
            <Motion.div
              key={catIndex}
              className="bg-[#0b111d] p-6 sm:p-8"
              initial={compactMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.62, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                {category.title}
              </h3>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {category.techs.map((item, itemIndex) => {
                  const currentIndex = globalCardIndex++;
                  return (
                    <Motion.div
                      key={itemIndex}
                      ref={(el) => (cardsRef.current[currentIndex] = el)}
                      data-visible="false"
                      style={{ transitionDelay: `${(currentIndex % 8) * 55}ms` }}
                      whileHover={reduceMotion ? undefined : { y: -7, scale: 1.03 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 460, damping: 28 }}
                      className="rotating-border reveal-up group flex min-h-24 flex-col items-center justify-center rounded-2xl p-3 transition duration-500 hover:-translate-y-1"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-9 w-9 object-contain grayscale opacity-50 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                      <span className="mt-3 text-center text-[9px] font-semibold text-slate-500 transition group-hover:text-blue-300">
                        {item.name}
                      </span>
                    </Motion.div>
                  );
                })}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

