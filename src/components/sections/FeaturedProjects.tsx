import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  return (
    <section id="projects" className="page-section projects-section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Production-minded engineering projects."
          description="The work below is the center of the portfolio: deployed full-stack software, native Android development, and backend API work."
        />
        <div className="project-stack">
          {portfolio.projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
