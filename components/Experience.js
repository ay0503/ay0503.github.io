const experiences = [
  {
    company: "Meta",
    role: "Software Engineer",
    date: "Sep 2025 - Present",
    team: null,
    bullets: [],
  },
  {
    company: "Atlassian",
    role: "Software Engineer Intern",
    date: "May 2024 - Aug 2024",
    team: "Jira Align Connectors Team",
    bullets: [
      "Collaborated with cross-functional teams to develop a mass work item force sync tool that increased productivity between Jira and Jira Align connector by 20%, leveraging Splunk log data.",
      "Converted SQL stored procedures to a unified data access layer query, enhancing performance and improving code modularity. Conducted comprehensive tSQL tests, reducing error rates by 60%.",
      "Designed an OpenAPI API controller generation template and a reusable React front-end Atlassian design component, and implemented CI/CD pipelines to automate testing and deployment.",
    ],
  },
  {
    company: "CMU School of Computer Science",
    role: "Teaching Assistant",
    date: "Jul 2021 - Dec 2022, Aug 2023 - May 2024",
    team: "15-112 Fundamentals of Programming and Computer Science",
    bullets: [
      "Led recitations for students from diverse backgrounds on complex CS concepts with adaptive content.",
      "Coordinated 10+ teaching assistants in planning, creating, reviewing course material for over 500 students.",
    ],
  },
  {
    company: "Atlassian",
    role: "Software Engineer Intern",
    date: "May 2023 - Aug 2023",
    team: "Trello Backend Platform Engineering Team",
    bullets: [
      "Modified Trello backend integration tests with an asynchronous safe socket framework, improving request/response consistency and testing pipeline efficiency by 15%.",
      "Built a fully unit-tested background task API using AWS SQS queues and distributed heartbeats to automate scheduled and repeated background tasks with locks, retry logic, and priority heuristics.",
      "Converted server codebase to TypeScript, enhancing readability and scalability for a future product merge.",
    ],
  },
  {
    company: "OnePredict",
    role: "Software Engineer Intern",
    date: "May 2022 - Aug 2022",
    team: null,
    bullets: [
      "Improved machine maintenance decision handling by creating a fault classification system in Python, reducing downtime by 20% and enhancing fault diagnosis accuracy.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <span className="section-label">02. Experience</span>
      <h2 className="section-title">Where I&apos;ve Worked</h2>
      <p className="section-subtitle">
        A track record of building impactful software across industry-leading
        companies and academic institutions.
      </p>

      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <div className="experience-card" key={i}>
            <div className="experience-header">
              <div>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-role">{exp.role}</div>
                {exp.team && (
                  <div className="experience-team">{exp.team}</div>
                )}
              </div>
              <span className="experience-date">{exp.date}</span>
            </div>
            {exp.bullets.length > 0 && (
              <div className="experience-bullets">
                {exp.bullets.map((bullet, j) => (
                  <p className="experience-bullet" key={j}>
                    {bullet}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
