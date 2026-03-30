const About = () => {
  return (
    <section className="section" id="about">
      <span className="section-label">01. About</span>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I&apos;m Andrew, a <strong>Software Engineer at WhatsApp (Meta)</strong> on
            the <strong>iOS Groups &amp; Communities</strong> team based in Menlo Park.
            I work on features and infrastructure that power group messaging for
            over two billion people &mdash; from shipping user-facing features like
            pinned messages to large-scale codebase modularization efforts.
          </p>
          <p>
            I graduated from <strong>Carnegie Mellon University</strong> with a B.S.
            in Mechanical Engineering and an additional major in Computer Science,
            earning <strong>Dean&apos;s List with High Honors</strong>. Before Meta,
            I interned twice at <strong>Atlassian</strong> (Jira Align and Trello
            backend teams), taught CS at CMU for three years, and built fault
            classification systems at <strong>OnePredict</strong>.
          </p>
          <p>
            Day to day, I ship features, write E2E tests, run A/B experiments at
            scale, and chip away at modularization debt. I care about code quality,
            accessibility, and building things that actually work for real people.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-number">2B+</div>
            <div className="highlight-label">Users Served</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">CMU</div>
            <div className="highlight-label">B.S. MechE + CS</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">50+</div>
            <div className="highlight-label">Diffs Shipped</div>
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
