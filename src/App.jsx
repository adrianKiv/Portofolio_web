import GBRHIU from "./assets/images/hiu.png";
import GBRcss from "./assets/images/logos_css.svg";
import GBRgit from "./assets/images/logos_git.svg";
import GBRhtml from "./assets/images/logos_html.svg";
import GBRjs from "./assets/images/logos_javascript.svg";
import GBRc from "./assets/images/logos_c.svg";
import GBRlaravel from "./assets/images/logos_laravel.svg";
import GBRmysql from "./assets/images/logos_mysql.svg";
import GBRnodejs from "./assets/images/logos_nodejs.svg";
import GBRphp from "./assets/images/logos_php.svg";
import GBRphyton from "./assets/images/logos_phyton.svg";
import GBRpostgresql from "./assets/images/logos_postgresql.svg";
import GBRreact from "./assets/images/logos_react.svg";
import GBRtailwind from "./assets/images/logos_tailwindcss.svg";
import GBRjmeter from "./assets/images/apachejmeter.svg";
import GBRcpp from "./assets/images/cpp.svg";
import GBRdart from "./assets/images/dart.svg";
import GBRflutter from "./assets/images/flutter.svg";
import GBRmongodb from "./assets/images/mongodb.svg";
import GBRselenium from "./assets/images/selenium.svg";
import GBRsqlite from "./assets/images/sqlite.svg";

import Experience from "./partials/Experience.jsx";
import Project from "./partials/Project.jsx";

const techs = [
  { name: "CSS", image: GBRcss },
  { name: "HTML", image: GBRhtml },
  { name: "JavaScript", image: GBRjs },
  { name: "TailWindcss", image: GBRtailwind },
  { name: "NodeJS", image: GBRnodejs },
  { name: "React", image: GBRreact },
  { name: "Git", image: GBRgit },
  { name: "Laravel", image: GBRlaravel },
  { name: "PHP", image: GBRphp },
  { name: "Phyton", image: GBRphyton },
  { name: "Cpp", image: GBRcpp },
  { name: "C", image: GBRc },
  { name: "Dart", image: GBRdart },
  { name: "Flutter", image: GBRflutter },
  { name: "MySQL", image: GBRmysql },
  { name: "PostgreSQL", image: GBRpostgresql },
  { name: "MongoDB", image: GBRmongodb },
  { name: "SQLite", image: GBRsqlite },
  { name: "Selenium", image: GBRselenium },
  { name: "Jmeter", image: GBRjmeter },
];

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="fixed top-1/2 left-0 z-50 transform -translate-y-1/2 flex flex-col space-y-4 pl-2">
        {/* Facebook */}
        <div className="relative w-10 h-10 group">
          <div className="absolute left-0 top-0 w-full h-full bg-blue-400 dark:bg-gray-700 rounded-full shadow transition-all duration-300 group-hover:left-8 group-hover:bg-blue-600 dark:group-hover:bg-blue-950"></div>
          <a
            href="https://www.facebook.com/adrian.mulianto/"
            className="text-black hover:text-blue-600 dark:hover:text-blue-900 relative z-10 flex items-center justify-center w-full h-full"
            target="_blank"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              />
            </svg>
          </a>
        </div>

        {/* Instagram */}
        <div className="relative w-10 h-10 group">
          <div className="absolute left-0 top-0 w-full h-full bg-pink-400 dark:bg-gray-700 rounded-full shadow transition-all duration-300 group-hover:left-8 group-hover:bg-pink-600 dark:group-hover:bg-pink-950"></div>
          <a
            href="https://www.instagram.com/adriannn_027/"
            className="text-black hover:text-pink-500 dark:hover:text-pink-900 relative z-10 flex items-center justify-center w-full h-full"
            target="_blank"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              />
            </svg>
          </a>
        </div>

        {/* GitHub */}
        <div className="relative w-10 h-10 group">
          <div className="absolute left-0 top-0 w-full h-full bg-gray-400 dark:bg-gray-700 rounded-full shadow transition-all duration-300 group-hover:left-8 group-hover:bg-gray-600 dark:group-hover:bg-gray-950"></div>
          <a
            href="https://github.com/adrianKiv"
            className="text-black hover:text-black dark:hover:text-white relative z-10 flex items-center justify-center w-full h-full"
            target="_blank"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="relative w-10 h-10 group">
          <div className="absolute left-0 top-0 w-full h-full bg-blue-400 dark:bg-gray-700 rounded-full shadow transition-all duration-300 group-hover:left-8 group-hover:bg-blue-600 dark:group-hover:bg-blue-950"></div>
          <a
            href="https://www.linkedin.com/in/adrianmulianto/"
            className="text-black hover:text-blue-700 dark:hover:text-blue-900 relative z-10 flex items-center justify-center w-full h-full"
            target="_blank"
          >
            <svg 
            className="w-5.5 h-5.5" 
            fill="currentColor" 
            viewBox="0 0 16 16"
            aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              />
            </svg>
          </a>
        </div>
      </div>

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
              I am a computer science student with a strong passion for software
              development, data, and networking. I have actively participated in
              programming and data competitions. I am highly enthusiastic about
              expanding my knowledge in networking, data, and software
              development. I also enjoy collaborating with others to help
              improve my skills.
            </p>
          </div>
        </div>
        <div className="border-t-4 border-gray-400 dark:border-gray-900 my-8 w-4/5 mx-auto" />
        <div className="mt-5 px-4 sm:px-16">
          <h4 className="text-indigo-400 dark:text-indigo-200 text-xl mb-1 text-center">
            Tech Stack
          </h4>
          <p className="text-indigo-400 dark:text-indigo-200 text-lg text-center">
            Languages and libraries I know
          </p>
          <div className="mt-5 flex flex-wrap gap-5 justify-center">
            {techs.map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-500 p-2 w-16 h-16 rounded-xl shadow-xl flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-4 border-gray-400 dark:border-gray-900 my-8 w-4/5 mx-auto" />
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Project Section */}
      <Project />

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
