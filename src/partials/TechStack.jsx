import React, { useEffect, useRef } from "react";
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
      className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
            Tech Stacks
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies, languages, and tools I use to build scalable
            applications.
          </p>
        </div>

        {/* Categories Map */}
        <div className="space-y-16">
          {techCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col items-center">
              {/* Category Title */}
              <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-8 text-center border-b border-gray-200 dark:border-gray-800 pb-2 w-full max-w-sm">
                {category.title}
              </h3>

              {/* Grid Tech Stack */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl">
                {category.techs.map((item, itemIndex) => {
                  const currentIndex = globalCardIndex++; // Simpan index unik
                  return (
                    <div
                      key={itemIndex}
                      ref={(el) => (cardsRef.current[currentIndex] = el)}
                      data-visible="false"
                      className="group relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-sm flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-gray-200 dark:bg-gray-700"
                    >
                      {/* 1. Animasi Garis Berputar (Mati secara default, Menyala via atribut data-visible=true) */}
                      <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)] animate-[spin_2s_linear_infinite] opacity-0 group-data-[visible=true]:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                      {/* 2. Inner Card Layer (Menutupi tengah animasi sehingga menyisakan border) */}
                      <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-[14px] flex flex-col items-center justify-center z-10 transition-colors">
                        {/* Ikon Gambar */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-30 group-data-[visible=true]:grayscale-0 group-data-[visible=true]:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />

                        {/* Nama Teks */}
                        <span className="mt-3 text-[10px] md:text-xs font-semibold text-gray-400 dark:text-gray-500 group-data-[visible=true]:text-blue-600 dark:group-data-[visible=true]:text-blue-400 transition-colors duration-500 text-center px-1">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

