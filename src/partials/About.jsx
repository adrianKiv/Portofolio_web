import React from "react";
import { motion as Motion, useReducedMotion } from "motion/react";
import {
  TypingText,
  TypingTextCursor,
} from "@animate-ui/react/primitives/texts/typing";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="site-section border-y border-white/5 py-24"
    >
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -56 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-kicker">01 / Profile</span>
        </Motion.div>
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Building useful software with{" "}
            <span className="text-blue-400">clarity and purpose.</span>
          </h2>
            <div className="mt-8 grid gap-6 text-slate-400 md:grid-cols-2">
              <TypingText
                text="I am a Computer Science graduate from Universitas Pendidikan Indonesia, with hands-on experience in full-stack web development, databases, and software testing."
                duration={20}
                delay={180}
                inView
                className="leading-7"
              >
                <TypingTextCursor className="text-blue-400" />
              </TypingText>

              <TypingText
                text="My work combines Laravel, React, modern APIs, and practical system design to create accessible products that remain maintainable as they grow."
                duration={20}
                delay={2400}
                inView
                className="leading-7"
              >
                <TypingTextCursor className="text-blue-400" />
              </TypingText>
            </div>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-3">
            {[["UPI", "Computer Science"], ["Full-stack", "Web development"], ["Indonesia", "West Java"]].map(([value, label]) => (
              <div key={label} className="bg-[#0b111d] p-5">
                <p className="text-lg font-bold text-white">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
