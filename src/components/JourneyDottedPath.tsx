import { useEffect, useRef } from "react";

/* =========================================================
   EASY SHIP CONTROLS
   =========================================================
   size
   = ship size in px

   xOffset
   + = move ship right
   - = move ship left

   yOffset
   + = move ship down
   - = move ship up

   rotationOffset
   = manually correct ship orientation in degrees

   opacity
   1 = fully visible
   0.5 = 50%
========================================================= */
const SHIP = {
  /* ================= MOBILE (< 640px) ================= */
  mobile: {
    size: 120,
    xOffset: 0,
    yOffset: 0,
    rotationOffset: 90,
    opacity: 1,
  },

  /* ================= DESKTOP / TABLET (>= 640px) ================= */
  desktop: {
    size: 95,
    xOffset: 0,
    yOffset: 0,
    rotationOffset: 90,
    opacity: 1,
  },
};

/* =========================================================
   EASY END FADE CONTROLS
   =========================================================
   dottedStartOpacity
   = opacity of dotted line before entering the fade zone (1 = 100% visible)

   dottedEndOpacity
   = final opacity of dotted line at the bottom of website (0 = 0% invisible)

   shipStartOpacity
   = ship opacity before entering the fade zone (1 = 100% visible)

   shipEndOpacity
   = final ship opacity at the bottom of website (0.85 = 85% visible, 1 = 100% visible)

   startSectionFromEnd
   = number of sections from the end where fading begins (2 = last two sections)

   fadeStartProgress
   = progress ratio (0 to 1) where fade begins (0.63 = start of second-last section)
========================================================= */
const END_FADE = {
  dottedStartOpacity: 1,
  dottedEndOpacity: 0,

  shipStartOpacity: 1,
  shipEndOpacity: 0.85,

  startSectionFromEnd: 2,
  fadeStartProgress: 0.63,
};

export default function JourneyDottedPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const shipRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateShipPosition = () => {
      if (!containerRef.current || !pathRef.current || !shipRef.current) return;

      const container = containerRef.current;
      const path = pathRef.current;
      const ship = shipRef.current;

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerHeight = container.offsetHeight;
      const containerWidth = container.offsetWidth;
      const viewportHeight = window.innerHeight;

      // Scroll progress clamped between 0 (start) and 1 (end)
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, containerHeight - viewportHeight);
      const currentScroll = scrollY - containerTop;
      const rawProgress = currentScroll / maxScroll;
      const progress = Math.max(0, Math.min(1, rawProgress));

      const totalLength = path.getTotalLength();
      const distance = progress * totalLength;

      // Calculate current point and next point for curve tangent angle
      const point = path.getPointAtLength(distance);
      const step = 0.5;
      const nextPoint = path.getPointAtLength(Math.min(distance + step, totalLength));

      // Scale viewBox coordinates (100x1000) to actual pixel dimensions
      const pixelDx = (nextPoint.x - point.x) * (containerWidth / 100);
      const pixelDy = (nextPoint.y - point.y) * (containerHeight / 1000);
      const pathAngle = Math.atan2(pixelDy, pixelDx) * (180 / Math.PI);

      const isMobile = window.innerWidth < 640;
      const config = isMobile ? SHIP.mobile : SHIP.desktop;
      const finalAngle = pathAngle + config.rotationOffset;

      const xPercent = (point.x / 100) * 100;
      const yPercent = (point.y / 1000) * 100;

      // Calculate End-Fade progress over the last two sections
      const fadeStart = END_FADE.fadeStartProgress;
      const fadeProgress = Math.max(
        0,
        Math.min(1, (progress - fadeStart) / (1.0 - fadeStart))
      );

      // Dotted line opacity: 1 -> 0 over the last two sections
      const dottedOpacity =
        END_FADE.dottedStartOpacity -
        fadeProgress * (END_FADE.dottedStartOpacity - END_FADE.dottedEndOpacity);

      // Ship opacity: remains visible, softening slightly to shipEndOpacity (0.85)
      const shipOpacityFactor =
        END_FADE.shipStartOpacity -
        fadeProgress * (END_FADE.shipStartOpacity - END_FADE.shipEndOpacity);

      const finalShipOpacity = config.opacity * shipOpacityFactor;

      // Apply style updates directly without DOM re-renders
      path.style.opacity = `${dottedOpacity}`;

      ship.style.left = `calc(${xPercent}% + ${config.xOffset}px)`;
      ship.style.top = `calc(${yPercent}% + ${config.yOffset}px)`;
      ship.style.width = `${config.size}px`;
      ship.style.opacity = `${finalShipOpacity}`;
      ship.style.transform = `translate(-50%, -50%) rotate(${finalAngle}deg)`;
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateShipPosition);
    };

    // Initial positioning
    updateShipPosition();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    window.addEventListener("orientationchange", onScrollOrResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("orientationchange", onScrollOrResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        style={{
          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))",
        }}
      >
        {/* Softly curved, centered, elegant white dotted journey path */}
        <path
          ref={pathRef}
          d="M 50 0 
             C 35 40, 32 100, 40 150 
             C 48 200, 65 230, 60 290 
             C 56 340, 34 370, 38 430 
             C 42 490, 66 520, 62 580 
             C 58 630, 34 670, 40 730 
             C 45 780, 64 820, 58 880 
             C 54 930, 42 960, 50 1000"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeDasharray="3 10"
          strokeLinecap="round"
          strokeOpacity="0.95"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Animated Moving Ship along the SVG path */}
      <img
        ref={shipRef}
        src="/images/ship.png"
        alt="Animated Wedding Journey Ship"
        draggable={false}
        className="pointer-events-none absolute z-20 select-none object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)] transition-opacity duration-300"
        style={{
          left: "50%",
          top: "0%",
          width: `${SHIP.mobile.size}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
