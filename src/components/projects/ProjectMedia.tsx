import type { ProjectScreenshot } from "@/types/portfolio";

type ProjectMediaProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectMedia({ screenshots }: ProjectMediaProps) {
  return (
    <div className="media-grid" aria-label="Project screenshots">
      {screenshots.map((screenshot) => (
        <div
          key={`${screenshot.label}-${screenshot.placeholder}`}
          className={screenshot.aspect === "mobile" ? "media-frame media-frame-mobile" : "media-frame"}
          role="img"
          aria-label={screenshot.alt}
        >
          <span>{screenshot.label}</span>
          <small>{screenshot.placeholder}</small>
        </div>
      ))}
    </div>
  );
}
