import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="#home" className="logo">
          <span className="logo-mark">{"</>"}</span>
          <span className="logo-name">Omnia<span>.</span></span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
