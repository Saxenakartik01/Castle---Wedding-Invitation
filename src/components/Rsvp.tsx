import GoldenBorderDivider from "./GoldenBorderDivider";

export default function Rsvp() {
  return (
    <section id="rsvp" className="relative w-full overflow-hidden">
      {/* Background concrete image - z-0 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/concrete.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-neutral-800/30" />

      {/* Foreground content - z-30 (above ship z-20) */}
      <div className="relative z-30 mx-auto flex flex-col items-center px-5 py-12 text-center sm:px-6 sm:py-20">
        <h2 className="reveal font-cinzel text-3xl font-medium leading-tight tracking-[0.18em] text-neutral-50 sm:text-4xl sm:tracking-[0.2em]">
          PLEASE
          <br />
          RSVP
        </h2>
        <p className="reveal mt-3 font-garamond text-xs italic text-neutral-200/85 sm:mt-5 sm:text-sm">
          Click to message us on WhatsApp
        </p>

        <a
          href="#"
          aria-label="RSVP via WhatsApp"
          className="reveal group relative mt-5 flex h-12 w-12 items-center justify-center sm:mt-7 sm:h-16 sm:w-16"
        >
          <span className="absolute inset-0 rounded-full border border-neutral-100/50" />
          <span className="absolute inset-1.5 rounded-full border border-neutral-100/40 transition group-hover:scale-110 sm:inset-2" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100/90 text-neutral-800 transition group-hover:scale-110 sm:h-8 sm:w-8">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" aria-hidden="true">
              <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 2a8 8 0 11-4.2 14.8l-.3-.2-2.8.9.9-2.7-.2-.3A8 8 0 0112 4zm4.5 10.1c-.2-.1-1.3-.7-1.5-.7s-.3-.1-.5.1-.6.7-.7.8-.3.2-.5.1a6.5 6.5 0 01-3.2-2.8c-.2-.4.2-.4.6-1.1.1-.2 0-.3 0-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4a.9.9 0 00-.6.3 2.6 2.6 0 00-.8 1.9c0 1.1.8 2.2.9 2.4a8.9 8.9 0 003.4 3c1.9.8 1.9.5 2.3.5s1.3-.5 1.5-1a1.8 1.8 0 00.1-1c0-.1-.2-.2-.4-.3z" />
            </svg>
          </span>
        </a>
      </div>

      {/* Golden faded line on bottom border */}
      <GoldenBorderDivider />
    </section>
  );
}
