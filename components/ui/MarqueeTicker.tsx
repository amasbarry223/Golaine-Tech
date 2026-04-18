export default function MarqueeTicker() {
  const text =
    "INNOVATION • IA • WEB • MOBILE • DESIGN • GOLLAL • EXCELLENCE • ";
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-bg-night/80 py-3">
      <div
        className="flex w-max animate-ticker font-mono text-xs uppercase tracking-[0.35em] text-gold/80"
        aria-hidden
      >
        <span className="pr-16">{text}</span>
        <span className="pr-16">{text}</span>
      </div>
    </div>
  );
}
