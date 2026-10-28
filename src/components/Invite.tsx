
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
      <div
        className="
          relative h-[255px] w-[240px]
          transition-transform duration-500
          group-hover:-translate-y-1.5
          sm:h-[310px] sm:w-[290px]
        "
      >
        {/* Event Roll Image */}
        <img
          src="/images/Event-roll.png"
          alt={`${event.name} event roll`}
          className="
            pointer-events-none absolute inset-0
            h-full w-full select-none object-contain
            drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)]
            sm:drop-shadow-[0_16px_22px_rgba(0,0,0,0.35)]
          "
        />

        {/* Text Inside Roll */}
        <div
          className="
            absolute inset-x-[14%] top-[16%] bottom-[16%]
            z-10 flex flex-col items-center justify-center
            text-center
          "
        >
          <h3
            className="
              font-cormorant text-[25px] font-bold leading-none
              text-[#6f4510]
              [text-shadow:0_1px_1px_rgba(255,255,255,0.5)]
              sm:text-[30px]
            "
          >
            {event.name}
          </h3>

          <div
            className="
              my-2 h-px w-[60%]
              bg-gradient-to-r from-transparent
              via-[#9b6a23] to-transparent
              sm:my-2.5
            "
          />

          <p
            className="
              font-garamond text-[12.5px] font-semibold
              leading-snug text-[#5b3b16]
              sm:text-[14.5px]
            "
          >
            {event.time}
          </p>

          <p
            className="
              mt-0.5 font-garamond text-[11px]
              font-medium text-[#78521e]
              sm:mt-1 sm:text-[13px]
            "
          >
            {event.clock}
          </p>

          <p
            className="
              mt-1.5 max-w-[155px]
              font-garamond text-[10.5px] italic
              leading-[1.25] text-[#6d491d]
              sm:mt-2 sm:max-w-[195px]
              sm:text-[12.5px] sm:leading-[1.3]
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
    <section
      id="invite"
      className="
        relative isolate z-10
        w-full overflow-visible
        bg-[#b98b3e]
      "
    >
      {/* Parchment Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          bg-[url('/images/parchment.jpg')]
          bg-cover bg-center bg-no-repeat
        "
      />

      {/* Decorative Top Parchment Edge */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 z-0
          h-5 bg-[url('/images/parchment.jpg')]
          bg-cover opacity-90
          [clip-path:polygon(0_0,100%_0,100%_40%,95%_90%,88%_30%,80%_80%,72%_20%,63%_75%,54%_25%,45%_85%,36%_30%,27%_80%,18%_25%,9%_75%,0_35%)]
          sm:h-6
        "
      />

      {/* Main Content */}
      <div
        className="
          relative z-20 mx-auto
          w-full px-4 pt-20 pb-24
          text-center
          sm:px-6 sm:pt-24 sm:pb-32
        "
      > <br></br>
        {/* Ganesh Ji Sticker */}
        <div className="reveal mx-auto mb-7 flex justify-center sm:mb-5">
          <img
            src="/images/ganesh-seal.png"
            alt="Lord Ganesha"
            className="
              h-auto w-24 sm:w-28
              select-none object-contain
              drop-shadow-[0_6px_16px_rgba(110,65,15,0.45)]
              transition-transform duration-300 hover:scale-105
            "
          />
        </div>
        {/* Ganesh Ji Mantra */}
        <h2
          className="
            reveal mx-auto mt-3 w-full max-w-[340px]
            font-cinzel text-[13px] font-semibold
            leading-[1.9] tracking-normal
            text-amber-950
            sm:max-w-[340px] sm:text-[13px]
            sm:leading-[1.9] sm:tracking-normal
            md:max-w-[340px] md:text-[13px]
          "
        >
          वक्रतुंड महाकाय, सूर्य कोटि समप्रभ।
          <br />
          निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा ॥
        </h2>

        {/* Invitation Text */}
        <p
          className="
            reveal mx-auto mt-7
            font-garamond text-[14px] italic
            text-amber-950
            sm:mt-8 sm:text-base
          "
        >
          You&apos;re invited to the wedding celebration of
        </p>

        {/* Couple Names */}
        <div className="reveal my-5 sm:my-6">
          <p
            className="
              font-cormorant text-[2.4rem] font-medium
              leading-tight text-amber-950
              sm:text-6xl
            "
          >
            Abhishek &amp; Kanika
          </p>
        </div>

        {/* Event Rolls */}
        <div
          className="
            mx-auto mt-6 flex w-full max-w-md
            flex-col items-center gap-8
            sm:mt-8 sm:gap-10
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
    </section>
  );
}

