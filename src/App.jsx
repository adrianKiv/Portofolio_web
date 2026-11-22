import About from "./partials/About.jsx";
import Experience from "./partials/Experience.jsx";
import Project from "./partials/Project.jsx";
import Achievements from "./partials/Achievements.jsx";
import Contact from "./partials/Contact.jsx";
import TechStack from "./partials/TechStack.jsx";
import { useEffect, useState } from "react";

const railItems = [
  { id: "about", number: "01", label: "Profile" },
  { id: "experiences", number: "02", label: "Journey" },
  { id: "achievements", number: "03", label: "Recognition" },
  { id: "projects", number: "04", label: "Projects" },
  { id: "techstacks", number: "05", label: "Toolkit" },
  { id: "contact", number: "06", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = railItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean);

    let frameId = null;

    const updateActiveSection = () => {
      frameId = null;
      document.documentElement.style.setProperty(
        "--scroll-depth",
        `${window.scrollY}px`,
      );
      document.documentElement.style.setProperty(
        "--orb-one-offset",
        `${window.scrollY * -0.035}px`,
      );
      document.documentElement.style.setProperty(
        "--orb-two-offset",
        `${window.scrollY * -0.055}px`,
      );
      document.documentElement.style.setProperty(
        "--orb-three-offset",
        `${window.scrollY * -0.08}px`,
      );

      document.querySelectorAll(".site-section").forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const sectionCenter = rect.top + rect.height / 2;
        const offset = (sectionCenter - viewportCenter) / window.innerHeight;
        const cappedOffset = Math.max(-1, Math.min(1, offset));
        const mobileOffset = window.matchMedia("(max-width: 767px)").matches
          ? 0
          : cappedOffset * (index % 2 === 0 ? -10 : 10);
        section.style.setProperty(
          "--section-parallax",
          `${mobileOffset}px`,
        );
      });

      const marker = window.innerHeight * 0.42;
      let activeId = railItems[0].id;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker) activeId = section.id;
      });
      setActiveSection((current) =>
        current === activeId ? current : activeId,
      );
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <main className="site-shell overflow-hidden bg-[#080c14] text-slate-100">
      <div className="page-grid" aria-hidden="true" />
      <div className="cinematic-background" aria-hidden="true">
        <span className="cinematic-orb cinematic-orb-one" />
        <span className="cinematic-orb cinematic-orb-two" />
        <span className="cinematic-orb cinematic-orb-three" />
        <span className="cinematic-ring cinematic-ring-one" />
        <span className="cinematic-ring cinematic-ring-two" />
      </div>
      <aside className="section-rail" aria-label="Section navigation">
        <div className="section-rail-line" aria-hidden="true">
          <div
            className="section-rail-progress"
            style={{
              height: `${((railItems.findIndex((item) => item.id === activeSection) + 1) / railItems.length) * 100}%`,
            }}
          />
        </div>
        {railItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`section-rail-item ${activeSection === item.id ? "is-active" : ""}`}
            aria-label={`${item.number} ${item.label}`}
          >
            <span className="section-rail-dot" />
            <span className="section-rail-copy">
              <b>{item.number}</b>
              <em>{item.label}</em>
            </span>
          </a>
        ))}
      </aside>
      <About />
      <div className="section-gap" aria-hidden="true" />
      <Experience />
      <div className="section-gap" aria-hidden="true" />
      <Achievements />
      <div className="section-gap" aria-hidden="true" />
      <Project />
      <div className="section-gap" aria-hidden="true" />
      <TechStack />
      <div className="section-gap" aria-hidden="true" />
      <Contact />
    </main>
  );
}

export default App;
