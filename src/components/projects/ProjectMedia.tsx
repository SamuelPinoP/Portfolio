import Image from "next/image";
import type { ProjectScreenshot } from "@/types/portfolio";

type ProjectMediaProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectMedia({ screenshots }: ProjectMediaProps) {
  return (
    <div className="media-grid" aria-label="Project screenshots">
      {screenshots.map((screenshot) => (
        <div
          key={`${screenshot.label}-${screenshot.src ?? screenshot.placeholder}`}
          className={[
            "media-frame",
            screenshot.aspect === "mobile" ? "media-frame-mobile" : "",
            screenshot.src ? "media-frame-has-image" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          role={screenshot.src ? undefined : "img"}
          aria-label={screenshot.src ? undefined : screenshot.alt}
        >
          {screenshot.src ? (
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes={screenshot.aspect === "mobile" ? "(max-width: 900px) 60vw, 210px" : "(max-width: 900px) 100vw, 520px"}
              className="media-image"
            />
          ) : (
            <>
              <span>{screenshot.label}</span>
              <small>{screenshot.placeholder ?? "Screenshot pending"}</small>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
