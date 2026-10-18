import Link from "next/link";

const sections = ["Work", "Experience", "About", "Contact"];
export function Header() {
  return (
    <header className="topbar wrap">
      <Link aria-label="Nikhil Kumar homepage" className="logo" href="/">
        Nikhil Kumar<span>.</span>
      </Link>
      <nav aria-label="Main navigation" className="nav">
        {sections.map((section) => (
          <Link key={section} href={`/#${section.toLowerCase()}`}>
            {section}
          </Link>
        ))}
        <a
          className="resume"
          download="Nikhil_Kumar_Resume.pdf"
          href="/Nikhil_Kumar_Resume.pdf"
        >
          Resume ↗
        </a>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {sections.map((section) => (
            <Link key={section} href={`/#${section.toLowerCase()}`}>
              {section}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <span>© 2026 Nikhil Kumar</span>
      <span>Designed with intention, built with curiosity.</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
