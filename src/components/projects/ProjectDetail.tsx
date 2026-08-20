import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMedia } from "./ProjectMedia";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="project-detail">
      <section className="project-hero">
        <div className="container project-hero-grid">
          <div>
            <Link className="back-link" href="/#projects">
              Back to projects
            </Link>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p className="hero-lede">{project.description}</p>
            <ProjectLinks links={project.links} />
          </div>
          <aside className="project-facts" aria-label="Project facts">
            <dl>
              <div>
                <dt>Status</dt>
                <dd>{project.status}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{project.timeframe}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="detail-section">
        <div className="container detail-grid">
          <div>
            <h2>Features</h2>
            <ul className="check-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Tech Stack</h2>
            <div className="tech-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section muted-section">
        <div className="container">
          <h2>Screenshots</h2>
          <ProjectMedia screenshots={project.screenshots} />
        </div>
      </section>

      <section className="detail-section">
        <div className="container case-study-stack">
          {project.caseStudy.map((section) => (
            <article key={section.title} className="case-study-block">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
