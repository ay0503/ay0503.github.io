import Head from "next/head";

const ASCII_NAME = `
 █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗██╗    ██╗
██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝██║    ██║
███████║██╔██╗ ██║██║  ██║██████╔╝█████╗  ██║ █╗ ██║
██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝  ██║███╗██║
██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗╚███╔███╔╝
╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝`.trimStart();

const Prompt = ({ path = "~" }) => (
  <span>
    <span className="prompt">andrew</span>
    <span className="output-dim">@</span>
    <span className="prompt-path">{path}</span>
    <span className="prompt-symbol"> $ </span>
  </span>
);

const experiences = [
  {
    company: "WhatsApp (Meta)",
    role: "Software Engineer",
    date: "Sep 2025 - Present",
    team: "iOS — Messaging Groups",
    bullets: [],
  },
  {
    company: "Atlassian",
    role: "SWE Intern — Jira Align Connectors",
    date: "May 2024 - Aug 2024",
    bullets: [
      "Built mass work item force sync tool, 20% productivity increase",
      "Migrated SQL stored procedures, 60% error rate reduction",
    ],
  },
  {
    company: "CMU School of Computer Science",
    role: "Teaching Assistant — 15-112",
    date: "2021 - 2024",
    bullets: [
      "Led recitations, coordinated 10+ TAs for 500+ students",
    ],
  },
  {
    company: "Atlassian",
    role: "SWE Intern — Trello Backend Platform",
    date: "May 2023 - Aug 2023",
    bullets: [
      "Built async-safe socket testing framework, 15% efficiency gain",
      "Designed background task API with AWS SQS + distributed heartbeats",
    ],
  },
  {
    company: "OnePredict",
    role: "SWE Intern",
    date: "May 2022 - Aug 2022",
    bullets: [
      "Built fault classification system, 20% downtime reduction",
    ],
  },
];

const projects = [
  {
    name: "$DORI LP Tracker",
    desc: "Robinhood-style fantasy trading platform around a friend's League LP. Leveraged ETFs, dividends, AI meme news.",
    tech: "React · TypeScript · tRPC · SQLite · Riot API",
    github: "https://github.com/ay0503/lol-tracker",
    live: "https://lol-tracker-ivory.vercel.app",
  },
  {
    name: "NodeBB",
    desc: "Claim feature + multi-language translator using Azure and a custom LLM service.",
    tech: "JavaScript · Node.js · REST API · Azure · LLM",
    github: "https://github.com/ay0503/NodeBB",
  },
  {
    name: "Air Traffic Control Simulator",
    desc: "Python simulation of ATC systems with collision avoidance.",
    tech: "Python",
    github: "https://github.com/ay0503/Air-Traffic-Control-Simulator",
  },
];

const skills = [
  "Swift", "Objective-C", "Python", "TypeScript", "React",
  "Node.js", "Git", "Docker", "AWS", "Go",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>andrew@portfolio ~ $</title>
      </Head>

      <div className="terminal-container">
        {/* Top bar */}
        <div className="terminal-bar">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="terminal-title">andrew@portfolio — bash</span>
          <nav className="terminal-nav">
            <a href="#about">about</a>
            <a href="#experience">exp</a>
            <a href="#projects">projects</a>
            <a href="#skills">skills</a>
            <a href="#contact">contact</a>
            <a href="/Andrew_Youn_Resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
          </nav>
        </div>

        {/* Terminal body */}
        <div className="terminal-body">

          {/* ===== HERO ===== */}
          <div className="line">
            <Prompt />
            <span className="command">cat banner.txt</span>
          </div>
          <pre className="ascii-name">{ASCII_NAME}</pre>

          <div className="line">
            <Prompt />
            <span className="command">whoami</span>
          </div>
          <div className="output hero-info" id="about">
            <div className="line">
              <span className="command">Andrew Youn</span>
            </div>
            <div className="line">
              Software Engineer @ WhatsApp (Meta) · iOS Messaging Groups
            </div>
            <div className="line">
              CMU MechE + CS · Atlassian ×2
            </div>
          </div>

          <div className="line">
            <Prompt />
            <span className="command">cat about.txt</span>
          </div>
          <div className="output">
            I like building things, and AI has made that dangerously easy.
            At work, I ship features on WhatsApp iOS for the Groups &amp;
            Communities team. In my free time, I use AI tools to go from
            dumb idea to deployed app as fast as possible — like turning
            my friend&apos;s League of Legends ranked grind into a full
            Robinhood-style trading sim with leveraged ETFs and AI meme news.
          </div>

          {/* ===== EXPERIENCE ===== */}
          <div className="section-comment" id="experience"># --- work history ---</div>
          <div className="line">
            <Prompt path="~/experience" />
            <span className="command">ls -la</span>
          </div>
          <div className="output">
            {experiences.map((exp, i) => (
              <div className="exp-entry" key={i}>
                <div>
                  <span className="exp-company">{exp.company}</span>
                  {" — "}
                  <span className="exp-role">{exp.role}</span>
                </div>
                <div className="exp-date">{exp.date}</div>
                {exp.team && <div className="exp-team">{exp.team}</div>}
                {exp.bullets.map((b, j) => (
                  <div className="exp-bullet" key={j}>{b}</div>
                ))}
              </div>
            ))}
          </div>

          {/* ===== PROJECTS ===== */}
          <div className="section-comment" id="projects"># --- side projects & rabbit holes ---</div>
          <div className="line">
            <Prompt path="~/projects" />
            <span className="command">ls -la</span>
          </div>
          <div className="output">
            {projects.map((p, i) => (
              <div className="project-entry" key={i}>
                <div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-name-link"
                  >
                    {p.name}
                  </a>
                </div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tech-line">[{p.tech}]</div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    github
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer">
                      live ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ===== SKILLS ===== */}
          <div className="section-comment" id="skills"># --- tools i use ---</div>
          <div className="line">
            <Prompt path="~/skills" />
            <span className="command">echo $STACK</span>
          </div>
          <div className="output">
            <div className="skills-grid">
              {skills.map((s, i) => (
                <span className="skill-chip" key={i}>{s}</span>
              ))}
            </div>
          </div>

          {/* ===== CONTACT ===== */}
          <div className="section-comment" id="contact"># --- reach me ---</div>
          <div className="line">
            <Prompt />
            <span className="command">cat contact.txt</span>
          </div>
          <div className="output">
            <div className="contact-links">
              <a href="mailto:andrewyoun05@gmail.com">→ andrewyoun05@gmail.com</a>
              <a href="https://github.com/ay0503" target="_blank" rel="noopener noreferrer">→ github.com/ay0503</a>
              <a href="https://linkedin.com/in/andrew-youn" target="_blank" rel="noopener noreferrer">→ linkedin.com/in/andrew-youn</a>
            </div>
          </div>

          {/* ===== CURSOR ===== */}
          <div className="blank-line" />
          <div className="line">
            <Prompt />
            <span className="cursor" />
          </div>

          {/* ===== FOOTER ===== */}
          <div className="terminal-footer">
            Built by Andrew Youn · {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </>
  );
}
