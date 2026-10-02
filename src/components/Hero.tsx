import FlowerDivider from "./FlowerDivider";
import GoldenBorderDivider from "./GoldenBorderDivider";

const PETALS = Array.from({ length: 10 });

export default function Hero() {
  return (
    <div className="relative w-full">
      <section
        id="hero"
        className="relative h-[100svh] min-h-[560px] max-h-[820px] w-full overflow-hidden bg-[#1a2a3a]"
      >
        {/* Garden artwork */}
        <img
          src="/images/hero-garden.jpg"
          alt="A lush illustrated garden of wildflowers before a sandstone palace at twilight"
          className="absolute inset-0 h-full w-full select-none object-cover object-center"
          draggable={false}
        />

        {/* top vignette for name legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#0c1826]/70 via-[#0c1826]/20 to-transparent" />

        {/* Twinkling stars across the top sky */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[26%]">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-amber-100"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                width: `${1 + (i % 3)}px`,
                height: `${1 + (i % 3)}px`,
                animation: `twinkle ${2 + (i % 4)}s ease-in-out ${i * 0.17}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Falling rose petals */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {PETALS.map((_, i) => (
            <span
              key={i}
              className="absolute block h-2.5 w-2 rounded-[50%_50%_50%_0] bg-gradient-to-br from-rose-300 to-rose-500/80 opacity-75"
              style={{
                left: `${(i * 67) % 100}%`,
                animation: `fall ${9 + (i % 6)}s linear ${i * 1.1}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Couple names */}
        <div className="pointer-events-none absolute inset-x-0 top-[8%] flex flex-col items-center px-4 text-center">
          <h1 className="font-cormorant text-[clamp(2.2rem,12vw,3.35rem)] leading-[0.9] text-amber-50/95 drop-shadow-[0_2px_8px_rgba(20,30,50,0.8)]">
            <span className="block tracking-wide">Abhishek</span>
            <span className="my-1.5 block font-cinzel text-[12px] font-normal uppercase tracking-[0.5em] text-amber-100/80 sm:text-base">
              weds
            </span>
            <span className="block tracking-wide">Kanika</span>
          </h1>
        </div>

        {/* Scroll cue */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center sm:bottom-8">
          <div className="flex flex-col items-center gap-1.5 text-amber-50/80">
            <span className="font-cinzel text-[9px] uppercase tracking-[0.35em] sm:text-[10px]">
              Scroll
            </span>
            <span className="h-6 w-px animate-pulse bg-gradient-to-b from-amber-50/70 to-transparent sm:h-8" />
          </div>
        </div>

        {/* Golden faded line on bottom border */}
        <GoldenBorderDivider />
      </section>

      {/* Flower divider hiding section line between Hero and Invite */}
      <FlowerDivider />
    </div>
  );
}
