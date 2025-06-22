import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I solve problems with my own problems to get to the solution.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
            {`I'm`} a student at Carnegie Mellon University and love to solve
            all sorts of engineering problems the way I want them to be solved.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <span>
              <p>
                I&apos;m Andrew Youn, an incoming software engineer at Bloomberg. I graduated from Carnegie Mellon University with a degree in Mechanical Engineering and an additional major in Computer Science.
                I&apos;ve mostly worked as a software engineer intern at Atlassian working on a variety of backend, testing, and data sync related projects.:
                I love solving problems and building things, and I&apos;m always looking for new opportunities to find the nails to my hammer.
              </p>
              <p>
                <b><i>&quot;We cannot solve our problems the same thinking we used to create them.&quot;</i></b>
              </p>
            </span>
            <div className="col-12 resume-btn-container">
              <a href="https://drive.google.com/file/d/1tRQ1cbHw0bD7w-V1DUcgBM93NEJA8PuZ/view?usp=sharing" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
            <div className="row col-xl-6 col-lg-6 col-md-12">
              <ul className="list-12">
              </ul>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
              {/* Item Starts */}
              <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Oct 2025 -
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        incoming software engineer
                        <span className="separator" />
                        <span className="font-weight-700">Bloomberg</span>
                      </span>
                    </div>
                    <div className="card-body">
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              {/* Item Starts */}
              <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        May 2024 - Aug. 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        software engineer intern
                        <span className="separator" />
                        <span className="font-weight-700">Atlassian</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        <strong>Jira Align Connectors Team</strong>
                      </p>
                      <p>
                        - Collaborated with cross-functional teams to develop a mass work-item force synchronization tool between Jira and Jira Align connectors, improving productivity by 20% through data-driven insights from Splunk logs.

                      </p>
                      <p>
                        - Migrated SQL stored procedures to a unified data access layer, significantly boosting query performance and enhancing code modularity; executed thorough tSQL testing to reduce error rates by 60%.

                      </p>
                      <p>
                        - Designed and implemented a customizable OpenAPI API controller generation template and a reusable React component.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Aug. 2021 - Dec. 2022 , Aug. 2023 - May 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Teaching Assistant
                        <span className="separator" />
                        <span className="font-weight-700">Carnegie Mellon University</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Teaching assistant for 15-112 Fundamentals of Programming and Computer Science.
                      </p>
                      <p>
                        - Mentored 25 students in an introductory Python programming course,
                        covering coding skills, data structures, and algorithms.
                      </p>
                      <p>
                        - Lead weekly recitations, labs, ofﬁce hours, and occasional review
                        sessions attended by 100+ students, created practice materials for
                        weekly small group meetings, and graded assignments and exams.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        May 2023 - Aug. 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        software engineer intern
                        <span className="separator" />
                        <span className="font-weight-700">Atlassian</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        <strong>Trello Backend Platform Engineering Team</strong>
                      </p>
                      <p>
                        - Enhanced Trello backend integration tests by implementing an asynchronous, safe-socket testing framework, resulting in 15% improvement in request/response consistency and testing pipeline efficiency.
                      </p>
                      <p>
                        - Developed a robust, fully unit-tested background task API leveraging AWS SQS queues and distributed heartbeats to automate scheduled tasks, including locking mechanisms, retry logic, and priority heuristics.
                      </p>
                      <p>
                        - Migrated entire server-side codebase to TypeScript, significantly enhancing readability, maintainability, and scalability, preparing the system for seamless future product integration.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        May 2022 - Aug. 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        software engineer intern
                        <span className="separator" />
                        <span className="font-weight-700">OnePredict</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Created an evaluation framework that improves maintenance
                        decision handling using a type-based fault classiﬁcation system.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Aug. 2020 - Dec. 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor of Science
                        <span className="separator" />
                        <span className="font-weight-700">
                          Carnegie Mellon University
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Graduated with degree in <b>Mechanical Engineering</b> with an additional
                        major in <b>Computer Science</b>.
                      </p>
                    </div>
                    <div className="card-body">
                      <p>
                        <b>Relevant Coursework</b>
                      </p>
                      <div className="course-container">
                        <p className="course-item">- 24-441 Product Design</p>
                        <p className="course-item">- 24-452 Mechanical System Experimentation</p>
                        <p className="course-item">- 24-780 Engineering Computation</p>
                        <p className="course-item">- 24-352 Dynamics Systems & Controls</p>
                        <p className="course-item">- 24-322 Heat Transfer</p>
                        <p className="course-item">- 24-351 Dynamics</p>
                        <p className="course-item">- 24-321 Thermal Fluids Experimentation</p>
                        <p className="course-item">- 24-370 Engineering Design I</p>
                        <p className="course-item">- 24-221 Thermodynamics</p>
                        <p className="course-item">- 24-231 Fluid Mechanics</p>
                        <p className="course-item">- 24-261 Statics</p>
                        <p className="course-item">- 24-262 Stress Analysis</p>
                        <p className="course-item">- 17-313 Fundamentals of Software Engineering</p>
                        <p className="course-item">- 15-317 Constructive Logic</p>
                        <p className="course-item">- 11-485 Intro. to Deep Learning</p>
                        <p className="course-item">- 15-440 Distributed Systems</p>
                        <p className="course-item">- 15-451 Algorithm Design & Analysis</p>
                        <p className="course-item">- 15-251 Great Ideas in Theoretical CS</p>
                        <p className="course-item">- 15-210 Parallel & Sequential Data Structures & Algorithms</p>
                        <p className="course-item">- 15-213 Intro. to Computer Systems</p>
                        <p className="course-item">- 15-150 Intro. to Functional Programming</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        March 2016 - Feb. 2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        High School Diploma
                        <span className="separator" />
                        <span className="font-weight-700">
                          Dankook High School
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        <b>STEM Track</b>
                      </p>
                      <p>
                      - <b>Activities and societies:</b> Vice President, Dankook Aviation Club Head,
                      Dankook Student Association (DSA) Activity Committee Chief Editor,
                      ZEITGEIST (English School Newspaper Club)
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">python</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">typescript/javascript [Node, React, Express]</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">C# [.NET, ASP]</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">SQL [sprocs, tsql]</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">MongoDB</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">AWS [Lambda, S3, Cloudwatch, SQS]</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">C</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">C++</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">sml/nj</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">matlab</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">solidworks</span>
              <div className="chart-bar">
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
