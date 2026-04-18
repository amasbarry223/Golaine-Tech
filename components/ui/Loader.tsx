"use client";

import { useGsapPlugins } from "@/hooks/useGsapPlugins";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const COOKIE = "golaine-loader-seen=1; path=/; max-age=31536000; SameSite=Lax";

function hasSeenLoader() {
  if (typeof document === "undefined") return true;
  return document.cookie
    .split(";")
    .some((c) => c.trim().startsWith("golaine-loader-seen="));
}

const WORDS = ["GOLAÏNE", "TECH"];

export default function Loader() {
  useGsapPlugins();
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasSeenLoader()) return;
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible || !rootRef.current) return;
    const el = rootRef.current;

    const ctx = gsap.context(() => {
      gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        onComplete: () => {
          document.cookie = COOKIE;
          gsap.to(el, {
            yPercent: -100,
            duration: 0.85,
            ease: "power3.inOut",
            onComplete: () => setVisible(false),
          });
        },
      });

      tl.from(".loader-word", {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 0.55,
        ease: "power3.out",
      })
        .to(
          barRef.current,
          { scaleX: 1, duration: 1.35, ease: "power2.inOut" },
          "-=0.15",
        )
        .to(
          ".loader-glitch",
          {
            x: 4,
            duration: 0.05,
            repeat: 7,
            yoyo: true,
            ease: "none",
          },
          "+=0.05",
        );
    }, rootRef);

    return () => ctx.revert();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bg-dark"
      role="status"
      aria-live="polite"
      aria-label="Chargement"
    >
      <div className="loader-glitch mb-10 flex flex-wrap justify-center gap-4 font-syne text-3xl font-extrabold tracking-tight text-gold sm:text-5xl">
        {WORDS.map((w, wi) => (
          <span key={wi} className="inline-flex gap-[0.12em]">
            {w.split("").map((ch, ci) => (
              <span key={`${wi}-${ci}`} className="loader-word inline-block">
                {ch}
              </span>
            ))}
          </span>
        ))}
      </div>
      <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10 sm:w-72">
        <div
          ref={barRef}
          className="h-full w-full rounded-full bg-gradient-to-r from-gold via-cyan-tech to-green-neon"
        />
      </div>
      <p className="mt-6 font-mono text-xs text-text-muted">
        Initialisation de l&apos;expérience…
      </p>
    </div>
  );
}
