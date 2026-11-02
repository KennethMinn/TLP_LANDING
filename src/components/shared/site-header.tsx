import { useEffect, useState } from "react"
import { navItems } from "../../data/hero"
import Logo from "./logo"

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"

const observedSections = ["top", "collection"]

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState("#top")

  useEffect(() => {
    const elements = observedSections
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) {
          return
        }

        setActiveHref(`#${visible.target.id}`)
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.6] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 ${
        activeHref === "#top" ? "" : "bg-ink/95 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-8 lg:px-12 lg:py-6">
        <Logo />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block" aria-label="Primary">
          <ul className="flex items-center gap-9 xl:gap-11">
            {navItems.map((item) => {
              const isActive = item.href === activeHref

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-sm text-[15px] font-light tracking-wide transition-colors hover:text-gold ${focusRing} ${
                      isActive
                        ? "text-cream after:absolute after:top-full after:left-1/2 after:mt-2.5 after:h-[2px] after:w-6 after:-translate-x-1/2 after:bg-gold"
                        : "text-cream/90"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className={`hidden size-11 place-items-center rounded-sm text-gold transition-colors hover:text-gold-light lg:grid ${focusRing}`}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.4" />
              <path d="M15.8 15.8 20 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>

          <a
            href="#contact"
            className={`inline-flex min-h-10 items-center rounded-[4px] border border-gold px-3 py-2 text-[10px] font-medium tracking-[0.16em] text-gold uppercase transition-colors hover:bg-gold hover:text-ink sm:min-h-11 sm:px-5 sm:py-2.5 sm:text-[12px] sm:tracking-[0.2em] ${focusRing}`}
          >
            Contact
          </a>

          <button
            type="button"
            className={`grid size-11 place-items-center rounded-sm text-cream lg:hidden ${focusRing}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.4" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-cream/10 bg-ink/95 px-5 py-3 backdrop-blur-sm lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const isActive = item.href === activeHref

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block rounded-sm py-3 text-base tracking-wide transition-colors hover:text-gold ${focusRing} ${
                      isActive ? "text-gold" : "text-cream"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default SiteHeader
