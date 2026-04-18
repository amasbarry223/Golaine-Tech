import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Globe,
  GraduationCap,
  Palette,
  Phone,
  Shield,
  Smartphone,
  Wrench,
} from "lucide-react";

export const SITE_NAME = "Golaïne Tech";
export const SITE_TAGLINE =
  "Transformation numérique, IA et excellence opérationnelle.";

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "À propos" },
  { href: "/formations", label: "Formations" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceSlug =
  | "mobile"
  | "web"
  | "logiciel"
  | "ia"
  | "formation"
  | "maintenance"
  | "design"
  | "securite"
  | "telephonie";

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  tags: string[];
  bullets: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "mobile",
    title: "Applications mobiles",
    short: "Apps Android & iOS natives et cross-platform.",
    description:
      "Nous concevons des applications mobiles performantes, accessibles et alignées sur vos objectifs métier — du prototype à la mise en production et au suivi analytique.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    tags: ["React Native", "Kotlin", "Swift", "CI/CD"],
    bullets: [
      "UX/UI mobile-first",
      "Publication stores & conformité",
      "Intégrations API & offline-first",
    ],
  },
  {
    slug: "web",
    title: "Développement web",
    short: "Sites vitrines, plateformes et web apps modernes.",
    description:
      "Expériences web rapides, SEO-friendly et scalables, construites avec les meilleures pratiques front et une architecture claire pour évoluer avec votre croissance.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    bullets: [
      "Performance & Core Web Vitals",
      "Design systems & composants",
      "Headless & intégrations tierces",
    ],
  },
  {
    slug: "logiciel",
    title: "Logiciels métiers",
    short: "Outils sur mesure pour automatiser vos processus.",
    description:
      "Des solutions logicielles robustes qui centralisent vos données, réduisent les erreurs manuelles et donnent de la visibilité à vos équipes en temps réel.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    tags: ["Node.js", "PostgreSQL", "API REST"],
    bullets: [
      "Ateliers cadrage & specs",
      "Rôles, droits & audit",
      "Maintenance évolutive",
    ],
  },
  {
    slug: "ia",
    title: "Intelligence artificielle",
    short: "IA générative, automatisation et data.",
    description:
      "Nous intégrons l’IA là où elle crée le plus de valeur : assistants, extraction documentaire, scoring, monitoring et gouvernance responsable.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    tags: ["LLM", "RAG", "MLOps"],
    bullets: [
      "Cas d’usage priorisés par ROI",
      "Sécurité des données",
      "Évaluation & amélioration continue",
    ],
  },
  {
    slug: "formation",
    title: "Formations tech & IA",
    short: "Montée en compétences pour vos équipes.",
    description:
      "Programmes actionnables, ateliers dirigés et supports durables pour accélérer l’adoption des outils et des bonnes pratiques dans votre organisation.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    tags: ["Pédagogie", "Workshops", "Labs"],
    bullets: [
      "Parcours débutant à expert",
      "Exercices & projets guidés",
      "Certificats & suivi post-formation",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance informatique",
    short: "Stabilité, supervision et support réactif.",
    description:
      "Un accompagnement proactif pour sécuriser vos postes, serveurs et sauvegardes — avec des SLA clairs et une communication transparente.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&q=80",
    tags: ["Monitoring", "Backups", "Support"],
    bullets: [
      "Tickets & astreinte",
      "Mises à jour & correctifs",
      "Inventaire & documentation",
    ],
  },
  {
    slug: "design",
    title: "Design UI/UX",
    short: "Interfaces premium, cohérentes et mesurables.",
    description:
      "Recherche utilisateur, prototypage haute-fidélité et design systems pour des produits digitaux à la fois beaux, inclusifs et orientés conversion.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    tags: ["Figma", "Design system", "Tests utilisateurs"],
    bullets: [
      "Audit UX & parcours",
      "Prototypes interactifs",
      "Handoff développeur",
    ],
  },
  {
    slug: "securite",
    title: "Sécurité & vidéosurveillance",
    short: "Protection des accès et supervision des sites.",
    description:
      "Architecture de sécurité pragmatique : contrôle d’accès, vidéosurveillance, durcissement et sensibilisation pour réduire les risques opérationnels.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tags: ["CCTV", "Accès", "Durcissement"],
    bullets: [
      "Évaluation des risques",
      "Déploiement & maintenance",
      "Conformité & bonnes pratiques",
    ],
  },
  {
    slug: "telephonie",
    title: "Téléphonie IP",
    short: "Communications unifiées et télétravail sécurisé.",
    description:
      "Déploiement de solutions VoIP fiables, supervision qualité audio et intégration avec vos outils collaboratifs pour une communication fluide partout.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    tags: ["VoIP", "SIP", "QoS"],
    bullets: [
      "Architecture réseau",
      "Interop & softphones",
      "Support & évolutions",
    ],
  },
];

export const HOME_SERVICES_PREVIEW = SERVICES.map((s) => ({
  slug: s.slug,
  title: s.title,
  short: s.short,
  icon: s.icon,
}));

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Amadou Diallo",
    role: "Directeur technique",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Fatou N’Doye",
    role: "Lead Design & Produit",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Marc Ouedraogo",
    role: "Ingénieur IA",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Aïcha Sow",
    role: "Chef de projet",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    linkedin: "#",
  },
];

export type ProjectCategory = "Web" | "Mobile" | "IA" | "Design";

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  image: string;
  description: string;
  stack: string[];
  url?: string;
}

export const PROJECTS: PortfolioProject[] = [
  {
    id: "p1",
    title: "Plateforme e-learning",
    client: "EduAfrika",
    category: "Web",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    description:
      "Parcours pédagogique, suivi des apprenants et analytics pour une adoption massive en moins de 3 mois.",
    stack: ["Next.js", "Supabase", "Stripe"],
    url: "https://example.com",
  },
  {
    id: "p2",
    title: "Super-app services",
    client: "Nova Logistics",
    category: "Mobile",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    description:
      "Application mobile unifiée pour la logistique urbaine avec suivi temps réel et notifications intelligentes.",
    stack: ["React Native", "Firebase", "Maps"],
  },
  {
    id: "p3",
    title: "Dashboard analytics",
    client: "FinEdge",
    category: "Web",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description:
      "Visualisation décisionnelle et exports automatisés pour les équipes finance.",
    stack: ["Next.js", "D3", "PostgreSQL"],
  },
  {
    id: "p4",
    title: "Assistant IA documentaire",
    client: "Legal Partners",
    category: "IA",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    description:
      "Recherche sémantique et résumés conformes sur corpus interne avec traçabilité.",
    stack: ["RAG", "OpenAI", "Python"],
  },
  {
    id: "p5",
    title: "Design system & refonte",
    client: "Helios Health",
    category: "Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    description:
      "Refonte UX/UI et bibliothèque de composants pour accélérer les releases produit.",
    stack: ["Figma", "Storybook", "Tokens"],
  },
  {
    id: "p6",
    title: "App mobile retail",
    client: "Atlas Retail",
    category: "Mobile",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    description:
      "Parcours d’achat omnicanal avec fidélité et paiements mobiles.",
    stack: ["Flutter", "REST", "Analytics"],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sophie Mensah",
    role: "COO",
    company: "BrightScale",
    quote:
      "Une équipe ultra-rigoureuse : livraison dans les temps, qualité au rendez-vous, et une vraie culture produit.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
  },
  {
    id: "t2",
    name: "Ibrahim Kane",
    role: "Fondateur",
    company: "Nomad Pay",
    quote:
      "Ils ont transformé notre idée en une plateforme fiable, prête pour la montée en charge.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: "t3",
    name: "Claire Dubois",
    role: "Directrice marketing",
    company: "Lumen Studio",
    quote:
      "Design premium et animations soignées — nos campagnes convertissent mieux depuis le nouveau site.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "t4",
    name: "Youssef Benali",
    role: "DSI",
    company: "Atlas Retail",
    quote:
      "Support réactif, documentation claire : exactement ce qu’on attend d’un partenaire long terme.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export type FormationLevel = "Débutant" | "Intermédiaire" | "Expert";

export interface FormationCourse {
  id: string;
  title: string;
  level: FormationLevel;
  durationDays: number;
  maxParticipants: number;
  priceLabel: string;
  summary: string;
  program: string[];
}

export const FORMATIONS: FormationCourse[] = [
  {
    id: "f1",
    title: "IA & Machine Learning — Fondamentaux",
    level: "Intermédiaire",
    durationDays: 3,
    maxParticipants: 16,
    priceLabel: "Sur devis",
    summary:
      "Comprendre les briques ML, évaluer des cas d’usage et démarrer un POC responsable.",
    program: [
      "Données & features",
      "Modèles supervisés / non supervisés",
      "Évaluation & biais",
      "Mise en production — introduction",
    ],
  },
  {
    id: "f2",
    title: "Automatisation no-code / low-code",
    level: "Débutant",
    durationDays: 2,
    maxParticipants: 20,
    priceLabel: "Sur devis",
    summary:
      "Automatiser des workflows métiers sans sacrifier la gouvernance ni la sécurité.",
    program: [
      "Cartographie des processus",
      "Connecteurs & triggers",
      "Bonnes pratiques & logs",
      "Atelier mise en situation",
    ],
  },
  {
    id: "f3",
    title: "Développement Web React / Next.js",
    level: "Intermédiaire",
    durationDays: 5,
    maxParticipants: 12,
    priceLabel: "Sur devis",
    summary:
      "Construire une application web moderne, typée et performante avec React et Next.js.",
    program: [
      "Composants & hooks",
      "Routing & data fetching",
      "Performance & SEO",
      "Déploiement Vercel",
    ],
  },
  {
    id: "f4",
    title: "UI/UX Design Thinking",
    level: "Débutant",
    durationDays: 2,
    maxParticipants: 18,
    priceLabel: "Sur devis",
    summary:
      "Passer du problème utilisateur au prototype testable en équipe pluridisciplinaire.",
    program: [
      "Recherche & personas",
      "Idéation & prototypage",
      "Tests utilisateurs",
      "Handoff développeur",
    ],
  },
  {
    id: "f5",
    title: "Cybersécurité — Essentiels",
    level: "Débutant",
    durationDays: 1,
    maxParticipants: 24,
    priceLabel: "Sur devis",
    summary:
      "Réduire les risques : mots de passe, phishing, sauvegardes et hygiène numérique.",
    program: [
      "Menaces courantes",
      "Durcissement poste & réseau",
      "Sensibilisation terrain",
      "Plan de réponse simple",
    ],
  },
  {
    id: "f6",
    title: "Maintenance informatique avancée",
    level: "Expert",
    durationDays: 2,
    maxParticipants: 14,
    priceLabel: "Sur devis",
    summary:
      "Industrialiser le support : inventaire, monitoring et procédures fiables.",
    program: [
      "Supervision & alertes",
      "Patch management",
      "Sauvegardes & restaurations",
      "Documentation & transfert",
    ],
  },
];

export const MILESTONES = [
  {
    year: "2021",
    title: "Naissance de Golaïne Tech",
    text: "Création de l’agence autour d’une conviction : l’excellence digitale doit être accessible et durable.",
  },
  {
    year: "2022",
    title: "Premiers grands comptes",
    text: "Livraison de plateformes web & mobile pour des scale-ups en Afrique de l’Ouest.",
  },
  {
    year: "2023",
    title: "Practice IA",
    text: "Lancement d’offres IA appliquées : automatisation, assistants et data pipelines.",
  },
  {
    year: "2024",
    title: "Design system & produit",
    text: "Industrialisation UI, accessibilité et performance pour accélérer les cycles de release.",
  },
  {
    year: "2025",
    title: "Rayonnement continental",
    text: "Renforcement des équipes, formations premium et partenariats technologiques.",
  },
];

export const CONTACT_EMAIL = "contact@golaine.tech";
export const CONTACT_PHONE = "+223 77 77 30 34";
export const CONTACT_ADDRESS = "Bamako, Mali";

/** Centre carte (Bamako) — à ajuster */
export const MAP_COORDS: [number, number] = [12.6392, -8.0029];
