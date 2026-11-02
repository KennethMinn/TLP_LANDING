import { useState } from "react"
import heroPhoto from "../../assets/hero-sneakers.jpg"
import { heroCopy, slideLabels } from "../../data/hero"

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"

const Hero = () => {
  const [slide, setSlide] = useState(0)
  const slideCount = slideLabels.length

  const showPrevious = () => {
    setSlide((current) => (current - 1 + slideCount) % slideCount)
  }

  const showNext = () => {
    setSlide((current) => (current + 1) % slideCount)
  }

  return (
    <section
      id="top"
      className="relative min-h-svh overflow-hidden bg-ink"
      aria-roledescription="carousel"
      aria-label="Featured pairs"
    >
      <img
        src={heroPhoto}
        alt="Black and white high-top sneakers on a concrete ledge"
        className="hero-photo absolute inset-0 h-full w-full object-cover"
        data-slide={slide}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-ink via-ink/75 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#0c0b0a_0%,rgba(12,11,10,0.94)_14%,rgba(12,11,10,0.7)_32%,rgba(12,11,10,0.16)_50%,transparent_66%)] md:hidden" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#0c0b0a_0%,#0c0b0a_16%,rgba(12,11,10,0.88)_36%,rgba(12,11,10,0.4)_54%,rgba(12,11,10,0.08)_72%,transparent_100%)] md:block" />

      <div className="relative z-10 flex min-h-svh flex-col items-center px-5 pt-[5.5rem] pb-28 text-center md:items-start md:justify-center md:px-10 md:pt-28 md:pb-24 md:text-left lg:px-14 xl:px-16">
        <div className="w-full max-w-[22rem] md:max-w-[38rem]">
          <p className="text-[11px] tracking-[0.32em] text-gold sm:text-xs sm:tracking-[0.38em]">
            {heroCopy.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[2.15rem] leading-[0.96] font-medium tracking-[-0.02em] text-cream min-[400px]:text-[2.45rem] md:mt-6 md:text-[3.35rem] lg:text-[4rem] xl:text-[4.55rem]">
            {heroCopy.titleLead}
            <br />
            <span className="whitespace-nowrap">
              {heroCopy.titleRest}{" "}
              <span className="text-gold italic">{heroCopy.titleAccent}</span>
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[17rem] text-[15px] leading-relaxed font-light text-cream/90 md:mx-0 md:mt-6 md:max-w-none md:text-lg md:whitespace-nowrap md:text-muted">
            {heroCopy.body}
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 md:mt-9 md:w-auto md:flex-row md:flex-wrap md:gap-4">
            <a
              href={heroCopy.primaryHref}
              className={`inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[4px] bg-gold px-5 py-3.5 text-[12px] font-medium tracking-[0.16em] text-ink uppercase transition-colors hover:bg-gold-light md:w-auto md:px-6 md:text-[13px] md:tracking-[0.18em] ${focusRing}`}
            >
              {heroCopy.primaryLabel}
              <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={heroCopy.secondaryHref}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-[4px] border border-cream/85 px-5 py-3.5 text-[12px] font-medium tracking-[0.16em] text-cream uppercase transition-colors hover:border-gold hover:text-gold md:w-auto md:px-6 md:text-[13px] md:tracking-[0.18em] ${focusRing}`}
            >
              {heroCopy.secondaryLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 md:left-auto md:right-10 md:bottom-8 md:translate-x-0 lg:right-14 lg:bottom-10">
        <p className="font-display text-sm tracking-[0.18em] text-gold" aria-live="polite">
          <span>{slideLabels[slide]}</span>
          <span className="mx-2 text-gold/45">—</span>
          <span className="text-gold/55">{slideLabels[slideCount - 1]}</span>
        </p>
        <button
          type="button"
          className={`grid size-11 place-items-center rounded-[4px] border border-gold text-gold transition-colors hover:bg-gold hover:text-ink ${focusRing}`}
          aria-label="Previous slide"
          onClick={showPrevious}
        >
          <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
            <path
              d="M10 3.5 5.5 8 10 12.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className={`grid size-11 place-items-center rounded-[4px] border border-gold text-gold transition-colors hover:bg-gold hover:text-ink ${focusRing}`}
          aria-label="Next slide"
          onClick={showNext}
        >
          <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
            <path
              d="M6 3.5 10.5 8 6 12.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Hero
