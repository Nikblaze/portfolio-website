# Nikhil Kumar — Portfolio Rebuild / Final Codex Context

**Status: approved for implementation.** This document supersedes older `PORTFOLIO_CONTEXT.md` / `CODEX_PORTFOLIO_HANDOFF.md` versions and earlier brainstorming. Read it together with the **final approved standalone HTML** already supplied in the repository's `context/` directory. The HTML is the primary source for appearance, copy placement, composition and existing demo behavior; this document controls decisions, accuracy boundaries and implementation.

## 1. Repository and workflow — do not get wrong

- GitHub repo: `https://github.com/Nikblaze/portfolio-website`.
- Existing production domain: `https://kumarnikhil.vercel.app/`; the current `main` branch backs the old live portfolio (confirm actual Vercel production branch/config before acting).
- User has **already checked out branch `redesign` from `main`**. No redevelopment has started. **Work only on `redesign`; do not create/switch branches.** Inspect `git status` and file tree before editing.
- The user has **already placed the final HTML in `context/`**. Find it; do not demand it again. The final preview was named `nikhil_portfolio_final_review.html` in the earlier conversation, but the on-disk filename may vary. Do not mistake older prototypes for the final one; compare project list below.
- Old application is React / Create React App with older Bootstrap-related dependencies according to prior inspection. Reinspect repository before deciding removal; old code/history should not drive the redesigned visual treatment.
- User launches **Codex CLI from terminal**. This file is the conversation-to-agent context handoff, not an instruction to import ChatGPT history.
- **Do not commit, push, merge, deploy, modify `main`, or change production configuration without explicit approval.** Local implementation and checks are authorized.
- **Absolutely no AI attribution/co-authorship:** never add `Co-authored-by: Codex`, `Co-authored-by: OpenAI`, any AI-agent author/co-author or any equivalent trailer. Do not change Git author identity or amend history to inject AI attribution. If later authorized to commit, use existing user-configured Git identity and omit AI trailers. Also don't insert AI authorship into website/footer/readme.
- Preserve production during rebuild. Vercel preview deployments on a separate branch are preferred once the user authorizes pushing. Confirm Vercel project settings, framework/build output and production-branch mapping before launch.

## 2. Product goal and audience

Build a **personal portfolio** for Nikhil, a full-stack software engineer with Team Lead responsibilities, real frontend/backend/cloud engineering and applied AI experience. The business objective is **more credible recruiter/hiring-manager interest and interview calls** for SDE2 / experienced full-stack/software engineering opportunities (including AI-adjacent roles), not an AI consulting persona.

Desired recruiter impression: mature, capable, technically deep, personable and detail-oriented. A visitor should immediately learn who he is, what he has owned, and where to find the resume; curious engineers may delve into interactive technical case studies. Strong design should improve credibility, not distract from it.

**Do not over-position** as Enterprise AI Architect, AI Transformation Leader, or a frontend-only visual developer. Demonstrate *architectural thinking* in problem framing, ownership, trade-offs, integrations and verified outcomes. Don't claim organization-wide AI adoption or optimization, model-cost savings, production-evaluation metrics or enterprise governance achievements without evidence.

## 3. Approved visual design: preserve faithfully

**Engineering Editorial** is final. Rebuild/migrate the existing approved standalone HTML; do not creatively redesign.

- Warm ivory/paper background, charcoal/near-black type, restrained burgundy/oxide-red accents, muted stone tones.
- Exceptionally large expressive editorial hero type, italic red emphasis, generous whitespace, asymmetrical balanced layouts, sharp hierarchy and strong light/dark contrast.
- Professional personal voice. No neon-blue sci-fi aesthetic, AI SaaS-dashboard feel, particle effects, arbitrary 3D globe, terminal/IDE clone, chatbot hero, generic slogans or blog theme.
- Smooth purposeful microinteraction: project card interactions, interactive case studies, selectable career timeline, elegant hover/scroll behavior. Interactivity is optional enrichment, never a gate to content.
- Preserve overall section ordering and visual language visible in the approved HTML. Do not introduce a stand-alone AI laboratory, Engineering Principles section, separate dark AI dashboard or additional filler sections. A large extra "Applied AI" marketing section is **not required** and risks redundancy with the case study.
- Mobile responsiveness, keyboard access, semantic controls, reduced-motion support, focus states, good contrast and fast loading matter.

### Exact hero decisions

Eyebrow: `FULL-STACK SOFTWARE ENGINEER / TEAM LEAD · PUNE, INDIA`

Keep the *original* hero headline and typography, linebreaks as feasible:

**Building software that makes _complex things_ simple.**

Keep the burgundy italic treatment on `complex things`.

Approved intro paragraph (do not append a second redundant sentence):

> I'm Nikhil, a software engineer who enjoys turning challenging technical problems into intuitive, dependable products. I work across full-stack development, system design, cloud infrastructure, and applied AI.

### Content/navigation structure

1. Hero: name, value proposition, unobstructed `Explore Work` and `Resume` CTAs.
2. **Selected Work**: exactly this simple title, no "company projects" in heading. Four featured projects; visual previews, concise evidence and useful case studies.
3. Experience: **"Growing through the work."** — selectable career stages. Current functional role displayed **"Team Lead"**; formal employer title **"Senior Software Developer"** where factual employment title is shown.
4. About: **"Curiosity first. Craft always."**; keep approachable personal copy.
5. Balanced technical capabilities and contact/resume links, reflecting actual approved HTML layout. Contact heading **"Let's build something worth using."**

Do not add other case studies or "Other Engineering Contributions" for removed projects.

## 4. Final featured project lineup — exactly four

Display as approved in HTML (order below):

### 01 — Warehouse Planning & Picking Paths
- Core role: **user confirms personally developed backend logic as well as frontend**.
- Product story: warehouse layout/planning interface connected to picking-path workflows; inventory / picking decisions depend on batch expiry and project-type constraints.
- Technology supported: React, TypeScript, spatial/grid interfaces, graph-based methods; underlying backend logic exists (specific language/framework, endpoint format, data model not yet verified).
- Resume states **40% reduction in planning time** and **25% operational efficiency improvement** for warehouse visualizer; show as resume-reported with conservative wording until measurement method is confirmed.
- Demo: synthetic warehouse map with selectable project type/picking rule, inventory eligibility decisions, rack interactions and a recalculated displayed route. **Clearly separate stock selection based on rules from geometric route generation.** Current demo is conceptual; don't pretend a simple path heuristic is the proprietary production algorithm.
- Later refinement with user: exact server responsibilities, data shape, constraint precedence, picking algorithm, route optimization metric, unusual edge cases and result measurement.

### 02 — Reliable Video Capture & Upload
- Core role: **user confirms personally developed backend logic**, not merely browser UI.
- Original resume supports browser `MediaDevices` capture, secure presigned AWS S3 uploads, tenant isolation, visual evidence for compliance. User also describes recording large video content and resilience against failed/partial uploads; exact shipped protocol/details still to verify.
- Demo: interactive **illustrative** video-part transfer with progress, interruption/failure and retry/resume, showing only confirmed/acknowledged parts as successful. Synthetic data, no private media.
- Important technical precision: browser `MediaRecorder` chunks, HTTP request chunks and AWS S3 multipart `UploadPart` are different layers; don't conflate them. Never claim the actual implementation used S3 multipart upload IDs/ETags, chunking thresholds, checksum algorithms, restart recovery, deduplication or high traffic volumes until verified.
- Title should avoid unmeasured `at scale` claims. Strong full-stack/backend/cloud signal.
- Later refine actual recording approach, upload auth/session control, tenant boundaries, retry behavior, failure recovery, finalization, validation and upload size/volume.

### 03 — LLM Configuration Agent
- Internally piloted LLM-powered interface translating natural language warehouse operations into proposals covering **750+** configuration settings across tenant, warehouse and company levels.
- Human review and versioned rollback supported by supplied resume. Do not portray as organization-wide production deployment.
- Case study leads with **organizational problem**: simplifying complex configuration safely, not "used an LLM". Explain safety, review, operational controls and tradeoffs **only to degree confirmed**.
- Interactive synthetic proposal/review demo, clearly labeled mock, with no real company configurations, actual model integration requirement or false accuracy/ROI.
- No invented model-evaluation statistics, token-cost reduction, cost optimization, vector database, agent framework or governance structures.

### 04 — Jenkins CI/CD & Release Automation
- Built Jenkins CI/CD for AWS Amplify with automated unit-test/lint gates, controlled QA/UAT/production branch promotion and build-health alerts; replaced manual build-artifact commits with repeatable delivery.
- Demonstrate release engineering depth without inventing specific infrastructure. Synthetic clickable release pipeline states are fine.
- Outcome claims must be supported by resume; no invented deployment-frequency/DORA KPIs.

**Remove as featured projects**: CrewAI Jira-to-code traceability, Angular modernization, and any additional previous projects. Do not reinsert them elsewhere as an `Other Contributions` project block. CrewAI may appear only if genuinely relevant in already-approved factual experience/skills, but no new section is needed; Angular and camera choices from earlier brainstorming do not override this final lineup. Note: camera/video is INCLUDED as the second featured project; only Angular modernization is removed. The intent is to drop the older *camera-only capture* framing in favor of the updated video reliability story.

## 5. Case-study information architecture and demo honesty

For each project, surface:
- **Problem**: organization's actual workflow or engineering challenge.
- **Personal contribution**: what Nikhil specifically owned, clearly distinct from team responsibility.
- **Solution / architecture**: real system boundaries and the technical approach, with uncertain portions explicitly marked for validation.
- **Important decisions / trade-offs**: only those backed by facts; do not invent past decisions to sound senior.
- **Results and limits**: source-supported numbers and honest caveats.
- **Optional interactive exploration**: lightweight public **reconstruction with synthetic data**, showing one relevant mechanism. Existing demo implementations from approved HTML are the phase-1 baseline; accuracy improvements are planned for later user-led review.

Private employer project source and live systems cannot be linked publicly. Instead of inert GitHub buttons, project cards must lead to functional internal detailed views or routes, and interactive recreations should run locally in the browser without proprietary data/services.

Do not imply a reconstruction is the proprietary production code. No public GitHub links for company-owned repositories. No unverified backend dependencies, database schema, system scale, success rate or data consistency guarantees.

## 6. Verified resume facts (resume PDF is ultimate source)

Professional summary (Oct 2026 supplied one-page resume): Senior Software Developer with 4+ years of experience in multi-tenant logistics SaaS across frontend applications, backend services and cloud delivery. Tech React, Angular, TypeScript, Node.js, Ruby on Rails, AWS and Azure. WMS configuration delivery, code review, mentoring; automated release gates; tenant-isolated integrations; internal LLM pilot.

- **Anchanto India** — June 2022–present, formal title **Senior Software Developer**. Current functional **Team Lead** responsibilities include frontend delivery, architecture/solutioning, reviews, mentoring, release coordination and production issues; title should not be silently substituted.
- **Anchanto India internship** — March–April 2022: built CI/CD pipelines for AWS QA/UAT environments; resume-reported **30% deployment efficiency improvement**.
- **PwC India Technology Consultant Intern** — June–August 2021: Azure voice sentiment analysis integrated with Twilio + Dynamics CRM; Azure Functions, Cognitive Services Python SDK, PowerApps and Blob Storage; resume-reported 30% reduced manual tagging.
- Jenkins + AWS Amplify gates, camera/S3 multi-tenant integration, LLM pilot, CrewAI prototype (resume reports 30% developer triage reduction), React warehouse visualizer (resume reports 40% less planning time and 25% increased efficiency).
- Languages: JavaScript, TypeScript, Python, Ruby, SQL. Backend/systems: Node.js, Ruby on Rails, REST APIs, WebSockets, multi-tenant architecture, distributed systems. Cloud: AWS EC2/S3/Amplify/IAM, Azure Functions/Blob Storage/Cognitive Services, Jenkins, CI/CD, Git, Linux. Frontend: React, Angular, Next.js, Redux, HTML/CSS, Tailwind CSS. AI: CrewAI, LLM automation, human-in-the-loop workflows.
- **Education (supplied resume): IIEST Shibpur, B.Tech Information Technology, Aug 2018–July 2022, CGPA 8.98.** Use this document over older conflicting biographical notes.
- Resume achievement: 1000+ DSA problems, top 10% globally in Google Kick Start Round H, runner-up Hyland Hackathon 2021 (20+ teams).
- Verified public contact from resume: `kumarnikhil237@gmail.com`, `https://linkedin.com/in/nikhilkumar237`, `https://github.com/Nikblaze`. Public contact should use resume-supported URL/addresses. Resume download must point to a real file in `public/` (copy of user-provided PDF), not a broken path or generated placeholder. Avoid displaying phone prominently unless already in approved HTML.

When code/content conflicts with this document or the PDF on factual claims, preserve truthful claims. When exact implementation is uncertain, mark as TODO for user review rather than assert it as fact.

## 7. Architecture and implementation guidance

- Preferred target: **Next.js App Router + React + TypeScript + Tailwind CSS** for well-structured SEO-friendly portfolio and case studies; this is a migration from existing CRA inside same Git repository, not a new repo. Inspect actual baseline before migration. Use Motion for React / minimal lightweight scroll effects *only where matching the approved HTML*. Avoid unnecessary library dependencies and heavy 3D.
- Preserve reference HTML and any `context/` files. Do not publish internal context notes in `public/` or expose them as routes.
- Typed project data, reusable components (navigation/hero/projects/card/case study/demo/experience/about/skills/contact), isolated interactive client components; server-render the rest where possible.
- Internal case studies can use `/work/[slug]` with fallback/not-found; ensure working links and no broken inert CTAs.
- Preserve approved HTML's actual styling/geometry as closely as possible; pixel-fidelity is more important than demonstrating a preferred component library. Avoid introducing shadcn/Bootstrap styling that changes the approved look.
- Responsive, accessible, reduced-motion, focus/keyboard navigation, metadata/Open Graph, static generation when practical. Aim for fast first paint and strong Lighthouse scores; don't claim scores without measurement.
- Deliver scripts for `dev`, `build`, `lint`; add pragmatic checks/tests and run them; don't claim visual browser testing unless performed.
- Project must build on Vercel. Existing domain stays untouched until authorized production launch.

## 8. Process and acceptance criteria

**Initial implementation (now authorized):**
1. Inspect `git status`, current app, package manager, and `context/` assets; locate final HTML and resume if present.
2. Write a brief migration plan, then implement on `redesign` in place. Do not stop after planning unless blocked by a truly essential missing input; the approved HTML and this document are sufficient for a best-effort initial build.
3. Reproduce homepage, content, responsive style and demo interactions from final HTML in Next.js components, with four accurate featured projects.
4. Make project views reachable and useful, with synthetic demo labels and no company GitHub dependencies.
5. Verify `npm run lint` and `npm run build` (or detected package-manager equivalents); inspect the resulting application in browser where tooling allows.
6. Report files changed, current functioning behavior, factual/technical items for later validation, test status and how to run locally. Do **not commit or push**.

**Later phases — not part of unauthorized redesign:**
- Review precise warehouse BE path generation/inventory selection with user.
- Review actual video recording/upload/resume protocol and safeguards with user.
- Refine AI agent and Jenkins case studies against real implementation facts.
- Add accessibility, cross-browser, mobile, SEO and performance polish.
- On approval, push `redesign` and review Vercel preview deployment; only merge into `main` after signoff and confirmed production settings.

## 9. Non-negotiable stop signs

- Do not replace the hero with new copy, or add AI Architect claims.
- Do not re-add CrewAI/Angular as featured projects, extra AI lab, Engineering Principles, generic blog or other-project section.
- Do not put source-code/GitHub links on private projects.
- Do not describe illustrative chunk retry or route selection demos as exact shipped production logic.
- Do not commit/push/deploy/merge or add AI co-author information.
- Do not change hosting or create a fresh GitHub repository.

**Final hierarchy of authority:** user's latest explicit instructions > this final context document for decisions and scope > final approved HTML for UI/interaction fidelity > supplied resume PDF for factual professional details > older prototypes/notes (obsolete). For facts, the resume and explicitly confirmed backend ownership override unsupported prototype guesses.
