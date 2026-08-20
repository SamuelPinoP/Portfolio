import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMedia } from "./ProjectMedia";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={featured ? "project-card featured-project" : "project-card"}>
      <div className="project-card-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span>{project.status}</span>
        </div>
        <p>{project.summary}</p>
        <ul className="highlight-list">
          {project.engineeringHighlights.slice(0, featured ? 3 : 2).map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="tech-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-actions">
          <Link className="button primary-button" href={`/projects/${project.slug}`}>
            Case study
          </Link>
          <ProjectLinks links={project.links} compact />
        </div>
      </div>
      <ProjectMedia screenshots={project.screenshots} />
    </article>
  );
}
