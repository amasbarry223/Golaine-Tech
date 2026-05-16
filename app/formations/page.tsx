"use client";

import { FORMATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const levelStyle: Record<string, string> = {
  Débutant: "border-green-neon/40 bg-green-neon/10 text-green-neon",
  Intermédiaire: "border-cyan-tech/40 bg-cyan-tech/10 text-cyan-tech",
  Expert: "border-gold/40 bg-gold/10 text-gold",
};

export default function FormationsPage() {
  const [openId, setOpenId] = useState<string | null>(FORMATIONS[0]?.id ?? null);

  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/40 via-bg-dark/85 to-bg-dark" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-28">
          <h1 className="font-syne text-4xl font-bold text-text-primary sm:text-5xl">
            Formations IA & Tech
          </h1>
          <p className="mt-4 max-w-2xl text-text-muted">
            Des parcours concrets pour monter en compétence rapidement — du
            no-code à l’ingénierie avancée.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-6">
          {FORMATIONS.map((f) => {
            const open = openId === f.id;
            return (
              <div
                key={f.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : f.id)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <div>
                    <span
                      className={cn(
                        "inline-block rounded-full border px-3 py-1 font-mono text-xs",
                        levelStyle[f.level] ?? "border-white/20 text-text-muted",
                      )}
                    >
                      {f.level}
                    </span>
                    <h2 className="mt-3 font-syne text-xl font-semibold text-text-primary md:text-2xl">
                      {f.title}
                    </h2>
                    <p className="mt-2 text-sm text-text-muted">{f.summary}</p>
                    <p className="mt-3 font-mono text-xs text-text-muted">
                      {f.durationDays} jours · max. {f.maxParticipants} participants ·{" "}
                      {f.priceLabel}
                    </p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-6 w-6 shrink-0 text-gold transition-transform",
                      open && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <ul className="space-y-2 px-6 py-4 pb-6 text-sm text-text-muted">
                        {f.program.map((line) => (
                          <li key={line} className="flex gap-2">
                            <span className="text-gold">—</span>
                            {line}
                          </li>
                        ))}
                      </ul>
                      <div className="px-6 pb-6">
                        <Link
                          href="/contact"
                          className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-5 py-2 font-mono text-xs text-gold hover:bg-gold/20"
                        >
                          S&apos;inscrire
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/5 px-4 py-16 md:px-8">
        <h2 className="font-syne text-2xl font-bold text-text-primary">
          Pourquoi nos formations
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Experts terrain",
            "Supports à jour",
            "Mises en situation",
            "Suivi post-formation",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-5"
            >
              <p className="font-syne font-semibold text-text-primary">{t}</p>
              <p className="mt-2 text-sm text-text-muted">
                Pensé pour des équipes opérationnelles, pas seulement théoriques.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
