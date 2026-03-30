const skills = [
  "Swift",
  "Objective-C",
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Docker",
  "AWS",
  "Go",
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <span className="section-label">04. Skills</span>
      <h2 className="section-title">Tech I Work With</h2>
      <p className="section-subtitle">
        The core languages and tools I reach for most.
      </p>

      <div className="skills-content">
        <div className="skills-list">
          {skills.map((skill, i) => (
            <span className="skill-item" key={i}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
