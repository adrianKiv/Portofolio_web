import React from "react";

export default function About() {
  const [visible, setVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.18 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="site-section border-y border-white/5 py-24"
    >
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div className={`reveal-left ${visible ? "data-visible" : ""}`} data-visible={visible ? "true" : "false"}>
          <span className="section-kicker">01 / Profile</span>
        </div>
        <div>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Building useful software with{" "}
            <span className="text-blue-400">clarity and purpose.</span>
          </h2>
          <div className="mt-8 grid gap-6 text-slate-400 md:grid-cols-2">
            <p className="leading-7">
              I am a Computer Science graduate from Universitas Pendidikan Indonesia,
              with hands-on experience in full-stack web development, databases, and software testing.
            </p>
            <p className="leading-7">
              My work combines Laravel, React, modern APIs, and practical system design to create
              accessible products that remain maintainable as they grow.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-3">
            {[["UPI", "Computer Science"], ["Full-stack", "Web development"], ["Indonesia", "West Java"]].map(([value, label]) => (
              <div key={label} className="bg-[#0b111d] p-5">
                <p className="text-lg font-bold text-white">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
