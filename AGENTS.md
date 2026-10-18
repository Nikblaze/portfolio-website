
# Nikhil Kumar — Portfolio Development Instructions

## 1. Project Context

This repository contains my personal portfolio website.

Before making any changes, read:
- `context/CODEX_PORTFOLIO_CONTEXT_FINAL.md`
- The approved HTML portfolio prototype inside `context/`
- My resume, if available in `context/`

These documents define the project requirements.

Priority when instructions conflict:
1. My latest explicit instructions
2. This AGENTS.md
3. The final portfolio context document
4. The approved HTML prototype
5. The existing React implementation

The approved HTML is the visual source of truth.
My resume is the factual source of truth for professional claims.

## 2. Product Goal

Build a premium, interactive portfolio that positions me as a capable Full-Stack Software Engineer and Team Lead with experience in:

- Frontend and backend engineering
- System design and architecture
- Cloud infrastructure and reliability
- Applied AI and workflow automation
- Engineering ownership and technical leadership

The primary goal is to improve my credibility with recruiters and engineering managers and increase interview opportunities.

This is a personal engineering portfolio, NOT an AI product, AI laboratory, or SaaS dashboard.

## 3. Design Rules

Follow the approved Engineering Editorial design.

- Warm ivory background
- Charcoal typography
- Muted burgundy accents
- Strong editorial typography and visual hierarchy
- Generous whitespace
- Responsive layouts
- Purposeful interactions and subtle animations

Do NOT:
- Redesign approved sections without permission
- Introduce neon colors or futuristic AI aesthetics
- Add unnecessary gradients or glassmorphism
- Add excessive animations or scroll hijacking
- Replace meaningful content with generic marketing copy
- Make the website resemble a blog or documentation portal

Preserve the original hero headline:

"Building software that makes complex things simple."

Prioritize visual fidelity to the approved HTML.

## 4. Featured Projects

The four approved featured projects are:

1. Warehouse Planning & Picking Paths
2. Reliable Video Capture & Upload
3. LLM Configuration Agent
4. Jenkins CI/CD & Release Automation

Each case study should explain:
- The organizational problem
- My personal contribution
- Relevant architecture and implementation
- Engineering challenges and trade-offs
- Verified outcomes
- An interactive demonstration when useful

Keep company-owned code confidential.

Use synthetic data and independently reconstructed demonstrations.

Clearly distinguish simulated behavior from actual production implementations.

Never invent technical decisions, algorithms, architectures, performance metrics, or business outcomes.

I personally developed backend logic for the warehouse and video capture projects, but implementation details must be verified before publication.

## 5. Technical Architecture

Use the stack defined in the final context document:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Reusable components
- Accessible, responsive interactions

Prefer:
- Clear component boundaries
- Strong TypeScript types
- Reusable project data models
- Server components where appropriate
- Client components for interactive functionality
- Simple, maintainable solutions

Avoid overengineering and unnecessary dependencies.

## 6. Development Workflow

Before implementing:
1. Inspect relevant existing files.
2. Read the approved context.
3. Identify the smallest correct implementation.
4. Preserve existing functionality unless explicitly replacing it.

During implementation:
- Make focused, reviewable changes.
- Follow existing code conventions where appropriate.
- Keep components understandable.
- Avoid unrelated refactoring.
- Do not add features that were not requested.

After implementation:
- Run lint checks.
- Run the production build.
- Test relevant interactions.
- Check responsive behavior.
- Report changes and remaining issues.
- Clearly identify anything not verified.

Do not claim tests passed unless they actually ran.

## 7. Git Rules — Mandatory

The current development branch is `redesign`.

- Work only on `redesign`.
- Do not create another branch without permission.
- Never modify or merge into `main` without approval.
- Do not commit, push, merge, or deploy unless explicitly requested.
- Do not change the production Vercel deployment without approval.
- Preserve existing Git history.

### Authorship Rules

NEVER add Codex, OpenAI, ChatGPT, or any AI agent as an author or co-author.

NEVER add:
- `Co-authored-by: Codex`
- `Co-authored-by: OpenAI`
- Any AI attribution trailer
- AI-generated commit signatures or acknowledgments

When explicitly asked to create a commit:
- Use the existing human Git author configuration.
- Do not change Git user.name or user.email.
- Do not add co-author trailers.
- Write a concise, conventional commit message.

## 8. Accuracy and Professionalism

- Resume-backed claims must remain accurate.
- Never exaggerate my experience or seniority.
- Use Team Lead for functional responsibilities while keeping formal employment titles accurate.
- Do not invent GitHub repositories or project URLs.
- Keep the focus balanced across full-stack engineering, architecture, cloud, and AI.
- Avoid generic AI-generated-sounding descriptions.
- Do not disclose confidential company information.

## 9. Communication

For substantial tasks:
1. Briefly summarize the approach.
2. Implement the requested changes.
3. Run appropriate verification.
4. Summarize what changed.
5. Highlight limitations or decisions needing my input.

Do not repeatedly ask for approval for routine implementation decisions.

When details are missing, make reasonable, reversible technical decisions, but never invent professional facts.

## 10. Deployment

Existing repository:
`https://github.com/Nikblaze/portfolio-website`

Production website:
`https://kumarnikhil.vercel.app/`

Keep production unchanged during development.

Use Vercel preview deployments for review when explicitly authorized.

Do not deploy to production until I approve the completed portfolio.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
