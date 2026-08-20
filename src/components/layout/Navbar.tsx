import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand-link" href="/" aria-label="Samuel Pino home">
          <span>Samuel Pino</span>
          <span>Software Engineer</span>
        </Link>
        <div className="nav-links">
          {portfolio.navigation.map((item) => {
            const isResume = item.label === "Resume";

            return (
              <Link
                key={item.href}
                className={isResume ? "nav-link nav-link-resume" : "nav-link"}
                href={item.href}
                target={isResume ? "_blank" : undefined}
                rel={isResume ? "noreferrer" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
