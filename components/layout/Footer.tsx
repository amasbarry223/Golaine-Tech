"use client";

import MarqueeTicker from "@/components/ui/MarqueeTicker";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  NAV_LINKS,
  SERVICES,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { Icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { Icon: FaGithub, href: "#", label: "GitHub" },
  { Icon: FaFacebook, href: "#", label: "Facebook" },
] as const;

const FOOTER_SERVICES = SERVICES.slice(0, 6);

const linkClass =
  "text-text-muted transition-colors hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/40";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-bg-night">
      <div
        className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-[0.12]"
        aria-hidden
      />
      <MarqueeTicker />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-4 md:px-8 md:pb-16 md:pt-6">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          aria-hidden
        />

        <div className="mt-12 flex flex-col gap-12 lg:mt-14 lg:flex-row lg:gap-14 xl:gap-20">
          <div className="lg:max-w-sm lg:shrink-0">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
              <Link
                href="/"
                className="font-syne text-xl font-bold tracking-tight text-text-primary transition-colors hover:text-gold"
              >
                {SITE_NAME}
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {SITE_TAGLINE}
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-sm font-medium text-gold transition-colors hover:border-gold/60 hover:bg-gold/15 sm:w-auto"
              >
                Discutons de votre projet
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-muted">
                  Suivez-nous
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SOCIALS.map(({ Icon, href, label }) => {
                    const placeholder = href === "#";
                    return (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        {...(!placeholder
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : { "aria-disabled": true })}
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-bg-night/80 text-text-muted transition-colors",
                          placeholder
                            ? "pointer-events-none cursor-not-allowed opacity-35"
                            : "hover:border-gold/35 hover:text-gold",
                        )}
                      >
                        <Icon className="h-[18px] w-[18px]" aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <nav aria-labelledby="footer-nav-heading">
              <h2
                id="footer-nav-heading"
                className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80"
              >
                Navigation
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-services-heading">
              <h2
                id="footer-services-heading"
                className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80"
              >
                Expertises
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                {FOOTER_SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services#${s.slug}`} className={linkClass}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-gold/90 transition-colors hover:text-gold"
              >
                Tous les services
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </nav>

            <div
              className="sm:col-span-2 lg:col-span-1"
              id="footer-contact"
            >
              <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
                Contact
              </h2>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="group flex gap-3 text-text-muted transition-colors hover:text-text-primary"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-bg-night/60 text-gold transition-colors group-hover:border-gold/30">
                        <Mail className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0 break-all pt-1.5">
                        {CONTACT_EMAIL}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                      className="group flex gap-3 text-text-muted transition-colors hover:text-text-primary"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-bg-night/60 text-cyan-tech transition-colors group-hover:border-cyan-tech/40">
                        <Phone className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="pt-1.5">{CONTACT_PHONE}</span>
                    </a>
                  </li>
                  <li>
                    <div className="flex gap-3 text-text-muted">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-bg-night/60 text-green-neon">
                        <MapPin className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="pt-1.5 leading-snug">{CONTACT_ADDRESS}</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 text-text-muted">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-bg-night/60">
                        <Clock
                          className="h-4 w-4 text-text-primary/75"
                          aria-hidden
                        />
                      </span>
                      <span className="pt-1.5 text-xs leading-snug">
                        Lun – Ven · 9h – 18h (GMT)
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="text-center text-xs text-text-muted md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-syne font-semibold text-text-primary">
              {SITE_NAME}
            </span>
            . Tous droits réservés.
          </p>
          <nav
            aria-label="Informations légales"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-text-muted md:justify-end"
          >
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-text-primary"
            >
              Mentions légales
            </Link>
            <span className="text-white/20" aria-hidden>
              |
            </span>
            <Link
              href="/politique-confidentialite"
              className="transition-colors hover:text-text-primary"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
