import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]",
        className,
      )}
    >
      {children}
    </div>
  );
}
