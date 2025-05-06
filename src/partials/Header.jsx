import GBRLOGO from "../assets/images/logo.png";
import CVyan from "/CV_Adrian_Mulianto.pdf";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import GBRmedihome from "../assets/images/medifastBeranda.png";
import GBRUpdown from "../assets/images/Updown.png";
import GBRHydroculus from "../assets/images/hydroculus.png";
import GBRDBMS from "../assets/images/DBMS.png";
import GBRHotel from "../assets/images/hoteljarkom.png";
import GBRKeepreal from "../assets/images/keepreal.jpg";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [DarkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleDarkMode = () => setDarkMode(!DarkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Experiences", href: "#experiences" },
    { text: "Project", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-white min-h-[80vh] relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1638202201577-63a92d444e4d?q=80&w=2070&auto=format&fit=crop')] bg-no-repeat bg-cover dark:bg-[url('https://images.unsplash.com/photo-1484387436194-cf7cb70800ce?q=80&w=2070&auto=format&fit=crop')]">
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
                      ? "text-indigo-900 hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-100"
                      : "text-indigo-800 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-indigo-700"
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

      {/* Hero Content */}
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
                Undergraduate computer science student in Universitas Pendidikan
                Indonesia, software engineer specializing in Full-stack
                development. I am currently as a Web development intern in Dinas
                Komunikasi dan Informatika Jawa Barat.
              </p>
              <div className="mt-4">
                <a
                  href={CVyan}
                  target="_blank"
                  className="cursor-pointer uppercase bg-white dark:bg-gray-500 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
                >
                  Download CV!
                </a>
              </div>
            </div>

            {/* Gambar */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2800, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full aspect-[2/1] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[2/1]"
              >
                {[
                  { image: GBRUpdown, title: "UpDown Game" },
                  { image: GBRHydroculus, title: "Hydroculus" },
                  { image: GBRDBMS, title: "DBMS" },
                  { image: GBRmedihome, title: "Medifast App" },
                  { image: GBRHotel, title: "Hotel Network & IOT" },
                  { image: GBRKeepreal, title: "KeepReal" },
                ].map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h2 className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold bg-black/50 px-4 py-2 rounded">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
