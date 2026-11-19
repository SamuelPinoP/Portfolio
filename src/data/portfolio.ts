import type { PortfolioData } from "@/types/portfolio";

export const placeholders = {
  multiAndroidReleaseLink: "TODO_REPLACE_MULTI_ANDROID_APK_OR_PLAY_STORE_LINK",
  geekTextLiveDemo: "TODO_REPLACE_GEEK_TEXT_LIVE_DEMO_URL",
} as const;

export const portfolio: PortfolioData = {
  profile: {
    name: "Samuel Pino",
    title: "Software Engineer",
    supportingTitle: "Full-Stack Developer",
    location: "Florida City, Florida, United States",
    email: "samuelpinop1999@gmail.com",
    phone: "+1 (786) 926-0721",
    phoneHref: "tel:+17869260721",
    resumePath: "/resume/Samuel-Pino-Software-Engineer-Resume.pdf",
    summary:
      "Computer Science graduate building full-stack, backend, mobile, and AI-enabled software with production-minded engineering habits.",
    heroStatement:
      "I build practical software across web, API, data, and Android surfaces, with a careful eye for reliability, clear workflows, and real user needs.",
    about: [
      "I am a Computer Science graduate from Florida International University who enjoys designing and building software across the stack, from typed React interfaces to REST APIs, relational data models, and native Android workflows.",
      "My background also includes healthcare, AI/data annotation, and customer-facing work. That mix taught me to handle information carefully, follow detailed specifications, communicate clearly, and think about the people who rely on a system in real environments.",
    ],
  },
  navigation: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/#contact" },
    { label: "Resume", href: "/resume/Samuel-Pino-Software-Engineer-Resume.pdf" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/SamuelPinoP" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samuelpinopena/" },
  ],
  projects: [
    {
      title: "AI-Multi Task Management Platform",
      slug: "ai-multi",
      eyebrow: "Featured full-stack platform",
      timeframe: "Apr 2026 - Present",
      status: "Live production application with a no-sign-up demo",
      role: "Full-stack developer",
      summary:
        "A production productivity and collaboration platform with tasks, notes, events, planning workflows, project chat, and an AI assistant that answers questions about your own work.",
      description:
        "AI-Multi is a full-stack Next.js application backed by PostgreSQL and Prisma. It demonstrates production application work across UI, API routes, authorization, relational modeling, deployment, and debugging.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Prisma",
        "Neon PostgreSQL",
        "REST API routes",
        "Vercel",
        "Gemini API",
        "Playwright",
        "GitHub CI/CD",
      ],
      features: [
        "Notes and task management",
        "Task priority, status, and due dates",
        "Calendar and recurring workflows",
        "Authentication and database-backed sessions",
        "Owner, Admin, and Editor roles enforced on the server",
        "Recoverable deletion",
        "Attachment-enabled project chat",
        "Persistent database-backed data",
        "AI assistant with tool calling, source links, and saved chats",
        "Guest workspace with sample data, no sign-up needed",
      ],
      engineeringHighlights: [
        "Architected 70+ Next.js API route modules and 110+ HTTP handlers.",
        "Modeled a 37-model Prisma/PostgreSQL schema over 59 migrations for tasks, notes, events, projects, chat, and collaboration.",
        "Built an AI assistant on Gemini tool calling: six permission-checked, read-only tools, streamed answers with source links, saved chats, per-user cost caps, and prompt-injection defenses.",
        "Opened the app to visitors with a guest workspace seeded with sample data, with guest limits enforced on the server.",
        "Protected main with a CI pipeline that runs lint, type checks, 850+ automated tests (Playwright on production builds, unit tests in four time zones), and visual regression.",
        "Deployed through a GitHub-integrated Vercel workflow and traced defects across UI, API, authorization, configuration, and database layers.",
      ],
      challenges: [
        "Keeping authorization behavior consistent across collaborative resources.",
        "Designing relational data structures that support planning, notes, events, projects, and attachments without turning workflows into isolated features.",
        "Debugging issues across the UI, API, database, and deployment configuration layers.",
      ],
      architecture: [
        "Next.js App Router renders the application UI and hosts API route modules.",
        "Prisma maps application records into a Neon PostgreSQL database.",
        "Authentication, password reset flows, and role checks protect multi-user project data.",
        "Vercel handles production deployment through a GitHub-connected workflow.",
      ],
      links: [
        {
          label: "Live demo (no sign-up)",
          href: "https://ai-multi-task-management-vercel.vercel.app/",
          kind: "demo",
        },
        {
          label: "GitHub repository",
          href: "https://github.com/SamuelPinoP/AI-Multi-Task-Management",
          kind: "github",
        },
      ],
      screenshots: [
        {
          label: "Desktop dashboard",
          alt: "AI-Multi desktop dashboard screenshot showing productivity analytics.",
          aspect: "desktop",
          src: "/images/projects/ai-multi-dashboard-desktop.png",
        },
        {
          label: "Mobile workflow",
          alt: "AI-Multi mobile dashboard screenshot showing responsive productivity analytics.",
          aspect: "mobile",
          src: "/images/projects/ai-multi-dashboard-mobile.jpeg",
        },
      ],
      caseStudy: [
        {
          title: "Overview",
          body: [
            "AI-Multi is a production full-stack task-management and collaboration platform built with Next.js, TypeScript, Prisma, PostgreSQL, Neon, and Vercel.",
          ],
        },
        {
          title: "Problem / Motivation",
          body: [
            "The project explores how a productivity application can combine tasks, notes, events, planning, role-based collaboration, and recoverable workflows in one coherent product surface.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "The application uses Next.js App Router for the interface and API routes, Prisma for database access, and Neon PostgreSQL for production persistence.",
            "The data layer includes 37 PostgreSQL models supporting tasks, notes, events, projects, planning, collaboration, file-backed communication, and the AI assistant's chats and usage log.",
          ],
        },
        {
          title: "Engineering Decisions",
          body: [
            "Role-based authorization separates Owner, Admin, and Editor permissions on the server so collaborative data is protected at the workflow level.",
            "GitHub-integrated Vercel deployment keeps production releases connected to normal source-control practices.",
            "The AI assistant calls the same permission filters as the app's API routes, validates every tool call with a Zod schema, and treats stored text as data, so the model only ever sees the signed-in person's own work.",
          ],
        },
        {
          title: "Technical Challenges",
          body: [
            "The main engineering challenge was keeping behavior consistent across authentication, authorization, database models, API handlers, and responsive UI flows.",
          ],
        },
        {
          title: "What I Learned",
          body: [
            "This project strengthened my ability to debug production-style issues across the full stack and to design features around persistent data, user roles, and deployment constraints.",
          ],
        },
      ],
    },
    {
      title: "Multi Android Productivity Application",
      slug: "multi-android",
      eyebrow: "Native Android application",
      timeframe: "Dec 2025 - Present",
      status: "In active development",
      role: "Android developer",
      summary:
        "A native Android productivity suite for notes, weekly goals, events, notifications, calendar workflows, local persistence, sharing, and home-screen access.",
      description:
        "Multi shows that my engineering work extends beyond web applications. It uses Kotlin, Jetpack Compose, and Room to support productivity workflows on Android with local persistence and automated tests.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Room",
        "Android Studio",
        "Notifications",
        "Automated testing",
      ],
      features: [
        "Notes and note editing",
        "Weekly goals and goal completion",
        "Events and calendar views",
        "Notifications",
        "Attached notes",
        "Trash recovery",
        "Document sharing",
        "Home-screen widget",
        "Local Room persistence",
      ],
      engineeringHighlights: [
        "Engineered a seven-entity Room data layer for productivity records.",
        "Built automated tests for recurrence, calendar behavior, goal tracking, and Room persistence.",
        "Designed native workflows with Jetpack Compose instead of adapting a web UI to mobile.",
      ],
      challenges: [
        "Representing recurring and time-based workflows in local persistence.",
        "Coordinating notes, events, goals, notifications, and recovery flows in a native mobile interface.",
        "Keeping local data behavior testable as features expanded.",
      ],
      architecture: [
        "Jetpack Compose powers the native Android UI.",
        "Room handles local persistence for notes, events, calendars, weekly goals, and related records.",
        "Android notifications and widget surfaces extend core workflows beyond the main app screen.",
      ],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/SamuelPinoP/Multi",
          kind: "github",
        },
        {
          label: "APK / store link",
          placeholder: placeholders.multiAndroidReleaseLink,
          kind: "download",
        },
      ],
      screenshots: [
        {
          label: "Notes",
          alt: "Multi Android notes screen showing saved notes.",
          aspect: "mobile",
          src: "/images/projects/multi-notes.jpeg",
        },
        {
          label: "Weekly goals",
          alt: "Multi Android weekly goals screen showing habit and goal tracking.",
          aspect: "mobile",
          src: "/images/projects/multi-weekly-goals.jpeg",
        },
        {
          label: "Calendar",
          alt: "Multi Android events calendar screen showing August 2026.",
          aspect: "mobile",
          src: "/images/projects/multi-events-calendar.jpeg",
        },
      ],
      caseStudy: [
        {
          title: "Overview",
          body: [
            "Multi is a native Android productivity suite built with Kotlin, Jetpack Compose, and Room.",
          ],
        },
        {
          title: "Problem / Motivation",
          body: [
            "The project focuses on local productivity workflows that work naturally on Android: notes, weekly goals, events, calendars, notifications, sharing, and quick access.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "The app uses Jetpack Compose for UI and a seven-entity Room persistence layer for durable local data.",
          ],
        },
        {
          title: "Engineering Decisions",
          body: [
            "Room keeps the application usable offline and gives productivity records a structured local data model.",
            "Automated tests cover recurrence, calendar behavior, goal tracking, and persistence behavior.",
          ],
        },
        {
          title: "Technical Challenges",
          body: [
            "The biggest challenge was coordinating several time-based workflows while keeping local persistence predictable and testable.",
          ],
        },
        {
          title: "What I Learned",
          body: [
            "This project deepened my understanding of Android application structure, Compose UI, local data modeling, and testing stateful mobile features.",
          ],
        },
      ],
    },
    {
      title: "Geek Text Backend API",
      slug: "geek-text",
      eyebrow: "Backend REST API project",
      timeframe: "Feb 2026",
      status: "Team project",
      role: "Backend contributor",
      summary:
        "A Python REST API team project focused on user profile and credit-card association endpoints with layered services and relational persistence.",
      description:
        "Geek Text demonstrates backend API development with FastAPI, SQLAlchemy, MySQL, validation, exception handling, and Swagger/OpenAPI documentation.",
      technologies: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "MySQL",
        "REST APIs",
        "Swagger/OpenAPI",
      ],
      features: [
        "User profile endpoints",
        "Credit-card association endpoints",
        "Layered service structure",
        "Validation and exception handling",
        "Swagger/OpenAPI documentation",
      ],
      engineeringHighlights: [
        "Developed REST endpoints using a layered backend structure.",
        "Used SQLAlchemy persistence with relational database design.",
        "Documented API behavior through Swagger/OpenAPI.",
      ],
      challenges: [
        "Coordinating API behavior and data contracts inside a team project.",
        "Keeping validation, persistence, and error handling consistent across endpoints.",
      ],
      architecture: [
        "FastAPI exposes backend REST endpoints.",
        "SQLAlchemy maps service-layer operations to MySQL persistence.",
        "Swagger/OpenAPI documents request and response behavior.",
      ],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/EliasP20/Geek-Text",
          kind: "github",
        },
        {
          label: "Live API demo",
          placeholder: placeholders.geekTextLiveDemo,
          kind: "demo",
        },
      ],
      screenshots: [
        {
          label: "API router",
          alt: "Geek Text FastAPI router code screenshot showing ratings and comments endpoints.",
          aspect: "desktop",
          presentation: "code",
          src: "/images/projects/geek-text-api-router.png",
        },
      ],
      caseStudy: [
        {
          title: "Overview",
          body: [
            "Geek Text is a Python backend REST API team project built with FastAPI, SQLAlchemy, and MySQL.",
          ],
        },
        {
          title: "Problem / Motivation",
          body: [
            "The project focused on implementing reliable backend endpoints for user profiles and credit-card association workflows.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "FastAPI handled routing and API documentation, SQLAlchemy handled persistence, and MySQL stored relational application data.",
          ],
        },
        {
          title: "Engineering Decisions",
          body: [
            "A layered service structure kept endpoint behavior, validation, persistence, and exception handling organized.",
          ],
        },
        {
          title: "Technical Challenges",
          body: [
            "The main challenge was implementing reliable API behavior while aligning with a team codebase and shared data contracts.",
          ],
        },
        {
          title: "What I Learned",
          body: [
            "This project gave me focused practice with backend service design, relational persistence, validation, and OpenAPI documentation.",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "Kotlin", "C++", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js App Router", "Tailwind CSS", "Jetpack Compose"],
    },
    {
      title: "Backend / APIs",
      skills: [
        "Node.js",
        "FastAPI",
        "SQLAlchemy",
        "Prisma",
        "REST APIs",
        "Swagger/OpenAPI",
        "Authentication",
        "Authorization",
        "Input validation",
      ],
    },
    {
      title: "Data / Delivery",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Neon PostgreSQL",
        "Room",
        "Schema migrations",
        "Git",
        "GitHub",
        "Postman",
        "CI/CD",
        "Vercel",
        "Automated testing",
        "Debugging",
      ],
    },
  ],
  experience: [
    {
      title: "AI Content Reviewer / Data Annotator",
      organization: "Outlier (Scale AI)",
      location: "Remote",
      timeframe: "Dec 2023 - Mar 2024",
      bullets: [
        "Evaluated AI-generated responses for factual correctness, reasoning, safety, clarity, formatting, and instruction adherence.",
        "Applied evolving guidelines, investigated edge cases, and documented structured rationales for quality-review decisions.",
      ],
    },
    {
      title: "Medical Assistant / Clinical Support",
      organization: "Clinical and community settings",
      location: "San Antonio de los Banos, Artemisa, Cuba",
      timeframe: "2017 - 2022",
      bullets: [
        "Supported direct patient care, basic patient assessment, and routine care activities.",
        "Handled confidential medical records and patient information while following established procedures and documentation practices.",
      ],
    },
    {
      title: "Customer Service Associate",
      organization: "Publix Supermarkets",
      location: "Florida City, Florida",
      timeframe: "Jan 2023 - Aug 2026",
      bullets: [
        "Resolved customer and operational issues in a high-volume environment while coordinating with teammates.",
        "Earned above-expectations performance evaluations for initiative, cooperation, and customer service.",
      ],
    },
  ],
  education: [
    {
      institution: "Florida International University",
      degree: "Bachelor of Science in Computer Science",
      timeframe: "Conferred Aug 8, 2026",
      details: [
        "GPA: 3.98/4.00",
        "Summa Cum Laude",
        "Dean's List",
        "Relevant coursework: Data Structures, Operating Systems, Database Management, Software Engineering, Systems Programming, Computer Architecture, Programming Languages, Data Mining",
      ],
    },
    {
      institution: "Miami Dade College",
      degree: "Associate of Arts in Computer Science",
      timeframe: "Dec 2024",
      details: ["GPA: 3.9/4.0", "Dean's List"],
    },
  ],
};

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}
