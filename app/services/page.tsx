import ScrollProgress from "@/components/sections/services/ScrollProgress";
import ServiceList from "@/components/sections/services/ServiceList";
import SpecialServices from "@/components/sections/services/SpecialServices";
import { SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Développement web & mobile, IA, design, formations et infrastructure — l’offre complète Golaïne Tech.",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/20 via-bg-dark/85 to-bg-dark" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <nav aria-label="Fil d'Ariane" className="font-mono text-xs text-gold/80">
            <Link href="/" className="hover:text-gold">
              Accueil
            </Link>
            <span className="mx-2 text-text-muted">/</span>
            <span className="text-text-muted">Services</span>
          </nav>
          <h1 className="mt-6 max-w-3xl font-syne text-4xl font-bold text-text-primary sm:text-5xl">
            Nos services
          </h1>
          <p className="mt-4 max-w-2xl text-text-muted">
            Des équipes pluridisciplinaires pour concevoir, bâtir et faire évoluer
            vos produits numériques — avec une exigence de qualité constante.
          </p>
        </div>
      </section>

      <ServiceList />
      <SpecialServices />

      <div className="mx-auto max-w-7xl px-4 pb-20 text-center text-sm text-text-muted md:px-8">
        Une question sur une offre ?{" "}
        <Link href="/contact" className="text-gold hover:underline">
          Contactez {SITE_NAME}
        </Link>
        .
      </div>
    </>
  );
}
