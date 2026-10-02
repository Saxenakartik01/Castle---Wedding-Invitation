import GoldenBorderDivider from "./GoldenBorderDivider";

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
    <section id="info" className="relative w-full overflow-hidden">
      {/* Background wood image - z-0 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/wood.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-amber-950/45" />

      {/* Foreground content - z-30 (above ship z-20) */}
      <div className="relative z-30 mx-auto px-5 py-12 text-center sm:px-6 sm:py-20">
        <h2 className="reveal font-cinzel text-3xl font-medium leading-tight tracking-[0.18em] text-amber-100 sm:text-4xl sm:tracking-[0.22em]">
          THINGS TO
          <br />
          KNOW
        </h2>
        <p className="reveal mx-auto mt-3 max-w-sm font-garamond text-[11px] leading-[1.45] text-amber-100/75 sm:mt-5 sm:max-w-xl sm:text-sm sm:leading-relaxed">
          To help you feel at ease and enjoy every moment of the celebrations,
          we&apos;ve gathered a few thoughtful details we&apos;d love for you to know
          before the big day.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 sm:mt-12 sm:gap-x-6 sm:gap-y-10">
          {INFO.map((item, i) => (
            <div
              key={item.label}
              className="reveal group flex flex-col items-center"
              data-delay={i * 100}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/30 text-amber-100 transition duration-500 group-hover:border-amber-200/70 group-hover:text-amber-50 group-hover:shadow-[0_0_24px_rgba(252,211,77,0.25)] sm:h-14 sm:w-14">
                {item.icon}
              </div>
              <h3 className="mt-2.5 font-cinzel text-[10px] uppercase tracking-[0.2em] text-amber-100 sm:mt-4 sm:text-xs sm:tracking-[0.25em]">
                {item.label}
              </h3>
              <p className="mt-1.5 max-w-[9rem] font-garamond text-[9px] leading-[1.35] text-amber-100/65 sm:mt-2 sm:max-w-[11rem] sm:text-[11px] sm:leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center sm:mt-20">
          <h2 className="reveal font-cinzel text-3xl font-medium leading-tight tracking-[0.18em] text-amber-100 sm:text-4xl sm:tracking-[0.22em]">
            FOLLOW
            <br />
            THE ACTION
          </h2>
          <p className="reveal mt-3 font-garamond text-xs italic text-amber-100/75 sm:mt-5 sm:text-sm">
            Click to open our Instagram page
          </p>
          <a
            href="#"
            aria-label="Open Instagram"
            className="reveal group relative mt-4 flex h-12 w-12 items-center justify-center sm:mt-6 sm:h-16 sm:w-16"
          >
            <span className="absolute inset-0 rounded-full border border-amber-200/50" />
            <span className="absolute inset-1.5 rounded-full border border-amber-200/40 transition group-hover:scale-110 sm:inset-2" />
            <span className="h-3 w-3 rounded-full bg-amber-200 shadow-[0_0_14px_3px_rgba(252,211,77,0.5)] transition group-hover:scale-125 sm:h-3.5 sm:w-3.5" />
          </a>
        </div>
      </div>

      {/* Golden faded line on bottom border */}
      <GoldenBorderDivider />
    </section>
  );
}
