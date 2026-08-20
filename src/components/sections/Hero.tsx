import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{portfolio.profile.supportingTitle}</p>
          <h1>{portfolio.profile.name}</h1>
          <p className="hero-title">{portfolio.profile.title}</p>
          <p className="hero-lede">{portfolio.profile.heroStatement}</p>
          <div className="hero-actions">
            <a className="button primary-button" href="#projects">
              View projects
            </a>
            <a className="button secondary-button" href={portfolio.profile.resumePath} target="_blank" rel="noreferrer">
              View resume
            </a>
            {portfolio.social.map((link) => (
              <a key={link.href} className="button text-button" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-panel" aria-label="Portfolio summary">
          <div>
            <span>Focus</span>
            <strong>Full-stack, backend, mobile, AI-enabled software</strong>
          </div>
          <div>
            <span>Education</span>
            <strong>B.S. Computer Science, FIU - GPA 3.98</strong>
          </div>
          <div>
            <span>Production work</span>
            <strong>Next.js platform with PostgreSQL, auth, file storage, and CI/CD</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
