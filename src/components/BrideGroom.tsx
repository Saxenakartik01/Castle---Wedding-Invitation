
import { useEffect, useRef, useState } from "react";

export default function BrideGroom() {
  // ==========================================
  // EASY SETTINGS
  // ==========================================

  const OVERLAY_OPACITY = 0.30;
  const BACKGROUND_IMAGE = "/images/concrete.jpg";

  const coupleImages = [
    "/images/couple-1.jpg",
    "/images/couple-2.jpg",
    "/images/couple.png",
  ];

  const totalSlides = coupleImages.length;

  // Repeat images for a seamless infinite loop
  const infiniteImages = [
    ...coupleImages,
    ...coupleImages,
    ...coupleImages,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const currentDot =
    ((activeIndex % totalSlides) + totalSlides) % totalSlides;

  const nextSlide = () => {
    setAnimate(true);
    setActiveIndex((current) => current + 1);
  };

  const previousSlide = () => {
    setAnimate(true);
    setActiveIndex((current) => current - 1);
  };

  const goToSlide = (index: number) => {
    setAnimate(true);

    setActiveIndex((current) => {
      const position =
        ((current % totalSlides) + totalSlides) % totalSlides;

      const forward =
        (index - position + totalSlides) % totalSlides;

      const backward = forward - totalSlides;

      return (
        current +
        (Math.abs(forward) <= Math.abs(backward)
          ? forward
          : backward)
      );
    });
  };

  // INFINITE LOOP RESET
  const handleTransitionEnd = () => {
    if (activeIndex >= totalSlides) {
      setAnimate(false);
      setActiveIndex((current) => current - totalSlides);
    } else if (activeIndex < 0) {
      setAnimate(false);
      setActiveIndex((current) => current + totalSlides);
    }
  };

  // RESTORE ANIMATION AFTER INVISIBLE RESET
  useEffect(() => {
    if (animate) return;

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setAnimate(true);
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [animate]);

  // MOBILE MANUAL SWIPE
  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      previousSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // DESKTOP MANUAL MOUSE DRAG
  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType === "touch") return;

    pointerStartX.current = event.clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      !isDragging.current ||
      pointerStartX.current === null
    ) {
      return;
    }

    const distance = pointerStartX.current - event.clientX;

    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      previousSlide();
    }

    isDragging.current = false;
    pointerStartX.current = null;
  };

  const handlePointerCancel = () => {
    isDragging.current = false;
    pointerStartX.current = null;
  };

  return (
    <section id="couple" className="relative w-full overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
        aria-hidden="true"
      />

      {/* DARK OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-black"
        style={{
          opacity: Math.max(0, Math.min(1, OVERLAY_OPACITY)),
        }}
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-5xl
          px-4 pb-14 pt-16 text-center
          sm:px-8 sm:pb-20 sm:pt-20
        "
      >
        {/* HEADING */}
        <p
          className="
            reveal font-cinzel text-[10px] uppercase
            tracking-[0.42em] text-neutral-200/90
            sm:text-xs sm:tracking-[0.5em]
          "
        >
          Meet the
        </p>

        <h2
          className="
            reveal mt-3 font-cinzel text-3xl font-medium
            leading-tight tracking-[0.1em] text-neutral-50
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
            sm:text-4xl sm:tracking-[0.15em]
          "
        >
          BRIDE AND GROOM
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            reveal mx-auto mt-5 max-w-xl
            font-garamond text-sm leading-7 text-amber-50
            drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]
            sm:mt-7 sm:text-base sm:leading-8
          "
        >
          We’re delighted to invite you to celebrate the love that brings us
          together. Join us for our happiest moments and be part of our
          cherished wedding festivities with love, warmth, and joy.
        </p>

        {/* SINGLE-FRAME MANUAL SLIDER */}
        <div
          className="
            mx-auto mt-10 w-full max-w-md
            select-none sm:mt-14
          "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{ touchAction: "pan-y" }}
        >
          {/* VIEWPORT: ONLY ONE FRAME VISIBLE */}
          <div className="w-full overflow-hidden px-0 py-5">
            <div
              className={`
                flex items-center
                ${animate
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
                }
              `}
              style={{
                width: `${infiniteImages.length * 100}%`,
                transform: `translateX(-${activeIndex * (100 / infiniteImages.length)
                  }%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {infiniteImages.map((image, index) => {
                const originalIndex = index % totalSlides;

                return (
                  <div
                    key={`${image}-${index}`}
                    className="flex shrink-0 justify-center"
                    style={{
                      width: `${100 / infiniteImages.length}%`,
                    }}
                  >
                    {/* PHOTO + FRAME */}
                    <div
                      className="
                        reveal-scale relative isolate
                        h-[280px] w-[235px] shrink-0
                        sm:h-[350px] sm:w-[290px]
                        md:h-[380px] md:w-[315px]
                      "
                    >
                      {/* PHOTO */}
                      <div
                        className="
                          absolute left-[12%] top-[12%] z-10
                          h-[76%] w-[76%] overflow-hidden rounded-[50%]
                        "
                      >
                        <img
                          src={image}
                          alt={
                            originalIndex === 0
                              ? "Bride and Groom"
                              : `Wedding portrait ${originalIndex + 1}`
                          }
                          loading={index < 3 ? "eager" : "lazy"}
                          draggable={false}
                          className="
                            absolute inset-0 block h-full w-full
                            select-none object-cover object-center
                          "
                        />
                      </div>

                      {/* DECORATIVE FRAME */}
                      <img
                        src="/images/frame.png"
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        draggable={false}
                        className="
                          pointer-events-none absolute inset-0 z-20
                          block h-full w-full select-none object-contain
                          drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)]
                        "
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM DOTS */}
          {totalSlides > 1 && (
            <div
              className="mt-4 flex items-center justify-center gap-3"
              aria-label="Choose couple photo"
            >
              {coupleImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Show photo ${index + 1}`}
                  aria-current={
                    currentDot === index ? "true" : undefined
                  }
                  onClick={() => goToSlide(index)}
                  className={`
                    h-2.5 rounded-full
                    transition-all duration-300
                    ${currentDot === index
                      ? "w-7 bg-amber-200"
                      : "w-2.5 bg-white/50 hover:bg-white/80"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}