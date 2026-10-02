type GoldenBorderDividerProps = {
  className?: string;
};

export default function GoldenBorderDivider({
  className = "",
}: GoldenBorderDividerProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center ${className}`}
      aria-hidden="true"
    >
      <div className="h-[2.5px] w-[88%] rounded-full bg-gradient-to-r from-transparent via-amber-400/90 to-transparent drop-shadow-[0_0_8px_rgba(251,191,36,0.7)] sm:h-[3.5px] sm:w-[80%]" />
    </div>
  );
}
