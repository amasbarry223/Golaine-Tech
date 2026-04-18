"use client";

import type { PortfolioProject, ProjectCategory } from "@/lib/constants";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useMemo, useState } from "react";

const FILTERS: Array<ProjectCategory | "Tous"> = [
  "Tous",
  "Web",
  "Mobile",
  "IA",
  "Design",
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const [active, setActive] = useState<PortfolioProject | null>(null);

  const filtered = useMemo(() => {
    if (filter === "Tous") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "relative rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
              filter === f
                ? "text-bg-dark"
                : "text-text-muted hover:text-text-primary",
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gold"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {filtered.map((p) => (
          <motion.button
            type="button"
            key={p.id}
            layout
            onClick={() => setActive(p)}
            className="group mb-6 break-inside-avoid w-full overflow-hidden rounded-2xl border border-white/10 text-left"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={p.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <p className="font-syne text-lg font-semibold text-text-primary">
                    {p.title}
                  </p>
                  <p className="text-xs text-text-muted">{p.category}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-bg-dark">
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[960] flex items-center justify-center bg-bg-dark/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-bg-secondary p-6 md:p-10"
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-text-muted hover:text-text-primary"
                onClick={() => setActive(null)}
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={active.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-gold">
                {active.category} · {active.year}
              </p>
              <h2
                id="project-title"
                className="mt-2 font-syne text-3xl font-bold text-text-primary"
              >
                {active.title}
              </h2>
              <p className="mt-1 text-sm text-text-muted">Client : {active.client}</p>
              <p className="mt-6 text-text-muted">{active.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {active.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-cyan-tech"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {active.url && (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-gold hover:underline"
                >
                  Visiter le site
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
