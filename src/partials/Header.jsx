import CVyan from "/CV_Adrian_Mulianto.pdf";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import Fotowis from "../assets/images/fotowis.jpeg";
import { motion as Motion, useReducedMotion } from "motion/react";

const words = [
  "Software Engineer.",
  "Backend Developer.",
  "Full-stack Web Developer.",
];

function Header() {
  const reduceMotion = useReducedMotion();
  const compactMotion = reduceMotion || (typeof window !== "undefined" && window.innerWidth < 768);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(130);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.dataset.theme = "dark";

    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );
      setTypingSpeed(isDeleting ? 50 : 150);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Experiences", href: "#experiences" },
    { text: "Project", href: "#projects" },
    { text: "Tech Stack", href: "#techstacks" },
    { text: "Contact", href: "#contact" },
  ];

  const handleNavigation = () => {
    window.dispatchEvent(new Event("portfolio:close-modals"));
  };

  return (
    <header id="about" className="relative min-h-[92vh] overflow-hidden overflow-x-clip bg-[#080c14] text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-700/30 blur-[120px]" />
        <div className="absolute right-[-10rem] bottom-[-12rem] h-[32rem] w-[32rem] rounded-full bg-indigo-700/20 blur-[140px]" />
      </div>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "border-b border-white/5 bg-[#080c14]/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#" className="group flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-blue-400/40 bg-blue-500/10 font-pressstart text-[10px] text-blue-300">
                AM
              </span>
              <span className="text-sm font-bold tracking-[0.22em] text-white">ADRIAN</span>
            </a>
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={handleNavigation}
                  className="text-sm font-medium text-slate-400 transition hover:text-white"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={handleNavigation}
              className="hidden items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-300 transition hover:border-blue-400/60 hover:bg-blue-500/20 sm:flex"
            >
              Let's talk <FiArrowDownRight />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-slate-300 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-white/5 bg-[#080c14]/95 px-5 py-5 lg:hidden">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  handleNavigation();
                  setMobileMenuOpen(false);
                }}
                className="block border-b border-white/5 py-3 text-sm font-medium text-slate-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </nav>
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
          <Motion.div
            className="hero-copy-in"
            initial={compactMotion ? { opacity: 0, y: 20 } : { opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-kicker mb-7">Portofolio / 2026</div>
            <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7.2rem)] font-black leading-[0.88] tracking-[-0.055em] text-white">
              Adrian
              <span className="block text-blue-500">Mulianto.</span>
            </h1>
            <div className="mt-7 flex min-h-10 items-center gap-3 border-l border-blue-500/60 pl-4">
              <p className="text-base font-semibold text-slate-300 sm:text-xl">
                Computer Science graduate &nbsp;—&nbsp;
                <span className="text-blue-400">{text}<span className="animate-pulse">|</span></span>
              </p>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              I build practical digital products across web and mobile, with a focus on clean architecture,
              useful interfaces, and reliable backend systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500 hover:shadow-[0_12px_40px_rgba(37,99,235,.28)]">
                Explore work <FiArrowDownRight className="text-lg" />
              </a>
              <a href={CVyan} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/10">
                <FiDownload /> Download CV
              </a>
            </div>
          </Motion.div>
          <Motion.div
            className="hero-image-in relative mx-auto w-full max-w-[430px]"
            initial={compactMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute -inset-5 rounded-[2.5rem] border border-blue-400/10" />
            <div className="hero-profile-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101827] blue-glow">
              <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
              <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
              <span className="hero-node hero-node-one" aria-hidden="true" />
              <span className="hero-node hero-node-two" aria-hidden="true" />
              <span className="hero-node hero-node-three" aria-hidden="true" />
              <img src={Fotowis} alt="Adrian Mulianto" className="h-full w-full object-cover grayscale-[12%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-blue-500/5" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-300">Based in</p>
                  <p className="mt-1 text-sm font-semibold text-white">Sukabumi, Indonesia</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_#34d399]" />
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
