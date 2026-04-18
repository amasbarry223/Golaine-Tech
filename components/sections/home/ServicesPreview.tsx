"use client";

import Card from "@/components/ui/Card";
import { HOME_SERVICES_PREVIEW } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DECOR_IMAGES = [
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
];

export default function ServicesPreview() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
            Services
          </p>
          <h2 className="mt-3 font-syne text-3xl font-bold text-text-primary sm:text-4xl">
            Une suite complète pour votre transformation numérique
          </h2>
          <p className="mt-4 text-text-muted">
            De la stratégie à l&apos;exécution : nous combinons design, ingénierie et
            IA pour des produits digitaux durables.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES_PREVIEW.map((s, idx) => {
            const Icon = s.icon;
            const decor = DECOR_IMAGES[idx % DECOR_IMAGES.length];
            return (
              <motion.div
                key={s.slug}
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/20" />
                  </div>
                  <div className="relative flex h-full flex-col gap-4 p-6">
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
                      <p className="mt-2 text-sm text-text-muted">{s.short}</p>
                    </div>
                    <Link
                      href="/services"
                      className="mt-auto inline-flex items-center gap-2 font-mono text-xs text-gold transition-transform group-hover:translate-x-1"
                    >
                      En savoir plus
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
