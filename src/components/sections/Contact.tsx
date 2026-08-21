import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="page-section contact-section">
      <div className="container contact-grid">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="The fastest path is email, with GitHub and LinkedIn available for project review and professional context."
        />
        <div className="contact-actions">
          <a className="button primary-button" href={`mailto:${portfolio.profile.email}`}>
            Email Samuel
          </a>
          <a className="button secondary-button" href={portfolio.profile.phoneHref}>
            {portfolio.profile.phone}
          </a>
          {portfolio.social.map((link) => (
            <a key={link.href} className="button secondary-button" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <a className="button text-button" href={portfolio.profile.resumePath} target="_blank" rel="noreferrer">
            Open resume
          </a>
          <p className="contact-location">{portfolio.profile.location}</p>
        </div>
      </div>
    </section>
  );
}
