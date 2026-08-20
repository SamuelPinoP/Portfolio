import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="page-section">
      <div className="container two-column">
        <SectionHeading
          eyebrow="About"
          title="Software built with technical care and real-world context."
          description="A concise picture of Samuel's engineering direction and the background that shapes how he works."
        />
        <div className="section-copy">
          {portfolio.profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
