"use client";

import Card from "@/components/ui/Card";
import { useGsapPlugins } from "@/hooks/useGsapPlugins";
import gsap from "gsap";
import { Clock, Rocket, Star, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    key: "p",
    label: "Projets livrés",
    prefix: "",
    suffix: "+",
    icon: Rocket,
    end: 150,
  },
  {
    key: "s",
    label: "Satisfaction client",
    prefix: "",
    suffix: "%",
    icon: Star,
    end: 98,
  },
  {
    key: "y",
    label: "D'expertise",
    prefix: "",
    suffix: " ans",
    icon: Clock,
    end: 5,
  },
  {
    key: "r",
    label: "ROI moyen client",
    prefix: "",
    suffix: "×",
    icon: TrendingUp,
    end: 3,
  },
] as const;

export default function Stats() {
  useGsapPlugins();
  const sectionRef = useRef<HTMLElement>(null);
  const [values, setValues] = useState(() =>
    STATS.map(() => 0),
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      STATS.forEach((stat, i) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.end,
          duration: 2.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
          onUpdate: () => {
            setValues((prev) => {
              const next = [...prev];
              next[i] = Math.round(obj.val);
              return next;
            });
          },
        });
      });

      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-section relative border-y border-white/5 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-45" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.key} className="stat-card relative">
              {i < STATS.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block" />
              )}
              <Card className="h-full border border-white/5 bg-white/[0.03]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
                      {s.label}
                    </p>
                    <p className="mt-3 font-syne text-4xl font-bold text-text-primary">
                      {s.prefix}
                      {values[i]}
                      {s.suffix}
                    </p>
                  </div>
                  <Icon className="h-8 w-8 text-cyan-tech/90" aria-hidden />
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
