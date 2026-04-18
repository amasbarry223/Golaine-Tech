"use client";

import { useGsapPlugins } from "@/hooks/useGsapPlugins";
import { CONTACT_EMAIL, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  useGsapPlugins();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const logoPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!logoPathRef.current) return;
    const len = logoPathRef.current.getTotalLength?.() ?? 400;
    gsap.set(logoPathRef.current, {
      strokeDasharray: len,
      strokeDashoffset: len,
    });
    gsap.to(logoPathRef.current, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: "power2.inOut",
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 transition-[padding] duration-300 ease-out",
          open ? "z-[960]" : "z-[900]",
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl px-4 transition-[padding] md:px-8",
            scrolled ? "py-2.5 md:py-3" : "py-3.5 md:py-4",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between gap-3 md:gap-6",
              "transition-all duration-300 ease-out",
              scrolled
                ? "rounded-2xl border border-white/10 bg-bg-dark/80 px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-5 md:py-3"
                : "border-b border-white/[0.06] bg-bg-dark/20 px-1 py-1 backdrop-blur-sm md:border-transparent md:bg-transparent md:px-2 md:py-0 md:backdrop-blur-none",
            )}
          >
            <Link
              href="/"
              aria-label={`${SITE_NAME}, retour à l'accueil`}
              className="group flex min-w-0 items-center gap-2.5 font-syne text-base font-bold tracking-tight text-text-primary md:gap-3 md:text-lg"
              data-magnetic
            >
              <svg
                width="44"
                height="33"
                viewBox="0 0 48 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-gold"
                aria-hidden
              >
                <path
                  ref={logoPathRef}
                  d="M4 18C4 10 10 4 18 4H32C40 4 46 10 46 18C46 26 40 32 32 32H18C10 32 4 26 4 18Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              <span className="truncate sm:max-w-none">
                <span className="sm:hidden" aria-hidden>
                  G•TECH
                </span>
                <span className="hidden sm:inline">{SITE_NAME}</span>
              </span>
            </Link>

            <nav
              className="hidden items-center gap-0.5 md:flex"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => {
                const active = isNavActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-xl px-3 py-2 font-dm text-sm transition-colors",
                      "hover:bg-white/[0.06] hover:text-text-primary",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60",
                      active
                        ? "text-gold"
                        : "text-text-muted",
                    )}
                    data-magnetic
                  >
                    <span className="flex items-center gap-2">
                      {active && (
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden
                        />
                      )}
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/contact"
                className={cn(
                  "hidden items-center gap-1.5 rounded-full border px-4 py-2 font-dm text-sm font-semibold transition-colors sm:inline-flex",
                  "border-gold/40 bg-gold/10 text-gold hover:border-gold/60 hover:bg-gold/15",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/50",
                  pathname === "/contact" && "border-gold/70 bg-gold/20",
                )}
              >
                Contact
                <ArrowUpRight className="h-4 w-4 opacity-80" aria-hidden />
              </Link>

              <button
                type="button"
                className={cn(
                  "relative flex h-11 w-11 items-center justify-center rounded-xl border transition-colors md:hidden",
                  open
                    ? "border-gold/40 bg-gold/10 text-gold"
                    : "border-white/10 bg-white/[0.04] text-text-primary hover:border-white/20",
                )}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? (
                  <X className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <Menu className="h-5 w-5" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav-layer"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[940] md:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-bg-dark/65 backdrop-blur-sm"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[1] max-h-[min(100dvh,100vh)] overflow-y-auto border-b border-white/10 bg-bg-dark/98 px-5 pb-10 pt-[4.75rem] shadow-2xl backdrop-blur-2xl"
            >
              <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
                {NAV_LINKS.map((link, i) => {
                  const active = isNavActive(pathname, link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-3.5 font-syne text-2xl font-semibold transition-colors",
                          active ? "text-gold" : "text-text-primary",
                          "hover:bg-white/[0.04]",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/50",
                        )}
                      >
                        {link.label}
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-gold" aria-hidden />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-gold/45 bg-gold/12 py-4 font-syne text-base font-semibold text-gold transition-colors hover:bg-gold/20"
                >
                  Démarrer un projet
                  <ArrowUpRight className="h-5 w-5" aria-hidden />
                </Link>
                <p className="text-center font-mono text-xs text-text-muted">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold/90 hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
