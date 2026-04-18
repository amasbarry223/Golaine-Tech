import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Informations légales — ${SITE_NAME}.`,
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-8">
      <nav className="font-mono text-xs text-gold/80">
        <Link href="/" className="hover:text-gold">
          Accueil
        </Link>
        <span className="mx-2 text-text-muted">/</span>
        <span className="text-text-muted">Mentions légales</span>
      </nav>
      <h1 className="mt-8 font-syne text-3xl font-bold text-text-primary md:text-4xl">
        Mentions légales
      </h1>
      <p className="mt-6 text-text-muted">
        Cette page sera complétée avec l&apos;identité de l&apos;éditeur, l&apos;hébergeur,
        la propriété intellectuelle et les conditions d&apos;utilisation conformément à la
        réglementation applicable.
      </p>
      <p className="mt-4 text-sm text-text-muted">
        Pour toute question :{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
