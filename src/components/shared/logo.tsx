const Logo = () => {
  return (
    <a
      href="#top"
      className="flex min-w-0 items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:gap-3"
    >
      <svg
        viewBox="0 0 54 40"
        className="h-8 w-10 shrink-0 text-gold sm:h-9 sm:w-11"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7 28.2c.7-4.2 3.2-7.4 8-9.2C17.2 13.2 21.2 8 28.2 6.4c1.6 3.8.2 7-2.6 9 4-.8 8.2-.2 11.2 1.8.4-3.8 2.2-7 5.2-8.2 2 2.6 2.6 6 1.4 9.4 4 .4 7.6 2 9.6 4.6 1.4 1.8 1.6 4 .2 6-2.6.6-5.4-.2-7.4-1.8-1.4 3-4.2 4.8-7.8 5.2-1.8 2.6-5.4 3.8-9.2 3.2-6-.6-10.6-3.6-13.2-7.6-1.4-2-2.4-4.2-1.6-6.8z" />
        <path
          d="M18.5 24.2c4.6.6 8 2.8 10.2 5.6"
          fill="none"
          stroke="#0c0b0a"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <span className="min-w-0">
        <span className="block font-display text-[12px] leading-none tracking-[0.18em] text-cream min-[380px]:text-[13px] sm:text-[15px] sm:tracking-[0.22em]">
          THE LAST PAIR
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 text-[7px] tracking-[0.22em] text-gold sm:gap-2 sm:text-[8.5px] sm:tracking-[0.28em]">
          <span className="h-px w-2.5 bg-gold sm:w-4" />
          SNEAKERS & STREETWEAR
          <span className="h-px w-2.5 bg-gold sm:w-4" />
        </span>
      </span>
    </a>
  )
}

export default Logo
