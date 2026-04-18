import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et données personnelles — ${SITE_NAME}.`,
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-8">
      <nav className="font-mono text-xs text-gold/80">
        <Link href="/" className="hover:text-gold">
          Accueil
        </Link>
        <span className="mx-2 text-text-muted">/</span>
        <span className="text-text-muted">Politique de confidentialité</span>
      </nav>
      <h1 className="mt-8 font-syne text-3xl font-bold text-text-primary md:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-6 text-text-muted">
        Cette page détaillera le traitement des données collectées via le site et le
        formulaire de contact (finalités, base légale, durées de conservation, droits
        RGPD, cookies le cas échéant).
      </p>
      <p className="mt-4 text-sm text-text-muted">
        Contact RGPD :{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
