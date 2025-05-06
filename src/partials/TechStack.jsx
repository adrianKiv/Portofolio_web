import GBRcss from "../assets/images/logos_css.svg";
import GBRgit from "../assets/images/logos_git.svg";
import GBRhtml from "../assets/images/logos_html.svg";
import GBRjs from "../assets/images/logos_javascript.svg";
import GBRc from "../assets/images/logos_c.svg";
import GBRlaravel from "../assets/images/logos_laravel.svg";
import GBRmysql from "../assets/images/logos_mysql.svg";
import GBRnodejs from "../assets/images/logos_nodejs.svg";
import GBRphp from "../assets/images/logos_php.svg";
import GBRphyton from "../assets/images/logos_phyton.svg";
import GBRpostgresql from "../assets/images/logos_postgresql.svg";
import GBRreact from "../assets/images/logos_react.svg";
import GBRtailwind from "../assets/images/logos_tailwindcss.svg";
import GBRjmeter from "../assets/images/apachejmeter.svg";
import GBRcpp from "../assets/images/cpp.svg";
import GBRdart from "../assets/images/dart.svg";
import GBRflutter from "../assets/images/flutter.svg";
import GBRmongodb from "../assets/images/mongodb.svg";
import GBRselenium from "../assets/images/selenium.svg";
import GBRsqlite from "../assets/images/sqlite.svg";
import GBRvite from "/vite.svg";

const techs = [
  { name: "HTML", image: GBRhtml },
  { name: "CSS", image: GBRcss },
  { name: "JavaScript", image: GBRjs },
  { name: "TailWindcss", image: GBRtailwind },
  { name: "NodeJS", image: GBRnodejs },
  { name: "React", image: GBRreact },
  { name: "Vite", image: GBRvite },
  { name: "Git", image: GBRgit },
  { name: "Laravel", image: GBRlaravel },
  { name: "PHP", image: GBRphp },
  { name: "Phyton", image: GBRphyton },
  { name: "C++", image: GBRcpp },
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

export default function TechStack() {
  return (
    <section id="tech" className="py-16 bg-stone-100 dark:bg-gray-800">
      <div className="border-t-4 border-gray-400 dark:border-gray-900 my-8 w-4/5 mx-auto" />
      <div className="mt-5 px-4 sm:px-16">
        <h2 className="text-center text-2xl font-semibold mb-4 text-indigo-400 dark:text-indigo-200">
          Tech Stack
        </h2>
        <p className="text-indigo-400 dark:text-indigo-200 text-lg text-center">
          Languages and libraries I know
        </p>
        <div className="mt-5 flex flex-wrap gap-5 justify-center">
          {techs.map((item, i) => (
            <div
              key={i}
              className="relative group bg-gray-100 dark:bg-gray-500 p-2 w-16 h-16 rounded-xl shadow-xl flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />
              <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-4 border-gray-400 dark:border-gray-900 my-8 w-4/5 mx-auto" />
    </section>
  );
}
