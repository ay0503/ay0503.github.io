const About = () => {
  return (
    <section className="section" id="about">
      <span className="section-label">01. About</span>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I&apos;m Andrew Youn, a <strong>Software Engineer at Meta</strong>.
            I graduated from <strong>Carnegie Mellon University</strong> with a
            B.S. in Mechanical Engineering and an additional major in Computer
            Science, earning <strong>Dean&apos;s List with High Honors</strong> (QPA: 3.43/4.0).
          </p>
          <p>
            My journey into software started at CMU where I bridged the gap
            between mechanical systems and code. I&apos;ve worked across the stack
            &mdash; from building distributed backend systems at <strong>Atlassian</strong> to
            creating fault classification systems at <strong>OnePredict</strong>,
            and teaching hundreds of students as a <strong>CS Teaching Assistant</strong>.
          </p>
          <p>
            I thrive on solving complex engineering problems and building
            reliable, scalable systems. Whether it&apos;s designing APIs,
            migrating codebases, or optimizing data pipelines, I bring a
            methodical, impact-driven approach to everything I build.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-number">3+</div>
            <div className="highlight-label">Years of Experience</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">CMU</div>
            <div className="highlight-label">B.S. MechE + CS</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">500+</div>
            <div className="highlight-label">Students Mentored</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">4</div>
            <div className="highlight-label">Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
