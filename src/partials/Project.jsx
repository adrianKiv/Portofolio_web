import React, { useEffect, useRef, useState } from "react";
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

  const cardsRef = useRef([]);
  // State untuk mengontrol pop-up modal detail proyek
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-12");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 overflow-hidden relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 flex flex-col border border-gray-100 dark:border-gray-700 group"
            >
              {/* Gambar Proyek */}
              <div 
                className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100 dark:bg-gray-700 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  {/* Ikon Zoom saat di-hover */}
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              {/* Konten Kartu */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title.replace(/^\d+\.\s*/, "")}
                </h3>

                {/* Badge Teknologi */}
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

                {/* Deskripsi Proyek (Dibatasi 3 baris) */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {project.detail}
                </p>

                {/* Tombol Detail */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-2 mb-6 self-start text-sm font-bold text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 flex items-center gap-1.5 transition-colors group/btn"
                >
                  Baca Selengkapnya
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {/* Tombol Aksi (Hanya menampilkan Icon agar lebih rapi di Card) */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 bg-gray-100 hover:text-white hover:bg-gray-800 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-500 rounded-lg transition-colors"
                      title="View GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                    </a>
                  )}
                  {project.youtube && (
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-red-600 bg-red-50 hover:text-white hover:bg-red-600 dark:text-red-400 dark:bg-red-900/30 dark:hover:bg-red-600 dark:hover:text-white rounded-lg transition-colors"
                      title="View YouTube"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.946 2.946 0 0 0-2.072-2.083C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.426.603a2.946 2.946 0 0 0-2.072 2.083C0 8.012 0 12 0 12s0 3.988.502 5.814a2.946 2.946 0 0 0 2.072 2.083C4.308 20.5 12 20.5 12 20.5s7.692 0 9.426-.603a2.946 2.946 0 0 0 2.072-2.083C24 15.988 24 12 24 12s0-3.988-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" /></svg>
                    </a>
                  )}
                  {project.linkedin && (
                    <a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-blue-600 bg-blue-50 hover:text-white hover:bg-blue-600 dark:text-blue-400 dark:bg-blue-900/30 dark:hover:bg-blue-600 dark:hover:text-white rounded-lg transition-colors"
                      title="View LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal untuk Detail Proyek */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md transition-opacity"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col transform transition-transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Tutup (Silang) */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Banner Gambar */}
            <div className="w-full h-48 sm:h-64 md:h-80 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten Scrollable */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                {selectedProject.title.replace(/^\d+\.\s*/, "")}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.subtitle.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/40 rounded-full"
                  >
                    {tech.trim().replace(/^&\s*/, "")}
                  </span>
                ))}
              </div>

              <div className="border-t border-gray-100 dark:border-gray-700 pt-6 mb-8">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify md:text-left">
                  {selectedProject.detail}
                </p>
              </div>

              {/* Tombol Aksi Lengkap di Modal */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                    GitHub
                  </a>
                )}
                {selectedProject.youtube && (
                  <a
                    href={selectedProject.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.946 2.946 0 0 0-2.072-2.083C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.426.603a2.946 2.946 0 0 0-2.072 2.083C0 8.012 0 12 0 12s0 3.988.502 5.814a2.946 2.946 0 0 0 2.072 2.083C4.308 20.5 12 20.5 12 20.5s7.692 0 9.426-.603a2.946 2.946 0 0 0 2.072-2.083C24 15.988 24 12 24 12s0-3.988-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" /></svg>
                    YouTube
                  </a>
                )}
                {selectedProject.linkedin && (
                  <a
                    href={selectedProject.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" /></svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}