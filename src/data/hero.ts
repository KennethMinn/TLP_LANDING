export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
]

export const heroCopy = {
  eyebrow: "EST. 2026 — YANGON",
  titleLead: "EVERY PAIR",
  titleRest: "TELLS A",
  titleAccent: "STORY.",
  body: "Curated sneakers and streetwear for your everyday style.",
  primaryLabel: "Explore Collection",
  primaryHref: "#collection",
  secondaryLabel: "Our Story",
  secondaryHref: "#about",
}

export const slideLabels = ["01", "02", "03"] as const
