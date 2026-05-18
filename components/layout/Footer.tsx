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
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { Icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { Icon: FaGithub, href: "#", label: "GitHub" },
  { Icon: FaFacebook, href: "#", label: "Facebook" },
] as const;

const FOOTER_SERVICES = SERVICES.slice(0, 6);

export default function Footer() {
  const [bamakoTime, setBamakoTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("fr-FR", {
          timeZone: "Africa/Bamako",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setBamakoTime(formatter.format(now));
      } catch (e) {
        // Fallback to UTC if timezone formatting is unsupported
        const now = new Date();
        setBamakoTime(now.toUTCString().slice(17, 25));
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-bg-dark">
      {/* Background ambient glowing mesh gradients */}
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-gold/10 opacity-30 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -top-48 -right-48 h-96 w-96 rounded-full bg-cyan-tech/10 opacity-20 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" aria-hidden />

      {/* Premium top ticker */}
      <MarqueeTicker />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-8">
        
        {/* Interactive CTA Banner with glassmorphism */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01] p-8 md:p-12 mb-20 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-cyan-tech/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gold/15 blur-[60px] transition-all duration-700 group-hover:scale-125" />
          
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                <Sparkles className="h-3 w-3 animate-pulse" />
                Collaborons ensemble
              </span>
              <h3 className="mt-4 font-syne text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                Prêt à donner vie à vos projets d&apos;innovation ?
              </h3>
              <p className="mt-2 text-text-muted text-sm md:text-base leading-relaxed">
                De la stratégie digitale sur mesure au développement d&apos;expertises pointues, nous propulsons votre transition numérique au Mali et à l&apos;international.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-7 py-4 font-mono text-sm font-semibold text-bg-dark transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <span>Discutons de votre projet</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand details column */}
          <div className="lg:pr-4">
            <Link
              href="/"
              className="font-syne text-2xl font-bold tracking-tight text-text-primary transition-colors hover:text-gold"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {SITE_TAGLINE}
            </p>
            
            {/* Bamako, Mali Live Clock Badge */}
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] py-2 px-4 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-neon opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-neon"></span>
              </span>
              <span className="font-mono text-xs text-text-muted">
                Bamako, Mali • {bamakoTime || "--:--:--"} GMT
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted/60">
                Rejoignez-nous
              </p>
              <div className="mt-3 flex gap-2">
                {SOCIALS.map(({ Icon, href, label }) => {
                  const isPlaceholder = href === "#";
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      {...(!isPlaceholder
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : { "aria-disabled": true })}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.01] text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/5 hover:text-gold"
                    >
                      <Icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-[360deg]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-gold/80 font-semibold">
              Navigation
            </h4>
            <ul className="mt-6 space-y-3.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    <span className="h-1.5 w-0 rounded-full bg-gold mr-0 opacity-0 transition-all duration-300 group-hover:w-1.5 group-hover:mr-2 group-hover:opacity-100" />
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-gold/80 font-semibold">
              Expertises
            </h4>
            <ul className="mt-6 space-y-3.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="group inline-flex items-center text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    <span className="h-1.5 w-0 rounded-full bg-cyan-tech mr-0 opacity-0 transition-all duration-300 group-hover:w-1.5 group-hover:mr-2 group-hover:opacity-100" />
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      {s.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-gold/90 transition-colors hover:text-gold"
            >
              Tous nos services
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Contact details glassmorphic card */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-gold/80 font-semibold">
              Contact
            </h4>
            <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.01] p-5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]">
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group flex items-start gap-3 text-xs text-text-muted transition-colors hover:text-text-primary"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-gold transition-colors group-hover:border-gold/30 group-hover:bg-gold/5">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 break-all pt-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                      {CONTACT_EMAIL}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="group flex items-start gap-3 text-xs text-text-muted transition-colors hover:text-text-primary"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-cyan-tech transition-colors group-hover:border-cyan-tech/40 group-hover:bg-cyan-tech/5">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="pt-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                      {CONTACT_PHONE}
                    </span>
                  </a>
                </li>
                <li>
                  <div className="group flex items-start gap-3 text-xs text-text-muted">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-green-neon">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <span className="pt-1.5 leading-snug">{CONTACT_ADDRESS}</span>
                  </div>
                </li>
                <li>
                  <div className="group flex items-start gap-3 text-xs text-text-muted">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-text-primary/75">
                      <Clock className="h-3.5 w-3.5" />
                    </span>
                    <span className="pt-1.5 leading-snug">
                      Lun – Ven · 9h – 18h
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive elegant display footer brand header (WOW factor) */}
        <div className="relative mt-24 overflow-hidden pointer-events-none select-none">
          <h2 className="font-syne font-extrabold text-[12vw] leading-none text-center text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/[0.005] tracking-tighter uppercase transition-colors duration-1000 hover:text-white/20">
            {SITE_NAME}
          </h2>
        </div>

        {/* Lower bar: copyright & legal links */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="text-center text-xs text-text-muted md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-syne font-semibold text-text-primary">
              {SITE_NAME}
            </span>
            . Tous droits réservés.
          </p>
          
          <nav
            aria-label="Informations légales"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-muted md:justify-end"
          >
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-text-primary hover:underline"
            >
              Mentions légales
            </Link>
            <span className="text-white/10" aria-hidden>
              |
            </span>
            <Link
              href="/politique-confidentialite"
              className="transition-colors hover:text-text-primary hover:underline"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
