import About from "./partials/About.jsx";
import Experience from "./partials/Experience.jsx";
import Project from "./partials/Project.jsx";
import Achievements from "./partials/Achievements.jsx";
import Contact from "./partials/Contact.jsx";
import TechStack from "./partials/TechStack.jsx";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <About />
      <Experience />
      <Achievements />
      <Project />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
