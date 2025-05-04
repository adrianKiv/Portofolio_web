import GBRLOGO from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (DarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [DarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
  };

  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Experiences", href: "#experiences" },
    { text: "Project", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-white min-h-[80vh] relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1638202201577-63a92d444e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover dark:bg-[url('https://images.unsplash.com/photo-1484387436194-cf7cb70800ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center justify-between h-16 flex relative">
            <div className="items-center flex">
              <a href="#" className="flex items-center space-x-2">
                <img
                  alt="logo"
                  src={GBRLOGO}
                  className="h-14 w-auto dark:invert"
                />
                <span className="font-pressstart text-2xl tracking-wide text-sky-600 dark:text-sky-300">
                  ADRIAN
                </span>
              </a>

              <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block text-black">
                <div className="flex space-x-6 text-black">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`px-3 py-2 font-bold text-[16px] rounded-md transition-colors duration-300 ${
                        scrolled
                          ? "text-indigo-900 hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-100"
                          : "text-indigo-800 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-indigo-700"
                      }`}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-600 dark:bg-gray-500 text-gray-700 dark:text-yellow-400 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                {DarkMode ? <FiSun size={26} /> : <FiMoon size={26} />}
              </button>

              <div className="md:hidden">
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-16 sm:pt-32 lg:pb-10 sm:pb-12 relative z-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-8 lg:mb-8">
              <h1 className="text-3xl sm:text-5xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 dark:from-sky-300 dark:to-sky-100">
                Hi, my name is <br />
              </h1>
              <span className="font-eduVIC text-transparent text-6xl font-bold bg-gradient-to-r bg-clip-text from-gray-600 to-gray-400 dark:from-sky-400 dark:to-sky-200">
                Adrian Mulianto
              </span>
              <p className="mt-6 text-lg text-black dark:text-gray-300 max-w-lg">
              Undergraduate computer science student in Universitas Pendidikan Indonesia, software engineer specializing in Full-stack development.
              I am currently as a Web development intern in Dinas Komunikasi dan Informatika Jawa Barat.
              </p>

              <div className="mt-4">
                <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 dark:bg-gray-800 rounded-2xl shadow-lg shadow-sky-500/30 dark:shadow-sky-400/20 transition-all duration-300 hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 flex items-center px-6 py-3 space-x-3 rounded-2xl bg-neutral-950 dark:bg-gray-900">
                    <span>Download CV</span>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                alt="table work"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover rounded-xl shadow-xl w-full dark:shadow-gray-800/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
