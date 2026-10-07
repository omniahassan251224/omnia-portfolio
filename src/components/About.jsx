import { GraduationCap, Mail, MapPin } from "lucide-react";

function About() {
    return (
        <section id="about" className="section about">
            <div className="section-heading">
                <p className="section-kicker"><span /> About Me</p>
            </div>

            <div className="about-content">
                <div className="about-intro">
                    <h2>Curiosity drives<br />the code.</h2>
                    <p>
                        About Me

                        I am a passionate Full Stack Developer who enjoys turning ideas into clean, functional, and user-friendly digital experiences. I love building applications from the frontend to the backend, solving problems, and continuously learning new technologies.

                        I focus on writing clean, maintainable code while paying attention to details and creating experiences that are both practical and visually engaging. I’m always looking for opportunities to challenge myself, improve my skills, and turn creative ideas into real-world solutions.

                    </p>
                </div>

                <div className="about-info">
                    <div className="about-stats">
                        <article className="stat-card"><strong>05</strong><span>Featured projects</span></article>
                        <article className="stat-card"><strong>13+</strong><span>Tools & technologies</span></article>
                        <article className="stat-card"><strong>03</strong><span>Training experiences</span></article>
                    </div>
                    <div className="about-details">
                        <p><GraduationCap size={15} /><span>Computer Science, Cairo University</span></p>
                        <p><MapPin size={15} /><span>Cairo, Egypt</span></p>
                        <p><Mail size={15} /><a href="mailto:omnia.hassan@example.com">omnia.hassan@example.com</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;