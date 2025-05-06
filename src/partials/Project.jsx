import React, { useState } from "react";
import GBRmedihome from "../assets/images/medifastBeranda.png";
import GBRUpdown from "../assets/images/Updown.png";
import GBRHydroculus from "../assets/images/hydroculus.png";
import GBRDBMS from "../assets/images/DBMS.png";
import GBRHotel from "../assets/images/hoteljarkom.png";
import GBRKeepreal from "../assets/images/keepreal.jpg";

export default function Project() {
  const projects = [
    {
      title: "1. Up Down platformer game",
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
      title: "2. Medifast",
      subtitle: "Flutter, Dart, FastAPI, Python & SQLite",
      detail:
        "Medifast is a mobile application designed for hospital needs. This mobile application presents various features that help in making appointments with doctors. Apart from that, a feature for printing digital prescriptions makes things easier for users without having to carry physical prescriptions.",
      image: GBRmedihome,
      github: "https://github.com/adrianKiv/medifast",
      linkedin: "https://www.linkedin.com/in/adrianmulianto/details/projects/",
      youtube: "",
    },
    {
      title: "3. Hydroculus",
      subtitle: "HTML, CSS, JavaCript, PHP, & MySQL",
      detail:
        "HydroCulus is a website focused on locating and mapping water sources in Indonesia. It offers comprehensive information about various water sources, such as springs, rivers, reservoirs, and lakes, along with their characteristics, including water condition, temperature, color, pH, and drinkability.",
      image: GBRHydroculus,
      github: "https://github.com/adrianKiv/Tubes_SBD",
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

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = selectedIndex !== -1 ? projects[selectedIndex] : null;

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400 dark:text-blue-200">
          Projects
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Versi HP/iPad: Accordion */}
          <div className="md:hidden space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow"
              >
                <button
                  onClick={() =>
                    setSelectedIndex(selectedIndex === index ? -1 : index)
                  }
                  className={`w-full flex justify-between items-center px-4 py-3 font-semibold transition-colors
                    ${
                      selectedIndex === index
                        ? "bg-blue-200 dark:bg-blue-700 text-blue-600 dark:text-white"
                        : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-white"
                    }
                  `}
                >
                  {project.title}
                  <span
                    className={`transform transition-transform duration-300 ${
                      selectedIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                    </svg>
                  </span>
                </button>
                {selectedIndex === index && (
                  <div className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white space-y-2">
                    <img
                      src={project.image}
                      alt="Project preview"
                      className="w-full h-auto object-contain rounded-lg shadow"
                    />
                    <h4 className="text-lg font-bold">{project.subtitle}</h4>
                    <p>{project.detail}</p>
                    <div className="flex gap-2 flex-wrap pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded"
                        >
                          GitHub
                        </a>
                      )}
                      {project.linkedin && (
                        <a
                          href={project.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          LinkedIn
                        </a>
                      )}
                      {project.youtube && (
                        <a
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          YouTube
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Versi Desktop: List dan Detail */}
          <div className="hidden md:flex flex-col md:flex-row gap-8">
            {/* List Proyek */}
            <div className="w-full md:w-1/3 space-y-4">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-4 rounded-lg shadow transition-colors ${
                    selectedIndex === index
                      ? "bg-blue-200 dark:bg-blue-600 text-blue-900 dark:text-white"
                      : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-500"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </button>
              ))}
            </div>

            {/* Detail Proyek */}
            <div className="w-full md:w-2/3 bg-stone-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              {selectedIndex !== -1 && (
                <>
                  <img
                    src={projects[selectedIndex].image}
                    alt="Project preview"
                    className="w-full h-auto object-contain rounded-lg shadow mb-3"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {projects[selectedIndex].title}
                  </h3>
                  <p className="text-blue-500 dark:text-blue-300 font-semibold">
                    {projects[selectedIndex].subtitle}
                  </p>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {projects[selectedIndex].detail}
                  </p>
                  <p className="text-blue-400 dark:text-gray-800">
                    More detail about the project on below.
                  </p>
                  <div className="flex gap-4 mt-4">
                    {projects[selectedIndex].github && (
                      <a
                        href={projects[selectedIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
                      >
                        GitHub
                      </a>
                    )}
                    {projects[selectedIndex].linkedin && (
                      <a
                        href={projects[selectedIndex].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                      >
                        LinkedIn
                      </a>
                    )}
                    {projects[selectedIndex].youtube && (
                      <a
                        href={projects[selectedIndex].youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      >
                        YouTube
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
