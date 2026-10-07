import { Code2, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a className="footer-brand" href="#home"><span>{"</oh>"}</span> Omnia Hassan</a>
        <div className="footer-socials">
          <a href="https://github.com/omniahassan251224" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={13} /></a>
          <a href="https://linkedin.com/in/omnia-h-sayed" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.01h2.97v9.33ZM6.45 7.73a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.61h-2.96v-4.54c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.62H9.16V9.01h2.84v1.28h.04c.4-.74 1.36-1.52 2.8-1.52 2.99 0 3.54 1.97 3.54 4.53v5.04Z" />
            </svg>
          </a>
          <a href="mailto:omniahassan251224@gmail.com" aria-label="Email Omnia">
            <Mail size={13} />
          </a>
        </div>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Omnia Hassan. All rights reserved.</span>
        <span><Code2 size={11} /> Thoughtfully built. Always evolving.</span>
      </div>
    </footer>
  );
}

export default Footer;