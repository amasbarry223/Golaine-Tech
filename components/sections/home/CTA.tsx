"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative mx-4 mb-24 overflow-hidden rounded-3xl border border-gold/20 bg-bg-secondary/80 md:mx-8">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-tech/15 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-50" />

      <div className="relative grid gap-8 px-8 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-16 md:py-20">
        <div>
          <h2 className="font-syne text-3xl font-bold text-text-primary sm:text-4xl">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="mt-4 max-w-xl text-text-muted">
            Discutons de votre projet en 30 minutes : objectifs, contraintes, et
            première feuille de route — sans engagement.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Link
            href="/contact"
            data-magnetic
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-syne text-sm font-semibold text-bg-dark shadow-[0_0_40px_rgba(201,168,76,0.25)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(201,168,76,0.35)] focus-ring",
            )}
          >
            Planifier un appel gratuit
          </Link>
          <p className="font-mono text-xs text-text-muted">
            Réponse sous 24h ouvrées
          </p>
        </div>
      </div>
    </section>
  );
}
