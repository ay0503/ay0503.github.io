const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C#", "C", "JavaScript", "TypeScript", "Go", "SQL", "C++", "SML/NJ"],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      "Node.js",
      ".NET",
      "React",
      "Express",
      "tSQL Sprocs",
      "MongoDB",
      "AWS SQS",
      "Docker",
      "GCP",
      "Azure",
      "Linux",
      "Git",
    ],
  },
  {
    title: "Concepts",
    skills: [
      "Distributed Systems",
      "API Design",
      "CI/CD",
      "Testing",
      "Data Structures & Algorithms",
      "System Design",
      "Agile",
    ],
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <span className="section-label">04. Skills</span>
      <h2 className="section-title">Technologies & Tools</h2>
      <p className="section-subtitle">
        The languages, frameworks, and tools I work with on a daily basis.
      </p>

      <div className="skills-content">
        {skillCategories.map((category, i) => (
          <div className="skills-category" key={i}>
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, j) => (
                <span className="skill-item" key={j}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
