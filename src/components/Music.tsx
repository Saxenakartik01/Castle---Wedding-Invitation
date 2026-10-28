import { useState, useRef, useEffect } from "react";

interface MusicProps {
  audioUrl?: string;
  visible?: boolean;
}

export default function Music({
  audioUrl = "/images/music.mp3",
  visible = false,
}: MusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const hasAutoStartedRef = useRef(false);

  // Auto-hide tooltip after 6 seconds of becoming visible
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [visible]);

  // Attempt auto-start exactly once when the Hero page becomes visible
  useEffect(() => {
    if (visible && !hasAutoStartedRef.current && !userPausedRef.current) {
      hasAutoStartedRef.current = true;
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Autoplay blocked by browser policy:", err);
          });
      }
    }
  }, [visible]);

  // Toggle Play / Pause
  const togglePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();

    if (!audioRef.current) return;

    if (!audioRef.current.paused) {
      // User explicitly paused
      userPausedRef.current = true;
      audioRef.current.pause();
      setIsPlaying(false);
      setShowTooltip(true);
    } else {
      // User explicitly played
      userPausedRef.current = false;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.warn("Audio playback failed:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <div
      className={`
        fixed bottom-4 right-4 z-50 flex items-center gap-2.5 sm:bottom-6 sm:right-6
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      {/* ================= AUDIO ELEMENT ================= */}
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
            {isPlaying ? "Playing Wedding Melody" : "Play Background Music"}
          </span>
        </div>
      )}

      {/* ================= BUTTON ================= */}
      <div className="group relative">
        {/* Glow halo when playing */}
        {isPlaying && (
          <div className="pointer-events-none absolute -inset-2 animate-pulse rounded-full bg-amber-400/25 blur-sm" />
        )}

        {/* Floating Music Notes when playing */}
        {isPlaying && (
          <div className="pointer-events-none absolute -top-6 left-1/2 flex -translate-x-1/2 gap-1 text-xs text-amber-300 opacity-85">
            <span
              className="animate-bounce"
              style={{ animationDuration: "1.2s" }}
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
            isPlaying ? "Pause background music" : "Play background music"
          }
          title={isPlaying ? "Pause Music" : "Play Music"}
          className={`
            relative flex h-11 w-11 items-center justify-center rounded-full
            border border-amber-400/60 bg-neutral-900/90 text-amber-200
            shadow-xl backdrop-blur-md transition-all duration-300
            hover:scale-105 hover:border-amber-300 hover:text-amber-100 active:scale-95
            sm:h-12 sm:w-12
            ${
              isPlaying
                ? "ring-2 ring-amber-400/40 shadow-amber-500/20"
                : "hover:bg-neutral-800/90 opacity-90 hover:opacity-100"
            }
          `}
        >
          {/* Rotating Ring */}
          <div
            className={`absolute inset-0.5 rounded-full border border-dashed border-amber-300/30 ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "8s" }}
          />

          {/* ================= PLAYING STATE (SHOW PAUSE ICON + EQUALIZER) ================= */}
          {isPlaying ? (
            <div className="z-10 flex items-center gap-1">
              {/* Equalizer Bars */}
              <div className="flex h-4 w-3.5 items-end justify-center gap-0.5">
                <span
                  className="w-0.5 animate-pulse rounded-full bg-amber-300"
                  style={{ height: "60%", animationDuration: "0.4s" }}
                />
                <span
                  className="w-0.5 animate-pulse rounded-full bg-amber-200"
                  style={{ height: "100%", animationDuration: "0.7s" }}
                />
                <span
                  className="w-0.5 animate-pulse rounded-full bg-amber-400"
                  style={{ height: "45%", animationDuration: "0.5s" }}
                />
              </div>

              {/* Pause Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 fill-amber-200 drop-shadow"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 .75-.75Zm9 0a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            /* ================= PAUSED STATE (SHOW PLAY ICON) ================= */
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