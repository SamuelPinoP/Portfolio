import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="page-section muted-section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for web, API, data, and mobile work."
          description="Categorized for quick scanning without inflated ratings or percentages."
        />
        <div className="skills-grid">
          {portfolio.skills.map((category) => (
            <article key={category.title} className="skill-card">
              <h3>{category.title}</h3>
              <div className="tech-list">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
