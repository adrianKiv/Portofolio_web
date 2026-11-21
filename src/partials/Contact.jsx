import React, { useRef, useState } from "react";

const EMAIL = "adrianmulianto@gmail.com";

export default function Contact() {
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
        <div className="contact-panel relative overflow-hidden rounded-[2rem] border border-blue-400/15 bg-[#0b111d] px-6 py-14 sm:px-12 sm:py-16">
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
              <a href="https://www.linkedin.com/in/adrianmulianto/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn ↗</a>
              <a href="https://github.com/adrianKiv" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub ↗</a>
              <a href="https://www.instagram.com/adriannn_027/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram ↗</a>
              <span>Sukabumi, West Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
