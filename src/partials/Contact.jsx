import React, { useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion as Motion, useReducedMotion } from "motion/react";

const EMAIL = "adrianmulianto@gmail.com";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const compactMotion = reduceMotion || (typeof window !== "undefined" && window.innerWidth < 768);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="site-section py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Motion.div
          className="contact-panel relative overflow-hidden rounded-[2rem] border border-blue-400/15 bg-[#0b111d] px-6 py-14 sm:px-12 sm:py-16"
          initial={compactMotion ? false : { opacity: 0, y: 48, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.16 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="relative">
            <span className="section-kicker">06 / Contact</span>
            <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
              Have a project or opportunity?
              <span className="block text-blue-400">Let&apos;s work together.</span>
            </h2>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Send email →
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-slate-300 transition hover:border-blue-400/30"
              >
                {copied ? "Email copied" : EMAIL}
              </button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/8 pt-7 text-sm text-slate-400">
              <a href="https://www.linkedin.com/in/adrianmulianto/" target="_blank" rel="noopener noreferrer" className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/15 bg-blue-500/[0.06] text-blue-400 transition hover:-translate-y-1 hover:border-blue-400/45 hover:bg-blue-500/15" title="LinkedIn" aria-label="LinkedIn">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://github.com/adrianKiv" target="_blank" rel="noopener noreferrer" className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white" title="GitHub" aria-label="GitHub">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://www.instagram.com/adriannn_027/" target="_blank" rel="noopener noreferrer" className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-pink-400/15 bg-pink-500/[0.05] text-pink-400 transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10" title="Instagram" aria-label="Instagram">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://www.youtube.com/@adrian_2791" target="_blank" rel="noopener noreferrer" className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-400/15 bg-red-500/[0.05] text-red-400 transition hover:-translate-y-1 hover:border-red-400/40 hover:bg-red-500/10" title="YouTube" aria-label="YouTube">
                <FaYoutube className="text-lg" />
              </a>
              <span className="flex items-center text-sm text-slate-400">Sukabumi, West Java</span>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
