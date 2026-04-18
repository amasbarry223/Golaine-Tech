"use client";

import Card from "@/components/ui/Card";
import { SITE_NAME, TEAM } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  Compass,
  Heart,
  Sparkles,
  Target,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const ABOUT_STATS = [
  { value: "150+", label: "Projets livrés" },
  { value: "5+", label: "Années d’impact" },
  { value: "12+", label: "Pays accompagnés" },
] as const;

const GOLLAL_VALUES = [
  {
    title: "Excellence",
    text: "Des livrables qui tiennent la route : code, design, communication et transparence.",
    icon: Award,
    accent: "gold" as const,
  },
  {
    title: "Persévérance",
    text: "Nous restons mobilisés jusqu’à l’impact mesurable — au-delà du go-live.",
    icon: Heart,
    accent: "cyan" as const,
  },
  {
    title: "Qualité",
    text: "Tests, accessibilité, sécurité : des standards non négociables à chaque étape.",
    icon: Target,
    accent: "green" as const,
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: easeOut },
  }),
};

export default function AProposPage() {
  return (
    <div className="pb-0">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/50 via-bg-dark/88 to-bg-dark" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-28">
          <nav
            aria-label="Fil d'Ariane"
            className="font-mono text-xs text-gold/80"
          >
            <Link href="/" className="transition-colors hover:text-gold">
              Accueil
            </Link>
            <span className="mx-2 text-text-muted">/</span>
            <span className="text-text-muted">À propos</span>
          </nav>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
            À propos
          </p>
          <h1 className="mt-4 max-w-3xl font-syne text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Notre histoire,{" "}
            <span className="bg-gradient-to-r from-gold to-cyan-tech bg-clip-text text-transparent">
              votre succès
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-muted">
            Une équipe engagée pour vos projets digitaux — de la stratégie à
            l&apos;exécution.
          </p>
        </div>
      </section>

      <section className="border-b border-white/5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85"
              alt="Collaboration et travail d&apos;équipe autour de solutions numériques"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/50 via-transparent to-transparent" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
              Présentation
            </p>
            <h2 className="mt-3 font-syne text-2xl font-bold text-text-primary sm:text-3xl">
              Golaïne Tech en quelques mots
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted md:text-lg">
              <strong className="font-semibold text-text-primary">
                Golaïne Tech
              </strong>{" "}
              est une{" "}
              <span className="text-text-primary/95">plateforme d&apos;innovation</span>{" "}
              spécialisée dans la transformation numérique : nous aidons les entreprises
              (et leurs équipes) à concevoir des solutions digitales sur mesure, améliorer
              leurs performances, automatiser leurs processus et exploiter des technologies
              modernes — web, mobile, IA, formations, maintenance, design, sécurité et
              téléphonie IP. Ancrés en Afrique, nous visons un partenariat durable pour
              concrétiser vos ambitions digitales.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {ABOUT_STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center backdrop-blur"
              >
                <span className="font-syne text-4xl font-bold text-gold md:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-widest text-text-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
                Golaïne Tech, c&apos;est quoi ?
              </p>
              <h2 className="mt-3 font-syne text-3xl font-bold text-text-primary sm:text-4xl">
                Innovation, exécution et accompagnement sur la durée
              </h2>
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Nous positionnons Golaïne Tech comme une structure capable de couvrir
                  tout le cycle de vie : de la compréhension du besoin à la solution en
                  production, avec une approche centrée utilisateur et une exigence de
                  qualité constante — du cadrage à la maintenance.
                </p>
                <p>
                  Notre valeur fondamentale <strong className="text-gold">GOLLAL</strong>{" "}
                  — excellence, persévérance, qualité — guide chaque livrable. Nous nous
                  distinguons par une expertise technique solide, des solutions
                  personnalisées, une innovation continue (notamment autour de l&apos;IA),
                  un accompagnement dédié et un engagement qualité mesurable.
                </p>
                <p>
                  L&apos;objectif : vous permettre de{" "}
                  <strong className="font-medium text-text-primary">
                    gagner en efficacité
                  </strong>
                  , d&apos;
                  <strong className="font-medium text-text-primary">
                    accélérer votre croissance
                  </strong>{" "}
                  et de{" "}
                  <strong className="font-medium text-text-primary">
                    renforcer votre compétitivité
                  </strong>{" "}
                  grâce à des solutions adaptées et durables.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
                  Mission
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Accompagner les entreprises dans leur croissance grâce à des solutions
                  digitales performantes, intuitives et durables.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-tech/90">
                  Vision
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Devenir le partenaire technologique de référence en transformation
                  numérique.
                </p>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-gold/[0.06] p-6 md:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
                  Collaboration
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Prise de contact et analyse des besoins, étude de faisabilité, proposition
                  de solutions adaptées, puis lancement — pour un partenariat durable avec
                  nos clients.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-14">
            <h3 className="font-syne text-xl font-semibold text-text-primary md:text-2xl">
              Ce qui nous distingue
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Expertise technique avancée",
                "Solutions personnalisées",
                "Innovation continue (IA & technologies modernes)",
                "Accompagnement client dédié",
                "Engagement qualité",
                "Approche centrée utilisateur",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-text-muted"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-neon"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles
              className="mx-auto h-10 w-10 text-gold/80"
              strokeWidth={1.25}
              aria-hidden
            />
            <p className="mt-8 font-dm text-xl leading-relaxed text-text-primary md:text-2xl md:leading-relaxed">
              Nous croyons que la transformation numérique doit être{" "}
              <strong className="font-semibold text-gold">accessible</strong>,{" "}
              <strong className="font-semibold text-cyan-tech">mesurable</strong> et{" "}
              <strong className="font-semibold text-green-neon">durable</strong> — sans
              sacrifier la qualité ni la sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
                Équipe
              </p>
              <h2 className="mt-3 font-syne text-3xl font-bold text-text-primary sm:text-4xl">
                Les visages de {SITE_NAME}
              </h2>
            </div>
            <p className="max-w-md text-sm text-text-muted">
              Profils seniors et complémentaires — design, ingénierie, IA et delivery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <motion.article
                key={m.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-bg-dark/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={`Portrait de ${m.name}, ${m.role}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 grayscale"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-90" />
                </div>
                <div className="border-t border-white/5 p-5">
                  <h3 className="font-syne text-lg font-semibold text-text-primary">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold/90">{m.role}</p>
                  {m.linkedin && (
                    <Link
                      href={m.linkedin}
                      className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors hover:border-gold/40 hover:text-gold"
                      aria-label={`Profil LinkedIn de ${m.name}`}
                    >
                      <FaLinkedin className="h-4 w-4" aria-hidden />
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-bg-secondary/40 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/80">
              GOLLAL
            </p>
            <h2 className="mt-3 font-syne text-3xl font-bold text-text-primary sm:text-4xl">
              Nos valeurs
            </h2>
            <p className="mt-4 text-text-muted">
              Le fil conducteur de nos engagements au quotidien.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {GOLLAL_VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <Card
                    className={cn(
                      "h-full border p-8",
                      v.accent === "gold" &&
                        "border-gold/25 bg-gradient-to-br from-gold/[0.08] to-transparent",
                      v.accent === "cyan" &&
                        "border-cyan-tech/25 bg-gradient-to-br from-cyan-tech/[0.08] to-transparent",
                      v.accent === "green" &&
                        "border-green-neon/20 bg-gradient-to-br from-green-neon/[0.08] to-transparent",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-10 w-10",
                        v.accent === "gold" && "text-gold",
                        v.accent === "cyan" && "text-cyan-tech",
                        v.accent === "green" && "text-green-neon",
                      )}
                      aria-hidden
                    />
                    <h3 className="mt-5 font-syne text-xl font-semibold text-text-primary">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">
                      {v.text}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85"
              alt="Équipe en réunion autour d&apos;une table"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/50 to-transparent" />
          </div>
          <div className="md:order-1">
            <Compass className="h-9 w-9 text-cyan-tech" aria-hidden />
            <h2 className="mt-4 font-syne text-3xl font-bold text-text-primary sm:text-4xl">
              L&apos;ambition au quotidien
            </h2>
            <p className="mt-4 text-text-muted">
              La mission et la vision du cahier des charges se traduisent sur le terrain
              par des livrables concrets et un accompagnement de proximité.
            </p>
            <div className="mt-8 space-y-8 text-text-muted">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold/90">
                  Exigence produit
                </p>
                <p className="mt-3 text-lg leading-relaxed text-text-primary">
                  Accessibilité de la transformation numérique sans compromis sur la
                  qualité, la sécurité et l&apos;expérience utilisateur — des solutions
                  intuitives qui restent maintenables.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-tech/90">
                  Rayonnement
                </p>
                <p className="mt-3 text-lg leading-relaxed text-text-primary">
                  Être le partenaire tech de confiance des organisations ambitieuses en
                  Afrique et au-delà, reconnus pour l&apos;excellence d&apos;exécution et
                  la fiabilité dans la durée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-4 mb-24 overflow-hidden rounded-3xl border border-gold/20 bg-bg-secondary/80 md:mx-8">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-tech/15 blur-[110px]" />
        <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-50" />

        <div className="relative grid gap-10 px-6 py-14 text-center md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-12 md:px-12 md:py-16 md:text-left">
          <div>
            <h2 className="font-syne text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
              Envie d&apos;écrire la suite avec nous ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted md:mx-0">
              Expliquez-nous votre contexte : nous revenons vers vous avec une première
              proposition structurée.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-syne text-sm font-semibold text-bg-dark shadow-[0_0_40px_rgba(201,168,76,0.25)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(201,168,76,0.35)] focus-ring"
            >
              Nous contacter
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <p className="font-mono text-xs text-text-muted">
              Réponse sous 48h ouvrées
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
