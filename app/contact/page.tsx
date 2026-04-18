import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet — formulaire, coordonnées et localisation Golaïne Tech.",
};

const CONTACT_ITEMS = [
  {
    key: "email",
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    value: CONTACT_EMAIL,
    icon: Mail,
    iconClass: "border-gold/30 bg-gold/10 text-gold",
  },
  {
    key: "phone",
    label: "Téléphone",
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
    value: CONTACT_PHONE,
    icon: Phone,
    iconClass: "border-cyan-tech/30 bg-cyan-tech/10 text-cyan-tech",
  },
  {
    key: "address",
    label: "Adresse",
    href: null as string | null,
    value: CONTACT_ADDRESS,
    icon: MapPin,
    iconClass: "border-green-neon/30 bg-green-neon/10 text-green-neon",
  },
  {
    key: "hours",
    label: "Horaires",
    href: null as string | null,
    value: "Lun – Ven · 9h – 18h (GMT)",
    icon: Clock,
    iconClass: "border-white/15 bg-white/5 text-text-primary",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/80 to-bg-dark" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <nav aria-label="Fil d'Ariane" className="font-mono text-xs text-gold/80">
            <Link href="/" className="transition-colors hover:text-gold">
              Accueil
            </Link>
            <span className="mx-2 text-text-muted">/</span>
            <span className="text-text-muted">Contact</span>
          </nav>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl font-syne text-4xl font-bold text-text-primary sm:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Une idée, un cahier des charges ou simplement l&apos;envie d&apos;aller plus
            vite : décrivez-nous le contexte — nous revenons vers vous avec une proposition
            claire.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-1 space-y-10 lg:order-2 lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8 lg:p-10">
                <header className="border-b border-white/10 pb-6">
                  <h2 className="font-syne text-2xl font-bold text-text-primary md:text-3xl">
                    Envoyer un message
                  </h2>
                  <p className="mt-2 text-sm text-text-muted md:text-base">
                    Réponse habituelle sous 48&nbsp;h ouvrées. Vos données servent
                    uniquement à traiter cette demande (voir case RGPD ci-dessous).
                  </p>
                </header>
                <div className="pt-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            <aside className="order-2 space-y-8 lg:order-1 lg:col-span-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
                  Coordonnées
                </p>
                <h2 className="mt-2 font-syne text-2xl font-bold text-text-primary">
                  Comment nous joindre
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Préférez l&apos;email pour les premiers échanges documentés ; le téléphone
                  pour un point rapide. Rendez-vous sur place sur rendez-vous.
                </p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <>
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${item.iconClass}`}
                        >
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        {item.href ? (
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 text-text-muted opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                          />
                        ) : null}
                      </div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-wider text-text-muted">
                        {item.label}
                      </p>
                      <p
                        className={cn(
                          "text-sm font-medium leading-snug text-text-primary",
                          item.href && "transition-colors group-hover:text-gold",
                        )}
                      >
                        {item.value}
                      </p>
                    </>
                  );

                  const cardClass =
                    "group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-colors hover:border-white/20";

                  if (item.href) {
                    return (
                      <li key={item.key}>
                        <a href={item.href} className={cardClass}>
                          {inner}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={item.key}>
                      <div className={cardClass}>{inner}</div>
                    </li>
                  );
                })}
              </ul>

              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Espace de travail collaboratif"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs text-text-muted">
                  Ateliers et cadrage — en présentiel ou à distance.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-map-heading"
        className="border-t border-white/5 bg-bg-secondary/30"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
              Localisation
            </p>
            <h2
              id="contact-map-heading"
              className="mt-2 font-syne text-2xl font-bold text-text-primary md:text-3xl"
            >
              Nous localiser
            </h2>
            <p className="mt-3 text-text-muted">
              Repère indicatif — les rendez-vous physiques se planifient au préalable.
            </p>
          </div>
          <div className="mt-8">
            <ContactMap />
          </div>
        </div>
      </section>
    </div>
  );
}
