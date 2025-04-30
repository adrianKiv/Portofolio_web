import GBRHIU from "./assets/images/hiu.png";
import GBRcss from "./assets/images/logos_css.svg";
import GBRgit from "./assets/images/logos_git.svg";
import GBRhtml from "./assets/images/logos_html.svg";
import GBRjs from "./assets/images/logos_javascript.svg";
import GBRlaravel from "./assets/images/logos_laravel.svg";
import GBRmysql from "./assets/images/logos_mysql.svg";
import GBRnodejs from "./assets/images/logos_nodejs.svg";
import GBRphp from "./assets/images/logos_php.svg";
import GBRphyton from "./assets/images/logos_phyton.svg";
import GBRpostgresql from "./assets/images/logos_postgresql.svg";

const techs = [
  { name: "CSS", image: GBRcss },
  { name: "Git", image: GBRgit },
  { name: "HTML", image: GBRhtml },
  { name: "JavaScript", image: GBRjs },
  { name: "Laravel", image: GBRlaravel },
  { name: "MySQL", image: GBRmysql },
  { name: "NodeJS", image: GBRnodejs },
  { name: "PHP", image: GBRphp },
  { name: "Phyton", image: GBRphyton }, 
  { name: "PostgreSQL", image: GBRpostgresql },
];


function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start">
          {/* Gambar di sebelah kiri */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src={GBRHIU}
              alt="About me"
              className="rounded-lg shadow-lg mx-auto md:mx-0 w-full max-w-sm"
            />
          </div>

          {/* Teks di sebelah kanan */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-400 dark:text-indigo-200">
              About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-indigo-100">
              Saya seorang pengembang web yang berfokus pada penggunaan
              teknologi modern seperti React, Vite, dan TailwindCSS. Saya
              memiliki pengalaman dalam membuat aplikasi web interaktif dan
              responsif. Saya juga senang mengeksplorasi hal baru dalam
              pengembangan perangkat lunak.
            </p>
          </div>
        </div>
        <div className="border-t-4 border-gray-300 dark:border-gray-600 my-8 w-4/5 mx-auto" />
        <div className="mt-5 px-4 sm:px-16">
          <h4 className="text-indigo-400 dark:text-indigo-200 text-xl mb-2 justify-center text-center">Tech Stack</h4>
          <p className="text-indigo-400 dark:text-indigo-200 text-lg text-center">Languages and libraries I know</p>
          <div className="mt-5 flex flex-wrap gap-5 justify-center">
            {techs.map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-800 p-2 w-16 h-16 rounded-xl shadow-xl flex items-center justify-center"
              >
                <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-4 border-gray-300 dark:border-gray-600 my-8 w-4/5 mx-auto" />
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-16 bg-stone-100 dark:bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-400 dark:text-indigo-200">
            Experiences
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Experience {item}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Deskripsi singkat tentang experience ini.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white dark:bg-gray-700">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-400 dark:text-indigo-200">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Proyek {item}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
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
      <section id="contact" className="py-16 bg-stone-100 dark:bg-gray-800">
        <div className="container mx-auto text-center px-4 max-w-xl">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-400 dark:text-indigo-200">
            Contact
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ingin bekerja bersama saya? Kirimkan pesan melalui formulir di bawah
            ini.
          </p>

          <form
            action="mailto:adrianmulianto@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-4 text-left"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nama
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Pesan
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
