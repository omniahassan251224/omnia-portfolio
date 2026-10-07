import { ArrowRight, Code2, Mail } from "lucide-react";

const contactEmail = "omniahassan251224@gmail.com";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const params = new URLSearchParams({ subject, body });

    window.location.href = `mailto:${contactEmail}?${params.toString()}`;
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-details">
        <div className="section-heading">
          <p className="section-kicker"><span /> Contact</p>
          <h2>Let's Build Something Together</h2>
        </div>
        <p className="contact-intro">Have a role, a project, or an idea in mind? Let's start a conversation.</p>
        <div className="contact-links">
          <a href={`mailto:${contactEmail}`}>
            <Mail size={14} /><span><strong>Email</strong><small>{contactEmail}</small></span><ArrowRight size={12} />
          </a>
          <a href="https://linkedin.com/in/omnia-h-sayed" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.01h2.97v9.33ZM6.45 7.73a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.61h-2.96v-4.54c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.62H9.16V9.01h2.84v1.28h.04c.4-.74 1.36-1.52 2.8-1.52 2.99 0 3.54 1.97 3.54 4.53v5.04Z" />
            </svg>
            <span><strong>LinkedIn</strong><small>Open LinkedIn profile</small></span><ArrowRight size={12} />
          </a>
          <a href="https://github.com/omniahassan251224" target="_blank" rel="noreferrer">
            <Code2 size={14} /><span><strong>GitHub</strong><small>Browse my projects</small></span><ArrowRight size={12} />
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
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
        <button className="contact-button" type="submit">
          Send Message <ArrowRight size={13} />
        </button>
        <small className="form-note">Your email app will open with your message ready to send.</small>
      </form>
    </section>
  );
}

export default Contact;