"use client";

import { useGsapPlugins } from "@/hooks/useGsapPlugins";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ServiceList() {
  const services = SERVICES;
  useGsapPlugins();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-block").forEach((el, i) => {
        const x = i % 2 === 0 ? -48 : 48;
        gsap.from(el, {
          x,
          opacity: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        });

        const img = el.querySelector(".parallax-img");
        if (img) {
          gsap.to(img, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "bottom top",
            },
          });
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="space-y-24 pb-24">
      {services.map((s, i) => {
        const Icon = s.icon;
        const reverse = i % 2 === 1;
        return (
          <article
            id={s.slug}
            key={s.slug}
            className="service-block scroll-mt-28 mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8"
          >
            <div
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10",
                reverse && "md:order-2",
              )}
            >
              <Image
                src={s.image}
                alt=""
                fill
                className="parallax-img object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent" />
            </div>
            <div className={cn(reverse && "md:order-1")}>
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-bg-secondary/80 text-gold">
                  <Icon className="h-8 w-8" aria-hidden />
                </span>
                <h2 className="font-syne text-2xl font-bold text-text-primary md:text-3xl">
                  {s.title}
                </h2>
              </div>
              <p className="mt-4 text-text-muted">{s.description}</p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-text-primary">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                      aria-hidden
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-cyan-tech"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
