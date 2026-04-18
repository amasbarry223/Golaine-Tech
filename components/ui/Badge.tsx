import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-gold animate-pulse-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
