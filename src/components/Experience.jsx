const experiences = [
  {
    title: "Full Stack Development Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    description:
      "Training in Full Stack Development with focus on C#, .NET and modern web development.",
  },
  {
    title: "Advanced Data Analysis Training",
    company: "NTI",
    description:
      "Completed intensive training covering Excel, Power BI, Python, data cleaning, EDA and visualization.",
  },
  {
    title: "Summer Internship",
    company: "CIB Egypt",
    description:
      "Training focused on Banking, Generative AI, Digital Banking, Risk Management and Cybersecurity.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <p className="section-kicker"><span /> Experience</p>
        <h2>Learning in practice.</h2>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-number">0{index + 1}</div>
            <div className="timeline-copy">
              <span className="timeline-label">TRAINING 0{index + 1}</span>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;