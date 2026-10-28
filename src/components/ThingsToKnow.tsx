
const INFO = [
  {
    label: "Hashtag",
    text: "Share your favourite moments using #AbhishekWedsKanika on every post.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Weather",
    text: "Expect pleasant winter evenings, around 22°C. Do carry a light shawl.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    label: "Staff",
    text: "Our hospitality team in royal attire will guide you through every event.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      </svg>
    ),
  },
  {
    label: "Parking",
    text: "Complimentary valet parking is available at each of the venues.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 16v2a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-2" />
        <path d="M5 16l1.5-5A2 2 0 018.4 9.5h7.2a2 2 0 011.9 1.5L19 16z" />
        <path d="M5 16h14" />
        <circle cx="7.5" cy="13" r="0.6" fill="currentColor" />
        <circle cx="16.5" cy="13" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ThingsToKnow() {
  return (
    <section
      id="info"
      className="relative w-full overflow-hidden border-b border-[#F0D075] shadow-[0_0_12px_rgba(240,208,117,0.35)]"
    >
      {/* Bottom Shining Golden Border Line */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/20 via-[#FFF4BA] via-50% to-[#D4AF37]/20 shadow-[0_0_8px_rgba(245,215,120,0.8),0_0_2px_rgba(255,255,255,0.95)]"
        aria-hidden="true"
      />

      {/* Background wood texture with warm royal amber overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/images/wood.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-amber-950/60 via-amber-950/45 to-amber-950/70" />

      {/* Foreground content - z-30 */}
      <div className="relative z-30 mx-auto max-w-[430px] px-5 pt-12 pb-24 sm:px-6 sm:pt-20 sm:pb-32">
        {/* Header section with royal motif */}
        <div className="text-center">
          <div className="reveal mx-auto mb-2.5 flex items-center justify-center gap-2 text-amber-300/80 sm:mb-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-300/60 sm:w-12" />
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-amber-300/80" aria-hidden="true">
              <path d="M12 2l2.4 6.6L21 11l-5.4 4.5L17 22l-5-3.8L7 22l1.4-6.5L3 11l6.6-2.4L12 2z" />
            </svg>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-300/60 sm:w-12" />
          </div>

          <p className="reveal font-cinzel text-[9px] uppercase tracking-[0.35em] text-amber-200/80 sm:text-xs sm:tracking-[0.4em]">
            Guest Essentials
          </p>

          <h2 className="reveal mt-1.5 font-cinzel text-3xl font-medium tracking-[0.16em] text-amber-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-4xl sm:tracking-[0.2em]">
            THINGS TO
            <br />
            KNOW
          </h2>

          <p className="reveal mx-auto mt-3 max-w-sm font-garamond text-xs italic leading-relaxed text-amber-100/80 sm:mt-4 sm:max-w-md sm:text-sm">
            To help you feel at ease and enjoy every moment of the celebrations,
            we&apos;ve gathered a few thoughtful details we&apos;d love for you to know
            before the big day.
          </p>
        </div>

        {/* Structured Information Cards - Vertical Stack for Maximum Readability */}
        <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:gap-4">
          {INFO.map((item, i) => (
            <div
              key={item.label}
              className="reveal group flex items-start gap-3.5 rounded-xl border border-amber-300/25 bg-gradient-to-r from-amber-950/65 via-black/45 to-amber-950/50 p-4 text-left shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-amber-300/45 hover:shadow-[0_6px_22px_rgba(217,178,92,0.15)] sm:gap-4 sm:p-4.5"
              data-delay={i * 100}
            >
              {/* Antique gold circular icon badge */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-300/35 bg-gradient-to-br from-amber-400/20 via-amber-700/15 to-amber-950/40 text-amber-200 shadow-inner ring-1 ring-amber-300/15 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                {item.icon}
              </div>

              {/* Information body */}
              <div className="min-w-0 flex-1">
                <h3 className="font-cinzel text-xs font-semibold uppercase tracking-[0.22em] text-amber-200 sm:text-sm">
                  {item.label}
                </h3>
                <p className="mt-1 font-garamond text-xs leading-relaxed text-amber-100/85 sm:text-[13px] sm:leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider Flourish before Social section */}
        <div className="reveal mx-auto my-9 flex items-center justify-center gap-3 sm:my-12">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-200/80 to-amber-300 shadow-[0_0_6px_rgba(245,215,100,0.6)] sm:w-28" />
          <div className="h-1.5 w-1.5 rotate-45 border border-amber-200 bg-amber-300 shadow-[0_0_8px_rgba(245,215,100,0.8)]" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent via-amber-200/80 to-amber-300 shadow-[0_0_6px_rgba(245,215,100,0.6)] sm:w-28" />
        </div>

        {/* Follow the Action Section */}
        <div className="flex flex-col items-center text-center">
          <p className="reveal font-cinzel text-[9px] uppercase tracking-[0.32em] text-amber-200/75 sm:text-xs">
            Social &amp; Memories
          </p>

          <h2 className="reveal mt-1 font-cinzel text-2xl font-medium tracking-[0.18em] text-amber-100 sm:text-3xl sm:tracking-[0.2em]">
            FOLLOW THE ACTION
          </h2>

          <p className="reveal mt-2 font-garamond text-xs italic text-amber-100/75 sm:text-sm">
            Click to open our Instagram page
          </p>

          <a
            href="#"
            aria-label="Open Instagram"
            className="reveal group relative mt-4 flex h-12 w-12 items-center justify-center sm:mt-6 sm:h-16 sm:w-16"
          >
            <span className="absolute inset-0 rounded-full border border-amber-200/50" />
            <span className="absolute inset-1.5 rounded-full border border-amber-200/40 transition duration-300 group-hover:scale-110 sm:inset-2" />
            <span className="h-3 w-3 rounded-full bg-amber-200 shadow-[0_0_14px_3px_rgba(252,211,77,0.5)] transition duration-300 group-hover:scale-125 sm:h-3.5 sm:w-3.5" />
          </a>

          <div className="reveal mt-3 inline-flex items-center rounded-full border border-amber-300/25 bg-amber-950/40 px-3.5 py-1 text-[11px] font-garamond tracking-wider text-amber-200/90 backdrop-blur-sm sm:mt-4 sm:text-xs">
            #AbhishekWedsKanika
          </div>
        </div>
      </div>
    </section>
  );
}

