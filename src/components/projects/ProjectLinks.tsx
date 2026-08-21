import type { ProjectLink } from "@/types/portfolio";

type ProjectLinksProps = {
  links: ProjectLink[];
  compact?: boolean;
};

function hasPublicHref(link: ProjectLink): link is Extract<ProjectLink, { href: string }> {
  return "href" in link;
}

export function ProjectLinks({ links, compact = false }: ProjectLinksProps) {
  const publicLinks = links.filter(hasPublicHref);

  if (publicLinks.length === 0) {
    return null;
  }

  return (
    <div className={compact ? "project-links compact" : "project-links"}>
      {publicLinks.map((link) => (
        <a key={link.href} className="button secondary-button" href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  );
}
