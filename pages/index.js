import { useState, useEffect } from "react";
import Head from "next/head";

const experiences = [
  { company: "WhatsApp (Meta)", role: "Software Engineer", date: "Sep 2025 - Present", team: "iOS — Messaging Groups", bullets: [] },
  { company: "Atlassian", role: "SWE Intern", date: "May - Aug 2024", team: "Jira Align Connectors", bullets: ["Built mass work item force sync tool, 20% productivity increase", "Migrated SQL stored procedures, 60% error rate reduction"] },
  { company: "CMU SCS", role: "Teaching Assistant — 15-112", date: "2021 - 2024", team: null, bullets: ["Led recitations, coordinated 10+ TAs for 500+ students"] },
  { company: "Atlassian", role: "SWE Intern", date: "May - Aug 2023", team: "Trello Backend Platform", bullets: ["Built async-safe socket testing framework", "Designed background task API with AWS SQS"] },
  { company: "OnePredict", role: "SWE Intern", date: "May - Aug 2022", team: null, bullets: ["Built fault classification system, 20% downtime reduction"] },
];

const projects = [
  { name: "$DORI LP Tracker", desc: "Robinhood-style fantasy trading platform around a friend's League LP. Leveraged ETFs, dividends, AI meme news.", tech: ["React", "TypeScript", "tRPC", "SQLite", "Riot API"], github: "https://github.com/ay0503/lol-tracker", live: "https://lol-tracker-ivory.vercel.app" },
  { name: "NodeBB", desc: "Claim feature + multi-language translator using Azure and a custom LLM service.", tech: ["JavaScript", "Node.js", "REST API", "Azure"], github: "https://github.com/ay0503/NodeBB" },
  { name: "ATC Simulator", desc: "Python simulation of air traffic control with collision avoidance.", tech: ["Python"], github: "https://github.com/ay0503/Air-Traffic-Control-Simulator" },
];

const skills = ["Swift", "Objective-C", "Python", "TypeScript", "React", "Node.js", "Git", "Docker", "AWS", "Go"];

const desktopIcons = [
  { emoji: "📄", label: "About.txt", section: "about" },
  { emoji: "💼", label: "Experience", section: "experience" },
  { emoji: "🚀", label: "Projects", section: "projects" },
  { emoji: "🛠", label: "Skills", section: "skills" },
  { emoji: "📬", label: "Contact", section: "contact" },
];

const dockItems = [
  { emoji: "📄", label: "Resume", href: "/Andrew_Youn_Resume.pdf" },
  { emoji: "🐙", label: "GitHub", href: "https://github.com/ay0503" },
  { emoji: "💼", label: "LinkedIn", href: "https://linkedin.com/in/andrew-youn" },
  { emoji: "✉️", label: "Email", href: "mailto:andrewyoun05@gmail.com" },
];

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Andrew Youn</title>
      </Head>

      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="menu-left">
          <span className="menu-logo">AY</span>
          <div className="menu-items">
            {desktopIcons.map((d) => (
              <a key={d.section} onClick={() => scrollTo(d.section)}>
                {d.label}
              </a>
            ))}
          </div>
        </div>
        <div className="menu-right">
          <Clock />
        </div>
      </div>

      {/* Desktop */}
      <div className="desktop">
        {/* Left icons */}
        <div className="desktop-icons">
          {desktopIcons.map((d) => (
            <div
              key={d.section}
              className={`desktop-icon ${activeSection === d.section ? "active" : ""}`}
              onClick={() => scrollTo(d.section)}
            >
              <span className="icon-emoji">{d.emoji}</span>
              <span className="icon-label">{d.label}</span>
            </div>
          ))}
        </div>

        {/* Main window */}
        <div className="window-area">
          <div className="window">
            <div className="window-header">
              <div className="window-dots">
                <span className="wdot wdot-red" />
                <span className="wdot wdot-yellow" />
                <span className="wdot wdot-green" />
              </div>
              <span className="window-title">~/andrew-youn</span>
              <div style={{ width: 52 }} />
            </div>

            <div className="window-body">
              {/* ABOUT */}
              <div className="about-hero" id="about">
                <h1>Andrew Youn</h1>
                <div className="tagline">SWE @ WhatsApp (Meta) · CMU MechE + CS</div>
                <p className="bio">
                  I like building things, and AI has made that dangerously easy.
                  At work, I ship features on WhatsApp iOS for the Groups &amp;
                  Communities team. In my free time, I use AI tools to go from
                  dumb idea to deployed app as fast as possible — like turning
                  my friend&apos;s League of Legends ranked grind into a full
                  Robinhood-style trading sim with leveraged ETFs and AI meme news.
                </p>
              </div>

              {/* EXPERIENCE */}
              <div className="win-section" id="experience">
                <div className="win-section-title">Experience</div>
                {experiences.map((exp, i) => (
                  <div className="exp-item" key={i}>
                    <div className="exp-top">
                      <div>
                        <div className="exp-company">{exp.company}</div>
                        <div className="exp-role">{exp.role}</div>
                        {exp.team && <div className="exp-team">{exp.team}</div>}
                      </div>
                      <span className="exp-date">{exp.date}</span>
                    </div>
                    {exp.bullets.length > 0 && (
                      <div className="exp-bullets">
                        {exp.bullets.map((b, j) => (
                          <div className="exp-bullet" key={j}>{b}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* PROJECTS */}
              <div className="win-section" id="projects">
                <div className="win-section-title">Projects</div>
                {projects.map((p, i) => (
                  <div className="project-item" key={i}>
                    <div className="project-name">{p.name}</div>
                    <div className="project-desc">{p.desc}</div>
                    <div className="project-tech">
                      {p.tech.map((t, j) => (
                        <span className="tech-tag" key={j}>{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                      {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                    </div>
                  </div>
                ))}
              </div>

              {/* SKILLS */}
              <div className="win-section" id="skills">
                <div className="win-section-title">Skills</div>
                <div className="skills-row">
                  {skills.map((s, i) => (
                    <span className="skill-tag" key={i}>{s}</span>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <div className="win-section" id="contact">
                <div className="win-section-title">Contact</div>
                <div className="contact-row">
                  <a className="contact-link" href="mailto:andrewyoun05@gmail.com">
                    <span className="contact-link-icon">✉️</span> andrewyoun05@gmail.com
                  </a>
                  <a className="contact-link" href="https://github.com/ay0503" target="_blank" rel="noopener noreferrer">
                    <span className="contact-link-icon">🐙</span> github.com/ay0503
                  </a>
                  <a className="contact-link" href="https://linkedin.com/in/andrew-youn" target="_blank" rel="noopener noreferrer">
                    <span className="contact-link-icon">💼</span> linkedin.com/in/andrew-youn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dock */}
      <div className="dock">
        {dockItems.map((d, i) => (
          <a
            key={i}
            className="dock-item"
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="dock-emoji">{d.emoji}</span>
            <span className="dock-label">{d.label}</span>
          </a>
        ))}
      </div>
    </>
  );
}
