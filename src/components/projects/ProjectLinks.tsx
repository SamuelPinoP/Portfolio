import type { ProjectLink } from "@/types/portfolio";

type ProjectLinksProps = {
  links: ProjectLink[];
  compact?: boolean;
};

export function ProjectLinks({ links, compact = false }: ProjectLinksProps) {
  return (
    <div className={compact ? "project-links compact" : "project-links"}>
      {links.map((link) =>
        "href" in link ? (
          <a key={link.href} className="button secondary-button" href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ) : (
          <span key={link.placeholder} className="button muted-button" title={link.placeholder}>
            {link.label} pending
          </span>
        ),
      )}
    </div>
  );
}
