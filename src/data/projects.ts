export type DemoKind = "warehouse" | "upload" | "ai" | "steps";
export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  desc: string;
  challenge: string;
  role: string;
  decisions: string[];
  outcome: string;
  architecture: string;
  demo: DemoKind;
  steps?: string[][];
  illustration: string;
  illustrationAlt: string;
  stamp: string;
  category: string;
  headline: string;
  summary: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    eyebrow: "FULL-STACK PRODUCT SYSTEM",
    title: "Warehouse Planning & Picking Paths",
    desc: "I worked on both frontend and backend logic for warehouse layout and picking-path workflows. This public reconstruction uses synthetic inventory and simplified routing rules. It does not reproduce company algorithms or APIs.",
    challenge:
      "Translate warehouse layouts and inventory constraints into practical paths for picking orders.",
    role: "Personally developed backend logic and the React/TypeScript spatial planning interface for warehouse layouts and picking paths, incorporating batch expiry and project-type constraints. The resume describes graph algorithms and drag-and-drop interaction. This demo does not reproduce those algorithms.",
    decisions: [
      "The demo filters stock by project type and rack availability before applying a picking priority.",
      "Its displayed aisle/bay itinerary is conceptual. It does not calculate a collision-free or optimized production path.",
      "Production constraint precedence and backend implementation details await validation.",
    ],
    outcome:
      "Resume-reported: 40% less planning time and 25% operational efficiency improvement. Exact measurement context should be confirmed for publication.",
    demo: "warehouse",
    slug: "warehouse-planning",
    illustration: "/projects/warehouse.svg",
    illustrationAlt:
      "Warehouse Planning & Picking Paths — conceptual illustration",
    stamp: "Warehouse operations · spatial + backend workflows",
    category: "01 / Full-stack product systems",
    headline: "From warehouse layouts to smarter picking.",
    summary:
      "Designed frontend and backend logic for spatial warehouse workflows and picking-path generation, incorporating batch expiry and project-type constraints.",
    tags: ["React / TypeScript", "Backend logic", "Picking routes"],
    architecture:
      "Interactive planning interface → backend picking-path logic. The specific API, backend framework, data model, and routing algorithm are not reproduced here.",
  },
  {
    eyebrow: "BACKEND & CLOUD",
    title: "Reliable Video Capture & Upload",
    desc: "Developed browser media and backend upload workflows. Explore a synthetic transfer model with part-level progress and recovery. Its retry protocol is an illustrative design exercise. Exact production chunking and recovery details remain to be validated.",
    challenge:
      "Move substantial media reliably from browser-based warehouse workflows to tenant-aware cloud storage while coping with interrupted transfers.",
    role: "Personally developed backend logic as well as media capture/integration work for the project. Existing resume documents pre-signed S3 upload integration and tenant isolation.",
    decisions: [
      "Confirmed: browser MediaDevices capture, presigned S3 uploads, and tenant isolation.",
      "Browser recording chunks, HTTP request chunks, and S3 multipart parts are different layers. This demo models only synthetic acknowledgements.",
      "The shipped recording, retry, recovery, and finalization protocol still needs validation.",
    ],
    outcome:
      "Secure media capture and storage enabled visual evidence for compliance workflows. No measured video scale, resumability guarantee or performance numbers are claimed.",
    demo: "upload",
    slug: "reliable-video-upload",
    illustration: "/projects/video.svg",
    illustrationAlt:
      "Reliable Video Capture & Upload — conceptual illustration",
    stamp: "Media workflows · backend + cloud reliability",
    category: "02 / Backend & cloud reliability",
    headline: "Making video capture and uploads dependable.",
    summary:
      "Developed browser capture and backend media-handling logic for warehouse workflows, connecting secure uploads and cloud storage. Explore an illustrative transfer failure and recovery model.",
    tags: ["Browser recording", "Backend services", "Cloud storage"],
    architecture:
      "Browser media capture → backend upload workflow → secure presigned AWS S3 upload. Tenant isolation is documented. Exact authorization and recovery mechanisms remain to be confirmed.",
  },
  {
    eyebrow: "APPLIED AI / INTERNAL PILOT",
    title: "LLM Configuration Agent",
    desc: "A natural-language configuration experience across 750+ settings at tenant, warehouse and company levels. The local demo illustrates a reviewable proposal. It is not connected to private company tools or models.",
    challenge:
      "Large configuration surfaces make translating operational requirements into changes difficult and error-prone.",
    role: "Built an LLM configuration agent deployed to internal pilot, with human review and versioned rollback.",
    decisions: [
      "Keep generated proposals separate from applied changes",
      "Represent the intended configuration scope",
      "Make review and rollback part of the workflow",
    ],
    outcome:
      "Internal pilot. No unsupported adoption, accuracy or cost-optimization numbers are implied.",
    demo: "ai",
    slug: "llm-configuration-agent",
    illustration: "/projects/configuration.svg",
    illustrationAlt: "LLM Configuration Agent — conceptual illustration",
    stamp: "Applied AI · internal pilot",
    category: "03 / Applied AI & systems",
    headline: "Simplifying complex configuration with AI.",
    summary:
      "Built an LLM-powered configuration agent in internal pilot for 750+ warehouse settings, with human review and versioned rollback.",
    tags: ["LLMs", "Multi-tenant configuration", "Human review"],
    architecture:
      "Natural-language requirement → proposed configuration changes → human review, with versioned rollback. Internally piloted across tenant, warehouse, and company settings. The public example uses deterministic mock proposals.",
  },
  {
    eyebrow: "PLATFORM ENGINEERING",
    title: "Jenkins CI/CD & Release Automation",
    desc: "Explore the simulated release journey from code change through validation and promotion. No private pipelines or build artifacts are exposed.",
    challenge:
      "Manual build-artifact commits complicated repeatable and auditable releases.",
    role: "Designed Jenkins CI/CD with automated unit tests, lint gates, branch-based QA/UAT/production promotion and build-health alerts.",
    decisions: [
      "Fail on quality gates before promotion",
      "Separate QA, UAT and production flow",
      "Make build health and release history observable",
    ],
    outcome:
      "Replaced manual build-artifact commits with a repeatable delivery workflow.",
    demo: "steps",
    steps: [
      ["Commit", "Submit a change and begin validation."],
      [
        "Quality gates",
        "Run unit tests and lint checks. Block failing builds.",
      ],
      ["QA / UAT", "Promote a validated build into testing environments."],
      [
        "Production",
        "Promote an approved release and surface build-health alerts.",
      ],
    ],
    slug: "jenkins-release-automation",
    illustration: "/projects/release.svg",
    illustrationAlt:
      "Jenkins CI/CD & Release Automation — conceptual illustration",
    stamp: "Cloud engineering · delivery",
    category: "04 / Platform engineering",
    headline: "Making releases reliable and repeatable.",
    summary:
      "Designed Jenkins CI/CD for AWS Amplify with automated test and lint gates, controlled QA/UAT/production promotion, and build-health alerts.",
    tags: ["Jenkins", "AWS Amplify", "CI/CD"],
    architecture:
      "Code change → Jenkins unit-test and lint gates → AWS Amplify delivery with controlled QA/UAT/production branch promotion and build-health alerts. This illustration is disconnected from company infrastructure.",
  },
];
