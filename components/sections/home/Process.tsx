"use client";

import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Code, Ear, PenTool, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STEPS = [
  {
    n: "01",
    title: "Écoute & Analyse",
    icon: Ear,
    text: "Ateliers, audit et cadrage : besoins métiers, contraintes et indicateurs de succès.",
  },
  {
    n: "02",
    title: "Conception",
    icon: PenTool,
    text: "UX/UI, architecture et backlog priorisé — prototypes testables avant développement.",
  },
  {
    n: "03",
    title: "Développement",
    icon: Code,
    text: "Itérations courtes, revue de code et environnements de recette pour une qualité maîtrisée.",
  },
  {
    n: "04",
    title: "Livraison & Suivi",
    icon: Rocket,
    text: "Mise en production, monitoring, formation et amélioration continue avec vos équipes.",
  },
] as const;

/** Visuels distincts de la grille Services pour varier le rythme visuel */
const DECOR_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
];

export default function Process() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
            Méthodologie
          </p>
          <h2 className="mt-3 font-syne text-3xl font-bold text-text-primary sm:text-4xl">
            Un processus clair, piloté par la donnée et le design
          </h2>
          <p className="mt-4 text-text-muted">
            De l&apos;expression du besoin à la valeur en production : jalons visibles,
            livrables testables et transparence à chaque étape — sur le même rythme que
            nos livraisons produit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const decor = DECOR_IMAGES[idx % DECOR_IMAGES.length];
            return (
              <motion.div
                key={s.n}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <Card className="group relative h-full overflow-hidden border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-0">
                  <div className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50">
                    <Image
                      src={decor}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/20" />
                  </div>
                  <div className="relative flex h-full flex-col gap-4 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-gold">{s.n}</span>
                    </div>
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-bg-dark/60 text-gold",
                      )}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-syne text-lg font-semibold text-text-primary">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted">{s.text}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-2 font-mono text-xs text-gold transition-transform group-hover:translate-x-1"
                    >
                      Parlons de votre projet
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
