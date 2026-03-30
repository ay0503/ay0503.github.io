import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "$DORI LP Tracker",
    description:
      "A Robinhood-style fantasy trading platform built around a friend's League of Legends ranked LP. Trade leveraged and inverse ETFs, collect match-based dividends, compete on a leaderboard, and read AI-generated meme news — all powered by live Riot API data. 244 commits and counting.",
    tech: ["React", "TypeScript", "tRPC", "SQLite", "Riot API", "AI"],
    github: "https://github.com/ay0503/lol-tracker",
    live: "https://lol-tracker-ivory.vercel.app",
    image: null,
    date: "2026",
  },
  {
    name: "NodeBB Open Source",
    description:
      "Implemented a claim feature in NodeBB with REST APIs for claim consistency. Built a multi-language post and comment translator using Azure and a custom LLM translator service.",
    tech: ["JavaScript", "Node.js", "REST API", "Azure", "LLM"],
    github: "https://github.com/ay0503/NodeBB",
    live: null,
    image: null,
    date: "2024",
  },
  {
    name: "RateMySchedule",
    description:
      "A web app that helps students rate and compare their course schedules, built with Express on the backend.",
    tech: ["HTML", "JavaScript", "Express"],
    github: "https://github.com/ay0503",
    live: null,
    image: "/img/projects/ratemyschedule.jpg",
    date: "2023",
  },
  {
    name: "Air Traffic Control Simulator",
    description:
      "A Python simulation of air traffic control systems, modeling aircraft movement, collision avoidance, and controller decision-making.",
    tech: ["Python"],
    github: "https://github.com/ay0503/Air-Traffic-Control-Simulator",
    live: null,
    image: "/img/projects/atc-simulator.jpg",
    date: "2022",
  },
  {
    name: "Terrain Generator",
    description:
      "A procedural terrain generation app that creates realistic 3D landscapes using noise functions.",
    tech: ["Python"],
    github: "https://github.com/ay0503",
    live: null,
    image: "/img/projects/terrain-generator.jpg",
    date: "2022",
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <span className="section-label">03. Projects</span>
      <h2 className="section-title">Things I&apos;ve Built</h2>
      <p className="section-subtitle">
        Side projects, weekend rabbit holes, and open-source contributions.
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            )}
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, j) => (
                  <span className="tech-tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
