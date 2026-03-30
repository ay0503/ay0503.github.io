import Head from "next/head";

const experiences = [
  { company: "WhatsApp (Meta)", role: "Software Engineer", date: "2025 —", team: "iOS — Messaging Groups", bullets: [] },
  { company: "Atlassian", role: "SWE Intern", date: "2024", team: "Jira Align Connectors", bullets: ["Built mass work item force sync tool, 20% productivity increase", "Migrated SQL stored procedures, 60% error rate reduction"] },
  { company: "CMU SCS", role: "Teaching Assistant", date: "2021 — 24", team: "15-112 Fundamentals of Programming", bullets: ["Led recitations, coordinated 10+ TAs for 500+ students"] },
  { company: "Atlassian", role: "SWE Intern", date: "2023", team: "Trello Backend Platform", bullets: ["Built async-safe socket testing framework", "Designed background task API with AWS SQS"] },
  { company: "OnePredict", role: "SWE Intern", date: "2022", team: null, bullets: ["Built fault classification system, 20% downtime reduction"] },
];

const projects = [
  { name: "$DORI LP Tracker", desc: "Robinhood-style fantasy trading platform around a friend's League LP. Leveraged ETFs, dividends, AI meme news. 244 commits.", tech: ["React", "TypeScript", "tRPC", "SQLite", "Riot API"], github: "https://github.com/ay0503/lol-tracker", live: "https://lol-tracker-ivory.vercel.app" },
  { name: "NodeBB", desc: "Claim feature + multi-language translator using Azure and a custom LLM service.", tech: ["JavaScript", "Node.js", "REST API", "Azure"], github: "https://github.com/ay0503/NodeBB" },
  { name: "ATC Simulator", desc: "Python simulation of air traffic control with collision avoidance.", tech: ["Python"], github: "https://github.com/ay0503/Air-Traffic-Control-Simulator" },
];

const skills = ["Swift", "Objective-C", "Python", "TypeScript", "React", "Node.js", "Git", "Docker", "AWS", "Go"];

export default function Home() {
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
          <a href="/Andrew_Youn_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">Resume</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <span className="hero-label">Software Engineer</span>
        <h1>I like building things.</h1>
        <p className="hero-sub">
          <strong>WhatsApp (Meta)</strong> · iOS Messaging Groups.
          CMU MechE + CS. AI made shipping side projects dangerously easy.
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
            I like building things, and AI has made that dangerously easy.
            At work, I ship features on <strong>WhatsApp iOS</strong> for the{" "}
            <strong>Groups &amp; Communities</strong> team. In my free time,
            I use AI tools to go from dumb idea to deployed app as fast as
            possible — like turning my friend&apos;s League of Legends ranked
            grind into a full Robinhood-style trading sim with leveraged ETFs
            and AI meme news.
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
            <div className="project-card" key={i}>
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
      <section className="section" id="skills">
        <span className="section-label">Skills</span>
        <div className="skills-row">
          {skills.map((s, i) => (
            <span className="skill-chip" key={i}>{s}</span>
          ))}
        </div>
      </section>

      <div className="divider"><hr /></div>

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
