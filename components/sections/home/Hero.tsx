"use client";

import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 6500;

const SLIDES = [
  {
    id: "s1",
    badge: "Innovation numérique",
    title: "Transformez votre",
    titleAccent: "vision digitale",
    subtitle:
      "Stratégie, design et ingénierie pour des produits qui durent et scalent avec vous.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=85",
    accent: "gradient" as const,
  },
  {
    id: "s2",
    badge: "IA & automatisation",
    title: "L'intelligence au service",
    titleAccent: "de vos métiers",
    subtitle:
      "Assistants, workflows et données : nous intégrons l’IA là où le ROI est mesurable.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85",
    accent: "cyan" as const,
  },
  {
    id: "s3",
    badge: "Design & expérience",
    title: "Des interfaces",
    titleAccent: "premium & performantes",
    subtitle:
      "UI/UX orientée conversion, accessibilité et vitesse — du prototype au design system.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=85",
    accent: "gold" as const,
  },
  {
    id: "s4",
    badge: "Projets sur mesure",
    title: "De l'idée à la",
    titleAccent: "mise en production",
    subtitle:
      "Web, mobile et logiciels métiers : une équipe engagée jusqu’au run et au-delà.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85",
    accent: "green" as const,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const touchStart = useRef<number | null>(null);

  const effectivePaused = userPaused || hovering;

  const count = SLIDES.length;
  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (reduceMotion || effectivePaused) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [effectivePaused, reduceMotion, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const end = e.changedTouches[0]?.clientX ?? touchStart.current;
    const dx = end - touchStart.current;
    touchStart.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const slide = SLIDES[index];

  return (
    <section
      className="relative isolate min-h-[92vh] overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Présentation Golaïne Tech"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${index * (100 / count)}%` }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 260, damping: 32, mass: 0.9 }
          }
          style={{ width: `${count * 100}%` }}
        >
          {SLIDES.map((s) => (
            <div
              key={s.id}
              className="relative h-full min-h-[92vh] shrink-0 overflow-hidden"
              style={{ width: `${100 / count}%` }}
            >
              <Image
                src={s.image}
                alt=""
                fill
                priority={s.id === "s1"}
                className="object-cover motion-safe:animate-hero-ken"
                sizes="100vw"
              />
              {/* Dégradés sombres pour lisibilité du texte au centre */}
              <div
                className="pointer-events-none absolute inset-0 bg-black/50"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-bg-primary/95"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_42%,rgba(5,10,14,0.15)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.75)_100%)]"
                aria-hidden
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.08]" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col px-4 pb-10 pt-28 md:px-8 lg:pt-32">
        {/* Bloc texte centré verticalement et horizontalement */}
        <div className="flex flex-1 flex-col items-center justify-center py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 24, filter: "blur(8px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: -12, filter: "blur(6px)" }
              }
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-4xl space-y-6 text-center"
            >
              <div className="flex justify-center">
                <Badge>{slide.badge}</Badge>
              </div>

              <h1
                id="hero-title"
                className="font-syne text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] sm:text-6xl lg:text-7xl"
              >
                <span className="block">{slide.title}</span>
                <span
                  className={cn(
                    "mt-2 block drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] sm:mt-3",
                    slide.accent === "gradient" &&
                      "bg-gradient-to-r from-gold via-cyan-tech to-green-neon bg-clip-text text-transparent",
                    slide.accent === "cyan" && "text-cyan-tech",
                    slide.accent === "gold" && "text-gold",
                    slide.accent === "green" && "text-green-neon",
                  )}
                >
                  {slide.titleAccent}
                </span>
              </h1>

              <p className="mx-auto max-w-2xl font-dm text-lg leading-relaxed text-text-primary/95 sm:text-xl">
                {slide.subtitle}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  data-magnetic
                  className={cn(
                    "inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 font-syne text-sm font-semibold text-bg-dark transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(201,168,76,0.4)] focus-ring",
                  )}
                >
                  Démarrer un projet →
                </Link>
                <Link
                  href="/projets"
                  data-magnetic
                  className={cn(
                    "inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border border-white/35 bg-black/25 px-8 py-3.5 font-syne text-sm font-semibold text-text-primary backdrop-blur-sm transition-colors hover:border-gold/50 hover:bg-white/10 focus-ring",
                  )}
                >
                  Voir nos réalisations
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-auto flex flex-col items-center gap-8 pb-2">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-bg-dark/50 text-text-primary backdrop-blur-md transition-colors hover:border-gold/40 hover:text-gold focus-ring"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-bg-dark/50 text-text-primary backdrop-blur-md transition-colors hover:border-gold/40 hover:text-gold focus-ring"
              aria-label="Slide suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-muted hover:text-text-primary focus-ring"
              aria-pressed={userPaused}
              aria-label={userPaused ? "Activer le défilement auto" : "Pause du défilement"}
            >
              {userPaused ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <div
              className="flex flex-wrap justify-center gap-2 sm:justify-end"
              role="tablist"
              aria-label="Choisir un slide"
            >
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Slide ${i + 1} : ${s.badge}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "group relative h-2 overflow-hidden rounded-full transition-all duration-300",
                    i === index
                      ? "w-10 bg-gold/40"
                      : "w-2 bg-white/20 hover:bg-white/35",
                  )}
                >
                  {i === index && !reduceMotion && (
                    <motion.span
                      className="absolute inset-y-0 left-0 bg-gold"
                      initial={{ width: "0%" }}
                      animate={{ width: effectivePaused ? "40%" : "100%" }}
                      transition={{
                        duration: effectivePaused ? 0.25 : AUTOPLAY_MS / 1000,
                        ease: "linear",
                      }}
                      key={`${index}-${effectivePaused}`}
                    />
                  )}
                </button>
              ))}
            </div>
            <span className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-text-primary/80 sm:text-right">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-text-primary/80">
          <ChevronDown className="h-4 w-4 animate-bounce text-gold" aria-hidden />
          Découvrir
        </div>
        </div>
      </div>
    </section>
  );
}
