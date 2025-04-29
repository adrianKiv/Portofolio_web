function App() {
  return (
    <div className="bg-white">
      {/* Padding top karena header fixed */}
        {/* About Section */}
        <section id="about" className="py-16 bg-blue-50">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-400">About</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Saya seorang pengembang web yang berfokus pada penggunaan
              teknologi modern seperti React, Vite, dan TailwindCSS. Saya
              memiliki pengalaman dalam membuat aplikasi web interaktif dan
              responsif.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="experiences" className="py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold mb-8 text-indigo-400">
              Experiences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    Proyek {item}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Deskripsi singkat tentang proyek ini.
                  </p>
                  <button className="mt-4 bg-indigo-400 hover:bg-indigo-600 text-white px-4 py-2 rounded transition-colors">
                    Lihat Proyek
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold mb-8 text-indigo-400">
              Project
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    Proyek {item}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Deskripsi singkat tentang proyek ini.
                  </p>
                  <button className="mt-4 bg-indigo-400 hover:bg-indigo-600 text-white px-4 py-2 rounded transition-colors">
                    Lihat Proyek
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-400">
              Contact
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Ingin bekerja bersama saya? Hubungi saya untuk informasi lebih
              lanjut.
            </p>
            <a
              href="mailto:email@example.com"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Kirim Email
            </a>
          </div>
        </section>
      </div>
  );
}

export default App;
