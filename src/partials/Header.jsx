import GBRLOGO from "../assets/images/logo.png";
import CVyan from "/CV_Adrian_Mulianto.pdf";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Fotolulus from "../assets/images/fotolulus.jpeg";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [DarkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
    }
    return true;
  });

  useEffect(() => {
    if (DarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [DarkMode]);

  const toggleDarkMode = () => setDarkMode(!DarkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Experiences", href: "#experiences" },
    { text: "Project", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-white min-h-[80vh] relative overflow-hidden dark:bg-gray-900">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            <a href="#" className="flex items-center space-x-2">
              <img
                src={GBRLOGO}
                alt="logo"
                className="h-14 w-auto dark:invert"
              />
              <span className="font-pressstart text-2xl tracking-wide text-sky-600 dark:text-sky-300">
                ADRIAN
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-3 py-2 font-bold text-[18px] rounded-md transition-colors duration-300 ${
                    scrolled
                      ? "text-blue-900 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100"
                      : "text-blue-800 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-700"
                  }`}
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-500 dark:bg-gray-500 text-gray-950 dark:text-yellow-400 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                {DarkMode ? <FiSun size={26} /> : <FiMoon size={26} />}
              </button>

              {/* Hamburger for Mobile */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-700 dark:text-gray-300"
                >
                  {mobileMenuOpen ? (
                    <HiOutlineX size={28} />
                  ) : (
                    <HiOutlineMenuAlt3 size={28} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pb-4 bg-white dark:bg-gray-900 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Content - Padding bawah (pb) diperbesar agar animasi tidak terpotong */}
      <div className="pt-32 pb-28 lg:pb-24 relative z-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Bagian Kiri (Teks & Tombol) */}
            <div className="mb-16 lg:mb-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="text-3xl sm:text-5xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 dark:from-sky-300 dark:to-sky-100">
                Hi, my name is <br />
              </h1>
              <span className="font-eduVIC text-transparent text-6xl font-bold bg-gradient-to-r bg-clip-text from-gray-600 to-gray-400 dark:from-sky-400 dark:to-sky-200 mt-2 block">
                Adrian Mulianto
              </span>
              <p className="mt-6 text-lg text-black dark:text-gray-300 max-w-lg leading-relaxed">
                Computer Science graduate from Universitas Pendidikan Indonesia
                and Software Engineer specializing in{" "}
                <span className="relative inline-block group cursor-default">
                  {/* Efek Cahaya (Glow) di belakang teks yang berdenyut */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 blur-md opacity-40 group-hover:opacity-80 animate-pulse transition-opacity duration-500"></span>

                  {/* Teks Utama dengan warna gradien biru */}
                  <span className="relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300">
                    Full-stack development.
                  </span>
                </span>
              </p>

              <div className="mt-8">
                <a
                  href={CVyan}
                  target="_blank"
                  className="cursor-pointer uppercase bg-gray-200 dark:bg-gray-500 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition inline-block text-gray-900 dark:text-white font-bold"
                >
                  Download CV!
                </a>
              </div>
            </div>

            {/* Bagian Kanan (Gambar dengan Animasi Lapis 3D) - Margin bawah (mb-10) ditambahkan untuk mobile */}
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-[4/5] z-10 group mt-8 lg:mt-0 mb-10 lg:mb-0">
              {/* Layer Belakang: Aura Blur Statis */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-2xl blur-2xl opacity-20 dark:opacity-40 z-0"></div>

              {/* Layer 1: Cincin Putus-putus (Berputar searah jarum jam di belakang gambar) */}
              <div className="absolute -inset-6 border-[2px] border-dashed border-sky-400/40 dark:border-sky-300/30 rounded-[2.5rem] animate-[spin_12s_linear_infinite] z-0 pointer-events-none"></div>

              {/* Layer 2: Cincin Solid (Berputar berlawanan jarum jam di depan bingkai utama) */}
              <div className="absolute -inset-2 border-[4px] border-transparent border-t-sky-400 border-b-sky-400 rounded-[1.5rem] animate-[spin_6s_linear_infinite_reverse] z-20 pointer-events-none opacity-80"></div>

              {/* Layer Utama: Wadah Gambar */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10 bg-gray-200 dark:bg-gray-800 border-[1px] border-gray-300 dark:border-gray-700">
                <img
                  src={Fotolulus}
                  alt="Foto Lulus"
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Layer 3: Efek Cahaya Lewat di Depan Gambar (Sweep menyilang) */}
                <div className="absolute top-0 -left-[150%] w-[100%] h-full z-30 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[150%] transition-all duration-1000 ease-in-out pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
