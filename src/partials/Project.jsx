import React, { useEffect, useRef } from "react";
import GBRmedihome from "../assets/images/medifastBeranda.png";
import GBRUpdown from "../assets/images/Updown.png";
import GBRHydroculus from "../assets/images/hydroculus.png";
import GBRDBMS from "../assets/images/DBMS.png";
import GBRHotel from "../assets/images/hoteljarkom.png";
import GBRKeepreal from "../assets/images/keepreal.jpg";
import GBRWEBGIS from "../assets/images/webgis2.png";

export default function Project() {
  const projects = [
    {
      title: "1. WebGIS Kuliner UPI",
      subtitle: "Laravel, MVC, WebGIS, HTML, CSS, JavaCript, PHP, & MySQL",
      detail:
        "Developing a web-based application using Laravel, Leaflet.js, OpenStreetMap, and MySQL for mapping and recommending culinary MSMEs around UPI campus. The application has two types of users: the campus academic community (students, lecturers, and staff) and administrators who verify merchant submissions. The purpose of this application is to facilitate users in discovering personalized culinary options using Content-Based Filtering, navigating locations via real-time route tracking, and helping local micro-merchants increase digital promotional visibility through crowdsourced submissions.",
      image: GBRWEBGIS,
      github: "https://github.com/adrianKiv/web-umkm",
      linkedin: "https://www.linkedin.com/in/adrianmulianto/details/projects/",
      youtube: "",
    },
    {
      title: "2. Up Down platformer game",
      subtitle:
        "Java, OOP (Object-Oriented Programming), MVVM (Model-view-viewmodel), & MySQL",
      detail:
        "A game with the main objective of surviving by jumping and staying on blocks or rooftops to get the score. Implementing OOP wsing MVVM for the concept of the program. Creating database for saving the progress of the player on the game",
      image: GBRUpdown,
      github: "https://github.com/adrianKiv/TMD_DPBO2024",
      linkedin: "https://www.linkedin.com/in/adrianmulianto/details/projects/",
      youtube: "https://youtu.be/elperHV679c",
    },
    {
      title: "3. Medifast",
      subtitle: "Flutter, Dart, FastAPI, Python & SQLite",
      detail:
        "Medifast is a mobile application designed for hospital needs. This mobile application presents various features that help in making appointments with doctors. Apart from that, a feature for printing digital prescriptions makes things easier for users without having to carry physical prescriptions.",
      image: GBRmedihome,
      github: "https://github.com/adrianKiv/medifast",
      linkedin: "https://www.linkedin.com/in/adrianmulianto/details/projects/",
      youtube: "",
    },
    {
      title: "4. Pertanian & Peternakan DBMS",
      subtitle: "C, & Sequential File",
      detail:
        "Creating DBMS that included process of Create, Read, Update, and Delete Data on C Language, also implementing Sequential File and Abstract Machine.",
      image: GBRDBMS,
      github: "https://github.com/adrianKiv/TMD_ALPRO2_2023",
      linkedin: "https://www.linkedin.com/in/adrianmulianto/details/projects/",
      youtube: "https://youtu.be/WdngsJ4nlP0",
    },
    {
      title: "5. Hotel Network System",
      subtitle: "Cisco Packet Tracer, Networking, & IOT",
      detail: "Creating an Hotel Network System with IOT.",
      image: GBRHotel,
      github: "",
      linkedin: "https://www.linkedin.com/in/adrianmulianto/details/projects/",
      youtube: "",
    },
    {
      title: "6. KeepReal",
      subtitle: "HTML, CSS, JavaScript, PHP, & MongoDB",
      detail: "Simple Online Shop Web using non-relational database MongoDB.",
      image: GBRKeepreal,
      github: "https://github.com/adrianKiv/BDNR-UTS",
      linkedin: "https://www.linkedin.com/in/adrianmulianto/details/projects/",
      youtube: "",
    },
  ];

  // Ref untuk mengumpulkan semua elemen kartu
  const cardsRef = useRef([]);

  useEffect(() => {
    // Observer untuk mendeteksi kapan kartu masuk/keluar dari viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animasi masuk (muncul & naik)
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            // Animasi reset saat keluar dari layar
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-12");
          }
        });
      },
      {
        threshold: 0.1, // Terpicu ketika 10% elemen mulai terlihat
        rootMargin: "0px",
      },
    );

    // Daftarkan setiap kartu ke observer
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Here are some of my projects that I have worked on, both
            individually and in teams. I have more than 20+ projects that aren't
            listed here; you can check them on my
            <a
              href="https://github.com/adrianKiv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold mx-1"
            >
              GitHub
            </a>
            and
            <a
              href="https://www.linkedin.com/in/adrianmulianto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold mx-1"
            >
              LinkedIn
            </a>
            profiles.
          </p>
        </div>

        {/* Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)} // Hubungkan setiap kartu dengan useRef
              // Class awal untuk animasi: transparan (opacity-0) dan turun (translate-y-12)
              className="opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 flex flex-col border border-gray-100 dark:border-gray-700 group"
            >
              {/* Gambar Proyek */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Konten Kartu */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Menghapus angka di depan judul agar lebih bersih */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title.replace(/^\d+\.\s*/, "")}
                </h3>

                {/* Badge Teknologi (Membelah subtitle berdasarkan koma) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.subtitle.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/40 rounded-full whitespace-nowrap"
                    >
                      {tech.trim().replace(/^&\s*/, "")}
                    </span>
                  ))}
                </div>

                {/* Deskripsi Proyek */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow mb-6">
                  {project.detail}
                </p>

                {/* Tombol Aksi di Footer Kartu */}
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.youtube && (
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                    >
                      YouTube
                    </a>
                  )}
                  {project.linkedin && (
                    <a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
