import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="page-section">
      <div className="container two-column">
        <SectionHeading
          eyebrow="Experience"
          title="Software-adjacent experience that strengthens engineering habits."
          description="Focused on accuracy, specifications, confidentiality, communication, and quality control."
        />
        <div className="timeline">
          {portfolio.experience.map((item) => (
            <article key={`${item.title}-${item.organization}`} className="timeline-item">
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.organization} | {item.location}
                </p>
              </div>
              <time>{item.timeframe}</time>
              <ul className="highlight-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
