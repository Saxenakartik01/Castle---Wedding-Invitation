import GoldenBorderDivider from "./GoldenBorderDivider";

const EVENTS = [
  {
    name: "Haldi",
    time: "7th December 2026",
    clock: "10:00 AM",
    venue: "Garden Lawns, City Palace",
  },
  {
    name: "Mehendi",
    time: "6th December 2026",
    clock: "4:00 PM",
    venue: "The Lotus Courtyard, Udaipur",
  },
  {
    name: "Shaadi",
    time: "9th December 2026",
    clock: "7:00 PM",
    venue: "Durbar Hall, City Palace",
  },
];

/* =========================================================
   EVENT ROLL CARD
   ========================================================= */

function EventCard({
  event,
  index,
}: {
  event: (typeof EVENTS)[number];
  index: number;
}) {
  return (
    <div
      className="reveal group flex min-w-0 flex-col items-center"
      data-delay={index * 100}
    >
      {/* Event Roll */}
      <div
        className="
          relative
          h-[150px]
          w-[105px]
          transition-transform
          duration-500
          group-hover:-translate-y-1
          sm:h-[245px]
          sm:w-[175px]
        "
      >
        {/* Roll Image */}
        <img
          src="/images/Event-roll.png"
          alt={`${event.name} event roll`}
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            select-none
            object-contain
            drop-shadow-[0_8px_9px_rgba(0,0,0,0.55)]
            sm:drop-shadow-[0_12px_14px_rgba(0,0,0,0.5)]
          "
        />

        {/* Content inside roll */}
        <div
          className="
            absolute
            inset-x-[15%]
            top-[17%]
            bottom-[17%]
            z-10
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          {/* Event Name */}
          <h3
            className="
              font-cormorant
              text-[16px]
              font-bold
              leading-none
              text-[#6f4510]
              [text-shadow:0_1px_1px_rgba(255,255,255,0.45)]
              sm:text-[25px]
            "
          >
            {event.name}
          </h3>

          {/* Small divider */}
          <div
            className="
              my-1.5
              h-px
              w-[55%]
              bg-gradient-to-r
              from-transparent
              via-[#9b6a23]
              to-transparent
              sm:my-3
            "
          />

          {/* Date */}
          <p
            className="
              font-garamond
              text-[7.5px]
              font-semibold
              leading-[1.2]
              text-[#5b3b16]
              sm:text-[11px]
            "
          >
            {event.time}
          </p>

          {/* Time */}
          <p
            className="
              mt-0.5
              font-garamond
              text-[7px]
              font-medium
              text-[#78521e]
              sm:mt-1
              sm:text-[10px]
            "
          >
            {event.clock}
          </p>

          {/* Venue */}
          <p
            className="
              mt-1
              max-w-[70px]
              font-garamond
              text-[6.5px]
              italic
              leading-[1.15]
              text-[#6d491d]
              sm:mt-2
              sm:max-w-[125px]
              sm:text-[10px]
              sm:leading-[1.3]
            "
          >
            {event.venue}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   INVITE SECTION
   ========================================================= */

export default function Invite() {
  return (
    <section id="invite" className="relative w-full bg-[#b98b3e]">
      {/* Background parchment texture */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-[url('/images/parchment.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      {/* Top torn parchment edge */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          z-0
          h-5
          bg-[url('/images/parchment.jpg')]
          bg-cover
          opacity-90
          [clip-path:polygon(0_0,100%_0,100%_40%,95%_90%,88%_30%,80%_80%,72%_20%,63%_75%,54%_25%,45%_85%,36%_30%,27%_80%,18%_25%,9%_75%,0_35%)]
          sm:h-6
        "
      />

      {/* Main Content */}
      <div
        className="
          relative
          z-30
          mx-auto
          px-4
          py-10
          text-center
          sm:px-6
          sm:py-20
        "
      >
        {/* Decorative top ornament */}
        <div className="reveal mx-auto mb-3 text-amber-800/90 sm:mb-6">
          <svg
            viewBox="0 0 120 60"
            className="mx-auto h-8 w-20 fill-current sm:h-12 sm:w-28"
            aria-hidden="true"
          >
            <path d="M60 4c6 10 2 18-2 22 6-2 14 0 14 8 0 6-6 10-12 8 4 6 2 14-6 14h0c-8 0-10-8-6-14-6 2-12-2-12-8 0-8 8-10 14-8-4-4-8-12-2-22 2-3 10-3 12 0z" />
            <circle cx="22" cy="40" r="3" />
            <circle cx="98" cy="40" r="3" />
            <path
              d="M10 44h30M80 44h30"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>


        {/* Invite Heading */}
        <h2
          className="
            reveal
            mt-3
            font-cinzel
            text-3xl
            font-semibold
            tracking-[0.22em]
            text-amber-900
            sm:mt-6
            sm:text-4xl
            sm:tracking-[0.3em]
          "
        >
          INVITE
        </h2>

        <p className="reveal mt-2 font-garamond text-[11px] italic text-amber-900/80 sm:mt-5 sm:text-sm">
          You&apos;re invited to the wedding celebration of
        </p>

        {/* Couple Names */}
        <div className="reveal my-3 sm:my-6">
          <p className="font-cormorant text-[2.65rem] font-medium leading-[0.85] text-amber-950 sm:text-6xl">
            Abhishek
          </p>

          <p className="my-1 font-cormorant text-2xl italic text-amber-800 sm:my-2 sm:text-4xl">
            &amp;
          </p>

          <p className="font-cormorant text-[2.65rem] font-medium leading-[0.85] text-amber-950 sm:text-6xl">
            Kanika
          </p>
        </div>

        {/* Bride Family */}
        <p className="reveal font-garamond text-[11px] italic text-amber-900/80 sm:text-sm">
          Daughter of
        </p>

        <p className="reveal mt-0.5 font-cormorant text-sm font-medium text-amber-950 sm:mt-1 sm:text-base">
          Mrs. Mamatha &amp; Ajay Gupta
        </p>

        {/* Events Heading */}
        <p
          className="
            reveal
            mt-5
            font-cinzel
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-amber-800/90
            sm:mt-8
            sm:text-xs
            sm:tracking-[0.35em]
          "
        >
          On the following events
        </p>

        {/* =====================================================
            EVENT ROLLS
            ===================================================== */}
        <div
          className="
            mx-auto
            mt-5
            grid
            max-w-3xl
            grid-cols-3
            items-start
            justify-items-center
            gap-x-1
            sm:mt-10
            sm:gap-x-5
          "
        >
          {EVENTS.map((event, index) => (
            <EventCard
              key={event.name}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom Golden Divider */}
      <GoldenBorderDivider />
    </section>
  );
}