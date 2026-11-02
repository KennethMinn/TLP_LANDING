# Implement the home hero

## Objective

Build the first screen of The Last Pair landing page so it matches the supplied desktop reference: a full-bleed dark sneaker photograph, overlaid header, left-aligned editorial headline, two actions, and a bottom-right slide control.

## Current context

- React 19 + Vite + TypeScript + Tailwind CSS v4 (`@tailwindcss/vite`).
- The app is a single screen. `src/App.tsx` renders a placeholder. `src/index.css` only imports Tailwind. `src/App.css` is empty.
- No router, component library, or icon package. Do not add those.
- `src/assets/hero.png` is the Vite placeholder (343×361). Do not use it as the hero photograph.
- Reference: the attached mockup “Every Pair Tells a Story” (also saved beside the project assets). It is a complete UI composite, not a clean background plate. Header, headline, buttons, and the `01 — 03` pager are baked into that JPEG.

## Files

Create:

- `src/sections/home/hero.tsx` — photograph, copy, actions, slide control
- `src/components/shared/site-header.tsx` — logo, nav, search, contact
- `src/components/shared/logo.tsx` — gold monogram plus wordmark
- `src/pages/home.tsx` — composes header and hero
- `src/data/hero.ts` — nav items, copy, and slide labels

Update:

- `src/App.tsx` — render the home page only; drop the unused `App.css` import
- `src/index.css` — theme tokens and base page color
- `index.html` — font links and document title `The Last Pair`

Copy the reference JPEG into `src/assets/hero-sneakers.jpg`. Crop or mask it so the live HTML does not sit on top of the baked-in type and controls. Keep the concrete ledge, both sneakers, the diagonal light on the wall, and the dark left field. Do not redraw the shoes.

## Visual specification

Match the reference rather than inventing a new layout.

- Full viewport height. Near-black field (`#0c0b0a`) with the photograph occupying the right and lower portion. A left-to-right dark scrim keeps the headline readable. Do not letterbox the photo inside a card.
- Palette: ink `#0c0b0a`, antique gold `#c6a35a`, gold hover slightly lighter, cream `#f3f0e8`, muted body copy around `#c9c4ba`. Put these in Tailwind theme tokens and reuse them.
- Display type: Playfair Display. UI and buttons: Outfit. Load both from Google Fonts (Playfair 400/500 and italic 500; Outfit 300/400/500).
- Logo, left: small gold monogram (sneaker-like mark, SVG), then `THE LAST PAIR` in tracked small caps, with `SNEAKERS & STREETWEAR` beneath it between two short gold rules.
- Nav, optically centered: Home, Collection, About, Quality, Contact. Home is active: cream text and a short gold underline. Other items are cream at rest. Quiet hover (color shifts toward gold). No pill backgrounds.
- Right cluster: gold search icon button, then `CONTACT` — transparent, thin gold border, slight radius, tracked uppercase. Hover fills gold with ink text.
- Eyebrow, gold, tracked uppercase: `EST. 2026 — YANGON`.
- Headline, large serif, tight leading, left aligned, two lines: `EVERY PAIR` / `TELLS A STORY.` The word `STORY.` is gold italic, including the period.
- Supporting line, cream, regular weight: `Curated sneakers and streetwear for your everyday style.`
- Primary action: gold fill, ink text, slight radius, tracked uppercase `EXPLORE COLLECTION` plus a small arrow. Secondary: transparent, cream border, `OUR STORY`. Hover states stay in the same gold/ink system.
- Bottom right: gold `01 — 03`, then previous and next buttons. Square, thin gold border, gold chevrons, same radius as the other controls.

Spacing should follow the reference: header inset from the edges, headline block left-aligned under the logo column, vertically centered with a slight downward bias, controls tucked above the bottom edge.

## Responsive behavior

- Desktop and large desktop: the reference layout. Nav stays in the header. Headline can grow slightly on very wide screens but should not span into the shoes.
- Tablet: keep the photograph and left copy. If the nav no longer fits, collapse it. Do not squash the headline into the sneakers.
- Mobile: header is logo plus a menu button and the contact control if it fits; otherwise logo plus menu. The menu opens the same five links. Headline scales down (about 2.6–3.2rem) and stays left aligned. Buttons can wrap. The photograph remains full-bleed behind a stronger scrim so the copy stays readable. Slide controls stay reachable, at the bottom, without covering the buttons. No horizontal scroll. Touch targets at least 44px.

## Interaction

- Nav and actions are real links: Home `#top`, Collection `#collection`, About `#about`, Quality `#quality`, Contact `#contact`, Explore Collection `#collection`, Our Story `#about`. Do not add React Router.
- Search is a button labeled for assistive tech. It does not open a panel in this task.
- Previous and next update a local slide index across `01`, `02`, and `03`, and move the photograph slightly (position or scale) so the control is real. There is only one photograph; do not invent extra product shots or captions.
- Visible focus rings in gold. Respect `prefers-reduced-motion` for the photograph shift.

## Constraints

- Arrow-function components, default exports, kebab-case filenames, no barrel files.
- Tailwind utilities for layout and color. Custom CSS only for the photograph mask or a type detail Tailwind cannot express cleanly.
- Semantic `header`, `nav`, `main`, and `section`. One `h1`.
- No new dependencies, no animation library, no icon package, no invented testimonials or product claims.
- Do not run TypeScript, ESLint, or a production build unless asked.
- After implementation, check the hero in the browser against the reference at desktop and a narrow mobile width, and adjust meaningful mismatches.

## Acceptance criteria

- The first screen reads as the reference: gold logo, centered nav with Home underlined, search and outlined Contact, gold eyebrow, white/gold serif headline, two buttons, sneaker photograph, and `01 — 03` controls.
- Copy matches the reference exactly.
- The baked-in mockup text is not visible underneath the live text.
- Layout holds together from a narrow phone to a wide desktop without overflow.
- Slide buttons change the index. Links point at the in-page anchors above.
