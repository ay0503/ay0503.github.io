import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Andrew Youn.</h1>
          <h2 className="hero-title">
            Software Engineer at <strong>WhatsApp (Meta)</strong>
          </h2>
          <p className="hero-description">
            iOS engineer on WhatsApp&apos;s Groups &amp; Communities team,
            shipping features to 2B+ users. CMU MechE + CS grad who
            loves building at scale and sweating the details.
          </p>
          <div className="hero-cta">
            <a href="#experience" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/ay0503"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/ayoun2"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:ay0503@gmail.com"
              className="hero-social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <img src="/img/profile.jpg" alt="Andrew Youn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
