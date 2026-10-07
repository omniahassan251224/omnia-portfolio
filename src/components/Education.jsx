import { GraduationCap } from "lucide-react";

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <p className="section-kicker"><span /> Education</p>
        <h2>A foundation in computer science.</h2>
      </div>

      <article className="education-card">
        <span className="education-icon"><GraduationCap size={19} /></span>
        <div className="education-copy">
          <span className="education-label">UNIVERSITY</span>
          <h3>Cairo University</h3>
          <p>Faculty of Computers and Artificial Intelligence</p>
          <p className="education-degree">Computer Science</p>
        </div>
        <div className="education-period">
          <span>2023 — 2027</span>
          <small>Undergraduate</small>
        </div>
      </article>
    </section>
  );
}

export default Education;
