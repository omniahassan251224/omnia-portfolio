import { BriefcaseBusiness, Code2 } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a className="footer-brand" href="#home"><span>{"</oh>"}</span> Omnia Hassan</a>
        <div className="footer-socials">
          <a href="https://github.com/omniahassan251224" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={13} /></a>
          <a href="https://linkedin.com/in/omnia-h-sayed" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={13} /></a>
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