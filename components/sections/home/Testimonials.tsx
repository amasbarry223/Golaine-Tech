"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const LOOP = [...TESTIMONIALS, ...TESTIMONIALS];

function StarPills({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="inline-flex items-center rounded-full bg-white/90 px-2 py-1 shadow-inner"
          aria-hidden
        >
          <span className="text-xs font-semibold text-gold">★</span>
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-32" aria-labelledby="temoignages-heading">
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
            Témoignages
          </p>
          <h2
            id="temoignages-heading"
            className="mt-3 font-syne text-3xl font-bold text-text-primary md:text-4xl"
          >
            Ce que disent nos clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Découvrez les témoignages de nos utilisateurs satisfaits
          </p>
        </div>

        <div className="testimonials-marquee-wrap relative mt-8">
          <div className="mask-edges relative overflow-hidden py-1">
            <ul
              className="testimonials-marquee-track"
              aria-label="Témoignages clients, défilement horizontal continu"
            >
              {LOOP.map((t, i) => (
                <li key={`${t.id}-${i}`}>
                  <div className="h-[260px] w-[360px] shrink-0 md:h-[269px] md:w-[580px]">
                    <div
                      className={cn(
                        "relative flex h-full flex-col rounded-[40px] border border-white/[0.08] text-text-primary shadow-sm",
                        "bg-[rgb(13,13,13)]/95 backdrop-blur-sm",
                        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[40px] before:bg-gradient-to-br before:from-white/[0.03] before:to-transparent before:opacity-60",
                      )}
                    >
                      <div className="relative z-[1] flex h-full flex-col p-6">
                        <div className="flex h-full min-h-0 gap-3 md:gap-5">
                          <div className="flex min-w-0 flex-1 flex-col pr-1 md:pr-4">
                            <p className="text-sm leading-relaxed text-text-muted md:text-[15px] line-clamp-4 md:line-clamp-none">
                              “{t.quote}”
                            </p>
                            <StarPills className="mt-auto pt-4" />
                          </div>
                          <div className="flex w-28 shrink-0 flex-col items-center justify-center md:w-40">
                            <div className="relative size-24 overflow-hidden rounded-full border border-white/40 bg-gold/10 shadow-md md:size-36">
                              <Image
                                src={t.image}
                                alt={t.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 96px, 144px"
                              />
                            </div>
                            <div className="mt-3 text-center">
                              <p className="font-syne text-sm font-medium leading-tight text-text-primary md:text-base">
                                {t.name}
                              </p>
                              <p className="mt-0.5 text-xs text-text-muted md:text-sm">
                                {t.role}, {t.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
