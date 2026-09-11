import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        {/* Label Kecil di atas Judul */}
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
          Get to know me
        </span>

        {/* Judul Utama */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r text-blue-500 dark:text-blue-400 mb-8">
          About Me
        </h2>

        {/* Kalimat Pembuka (Highlight) */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-snug">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-gray-600 to-gray-400 dark:from-sky-400 dark:to-sky-200 bg-clip-text text-transparent">
            Adrian Mulianto
          </span>
          . <br className="hidden md:block" />A Computer Science graduate &
          Full-stack Web Developer.
        </h3>

        {/* Paragraf Deskripsi */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 mx-auto max-w-3xl">
          I am an alumnus of Universitas Pendidikan Indonesia with a strong
          passion for software engineering. Specializing in modern frameworks
          like Laravel, React, and Tailwind CSS, I enjoy building scalable,
          user-centric applications. I am highly enthusiastic about continuously
          expanding my technical expertise and collaborating with others to
          create impactful digital solutions.
        </p>

        {/* Ornamen / Garis Pembatas Estetik */}
        <div className="flex justify-center items-center gap-4 opacity-70">
          <div className="h-px w-16 md:w-24 bg-gray-300 dark:bg-gray-700"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="h-px w-16 md:w-24 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </section>
  );
}
