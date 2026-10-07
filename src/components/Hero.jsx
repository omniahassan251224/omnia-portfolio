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
              aria-label="LinkedIn profile"
            >
              <svg
                className="linkedin-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.01h2.97v9.33ZM6.45 7.73a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.61h-2.96v-4.54c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.62H9.16V9.01h2.84v1.28h.04c.4-.74 1.36-1.52 2.8-1.52 2.99 0 3.54 1.97 3.54 4.53v5.04Z" />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:omniahassan251224@gmail.com" aria-label="Email Omnia">
              <Mail size={15} />
              Email
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
