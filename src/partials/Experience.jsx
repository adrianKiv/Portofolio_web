import React, { useState, useEffect, useRef } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Database System Practice Assistant",
      subtitle: "Universitas Pendidikan Indonesia",
      date: "Feb 2024 - Feb 2025",
      detail:
        "I also have experience assisting students in Database Systems lab sessions, where I provided guidance, supervision, and technical support throughout the learning process. This included explaining fundamental concepts of relational databases as well as hands-on implementation involving the design and management of databases using MySQL as the database management system (DBMS). These databases were operated through XAMPP, an open-source software package that provides a complete local server environment—including Apache, MySQL, PHP, and Perl—which is highly useful for offline learning and testing of web-based applications. In practice, I helped students understand how to design database schemas, write SQL queries, and integrate databases with PHP-based application interfaces.",
    },
    {
      title: "System Operation & Networking Assistant",
      subtitle: "Universitas Pendidikan Indonesia",
      date: "Sep 2024 - Des 2024",
      detail:
        "In addition, I served as a teaching assistant in Operating Systems and Computer Networks lab sessions, helping students understand both theoretical and practical aspects of Linux-based operating systems, specifically Ubuntu. I guided students through various technical activities such as command-line navigation, file and user management, package installation, and configuring permissions and services in Linux. I also assisted students in network configuration tasks, both conceptually and through simulations using Cisco Packet Tracer. This included helping them build network topologies, configure devices such as switches, routers, and access points, and simulate data transmission between hosts. I provided troubleshooting support for common networking issues, including static/dynamic IP configuration, connectivity problems, and data path analysis.",
    },
    {
      title: "Assembler Assistant (AR Platform)",
      subtitle: "Universitas Pendidikan Indonesia",
      date: "mei 2024 - Des 2024",
      detail:
        "I also contributed to the Assembler programming course by assisting students during coding and debugging sessions. These activities were conducted on a virtual reality-based platform that simulates virtual hardware, allowing students to better visualize how machine-level instructions interact with memory and processor components. I emphasized how using the right tools can significantly simplify complex low-level programming tasks and enhance the learning experience.",
    },
    {
      title: "Web Developer Intern",
      subtitle: "Diskominfo Jabar",
      date: "Jan 2025 - Mei 2025",
      detail:
        "I worked as an intern at the Department of Communication and Informatics, where my primary responsibility was developing web applications using the Laravel 11 framework for both frontend and backend components. During my internship, I contributed to several internal projects, including the development of a digital library system for the Pojok Baca program. This system was designed to streamline the management of book collections as well as the borrowing and return processes for the public. In addition, I was involved in the improvement and optimization of the archiving module, focusing on enhancing the efficiency of document management and refining features such as search functionality and reporting. This experience gave me hands-on insight into information system development within a government environment and demonstrated how technology can be effectively utilized to support better and more transparent public services.",
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState([]);
  const timelineRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Titik pemicu (ujung garis biru) berada persis di tengah layar
      const offset = windowHeight / 2;

      // Hitung jarak scroll dalam pixel
      let distance = offset - rect.top;
      const totalHeight = rect.height;

      // Batasi tinggi garis agar tidak tembus batas container
      const drawDistance = Math.max(0, Math.min(totalHeight, distance));

      // Set tinggi garis (dalam %)
      setScrollProgress((drawDistance / totalHeight) * 100);

      // Kalkulasi piksel akurat untuk menyalakan titik (dot)
      const newActiveNodes = [];
      nodesRef.current.forEach((node, index) => {
        if (node) {
          const nodeRect = node.getBoundingClientRect();
          // Jarak persis titik tengah dot dari atas container
          const dotCenter = nodeRect.top + nodeRect.height / 2;

          // Dot menyala HANYA jika ujung garis telah menyentuh/melewati titik tengahnya
          if (offset >= dotCenter) {
            newActiveNodes.push(index);
          }
        }
      });

      // Update state titik yang aktif
      setActiveNodes(newActiveNodes);
    };

    window.addEventListener("scroll", handleScroll);
    // Jalankan sekali dengan jeda singkat agar DOM selesai me-render tinggi teks
    setTimeout(handleScroll, 50);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experiences"
      className="py-20 bg-white dark:bg-gray-900 relative"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
            Experience
          </h2>
        </div>

        {/* Container Timeline dengan Reference (Ref) */}
        <div className="relative" ref={timelineRef}>
          {/* Garis Latar Belakang */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-gray-700 transform md:-translate-x-1/2 rounded-full z-0"></div>

          {/* Garis Indikator Scroll Aktif */}
          <div
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-blue-600 dark:bg-blue-400 transform md:-translate-x-1/2 rounded-full z-0 transition-all duration-75 ease-out"
            style={{ height: `${scrollProgress}%` }}
          ></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isActiveNode = activeNodes.includes(index);

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Titik/Node Roadmap */}
                  <div
                    ref={(el) => (nodesRef.current[index] = el)}
                    className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-[6px] shadow-sm flex items-center justify-center z-10 group hover:scale-110 transition-all duration-300 ${
                      isActiveNode
                        ? "bg-white dark:bg-gray-800 border-blue-500 dark:border-blue-400"
                        : "bg-white dark:bg-gray-800 border-blue-100 dark:border-gray-700"
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
                        isActiveNode
                          ? "bg-blue-600 dark:bg-blue-400"
                          : "bg-blue-200 dark:bg-gray-600"
                      }`}
                    ></div>

                    {/* Garis Penghubung Horizontal - BUG FIX DI SINI */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 h-1 -z-10 transition-colors duration-500 w-12 ${
                        isActiveNode
                          ? "bg-blue-600 dark:bg-blue-400"
                          : "bg-blue-200 dark:bg-gray-700"
                      } ${
                        isLeft
                          ? "left-1/2 md:left-auto md:right-1/2" // Di mobile ke kanan, di desktop ke kiri
                          : "left-1/2" // Selalu ke kanan
                      }`}
                    ></div>
                  </div>

                  {/* Spacer Desktop (Sisi Kosong) */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>

                  {/* Kartu Konten */}
                  <div
                    className={`w-full pl-[4.5rem] md:pl-0 md:w-[calc(50%-3rem)] transition-all duration-700 transform ${
                      isActiveNode
                        ? "opacity-100 translate-y-0"
                        : "opacity-80 translate-y-4"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col relative z-20">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/40 rounded-full">
                          {exp.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-4 mt-1">
                        @{exp.subtitle}
                      </p>

                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                        {exp.detail}
                      </p>

                      <button
                        onClick={() => setSelectedExperience(exp)}
                        className="mt-auto self-start text-sm font-bold text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 transition-colors group/btn"
                      >
                        Baca Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pop-up Modal Tetap Tidak Berubah */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/40 rounded-full mb-3">
                {selectedExperience.date}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {selectedExperience.title}
              </h3>
              <p className="text-md font-medium text-blue-500 dark:text-blue-400 mt-2">
                @{selectedExperience.subtitle}
              </p>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {selectedExperience.detail}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}