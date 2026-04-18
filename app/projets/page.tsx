import PortfolioGrid from "@/components/sections/projets/PortfolioGrid";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection de réalisations web, mobile, IA et design — Golaïne Tech.",
};

export default function ProjetsPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1600&q=80"
            alt=""
            fill
            className="object-cover opacity-35"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/85 to-bg-dark" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-28">
          <h1 className="font-syne text-4xl font-bold text-text-primary sm:text-5xl">
            Projets & réalisations
          </h1>
          <p className="mt-4 max-w-2xl text-text-muted">
            Des produits digitaux conçus pour durer : performance, esthétique et
            impact business.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-16 md:px-8">
        <PortfolioGrid />
      </div>
    </div>
  );
}
