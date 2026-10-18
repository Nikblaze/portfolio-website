# Nikhil Kumar — Portfolio

Phase 1 migration of the existing Create React App portfolio to Next.js App Router, React, TypeScript, and Tailwind CSS. The approved Engineering Editorial HTML remains in `context/` as the visual reference.

## Run locally

```sh
nvm use
npm ci
npm run dev
```

Open http://localhost:3000. Node 24 is selected by `.nvmrc`. Both development and production builds use Next.js's supported Webpack option because Turbopack's CSS worker could not bind its local port in this development environment.

## Checks

```sh
npm run lint
npm run build
npm run typecheck
npm test
```

Browser tests start the production build on port 3100 and use installed Google Chrome. Install Chrome before running them. Desktop and mobile viewport projects exercise the four demonstrations, dialog focus and navigation, career tabs, the PDF, routes, responsive bounds, and content access without JavaScript. `tests/visual.spec.ts` captures the approved HTML, migrated homepage, upload dialog, and warehouse page into ignored `test-results/visual-*.png` files. Mobile tests emulate Chrome viewport/touch behavior; they do not establish Safari compatibility.

`npm run format` formats application source and configuration, leaving reference documents untouched.

## Structure

- `src/app`: server-rendered homepage, static `/work/[slug]` case studies, metadata, sitemap, robots, and not-found page.
- `src/components`: reusable editorial sections, native project dialogs, accessible career tabs, and isolated client-side demonstrations.
- `src/data/projects.ts`: typed, public-safe project content.
- `public/projects`: the four original SVG illustrations extracted from the approved HTML.
- `public/Nikhil_Kumar_Resume.pdf`: the original PDF decoded from the approved HTML, without content changes.
- `context`: private implementation references; never imported into runtime code or copied into public routes.

The approved CSS is retained in `src/app/globals.css`; Tailwind theme and utilities supplement it without resetting the prototype's browser defaults. All core content is visible and case-study links work without JavaScript. Demos require JavaScript and use only synthetic local state. No media, company services, models, configuration changes, or releases are invoked.

## Content review remaining

- Warehouse: verify backend responsibilities, API/data model, rule precedence, actual path algorithm, edge cases, and the measurement context behind resume-reported 40%/25% outcomes.
- Video: verify recording and upload protocols, session/auth controls, tenant boundaries, retry/resume behavior, finalization, and validation. The six-part demo is explicitly illustrative; acknowledgement is not finalization.
- Configuration agent: review exact internal pilot behavior and review/rollback boundaries. Demo identifiers are placeholders.
- Release automation: review the exact promotion and alert workflow against the shipped implementation.
- Complete Safari/Firefox, real-device, assistive-technology, and performance/Lighthouse review before launch.

No hosting settings have been changed. Any later deployment needs approval and a review of the Vercel production branch, framework preset, and build/output settings.

Dependency audit: compatible overrides address the old `brace-expansion` and `picomatch` versions retained by the CRA lockfile. The remaining five high-severity audit entries share the `braces` → `micromatch` → `fast-glob` development lint dependency chain. The audit proposes downgrading `eslint-config-next` to Next 14; this incompatible downgrade was not applied. Recheck upstream fixes before launch.
