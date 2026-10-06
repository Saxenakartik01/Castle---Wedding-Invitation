import { useEffect, useState } from "react";
import GoldenBorderDivider from "./GoldenBorderDivider";

const TARGET = new Date("2026-12-09T19:00:00").getTime();

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown();
  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section id="countdown" className="relative w-full min-h-[580px] overflow-hidden pb-12 sm:pb-16">
      {/* Full Background Palace Image - z-0 */}
      <img
        src="/images/palace-night.jpg"
        alt="An illuminated royal palace courtyard at night"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      {/* Subtle readability overlay - z-0 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50" />

      {/* Background twinkling stars - z-0 */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {Array.from({ length: 46 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-amber-50"
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 29) % 70}%`,
              width: `${1 + (i % 2)}px`,
              height: `${1 + (i % 2)}px`,
              animation: `twinkle ${2 + (i % 5)}s ease-in-out ${i * 0.13}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Foreground Countdown Content - z-30 (above ship z-20) */}
      <div className="relative z-30 mx-auto px-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h2 className="reveal font-cormorant text-3xl font-medium italic text-amber-100 drop-shadow-md sm:text-4xl">
          The countdown begins
        </h2>

        <div className="reveal mt-4 flex items-start justify-center gap-1.5 sm:mt-6 sm:gap-4">
          {units.map((u, i) => (
            <div key={u.label} className="flex min-w-0 items-start">
              <div className="flex min-w-[48px] flex-col items-center sm:min-w-[64px]">
                <span className="font-cinzel text-2xl font-semibold tabular-nums text-amber-50 drop-shadow-sm sm:text-3xl">
                  {pad(u.value)}
                </span>
                <span className="mt-0.5 font-cinzel text-[7px] uppercase tracking-[0.16em] text-amber-200/80 sm:mt-1 sm:text-[9px] sm:tracking-[0.25em]">
                  {u.label}
                </span>
              </div>
              {i < units.length - 1 && (
                <span className="px-0.5 font-cinzel text-2xl font-light text-amber-200/50 sm:px-1 sm:text-3xl">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-6 max-w-sm font-garamond text-[11px] leading-[1.45] text-amber-100/90 drop-shadow-sm sm:mt-8 sm:text-sm sm:leading-relaxed">
          Our families are excited to see you, and we promise to celebrate in style.
          Save all the dates together again as one — we can&apos;t wait to share the
          magic of these days with you.
        </p>

        <div className="reveal mt-5 sm:mt-8">
          <p className="font-cormorant text-base italic text-amber-100 drop-shadow-sm sm:text-lg">
            With love &amp; blessings,
          </p>
          <p className="mt-1 font-cinzel text-[9px] uppercase tracking-[0.24em] text-amber-200/90 sm:text-xs sm:tracking-[0.3em]">
            The Bajaj &amp; Gupta Families
          </p>
          <a
            href="#hero"
            className="mt-3 inline-block font-garamond text-xs tracking-wide text-amber-200/90 underline decoration-amber-300/40 underline-offset-4 transition hover:text-amber-100 sm:mt-4 sm:text-sm"
          >
          
          </a>
        </div>
      </div>

      {/* Golden faded line on bottom border */}
      <GoldenBorderDivider />
    </section>
  );
}
