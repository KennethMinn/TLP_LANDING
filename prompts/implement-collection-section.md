# Implement the collection section

## Objective

Add the collection block under the existing hero so it matches the supplied reference, and adapt that layout for tablet and phone.

## Current context

- The home page is `src/pages/home.tsx`: shared `SiteHeader` plus `Hero`.
- Theme tokens and fonts already exist in `src/index.css` and `index.html` (ink, gold, cream, muted, Playfair Display, Outfit).
- Navigation is in-page anchors. Collection already points at `#collection`. There is no router and no product pages. Do not add either.
- The header currently treats Home as the only active item.
- The reference is one composite JPEG (header, titles, and six product photos baked together). It is not six separate cutouts.

## Files

Create:

- `src/data/collection.ts` — section copy and the six products
- `src/components/shared/product-card.tsx` — one shoe card
- `src/sections/home/collection.tsx` — intro, Top Sellers, New Arrivals

Update:

- `src/pages/home.tsx` — render the collection section after the hero, with `id="collection"`
- `src/components/shared/site-header.tsx` — gold underline follows the link for the section in view. Home is active at the top. Collection is active while `#collection` is the section in view. Do not render a second header inside the section.

Crop the six shoes from the reference into `src/assets/collection/`, one image per product. Keep each shoe, its ledge, and the dark studio background. Do not include the card border, the name, or the arrow. Do not redraw the shoes.

## Content

Intro, left: `COLLECTION`

Intro, right: `A curated selection of standout sneakers, from timeless icons to the season's most sought-after pairs.`

Group one label: `TOP` + `SELLERS`

1. Air Jordan 1 High — `HERITAGE RED`
2. Adidas Samba OG — `CLOUD WHITE`
3. Nike Dunk Low — `BLACK / WHITE`

Group two label: `NEW` + `ARRIVALS`

4. New Balance 550 — `WHITE / GREEN`
5. Converse Chuck 70 — `BLACK / EGRET`
6. Nike Air Force 1 '07 — `WHITE`

Use this copy exactly. Do not add prices, badges, reviews, or extra products.

## Visual specification

Match the reference on desktop.

- Page background stays ink. The section is full width with the same horizontal inset as the hero (`px-4 sm:px-8 lg:px-12`).
- Intro is one row: `COLLECTION` in large cream Playfair, then a short vertical gold rule, then the sentence in cream, light weight, left aligned, wrapping to two lines. The sentence sits in the right half, vertically centered with the title.
- Each group label is Playfair. The first word is cream roman. The second word is gold italic. A thin cream/gold rule continues from the label to the right edge of the content. Do not put the rule behind the words.
- Cards are a 3-column grid with a modest gap. Each card has a thin muted-gold border, a small radius, and a dark fill close to the photo. The photo fills the top. Below it, the name is cream, the colorway is smaller gold tracking, and a small round outlined button with a right arrow sits on the right, vertically centered with the text.
- Hover: border and arrow shift toward gold. No lift, shadow, or extra chrome.

## Responsive behavior

- Desktop: the reference. Three cards per row. Title and intro stay side by side.
- Tablet: title and intro can stay side by side if the sentence remains readable. Cards become two columns. The third card wraps.
- Phone: title and intro stack, title first, no squeezed vertical rule. Group labels stay one line with the rule. Cards are one column. Photos keep their landscape crop and do not become tiny squares. The arrow stays at least 44px. No horizontal scroll.

## Interaction

- The arrow is a link whose accessible name is the product name, for example `View Air Jordan 1 High`. Its href is `#collection`. Do not invent product routes.
- Keyboard focus uses the existing gold focus ring.

## Constraints

- Arrow-function components, default exports, kebab-case filenames, no barrel files.
- Tailwind utilities and the existing theme tokens. No new dependencies and no icon package.
- Semantic `section` and headings. The page keeps a single `h1` in the hero. Collection uses `h2`.
- Do not run TypeScript, ESLint, or a production build unless asked.
- After implementation, check the section in the browser at a desktop width and a narrow phone width, including the path from Explore Collection to `#collection`.

## Acceptance criteria

- The block shows the intro, both group labels, and all six products with the reference copy and order.
- Desktop reads as the reference: side-by-side intro, rules, three-column cards, photo above name and colorway, round arrow.
- Tablet uses two columns. Phone stacks the intro and the cards without overflow.
- Collection is the underlined nav item while that section is in view.
- Card photos show the shoes, not the baked-in labels from the mockup.
