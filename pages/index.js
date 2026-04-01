import Head from "next/head";
import { useState, useEffect } from "react";

const experiences = [
  { company: "WhatsApp (Meta)", role: "Software Engineer", date: "2025 —", team: "iOS — Groups & Communities", bullets: ["Shipped Group History — browse and search past group conversations at scale"] },
  { company: "Atlassian", role: "SWE Intern", date: "2024", team: "Jira Align Connectors", bullets: ["Built mass work item force sync tool, 20% productivity increase", "Migrated SQL stored procedures, 60% error rate reduction"] },
  { company: "CMU SCS", role: "Teaching Assistant", date: "2021 — 24", team: "15-112 Fundamentals of Programming", bullets: ["Led recitations, coordinated 10+ TAs for 500+ students"] },
  { company: "Atlassian", role: "SWE Intern", date: "2023", team: "Trello Backend Platform", bullets: ["Built async-safe socket testing framework", "Designed background task API with AWS SQS"] },
  { company: "OnePredict", role: "SWE Intern", date: "2022", team: null, bullets: ["Built fault classification system, 20% downtime reduction"] },
];

const projects = [
  { name: "$DORI LP Tracker", desc: "Full-stack Robinhood-style trading sim built around a friend's League of Legends ranked grind — leveraged ETFs, dividends, AI-generated meme news. 244 commits from idea to production, built with AI-assisted development.", tech: ["React", "TypeScript", "tRPC", "SQLite", "Riot API"], github: "https://github.com/ay0503/lol-tracker", live: "https://lol-tracker-ivory.vercel.app", featured: true },
  { name: "NodeBB", desc: "Claim feature + multi-language translator using Azure and a custom LLM service.", tech: ["JavaScript", "Node.js", "REST API", "Azure"], github: "https://github.com/ay0503/NodeBB" },
  { name: "ATC Simulator", desc: "Python simulation of air traffic control with collision avoidance.", tech: ["Python"], github: "https://github.com/ay0503/Air-Traffic-Control-Simulator" },
];

const skills = ["Swift", "Python", "TypeScript", "React", "Node.js", "Go"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Head>
        <title>Andrew Youn</title>
      </Head>

      {/* Nav */}
      <nav className="nav">
        <a href="#" className="nav-logo">Andrew Youn</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://docs.google.com/document/d/1wgeyhsRzR5sQ5rvHGAy7riyKQEqNgo1lQe-J7uVkhDw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-resume">Resume</a>
        </div>
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="https://docs.google.com/document/d/1wgeyhsRzR5sQ5rvHGAy7riyKQEqNgo1lQe-J7uVkhDw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="mobile-resume">Resume</a>
      </div>

      {/* Hero */}
      <section className="hero" id="hero">
        <img src="/img/profile.jpg" alt="Andrew Youn" className="hero-photo" />
        <span className="hero-label">Software Engineer · AI Builder</span>
        <h1>I build things fast.</h1>
        <p className="hero-sub">
          <strong>WhatsApp iOS</strong> — shipping features to 2B+ users on
          Groups &amp; Communities. I use AI to turn weird ideas into deployed
          products, dangerously fast.
        </p>
        <div className="hero-links">
          <a href="https://github.com/ay0503" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/andrew-youn" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="mailto:andrewyoun05@gmail.com">Email ↗</a>
        </div>
        <div className="scroll-hint">↓ scroll</div>
      </section>

      <div className="divider"><hr /></div>

      {/* About */}
      <section className="section" id="about">
        <span className="section-label">About</span>
        <div className="about-text">
          <p>
            I build products at <strong>WhatsApp</strong> and weird side projects
            everywhere else. At work, I ship features on{" "}
            <strong>WhatsApp iOS</strong> for Groups &amp; Communities — most
            recently, Group History. Off the clock, I use AI to collapse the gap
            between &quot;dumb idea&quot; and &quot;deployed app&quot; — like
            building a full Robinhood-style trading sim around a friend&apos;s
            League of Legends ranked grind, complete with leveraged ETFs and
            AI-generated meme news.
          </p>
          <br />
          <p>
            <strong>CMU MechE + CS</strong> grad. Previously <strong>Atlassian</strong> (×2).
          </p>
        </div>
      </section>

      <div className="divider"><hr /></div>

      {/* Experience */}
      <section className="section" id="experience">
        <span className="section-label">Experience</span>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div className="exp-row" key={i}>
              <div className="exp-date">{exp.date}</div>
              <div className="exp-info">
                <h3>{exp.company}</h3>
                <div className="exp-role">{exp.role}</div>
                {exp.team && <div className="exp-team">{exp.team}</div>}
                {exp.bullets.length > 0 && (
                  <div className="exp-bullets">
                    {exp.bullets.map((b, j) => (
                      <div className="exp-bullet" key={j}>{b}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"><hr /></div>

      {/* Projects */}
      <section className="section" id="projects">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="section-desc">
          Side projects, weekend rabbit holes, and open-source contributions.
        </p>
        <div className="projects-list">
          {projects.map((p, i) => (
            <div className={`project-card${p.featured ? " project-featured" : ""}`} key={i}>
              <div className="project-top">
                <span className="project-name">{p.name}</span>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                </div>
              </div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span className="tech-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"><hr /></div>

      {/* Skills */}
      <section className="skills-strip">
        <div className="skills-row">
          {skills.map((s, i) => (
            <span className="skill-chip" key={i}>{s}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <span className="section-label">Contact</span>
        <div className="contact-big">Let&apos;s talk.</div>
        <p className="contact-text">
          Always open to interesting conversations, collaborations, or just saying hi.
        </p>
        <div className="contact-links">
          <a href="mailto:andrewyoun05@gmail.com">Email ↗</a>
          <a href="https://github.com/ay0503" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/andrew-youn" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        Built by Andrew Youn · {new Date().getFullYear()}
      </footer>
    </>
  );
}
