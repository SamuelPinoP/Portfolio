import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="page-section muted-section">
      <div className="container two-column">
        <SectionHeading
          eyebrow="Education"
          title="Computer Science foundation with strong academic performance."
          description="Dates and academic details live in the central portfolio data file."
        />
        <div className="education-list">
          {portfolio.education.map((item) => (
            <article key={item.institution} className="education-card">
              <div>
                <h3>{item.institution}</h3>
                <p>{item.degree}</p>
                <time>{item.timeframe}</time>
              </div>
              <ul className="highlight-list">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
