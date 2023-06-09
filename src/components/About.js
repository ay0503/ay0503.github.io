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
          I solve problems with deeper problems to find a deeper solution.
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
                I&apos;m Andrew Youn, a student at Carnegie Mellon University studying Mechanical Engineering and Computer Science.
                I&apos;ve worked as a software engineer intern at Atlassian and OnePredict working on a variety of backend, testing, and tool projects.
                My video game hobby tells me a lot about myself in my work:
              </p>
              <p>
                <b><i>&quot;I hate losing more than I like winning.&quot;</i></b>
              </p>
            </span>
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
                        May 2023 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        software engineer intern
                        <span className="separator" />
                        <span className="font-weight-700">Atlassian</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Worked on the Trello backend engineering team and built
                        a background task component using AWS SQS and Heartbeats
                        that increases task efficiency using locks and retry logic.
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
                        Aug 2021 - Present
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
                        May 2022 - Aug 2022
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
                        Aug. 2020 - May 2025
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
                        Studying <b>Mechanical Engineering</b> with an additional
                        major in <b>Computer Science</b>.
                      </p>
                    </div>
                    <div className="card-body">
                      <p>
                        <b>Relevant Coursework</b>
                      </p>
                      <div className="course-container">
                        <p className="course-item">- 24-352 Dynamics Systems & Controls</p>
                        <p className="course-item">- 24-322 Heat Transfer</p>
                        <p className="course-item">- 24-351 Dynamics</p>
                        <p className="course-item">- 24-321 Thermal Fluids Experimentation</p>
                        <p className="course-item">- 24-370 Engineering Design I</p>
                        <p className="course-item">- 24-221 Thermodynamics</p>
                        <p className="course-item">- 24-231 Fluid Mechanics</p>
                        <p className="course-item">- 24-261 Statics</p>
                        <p className="course-item">- 24-262 Stress Analysis</p>
                        <p className="course-item">- 15-440 Distributed Systems*</p>
                        <p className="course-item">- 15-451 Algorithm Design & Analysis</p>
                        <p className="course-item">- 15-251 Great Ideas in Theoretical CS</p>
                        <p className="course-item">- 15-210 Parallel & Sequential Data Structures & Algorithms</p>
                        <p className="course-item">- 15-213 Intro. to Computer Systems</p>
                        <p className="course-item">- 15-150 Intro. to Functional Programming</p>
                        <p className="course-item">- 15-122 Intro. to Imperative Computation</p>
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
                        March 2016 - Feb 2019
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
                      - <b>Activities and societies:</b> Vice President, Dankook Aviation Club Head, Dankook Student Association (DSA) Activity Committee Chief Editor, ZEITGEIST (English School Newspaper Club)
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
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">jquery</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">angular js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">illustrator</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">after effects</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">photoshop</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
