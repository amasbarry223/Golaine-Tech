"use client";

import { useGsapPlugins } from "@/hooks/useGsapPlugins";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  useGsapPlugins();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            scrub: 0.25,
            start: "top top",
            end: "max",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[850] h-1 bg-bg-dark/40"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-gold via-cyan-tech to-green-neon"
      />
    </div>
  );
}
