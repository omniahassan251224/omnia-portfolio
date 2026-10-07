import { Code2, Database, Server, Wrench } from "lucide-react";

const skills = [
  { title: "Frontend", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", icon: Server, items: ["C#", ".NET", "ASP.NET Core", "PHP", "Laravel", "Django"] },
  { title: "Database", icon: Database, items: ["SQL"] },
  { title: "Tools & Others", icon: Wrench, items: ["Flutter", "Git & GitHub"] },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p className="section-kicker"><span /> My Toolkit</p>
        <h2>Different tools. One connected stack.</h2>
      </div>

      <div className="skill-groups">
        {skills.map(({ title, icon: Icon, items }) => (
          <article className="skill-group" key={title}>
            <Icon className="skill-icon" size={19} />
            <div className="skill-group-content">
              <h3>{title}</h3>
              <div className="skill-tags">
                {items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;