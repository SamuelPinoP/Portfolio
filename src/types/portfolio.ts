export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectLink =
  | {
      label: string;
      href: string;
      kind: "github" | "demo" | "download";
    }
  | {
      label: string;
      placeholder: string;
      kind: "github" | "demo" | "download";
    };

export type ProjectScreenshot = {
  label: string;
  alt: string;
  aspect: "desktop" | "mobile";
  src?: string;
  placeholder: string;
};

export type CaseStudySection = {
  title: string;
  body: string[];
};

export type Project = {
  title: string;
  slug: string;
  eyebrow: string;
  timeframe: string;
  status: string;
  role: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  engineeringHighlights: string[];
  challenges: string[];
  architecture: string[];
  links: ProjectLink[];
  screenshots: ProjectScreenshot[];
  caseStudy: CaseStudySection[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  location: string;
  timeframe: string;
  bullets: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  timeframe: string;
  details: string[];
};

export type PortfolioData = {
  profile: {
    name: string;
    title: string;
    supportingTitle: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
    heroStatement: string;
    about: string[];
    resumePath: string;
  };
  navigation: NavigationItem[];
  social: SocialLink[];
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
};
