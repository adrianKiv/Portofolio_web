import React, { useEffect, useRef } from "react";

export default function Achievements() {
  const records = [
    {
      type: "Achievement",
      title: "Research Paper Publication",
      issuer: "Pseudocode Journal",
      date: "Sep 2026",
      description: "Published a research paper sinta 4 titled 'Design and Development of a WebGIS Directory and Promotional Platform for Culinary MSMEs Using Content-Based Filtering' in Volume 13 Nomor 2.",
      link: "https://ejournal.unib.ac.id/pseudocode/article/view/51706",
    },
    {
      type: "Certification",
      title: "Microsoft Office Specialist: Word 2019 Associate",
      issuer: "Microsoft",
      date: "Oct 2025",
      description: "Demonstrated proficiency in Microsoft Word, validating essential skills in word processing and document management.",
      link: "https://www.linkedin.com/in/adrianmulianto/overlay/Certifications/1373175941/treasury/?profileId=ACoAAD5WLhsBZdPjL-5FoR0gS-6TbQwU_puuzQI", 
    },
    {
      type: "Certification",
      title: "Data Analysis (Summer Course)",
      issuer: "Universitas Pendidikan Indonesia",
      date: "Jun 2024",
      description: "Completed an intensive summer course focused on data analysis methodologies using the Python programming language.",
      link: "https://www.linkedin.com/in/adrianmulianto/overlay/Certifications/879494033/treasury/?profileId=ACoAAD5WLhsBZdPjL-5FoR0gS-6TbQwU_puuzQI", 
    },
    {
      type: "Certification",
      title: "Certified Developer",
      issuer: "Alibaba Cloud",
      date: "Dec 2023",
      description: "Earned certification demonstrating fundamental knowledge of cloud computing principles and database management using MySQL and SQL.",
      link: "https://www.linkedin.com/in/adrianmulianto/overlay/Certifications/879115336/treasury/?profileId=ACoAAD5WLhsBZdPjL-5FoR0gS-6TbQwU_puuzQI", 
    }
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Saat kartu MASUK ke dalam layar
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            // Saat kartu KELUAR dari layar (kembalikan ke posisi awal)
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-12");
          }
        });
      },
      {
        threshold: 0.1, // Terpicu ketika 10% kartu terlihat atau hilang
        rootMargin: "0px" // Direset ke 0 agar animasi keluar terpicu tepat saat kartu keluar batas layar
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A showcase of my academic milestones, technical certifications, and professional recognitions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {records.map((item, index) => (
            <div 
              key={index} 
              ref={(el) => (cardsRef.current[index] = el)} 
              // Class animasi: transisi memakan waktu 700ms
              className="opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-4">
                {/* Ikon dan Kategori */}
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl transition-colors ${item.type === 'Achievement' ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/50' : 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50'}`}>
                    {item.type === 'Achievement' ? (
                      <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${item.type === 'Achievement' ? 'text-yellow-600 dark:text-yellow-400' : 'text-blue-600 dark:text-blue-400'}`}>
                    {item.type}
                  </span>
                </div>
                
                {/* Tanggal */}
                <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>

              {/* Judul & Penerbit */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-4">
                {item.issuer}
              </p>

              {/* Deskripsi */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow mb-6">
                {item.description}
              </p>

              {/* Tautan Sertifikat */}
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  View Credentials
                  <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}