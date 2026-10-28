import { useState } from "react";
import Intro from "./Intro";

const PETALS = Array.from({ length: 10 });

interface HeroProps {
  onHeroShow?: () => void;
}

export default function Hero({ onHeroShow }: HeroProps = {}) {
  const [introFinished, setIntroFinished] = useState(false);

  const handleIntroEnd = () => {
    setIntroFinished(true);
    if (onHeroShow) {
      onHeroShow();
    }
  };

  return (
    <div className="relative z-30 w-full">
      <section
        id="hero"
        className="
          relative z-20
          h-[100svh] min-h-[560px] max-h-[820px]
          w-full overflow-visible
          bg-[#1a2a3a]
        "
      >
        {/* Intro page overlay: Shows first, video plays on tap, locks scroll until video ends */}
        <Intro onIntroEnd={handleIntroEnd} />

        {/* Hero content container: Fades in smoothly when intro ends */}
        <div
          className={`
            relative h-full w-full
            transition-opacity duration-1000 ease-out
            ${introFinished ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          {/* Garden video background */}
          <video
            src="/images/hero-garden.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="
            pointer-events-none absolute inset-0
            h-full w-full select-none object-cover object-center
          "
          />

          {/* Visual effects */}
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            {/* Top vignette */}
            <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#0c1826]/70 via-[#0c1826]/20 to-transparent" />

            {/* Twinkling stars */}
            <div className="absolute inset-x-0 top-0 h-[26%]">
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
            {PETALS.map((_, i) => (
              <span
                key={i}
                className="
                absolute block h-2.5 w-2
                rounded-[50%_50%_50%_0]
                bg-gradient-to-br from-rose-300 to-rose-500/80
                opacity-75
              "
                style={{
                  left: `${(i * 67) % 100}%`,
                  animation: `fall ${9 + (i % 6)}s linear ${i * 1.1}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Couple names - equal spacing */}
          <div className="pointer-events-none absolute inset-x-0 top-[8%] z-20 flex justify-center px-4 text-center">
            <div className="flex flex-col items-center">
              {/* Groom */}
              <h1
                className="
                font-cormorant
                text-[clamp(2.2rem,12vw,3.35rem)]
                font-medium leading-none tracking-wide
                text-amber-50/95
                drop-shadow-[0_2px_8px_rgba(20,30,50,0.8)]
              "
              >
                Abhishek
              </h1>

              {/* WEDS */}
              <span
                className="
                my-4 block
                font-cinzel text-[14px] font-normal
                uppercase tracking-[0.3em]
                text-amber-100/90
                sm:my-4 sm:text-base
              "
              >
                WEDS
              </span>

              {/* Bride */}
              <h2
                className="
                font-cormorant
                text-[clamp(2.2rem,12vw,3.35rem)]
                font-medium leading-none tracking-wide
                text-amber-50/95
                drop-shadow-[0_2px_8px_rgba(20,30,50,0.8)]
              "
              >
                Kanika
              </h2>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="pointer-events-none absolute inset-x-0 bottom-12 z-30 flex justify-center sm:bottom-16">
            <div className="flex flex-col items-center gap-1.5 text-amber-50/80">
              <span className="font-cinzel text-[9px] uppercase tracking-[0.35em] sm:text-[10px]">
                Scroll
              </span>
              <span className="h-6 w-px animate-pulse bg-gradient-to-b from-amber-50/70 to-transparent sm:h-8" />
            </div>
          </div>

          {/* Bottom grounding shadow */}
          <div
            className="
            pointer-events-none absolute inset-x-0 bottom-0
            z-10 h-12
            bg-gradient-to-t from-black/70 via-black/30 to-transparent
          "
            aria-hidden="true"
          />

          {/* Flowers overlapping Hero and Invite */}
          <img
            src="/images/Hero-bottom-flowers.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="
            pointer-events-none
            absolute left-[51.5%] bottom-0
            z-50
            h-auto w-full max-w-none
            -translate-x-1/2 translate-y-25
            select-none object-contain object-bottom
          "
            style={{
              width: "128%",
              maxWidth: "none",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0.25) 100%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 95%, rgba(0,0,0,0.6) 100%, rgba(0,0,0,0.25) 100%)",
            }}
          />
        </div>
      </section>
    </div>
  );
}
