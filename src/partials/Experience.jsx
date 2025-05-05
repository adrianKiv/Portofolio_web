import React, { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "1. Web Developer Intern",
      subtitle: " @Diskominfo Jabar",
      detail: "I worked as an intern at the Department of Communication and Informatics, where my primary responsibility was developing web applications using the Laravel 11 framework for both frontend and backend components. During my internship, I contributed to several internal projects, including the development of a digital library system for the Pojok Baca program. This system was designed to streamline the management of book collections as well as the borrowing and return processes for the public. In addition, I was involved in the improvement and optimization of the archiving module, focusing on enhancing the efficiency of document management and refining features such as search functionality and reporting. This experience gave me hands-on insight into information system development within a government environment and demonstrated how technology can be effectively utilized to support better and more transparent public services.",
    },
    {
      title: "2. Database System Practice Assistant",
      subtitle: " @Universitas Pendidikan Indonesia",
      detail: "I also have experience assisting students in Database Systems lab sessions, where I provided guidance, supervision, and technical support throughout the learning process. This included explaining fundamental concepts of relational databases as well as hands-on implementation involving the design and management of databases using MySQL as the database management system (DBMS). These databases were operated through XAMPP, an open-source software package that provides a complete local server environment—including Apache, MySQL, PHP, and Perl—which is highly useful for offline learning and testing of web-based applications. In practice, I helped students understand how to design database schemas, write SQL queries, and integrate databases with PHP-based application interfaces.",
    },
    {
      title: "3. System Operation and Computer Networking practice Assistant",
      subtitle: " @Universitas Pendidikan Indonesia",
      detail: "In addition, I served as a teaching assistant in Operating Systems and Computer Networks lab sessions, helping students understand both theoretical and practical aspects of Linux-based operating systems, specifically Ubuntu. I guided students through various technical activities such as command-line navigation, file and user management, package installation, and configuring permissions and services in Linux. I also assisted students in network configuration tasks, both conceptually and through simulations using Cisco Packet Tracer. This included helping them build network topologies, configure devices such as switches, routers, and access points, and simulate data transmission between hosts. I provided troubleshooting support for common networking issues, including static/dynamic IP configuration, connectivity problems, and data path analysis.",
    },
    {
      title: "4. Teaching Assistant for Assembler (Artificial Reality Platform)",
      subtitle: " @Universitas Pendidikan Indonesia",
      detail:
        "I also contributed to the Assembler programming course by assisting students during coding and debugging sessions. These activities were conducted on a virtual reality-based platform that simulates virtual hardware, allowing students to better visualize how machine-level instructions interact with memory and processor components. I emphasized how using the right tools can significantly simplify complex low-level programming tasks and enhance the learning experience.",
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
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              {experiences[selectedIndex].title}
            </h3>
            <h1 className="text-2xl font-bold text-indigo-300 dark:text-indigo-600">
              {experiences[selectedIndex].subtitle}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {experiences[selectedIndex].detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
