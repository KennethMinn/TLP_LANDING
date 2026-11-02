# AGENTS.md — React Marketing & Informational Websites

## Purpose & Priority

This file defines the development rules, architecture preferences, coding standards, design standards, and workflow for React-based marketing and informational websites. It is intended for Cursor and other coding agents.

It covers landing pages, company websites, portfolios, product showcases, campaign websites, and other public-facing informational sites. It is **not** a POS/ERP/dashboard-specific architecture guide.

Follow these instructions over conflicting existing conventions for the code being changed, but do not rewrite unrelated code merely to enforce them. Follow the user's latest explicit requirements and supplied designs. When the actual project configuration differs from an assumed default, inspect it before deciding.

Build websites that are clean, simple, maintainable, readable, strongly typed, responsive, visually intentional, performant, and easy to extend. Follow **KISS** and **DRY**; prefer readability over cleverness or fewer lines. Complexity must earn its place.

---

## 1. Framework & Technology

- Use **React + TypeScript**.
- Support **React + Vite** and **Next.js**, chosen according to the existing project or explicitly stated project needs. Never migrate frameworks without a request.
- Prefer **Tailwind CSS** for styling. Respect an established styling solution; do not introduce a competing system without a good reason.
- The UI component library is **project-dependent**. Inspect existing components and dependencies before choosing shadcn/ui, another library, or custom components.
- For **Vite**, use React Router when routing is needed, unless an existing router is already configured.
- For **Next.js**, follow its existing router and project conventions. When using the App Router, prefer Server Components by default and use Client Components only where interactivity or browser APIs require them. Use server rendering and static generation as appropriate to actual project requirements, rather than forcing every page to the client.
- Existing preferred tools: **React Hook Form, Zod, Zustand, TanStack Query, and Axios**. Keep these as preferred solutions **when the feature needs them**, not as packages every marketing website must install.
- Prefer **npm** when starting from scratch; otherwise use the existing lockfile/package manager. Do not switch package managers casually.
- Inspect package configuration before assuming that any library, alias, icon set, or CSS utility exists.
- Install dependencies only when genuinely necessary. Prefer an existing dependency or a simple native React/browser solution first.

## 2. Scope & Implementation Philosophy

- Implement the smallest useful solution that satisfies the request.
- Keep concerns separate without creating extra layers for their own sake.
- Prefer simple, explicit code to broad abstractions, clever tricks, and unnecessary generic systems.
- Search for existing components, hooks, utilities, assets, and patterns before adding new ones.
- Reuse sections and components across pages whenever practical, but avoid forcing unrelated designs into one overly configurable component.
- Allow small **related** improvements when they directly support the task; avoid unrelated refactors, renames, rewrites, or reformatting.
- Preserve existing functionality while making requested changes.

## 3. Architecture & Folder Structure

Use a **hybrid structure**: shared components plus page-specific sections. Adapt it to the framework and real project size.

Example for React + Vite:

```text
src/
  assets/
  components/
    ui/
    shared/
  sections/
    home/
      hero.tsx
      features.tsx
      testimonials.tsx
    about/
      team.tsx
  pages/
    home.tsx
    about.tsx
    not-found.tsx
  layouts/
  hooks/
  lib/
  data/
  constants/
  types/
  store/
```

For Next.js, keep route files in the existing `app/` or `pages/` structure and place shared components and page sections where they fit its conventions. Don't create `src/`, `store/`, `hooks/`, or other directories unless they have an actual purpose.

### Responsibilities

- **Pages/routes:** compose meaningful sections and supply page-level behavior; don't become giant components.
- **Page sections:** hero, benefits, pricing, FAQ, social proof, CTA, footer-related blocks, etc. Keep each section focused.
- **Shared components:** reusable elements such as buttons, containers, headings, cards, navigation, and footer.
- **Layouts:** common page shells only when multiple routes benefit.
- **Hooks:** substantial or reusable behavior; avoid wrappers around trivial state.
- **lib:** shared technical utilities/infrastructure, independent of UI.
- **data:** static content, configuration, or mock data; not API request logic.
- **constants:** meaningful shared configuration; not every one-off visual value.
- **types:** shared TypeScript models; keep local types close to features.
- **store:** Zustand stores only for genuine shared client state.
- **assets:** project images, SVGs, fonts, and other bundled media.

### Section Reusability

- Build landing pages by composing sections rather than placing entire pages in monolithic files.
- Reuse sections across pages when the design and behavior genuinely align.
- Expose a small, clear props interface where configurability is useful.
- Do not construct a giant universal `Section` component with dozens of flags.
- Do not extract every wrapper into a component. Extract by clear responsibility, reuse, or readability.

## 4. File Naming, Imports & Exports

- Use **kebab-case** filenames: `hero-section.tsx`, `site-header.tsx`, `use-scroll-position.ts`.
- Prefer **arrow-function React components** and **default exports**, consistent with existing project conventions when practical.
- Use direct imports; avoid barrel export files such as `components/index.ts`.
- Prefer an existing `@/` alias over deep relative imports; configure an alias only when worthwhile and do not introduce competing patterns.
- Keep component, variable, and prop names descriptive and consistent.

## 5. TypeScript Quality

- TypeScript is required. Use strict, meaningful types.
- Avoid `any`; prefer real types, generics, `unknown` with narrowing, or validation as needed.
- Avoid unnecessary `as` assertions and non-null (`!`) assertions.
- Prefer `type` by default; use `interface` where its capabilities are useful.
- Let the compiler infer obvious local values; explicitly type significant boundaries (props, shared models, API results, stores, and complex functions).
- Avoid magic numbers for meaningful domain logic; ordinary layout values do not all need named constants.
- Prefer clear conditionals and early returns over deeply nested ternaries.

## 6. Design Direction & Visual Quality

### With a reference

- When given a **Figma file, screenshot, mockup, or existing design**, reproduce it **pixel-accurately whenever possible**.
- Inspect the whole reference before coding: layout, spacing, proportions, text hierarchy, fonts, line height, colors, shadows, radius, borders, alignment, image cropping, hover states, and responsive implications.
- Do not substitute generic templates or simplify distinctive design features for convenience.
- Responsive adaptations are allowed when needed to make the design work on different screens, while preserving visual intent.
- For **complex** reference-driven designs, compare the implementation with the reference and adjust meaningful discrepancies. A dedicated visual comparison is not mandatory for every tiny/simple change.
- If a proposed improvement materially conflicts with the reference, **ask before making the significant change**.

### Without a reference

- Use judgment based on the **brand, audience, content, and project context**.
- Support any suitable brand style: minimal, premium, playful, bold, corporate, editorial, experimental, etc. Don't impose a fixed house style.
- Create a consistent lightweight **design system**: color roles, typography scale, spacing, layout widths, radii, and reusable UI patterns.
- Follow existing brand fonts and design references. Otherwise choose appropriate fonts and sensible fallbacks.
- Make every page visually cohesive, readable, and deliberate, not generic or randomly decorated.
- Creative freedom depends on whether a reference is supplied: invent thoughtfully when none exists, replicate faithfully when one does.

### Tailwind CSS

- Prefer Tailwind utilities and responsive variants for normal styling.
- Use design tokens/theme configuration or CSS variables when they provide consistent reuse.
- Use custom CSS for cases Tailwind cannot express cleanly or when the design calls for it.
- Avoid giant global stylesheets, duplicated rules, unnecessary inline styles, and gratuitous `!important`.
- Avoid excessive `absolute` positioning, arbitrary giant `z-index` values, and hardcoded layouts tied to one viewport.
- Prefer Flexbox, CSS Grid, normal document flow, and purposeful max-width containers.

## 7. Responsiveness & Mobile UX

- Treat **mobile, tablet, desktop, and large desktop** as equally important.
- Default to **Tailwind responsive utilities and fluid layouts**, not a design fixed to one screen width.
- Choose breakpoints to support layout behavior, using existing project conventions where possible.
- Keep type readable, images correctly cropped, content widths comfortable, and spacing proportionate at every size.
- Create **mobile-specific navigation and interaction patterns** when they meaningfully improve usability.
- Consider touch targets, menu behavior, stacked sections, image order, navigation density, forms, and overflow.
- Avoid horizontal scrolling, clipped content, tiny touch targets, and desktop-only interactions.
- Do not blindly scale desktop layout down to mobile; adapt layout intentionally while preserving brand design.

## 8. Content, Images, Icons & Media

- Use **existing project assets and icon libraries first**.
- Don't introduce a new icon/image package when existing resources solve the need.
- Use semantic, purposeful imagery that supports the content and brand.
- If real copy or media is missing, use **reasonable placeholders** to continue implementation; do not present invented details, claims, statistics, client logos, or testimonials as real.
- Keep placeholder content easy to locate and replace.
- Separate content into structured data/configuration when it benefits reuse or maintainability; simple one-off copy can remain near the section.
- Support a CMS **when the project requires one**; do not add CMS infrastructure by default. Respect the existing CMS/data contract.
- Size and crop images intentionally. Provide useful alt text for meaningful images and decorative handling where appropriate.
- Apply practical image optimization, responsive dimensions, loading behavior, and format choices supported by the framework.
- In Next.js, use its image/font facilities when suitable; in Vite, choose a straightforward compatible approach.
- Don't embed huge assets or media unnecessarily.

## 9. Animation & Interaction

- Follow the **provided design direction** for visual effects. Do not invent heavy animations when the design is quiet.
- Use the **simplest suitable solution**: CSS transitions/animations first for simple effects; an existing animation library for complex interactions when justified.
- Smooth scrolling and subtle transitions may be added when appropriate and consistent with the intended experience.
- Do not add Motion/Framer Motion, GSAP, or similar libraries just for trivial fades or hover effects.
- Keep motion purposeful, performant, and non-distracting.
- Respect reduced-motion preferences where motion could interfere with usability.
- Preserve usable hover, focus, active, and disabled states.

## 10. Navigation, Routing & Page Structure

- Use semantic navigation. **Links navigate; buttons perform actions.**
- Prefer framework-native links (`Link` for React Router or Next.js, `<a>` for appropriate external or document links).
- Do not use clickable `<div>` elements as fake links.
- Provide appropriate route structure for the project; do not add a second routing system.
- In-page anchors and smooth scrolling are acceptable when they improve landing-page navigation.
- Provide an intentional not-found experience when routing requires it.
- Keep shared header, footer, and navigation consistent across relevant pages.
- Don't create artificial routing complexity for a single-page landing site.

## 11. Accessibility & Semantics

Implement **basic accessibility without excessive complexity**:

- Use semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`, headings, links, buttons, forms).
- Use sensible heading hierarchy and visible keyboard focus.
- Associate form inputs with labels and provide actionable errors.
- Ensure navigation and interactive controls are keyboard-operable.
- Use meaningful link/button text and reasonable contrast.
- Use native semantics before adding ARIA.
- Do not build excessive accessibility infrastructure for simple static sections.

## 12. SEO & Internationalization

- **SEO is opt-in**: only perform **SEO-specific work when explicitly requested**. Do not automatically add SEO audits, schema markup, keyword programs, sitemap tooling, or extensive metadata infrastructure.
- Continue writing sound semantic HTML and usable pages as normal code quality, even without an SEO request.
- When SEO is explicitly requested, choose framework-appropriate metadata and rendering strategies based on actual requirements.
- **Multilingual/i18n support is opt-in**. Add it only when requested. Do not install translation libraries or future-proof every project for languages it does not use.

## 13. State, Data, APIs & Forms

Use the simplest appropriate state solution:

- Local interactions: `useState`; `useReducer` if related transitions become complex.
- Shared client state: Zustand **only** when genuine cross-component sharing requires it.
- Server state: TanStack Query where client-side fetching, caching, mutations, invalidation, and asynchronous UI state warrant it.
- API layer: Axios is preferred where an HTTP client layer is useful, but do not create an unnecessary Axios/TanStack Query stack for a static website.
- Forms: React Hook Form with Zod for non-trivial forms; native controlled inputs are fine for tiny forms.
- URL state: use search parameters for shareable filters, categories, search, or pagination when necessary.
- For Next.js, use its built-in server fetching and server-side patterns when they are the better fit; do not force client-side queries into Server Components.
- Keep API calls outside presentational components when meaningful. Don't use `useEffect` for data fetching when Query or the framework's server data mechanisms are better.
- Don't copy query-managed server data into Zustand without a reason.
- Keep authentication and persistence decisions dependent on the real backend; never invent them.
- Static websites should remain static unless project requirements justify added state/data systems.

## 14. Async States & Error Handling

- Intentionally handle loading, error, empty, and success states wherever asynchronous functionality actually exists.
- Avoid blank screens and silent failures. Show actionable feedback or a suitable fallback.
- Use skeletons, inline indicators, or preserved content based on the design; don't default every feature to a spinner.
- Add error boundaries at meaningful application boundaries, not around every small component.
- Do not expose internal exception details to end users unnecessarily.
- Clean up listeners, timers, observers, and subscriptions when relevant.

## 15. Practical Performance

Apply **practical optimizations without overengineering**:

- Avoid unnecessary JavaScript, dependencies, re-renders, and heavy animation.
- Use suitable image sizes, formats, and loading strategies; don't lazy-load critical above-the-fold media blindly.
- Lazy-load large routes/components or non-critical media when there is a meaningful benefit.
- Prefer CSS for simple presentational effects.
- Use `useMemo`, `useCallback`, and `React.memo` only when they solve an actual problem, not by default.
- In Next.js, avoid broad client boundaries that ship otherwise static content to browsers.
- Do not introduce elaborate optimization or benchmarking infrastructure for ordinary landing-page work.

## 16. Development Workflow — Mandatory

### Step 1 — Read This File

Read `AGENTS.md` before implementing a feature or page. Honor the user's current task requirements.

### Step 2 — Inspect Relevant Project Files

Examine only files needed to understand the task: package configuration, routes, existing sections/components, assets, styling/theme, dependencies, data sources, and responsive patterns. Reuse existing solutions where practical.

### Step 3 — Resolve Material Ambiguity

Ask a **focused question** only if a real uncertainty would materially change the design, implementation, UX, routing, data behavior, or architecture. Do not ask for information already clear in the repository, task, or reference.

### Step 4 — Write an Implementation Prompt

**Before implementing**, prepare a prompt file inside `prompts/` using a descriptive kebab-case name, such as:

```text
prompts/build-homepage.md
prompts/add-pricing-section.md
prompts/redesign-site-header.md
prompts/build-company-website.md
```

Include relevant details without inflating simple tasks: objective, current project context, files involved, page/section requirements, supplied visual references, responsive behavior, content/assets, interactions, state/data needs, constraints, implementation approach, and acceptance criteria.

### Step 5 — Request Approval and Stop

After creating the prompt, **stop before implementing**. Tell the user exactly:

> I prepared the implementation prompt at `prompts/<name>.md`. Good to execute?

Do not modify implementation code until the user approves.

### Step 6 — Implement After Approval

Follow the approved prompt and this file. Work feature by feature. Reuse existing patterns, keep changes focused, and preserve the intended visual design. If a new **major** ambiguity appears, ask before making an irreversible or material design choice.

### Step 7 — Review Work

Review the code and intended design for accidental complexity, component reuse, responsive layout, semantic markup, basic interaction states, and mismatches with provided references. For complex reference designs, perform a closer visual comparison when tools and assets permit.

**Do not automatically run** TypeScript checks, ESLint, tests, formatters, or production builds unless the user specifically requests them. Inspection and manual review are permitted; don't claim that automated checks passed when they were not run.

### Step 8 — Final Response

After implementation, **only explain what changed**, briefly and without unnecessary detail. State relevant limitations succinctly when necessary. Do not provide long reports or unsolicited technical tutorials.

## 17. Testing & Validation Policy

- Do not automatically run type checking, ESLint, tests, formatter commands, or Vite/Next.js production builds.
- Do not introduce a testing framework or generate tests unless explicitly requested.
- When validation is requested, use the project's existing tools and scripts.
- Don't change package managers to run checks.
- Never report tests/builds as passing unless actually run and verified.

## 18. Avoid

- Giant page components and enormous section files
- Unnecessary abstraction, duplicate components, speculative architecture
- Over-configurable universal sections
- Excessive hooks, huge `useEffect` blocks, premature memoization
- `any`, unnecessary type assertions, non-null assertions, deeply nested ternaries
- Unnecessary state libraries or API layers on static pages
- Arbitrary dependencies, competing UI/styling systems
- Barrel exports, unclear naming, magic numbers in domain logic
- Fake links, div soup, excessive wrappers, poor HTML semantics
- Missing mobile/tablet layouts, rigid desktop widths, overflow
- Random `z-index` values, excessive absolute positioning, `!important`, giant CSS files
- Generic design substitutions when a detailed reference exists
- Unrequested animations, heavy visual effects, unnecessary external assets
- Fictional business facts masquerading as real content
- Automatic SEO/i18n infrastructure when not requested
- Unrelated rewrites and refactors
- Implementing before the `prompts/` file and user approval
- Running automated checks without a user request

## Final Standard

The result should feel like a thoughtfully designed, brand-appropriate, responsive website written by a careful human developer: visually faithful when a reference exists, creatively coherent without one, and clean and maintainable in either React + Vite or Next.js.
