import GoldenBorderDivider from "./GoldenBorderDivider";

export default function BrideGroom() {
  return (
    <section id="couple" className="relative w-full overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="absolute inset-0 z-0 bg-[url('/images/concrete.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 z-0 bg-neutral-900/25" />

      {/* =====================================================
          FOREGROUND CONTENT
      ===================================================== */}
      <div className="relative z-30 mx-auto px-5 py-12 text-center sm:px-6 sm:pb-20 sm:pt-24">
        <p className="reveal font-cinzel text-[9px] uppercase tracking-[0.42em] text-neutral-200/80 sm:text-xs sm:tracking-[0.5em]">
          Meet the
        </p>

        <h2 className="reveal mt-2 font-cinzel text-3xl font-medium leading-tight tracking-[0.13em] text-neutral-50 sm:mt-3 sm:text-4xl sm:tracking-[0.15em]">
          BRIDE AND
          <br />
          GROOM
        </h2>

        <p className="reveal mx-auto mt-4 max-w-sm font-garamond text-[11px] leading-[1.45] text-neutral-200/85 sm:mt-6 sm:max-w-xl sm:text-sm sm:leading-relaxed">
          We are both so delighted that you will finally get to celebrate what
          has brought us all together — a love woven over the hundred days of
          our lives. The love and warmth we feel as we invite you to share in
          our happiest moments is truly endless. We cannot wait to share these
          cherished days with everyone most dear to their hearts, and so we
          invite you to be a part of all the wedding festivities.
        </p>

        {/* =====================================================
            COUPLE IMAGE + FRAME
        ===================================================== */}
        <div className="reveal-scale relative mx-auto mt-7 h-[250px] w-[210px] sm:mt-12 sm:h-[360px] sm:w-[300px]">

          {/* =================================================
              COUPLE IMAGE

              Adjust these values if needed:

              top-[12%]    = move image down/up
              left-[12%]   = move image right/left
              w-[76%]      = image visible width
              h-[76%]      = image visible height
          ================================================= */}
          <div
            className="
              absolute
              left-[12%]
              top-[12%]
              z-10
              h-[76%]
              w-[76%]
              overflow-hidden
              rounded-[50%]
            "
          >
            <img
              src="/images/couple.png"
              alt="Bride and Groom"
              draggable={false}
              className="
                h-full
                w-full
                scale-[1.04]
                select-none
                object-cover
                object-center
              "
            />
          </div>

          {/* =================================================
              FRAME IMAGE

              Frame stays ABOVE couple.png.
              Transparent center of frame shows couple image.
          ================================================= */}
          <img
            src="/images/frame.png"
            alt=""
            draggable={false}
            className="
              pointer-events-none
              absolute
              inset-0
              z-20
              h-full
              w-full
              select-none
              object-contain
              drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)]
            "
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM GOLDEN DIVIDER
      ===================================================== */}
      <GoldenBorderDivider />
    </section>
  );
}