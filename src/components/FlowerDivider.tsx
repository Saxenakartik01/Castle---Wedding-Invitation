type FlowerDividerProps = {
  className?: string;
};

/* =========================================================
   EASY FLOWER CONTROLS
   =========================================================

   extraWidth:
   0   = flower exactly screen width
   20  = extends 20px outside EACH side
   50  = extends 50px outside EACH side
   100 = extends 100px outside EACH side

   stretchX:
   1   = normal horizontal shape
   1.2 = 20% wider
   1.5 = 50% wider
   2   = double width

   x:
   + number = move complete flower RIGHT
   - number = move complete flower LEFT

   y:
   + number = move flower UP
   - number = move flower DOWN

   opacity:
   1   = fully visible
   0.8 = 80%
   0.5 = 50%
   0   = invisible

   SHADOW:
   x       = shadow left/right
   y       = shadow up/down
   blur    = shadow softness
   opacity = shadow strength
========================================================= */

const FLOWER = {
  /* ================= MOBILE ================= */
  mobile: {
    extraWidth: 40, // px outside BOTH screen sides

    stretchX: 1, // 1 = normal, 1.2 = wider, 1.5 = much wider

    x: 0, // + right / - left
    y: -20, // + up / - down

    opacity: 1,
  },

  /* ================= DESKTOP / TABLET ================= */
  desktop: {
    extraWidth: 50,

    stretchX: 1,

    x: 0,
    y: -20,

    opacity: 10,
  },

  /* ================= SHADOW ================= */
  shadow: {
    x: 0,
    y: 10,
    blur: 14,
    opacity: 0.8,
  },
};

export default function FlowerDivider({
  className = "",
}: FlowerDividerProps) {
  const shadow = `drop-shadow(
    ${FLOWER.shadow.x}px
    ${FLOWER.shadow.y}px
    ${FLOWER.shadow.blur}px
    rgba(0,0,0,${FLOWER.shadow.opacity})
  )`;

  return (
    <>
      {/* =====================================================
          MOBILE
      ===================================================== */}
      <img
        src="/images/Flower.png"
        alt=""
        draggable={false}
        style={{
          width: `calc(100vw + ${FLOWER.mobile.extraWidth * 2}px)`,

          left: `calc(50% + ${FLOWER.mobile.x}px)`,

          bottom: `${FLOWER.mobile.y}px`,

          opacity: FLOWER.mobile.opacity,

          transform: `
            translateX(-50%)
            scaleX(${FLOWER.mobile.stretchX})
          `,

          filter: shadow,
        }}
        className={`
          pointer-events-none
          absolute
          z-30
          block
          max-w-none
          select-none
          object-contain
          sm:hidden
          ${className}
        `}
      />

      {/* =====================================================
          TABLET / DESKTOP
      ===================================================== */}
      <img
        src="/images/Flower.png"
        alt=""
        draggable={false}
        style={{
          width: `calc(100vw + ${FLOWER.desktop.extraWidth * 2}px)`,

          left: `calc(50% + ${FLOWER.desktop.x}px)`,

          bottom: `${FLOWER.desktop.y}px`,

          opacity: FLOWER.desktop.opacity,

          transform: `
            translateX(-50%)
            scaleX(${FLOWER.desktop.stretchX})
          `,

          filter: shadow,
        }}
        className={`
          pointer-events-none
          absolute
          z-30
          hidden
          max-w-none
          select-none
          object-contain
          sm:block
          ${className}
        `}
      />
    </>
  );
}