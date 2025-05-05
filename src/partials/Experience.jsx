import React, { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "1. Web Developer Intern",
      detail:
        "Bekerja sebagai intern pengembang web di PT XYZ, mengembangkan frontend menggunakan React dan backend menggunakan Laravel.",
    },
    {
      title: "2. Database System Practice Assistant",
      detail:
        "Membantu mahasiswa dalam praktik sistem basis data, memberikan pengarahan dan membimbing pengerjaan tugas menggunakan PostgreSQL.",
    },
    {
      title:
        "3. System Operation and Computer Networking practice Assistant",
      detail:
        "Mendampingi mahasiswa dalam praktik sistem operasi dan jaringan komputer, termasuk penggunaan Linux, konfigurasi jaringan, dan troubleshooting.",
    },
    {
      title: "4. Teaching Assistant for Assembler (Artificial Reality Platform)",
      detail:
        "Membantu dalam mata kuliah Assembler dengan praktik pengkodean dan debugging pada platform realitas buatan yang mensimulasikan hardware virtual.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0); // default item pertama

  return (
    <section id="experiences" className="py-16 bg-stone-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-400 dark:text-indigo-200">
          Experiences
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* List (kiri) */}
          <div className="w-full md:w-1/3 space-y-4">
            {experiences.map((exp, index) => (
              <button
                key={exp.title}
                onClick={() => setSelectedIndex(index)}
                className={`w-full text-left p-4 rounded-lg shadow transition-colors
                  ${
                    selectedIndex === index
                      ? "bg-indigo-200 dark:bg-indigo-600 text-indigo-900 dark:text-white"
                      : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-500"
                  }`}
              >
                <h3 className="text-lg font-semibold">{exp.title}</h3>
              </button>
            ))}
          </div>

          {/* Detail (kanan) */}
          <div className="w-full md:w-2/3 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {experiences[selectedIndex].title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {experiences[selectedIndex].detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
