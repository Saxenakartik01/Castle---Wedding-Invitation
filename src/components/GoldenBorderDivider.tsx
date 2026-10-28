export default function GoldenBorderDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none relative z-40 h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/25 via-[#FFF2B2] via-50% to-[#D4AF37]/25 shadow-[0_0_8px_rgba(245,215,120,0.7),0_0_2px_rgba(255,255,255,0.85)] ${className}`}
      aria-hidden="true"
    />
  );
}
