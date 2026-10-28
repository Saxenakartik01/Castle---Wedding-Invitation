import { useState, useRef, useEffect, useCallback } from "react";

interface IntroProps {
  onIntroEnd?: () => void;
}

export default function Intro({ onIntroEnd }: IntroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  // Lock scrolling while intro is active
  useEffect(() => {
    if (isDismissed || isEnded) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.scrollTo({ top: 0, behavior: "instant" });

    const preventTouch = (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault();
    };

    const preventWheel = (e: WheelEvent) => {
      if (e.cancelable) e.preventDefault();
    };

    const preventKeyScroll = (e: KeyboardEvent) => {
      if (
        [
          "Space",
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
        ].includes(e.code)
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("touchmove", preventTouch, {
      passive: false,
    });
    window.addEventListener("wheel", preventWheel, {
      passive: false,
    });
    window.addEventListener("keydown", preventKeyScroll);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      window.removeEventListener("touchmove", preventTouch);
      window.removeEventListener("wheel", preventWheel);
      window.removeEventListener("keydown", preventKeyScroll);
    };
  }, [isEnded, isDismissed]);

  // End intro and reveal the wedding website
  const handleVideoEnd = useCallback(() => {
    if (isEnded) return;

    setIsEnded(true);
    setIsFadingOut(true);

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    onIntroEnd?.();

    window.setTimeout(() => {
      setIsDismissed(true);
    }, 1100);
  }, [isEnded, onIntroEnd]);

  // Start video on user interaction
  const handleTapToPlay = () => {
    if (hasStarted || isEnded) return;

    setHasStarted(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Video play error:", err);

          if (videoRef.current) {
            videoRef.current.muted = true;

            videoRef.current.play().catch((playErr) => {
              console.error("Video failed to play:", playErr);
              handleVideoEnd();
            });
          }
        });
      }
    }
  };

  // Track video progress
  const handleTimeUpdate = () => {
    if (videoRef.current?.duration) {
      const progress =
        (videoRef.current.currentTime /
          videoRef.current.duration) *
        100;

      setVideoProgress(progress);
    }
  };

  if (isDismissed) return null;

  return (
    <div
      onClick={handleTapToPlay}
      aria-label="Wedding Invitation Intro"
      className={`
        fixed inset-0 z-[60]
        flex h-[100svh] min-h-0 w-full
        flex-col overflow-hidden
        select-none
        transition-all duration-1000 ease-out
        ${hasStarted ? "cursor-default" : "cursor-pointer"}
        ${isFadingOut
          ? "pointer-events-none scale-[1.02] opacity-0"
          : "scale-100 opacity-100"
        }
      `}
    >
      {/* FULL-SCREEN VIDEO — NO SOLID BLACK BACKGROUND */}
      <video
        ref={videoRef}
        playsInline
        preload="auto"
        muted
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        onError={() => {
          console.warn("Intro video could not load.");
          handleVideoEnd();
        }}
        onLoadedMetadata={(e) => {
          const video = e.currentTarget;

          if (video.currentTime === 0) {
            video.currentTime = 0.001;
          }
        }}
        className="
          pointer-events-none absolute inset-0
          h-full w-full
          object-cover object-center
        "
      >
        <source src="/Intro-video.mp4" type="video/mp4" />
        <source src="/images/Intro-video.mp4" type="video/mp4" />
      </video>

      {/* SUBTLE VIDEO OVERLAY — NO BLACK SCREEN */}
      <div
        className="
          pointer-events-none absolute inset-0 z-10
          bg-gradient-to-b
          from-[#07101a]/25
          via-transparent
          to-[#07101a]/30
        "
        aria-hidden="true"
      />

      {/* SKIP BUTTON */}
      {!isEnded && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleVideoEnd();
          }}
          className="
            absolute right-4 top-4 z-30
            rounded-full
            bg-transparent px-3 py-1.5
            font-cinzel text-[10px]
            uppercase tracking-widest
            text-amber-100/90
            transition-colors
            hover:text-white
            active:scale-95
          "
        >
          Skip »
        </button>
      )}

      {/* WELCOME TEXT — SHIFTED TOWARD THE TOP */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-[9%] z-20
          flex flex-col items-center
          px-4 text-center
          sm:top-[10%]
        "
      >
        {/* Welcome heading */}
        <h1
          className="
            font-cormorant
            text-[clamp(2.3rem,10vw,3.8rem)]
            font-light leading-[1.05]
            tracking-wide
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]
          "
        >
          <span
            className="
              block
              bg-gradient-to-b
              from-[#fffdf5] via-[#fae8b0] to-[#d8ad59]
              bg-clip-text text-transparent
            "
          >
            Welcome To
          </span>

          <span
            className="
              mt-1 block italic
              bg-gradient-to-b
              from-[#fffdf5] via-[#fae8b0] to-[#d8ad59]
              bg-clip-text text-transparent
            "
          >
            Our Wedding
          </span>
        </h1>

        {/* Small decorative divider */}
        <div className="my-3 flex w-36 items-center gap-3 opacity-80">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-200" />
          {/* <span className="text-sm text-amber-100">❦</span> */}
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-200" />
        </div>

        {/* Couple names */}
        <p
          className="
            font-cinzel
            text-[11px] uppercase
            tracking-[0.28em]
            text-amber-50
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
            sm:text-sm sm:tracking-[0.35em]
          "
        >
          Abhishek &amp; Kanika
        </p>
      </div>

      {/* BOTTOM TAP PROMPT — TRANSPARENT, NO BORDER OR BLACK BOX */}
      <div
        className="
          absolute inset-x-0 bottom-[9%] z-20
          flex flex-col items-center
          px-4 text-center
          sm:bottom-[10%]
        "
      >
        {!hasStarted ? (
          <div className="flex flex-col items-center gap-2 animate-float">
            {/* Feathered backdrop for crisp contrast without borders or harsh boxes */}
            <div className="flex flex-col items-center rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_60%,transparent_85%)] px-8 py-3">
              <span
                className="
                  font-cinzel
                  text-sm font-bold uppercase
                  tracking-[0.28em]
                  text-white
                  drop-shadow-[0_0_12px_rgba(255,255,255,0.75)]
                  drop-shadow-[0_2px_8px_rgba(0,0,0,1)]
                  drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]
                  animate-pulse
                  sm:text-base sm:tracking-[0.32em]
                "
              >
                ✦ Tap Screen To Enter ✦
              </span>

              <span
                className="
                  mt-1 font-cormorant text-sm italic
                  tracking-wider text-amber-100
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]
                  sm:text-base
                "
              >
                Touch anywhere to begin
              </span>
            </div>

            <span
              className="
                font-cinzel
                text-[10px] uppercase
                tracking-[0.3em]
                text-amber-200/90
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]
              "
            >
              An Enchanting Journey Awaits
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <span
              className="
                font-cinzel text-[10px]
                uppercase tracking-[0.3em]
                text-amber-100
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                animate-pulse
              "
            >
              Opening Castle Gates...
            </span>

            {/* Transparent progress track */}
            <div className="h-1 w-36 overflow-hidden rounded-full bg-white/20">
              <div
                className="
                  h-full
                  bg-gradient-to-r
                  from-amber-500 via-amber-200 to-amber-400
                  transition-all duration-150 ease-out
                "
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(5, videoProgress)
                  )}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
