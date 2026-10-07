import { ArrowRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-details">
        <div className="section-heading">
          <p className="section-kicker"><span /> Contact</p>
          <h2>Let's Build Something Together</h2>
        </div>
        <p className="contact-intro">Have a role, a project, or an idea in mind? Let's start a conversation.</p>
        <div className="contact-links">
          <a href="mailto:omnia.hassan@example.com">
            <Mail size={14} /><span><strong>Email</strong><small>Add email address</small></span><ArrowRight size={12} />
          </a>
          <a href="https://linkedin.com/in/omnia-h-sayed" target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={14} /><span><strong>LinkedIn</strong><small>Open LinkedIn profile</small></span><ArrowRight size={12} />
          </a>
          <a href="https://github.com/omniahassan251224" target="_blank" rel="noreferrer">
            <Code2 size={14} /><span><strong>GitHub</strong><small>Browse my projects</small></span><ArrowRight size={12} />
          </a>
        </div>
      </div>

      <form className="contact-form">
        <h3>Tell me what you're thinking.</h3>
        <p>A good conversation is where every project begins.</p>
        <div className="contact-form-fields">
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
        </div>
        <label className="message-field">
          Message
          <textarea name="message" placeholder="A little about your idea, project, or opportunity..." rows="4" required />
        </label>
        <button className="contact-button" type="button" disabled title="Connect a form service before publishing">
          Send Message <ArrowRight size={13} />
        </button>
        <small className="form-note">Static preview / Connect a form service before publishing.</small>
      </form>
    </section>
  );
}

export default Contact;