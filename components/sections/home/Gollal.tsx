"use client";

import { useGsapPlugins } from "@/hooks/useGsapPlugins";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Gollal() {
  useGsapPlugins();
  const fillRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const section = sectionRef.current;
    if (!fill || !section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grain relative overflow-hidden border-y border-white/5 bg-bg-secondary py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative">
          <div
            className="select-none font-syne text-[clamp(4rem,14vw,9rem)] font-extrabold leading-none text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(201,168,76,0.35)",
            }}
            aria-hidden
          >
            GOLLAL
          </div>
          <div
            ref={fillRef}
            className="pointer-events-none absolute inset-0 font-syne text-[clamp(4rem,14vw,9rem)] font-extrabold leading-none text-gold/25"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            GOLLAL
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Excellence",
              text: "Des standards élevés à chaque livrable : rigueur, clarté et impact mesurable.",
            },
            {
              title: "Persévérance",
              text: "Nous restons engagés au-delà du go-live : itérations, support et amélioration continue.",
            },
            {
              title: "Qualité",
              text: "Architecture propre, accessibilité, performance et sécurité intégrées dès le départ.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <h3 className="font-syne text-xl font-semibold text-text-primary">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
