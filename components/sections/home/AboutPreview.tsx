"use client";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&q=85";

const POINTS = [
  "Stratégie produit, design UI/UX et développement web & mobile",
  "Intégration d’IA et d’automatisation là où le ROI est clair",
  "Accompagnement jusqu’au run : maintenance, évolutions, transfert de compétences",
];

export default function AboutPreview() {
  return (
    <section className="relative py-28 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-x-10">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
              À propos
            </p>
            <h2 className="mt-3 font-syne text-3xl font-bold text-text-primary sm:text-4xl">
              {SITE_NAME} : l&apos;alliance du sens et de la rigueur technique
            </h2>
            <p className="mt-4 text-text-muted">
              {SITE_TAGLINE} Nous construisons des produits numériques fiables, beaux et
              alignés sur vos objectifs business.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Notre méthode associe cadrage, prototypage et livraisons itératives : vous
              voyez vite une première version utile, puis nous la renforçons avec la mesure
              et le feedback terrain. Chaque jalon est explicite — budget, délais et périmètre
              restent lisibles tout au long du projet.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Nous intervenons auprès des équipes métiers comme des directions techniques :
              ateliers, documentation et transfert pour que vos collaborateurs restent
              autonomes après le go-live.
            </p>

            <ul className="mt-6 space-y-2.5 border-l border-gold/25 pl-4">
              {POINTS.map((line) => (
                <li key={line} className="flex gap-2.5 text-sm text-text-muted">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold/90"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-6 py-3 font-mono text-sm font-medium text-gold transition-colors hover:border-gold/60 hover:bg-gold/15"
              >
                En savoir plus sur notre histoire
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:h-full lg:min-h-0"
          >
            <div
              className="pointer-events-none absolute -left-2 -top-2 z-[1] h-20 w-20 rounded-2xl border border-gold/25 bg-gold/5 sm:-left-3 sm:-top-3 sm:h-24 sm:w-24 md:-left-4 md:-top-4"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-2 -right-2 z-[1] h-24 w-24 rounded-full border border-white/10 bg-white/[0.02] sm:-bottom-3 sm:-right-3 sm:h-32 sm:w-32 md:-bottom-4 md:-right-4"
              aria-hidden
            />
            {/* Mobile : ratio stable ; desktop : même hauteur que la colonne texte */}
            <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-bg-dark/40 shadow-[0_24px_80px_rgba(0,0,0,0.45)] lg:aspect-auto lg:max-w-none lg:h-full">
              <Image
                src={ABOUT_IMAGE}
                alt="Équipe collaborant sur un projet numérique"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-mono text-xs text-white/85 md:bottom-5 md:left-5 md:right-5 md:text-sm">
                Collaboration, exigence et produits pensés pour durer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
