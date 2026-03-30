const About = () => {
  return (
    <section className="section" id="about">
      <span className="section-label">01. About</span>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I like building things, and AI has made that dangerously easy. At
            work, I ship features on <strong>WhatsApp iOS</strong> for the{" "}
            <strong>Groups &amp; Communities</strong> team &mdash; most recently
            Group History for 2B+ users. In my free time, I use AI tools to go
            from dumb idea to deployed app as fast as possible &mdash; like
            turning my friend&apos;s League of Legends ranked grind into a full
            Robinhood-style trading sim with leveraged ETFs and AI meme news.
          </p>
          <p>
            CMU <strong>MechE + CS</strong> grad.
            Previously <strong>Atlassian</strong> (&times;2).
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-number">2B+</div>
            <div className="highlight-label">Users Served</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">CMU</div>
            <div className="highlight-label">MechE + CS</div>
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
