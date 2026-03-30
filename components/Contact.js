import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <span className="section-label" style={{ textAlign: "center", display: "block" }}>
        05. Contact
      </span>
      <div className="contact-content">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-text">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a conversation about technology. Feel free to
          reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:ay0503@gmail.com" className="contact-link">
            <FiMail /> ay0503@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/ayoun2"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/ay0503"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
