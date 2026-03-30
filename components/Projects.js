import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "NodeBB Open Source",
    description:
      "Implemented a claim feature in NodeBB, designing and deploying REST APIs to handle claim consistency. Added multi-language support by building a post and comment translator, leveraging Azure's server deployment and a custom LLM translator service to process and translate user content.",
    tech: ["JavaScript", "Node.js", "REST API", "Azure", "LLM"],
    github: "https://github.com/ay0503",
    image: null,
    date: "Sep 2024 - Dec 2024",
  },
  {
    name: "RateMySchedule",
    description:
      "A web application that helps students rate and compare their course schedules, built with a modern JavaScript stack featuring Express on the backend.",
    tech: ["HTML", "JavaScript", "Express"],
    github: "https://github.com/ay0503",
    image: "/img/projects/ratemyschedule.jpg",
    date: "2023",
  },
  {
    name: "Air Traffic Control Simulator",
    description:
      "A Python-based simulation of air traffic control systems, modeling aircraft movement, collision avoidance, and controller decision-making in a realistic environment.",
    tech: ["Python"],
    github: "https://github.com/ay0503",
    image: "/img/projects/atc-simulator.jpg",
    date: "2022",
  },
  {
    name: "Terrain Generator",
    description:
      "A procedural terrain generation application that creates realistic 3D landscapes using algorithmic techniques and noise functions.",
    tech: ["Python"],
    github: "https://github.com/ay0503",
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
        A selection of personal and open-source projects that showcase my
        engineering skills and interests.
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
