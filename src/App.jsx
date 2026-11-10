import About from "./partials/About.jsx";
import Experience from "./partials/Experience.jsx";
import Project from "./partials/Project.jsx";
import Achievements from "./partials/Achievements.jsx";
import Contact from "./partials/Contact.jsx";
import TechStack from "./partials/TechStack.jsx";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="fixed bottom-6 md:-bottom-1/12 right-4 md:right-6 z-50 transform md:-translate-y-1/2 flex flex-col space-y-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/adrian.mulianto/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end relative w-11 h-11 md:w-12 md:h-12"
        >
          {/* Kapsul Teks Expandable */}
          <div className="absolute right-0 flex items-center justify-start pr-14 pl-5 h-full rounded-full bg-blue-600 opacity-0 w-12 group-hover:w-[140px] group-hover:opacity-100 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(37,99,235,0.5)] overflow-hidden pointer-events-none">
            <span className="text-white font-bold text-sm tracking-wide transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
              Facebook
            </span>
          </div>
          {/* Lingkaran Ikon */}
          <div className="relative z-10 w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-600 rounded-full transition-all duration-300 shadow-lg group-hover:rotate-12 group-hover:scale-110">
            <FaFacebook className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/adriannn_027/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end relative w-11 h-11 md:w-12 md:h-12"
        >
          <div className="absolute right-0 flex items-center justify-start pr-14 pl-5 h-full rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 opacity-0 w-12 group-hover:w-[140px] group-hover:opacity-100 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(236,72,153,0.5)] overflow-hidden pointer-events-none">
            <span className="text-white font-bold text-sm tracking-wide transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
              Instagram
            </span>
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-pink-600 rounded-full transition-all duration-300 shadow-lg group-hover:-rotate-12 group-hover:scale-110">
            <FaInstagram className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/adrianKiv"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end relative w-11 h-11 md:w-12 md:h-12"
        >
          <div className="absolute right-0 flex items-center justify-start pr-14 pl-5 h-full rounded-full bg-gray-900 dark:bg-white opacity-0 w-12 group-hover:w-[125px] group-hover:opacity-100 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(75,85,99,0.5)] dark:shadow-[0_0_15px_rgba(255,255,255,0.5)] overflow-hidden pointer-events-none">
            <span className="text-white dark:text-gray-900 font-bold text-sm tracking-wide transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
              GitHub
            </span>
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-900 dark:group-hover:bg-white rounded-full transition-all duration-300 shadow-lg group-hover:rotate-12 group-hover:scale-110">
            <FaGithub className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" />
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/adrianmulianto/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end relative w-11 h-11 md:w-12 md:h-12"
        >
          <div className="absolute right-0 flex items-center justify-start pr-14 pl-5 h-full rounded-full bg-blue-700 opacity-0 w-12 group-hover:w-[130px] group-hover:opacity-100 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(29,78,216,0.5)] overflow-hidden pointer-events-none">
            <span className="text-white font-bold text-sm tracking-wide transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
              LinkedIn
            </span>
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg group-hover:-rotate-12 group-hover:scale-110">
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@adrian_2791"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end relative w-11 h-11 md:w-12 md:h-12"
        >
          <div className="absolute right-0 flex items-center justify-start pr-14 pl-5 h-full rounded-full bg-red-600 opacity-0 w-12 group-hover:w-[130px] group-hover:opacity-100 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(220,38,38,0.5)] overflow-hidden pointer-events-none">
            <span className="text-white font-bold text-sm tracking-wide transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
              YouTube
            </span>
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-red-600 rounded-full transition-all duration-300 shadow-lg group-hover:rotate-12 group-hover:scale-110">
            <FaYoutube className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </a>
      </div>

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Achievements Section */}
      <Achievements />

      {/* Project Section */}
      <Project />

      {/* TechStack Section */}

      <TechStack />

      {/* Contact Section */}

      <Contact />
    </div>
  );
}

export default App;
