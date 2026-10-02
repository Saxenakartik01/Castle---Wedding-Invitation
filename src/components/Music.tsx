import { useState, useRef, useEffect } from "react";

interface MusicProps {
  audioUrl?: string;
}

export default function Music({
  audioUrl = "/images/music.mp3",
}: MusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-hide tooltip after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.warn(
            "Audio playback blocked by browser or failed:",
            err
          );
          setIsPlaying(false);
        });
    }
  };

  // Start music on first user interaction
  useEffect(() => {
    const handleFirstUserInteraction = () => {
      if (
        !hasInteracted &&
        audioRef.current &&
        audioRef.current.paused
      ) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            setShowTooltip(false);
          })
          .catch(() => {
            // Browser autoplay policy prevented playback
          });
      }
    };

    window.addEventListener(
      "click",
      handleFirstUserInteraction,
      { once: true }
    );

    window.addEventListener(
      "touchstart",
      handleFirstUserInteraction,
      { once: true }
    );

    return () => {
      window.removeEventListener(
        "click",
        handleFirstUserInteraction
      );

      window.removeEventListener(
        "touchstart",
        handleFirstUserInteraction
      );
    };
  }, [hasInteracted]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 sm:bottom-6 sm:right-6">

      {/* ================= AUDIO ================= */}
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {/* ================= TOOLTIP ================= */}
      {showTooltip && (
        <div className="hidden items-center gap-1.5 rounded-full bg-neutral-950/85 px-3 py-1.5 font-cinzel text-[11px] tracking-wider text-amber-200/90 shadow-lg ring-1 ring-amber-500/30 backdrop-blur-md animate-pulse sm:flex">
          <span>
            {isPlaying
              ? "Playing Wedding Melody"
              : "Play Background Music"}
          </span>
        </div>
      )}

      {/* ================= BUTTON ================= */}
      <div className="group relative">

        {/* Glow */}
        {isPlaying && (
          <div className="pointer-events-none absolute -inset-2 animate-pulse rounded-full bg-amber-400/20 blur-sm" />
        )}

        {/* Floating Music Notes */}
        {isPlaying && (
          <div className="pointer-events-none absolute -top-6 left-1/2 flex -translate-x-1/2 gap-1 text-xs text-amber-300 opacity-85">
            <span
              className="animate-bounce"
              style={{
                animationDuration: "1.2s",
              }}
            >
              ♪
            </span>

            <span
              className="animate-bounce"
              style={{
                animationDuration: "0.9s",
                animationDelay: "0.2s",
              }}
            >
              ♫
            </span>
          </div>
        )}

        <button
          onClick={togglePlay}
          type="button"
          aria-label={
            isPlaying
              ? "Pause background music"
              : "Play background music"
          }
          title={
            isPlaying
              ? "Pause Music"
              : "Play Music"
          }
          className={`relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/60 bg-neutral-900/90 text-amber-200 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-300 hover:text-amber-100 active:scale-95 sm:h-12 sm:w-12 ${isPlaying
              ? "ring-2 ring-amber-400/40 shadow-amber-500/20"
              : "hover:bg-neutral-800/90"
            }`}
        >
          {/* Rotating Ring */}
          <div
            className={`absolute inset-0.5 rounded-full border border-dashed border-amber-300/30 ${isPlaying
                ? "animate-spin"
                : ""
              }`}
            style={{
              animationDuration: "8s",
            }}
          />

          {/* ================= PLAYING ================= */}
          {isPlaying ? (
            <div className="z-10 flex items-center gap-1">

              {/* Equalizer */}
              <div className="flex h-4 w-4 items-end justify-center gap-0.5">
                <span
                  className="w-0.5 animate-pulse rounded-full bg-amber-300"
                  style={{
                    height: "60%",
                    animationDuration: "0.4s",
                  }}
                />

                <span
                  className="w-0.5 animate-pulse rounded-full bg-amber-200"
                  style={{
                    height: "100%",
                    animationDuration: "0.7s",
                  }}
                />

                <span
                  className="w-0.5 animate-pulse rounded-full bg-amber-400"
                  style={{
                    height: "40%",
                    animationDuration: "0.5s",
                  }}
                />
              </div>

              {/* Pause Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 fill-amber-200 drop-shadow"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 .75-.75Zm9 0a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            /* ================= PAUSED ================= */
            <div className="z-10 flex translate-x-0.5 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 fill-amber-200 drop-shadow transition-transform group-hover:scale-110"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}