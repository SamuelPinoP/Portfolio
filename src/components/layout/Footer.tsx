import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{portfolio.profile.name}</p>
          <p className="footer-copy">{portfolio.profile.summary}</p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <a href={`mailto:${portfolio.profile.email}`}>{portfolio.profile.email}</a>
          <a href={portfolio.profile.phoneHref}>{portfolio.profile.phone}</a>
          {portfolio.social.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <Link href={portfolio.profile.resumePath} target="_blank" rel="noreferrer">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
