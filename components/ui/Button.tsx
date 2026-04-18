"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-bg-dark hover:shadow-[0_0_32px_rgba(201,168,76,0.35)] hover:scale-[1.02]",
  secondary:
    "border border-white/25 text-text-primary hover:bg-white/10 hover:border-gold/50",
  ghost: "text-text-primary hover:text-gold",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", magnetic, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      data-magnetic={magnetic ? "" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-syne text-sm font-semibold transition-transform duration-300 focus-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
