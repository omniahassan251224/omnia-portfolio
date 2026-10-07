import { ArrowDownToLine, ArrowRight, Code2, Mail } from "lucide-react";
import portrait from "../assets/omnia-profile-full.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="eyebrow"><span /> Hi, I'm</p>

          <h1>
            Omnia <span>Hassan</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build modern web experiences and practical applications, bringing
            thoughtful design and reliable code together.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRight size={15} />
            </a>

            <a
              href="/Omnia-Hassan-CV.pdf"
              download
              className="btn btn-outline"
            >
              Download CV
              <ArrowDownToLine size={15} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/omniahassan251224"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={15} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/omnia-h-sayed"
              target="_blank"
              rel="noreferrer"
            >
              <Mail size={15} />
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-glow" />
          <div className="profile-photo-frame">
            <img className="profile-photo" src={portrait} alt="Omnia Hassan" />
          </div>
          <div className="floating-card">
            <span className="status-check"><Code2 size={15} /></span>
            <span><strong>Full Stack Developer</strong><small>Building with purpose</small></span>
          </div>
          <span className="spark spark-one">✳</span>
          <span className="spark spark-two">✳</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
