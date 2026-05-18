import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Globe as GlobeIcon,
  GraduationCap,
  Palette,
  Phone,
  Shield,
  Smartphone,
  Wrench,
  Zap,
  Star,
  Flame,
} from "lucide-react";

export const SITE_NAME = "Golaïne Tech";
export const SITE_TAGLINE =
  "Transformation numérique, IA et excellence opérationnelle.";

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/formations", label: "Formations" },
  { href: "/projets", label: "Projets" },
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

export interface SpecialServiceItem {
  slug: string;
  title: string;
  name: string;
  duration: string;
  description: string;
  price: string;
  icon: LucideIcon;
  features: string[];
}

export const SPECIAL_SERVICES: SpecialServiceItem[] = [
  {
    slug: "djoni-djoni",
    title: "Offre Express",
    name: "Djoni Djoni",
    duration: "2 jours",
    description:
      "Une solution ultra-rapide pour vos besoins critiques. Idéal pour une mise en ligne immédiate ou un correctif urgent.",
    price: "Sur devis",
    icon: Zap,
    features: [
      "Développement éclair",
      "Priorité critique",
      "Livrable en 48 heures",
      "Support haute disponibilité",
    ],
  },
  {
    slug: "lewrou",
    title: "Offre Hebdomadaire",
    name: "Lewrou",
    duration: "1 semaine",
    description:
      "Un accompagnement intensif sur un cycle hebdomadaire pour des projets à exécution rapide.",
    price: "Sur devis",
    icon: Star,
    features: [
      "Sprint de développement complet",
      "Tests QA intensifs",
      "Déploiement en fin de cycle",
      "Documentation synthétique",
    ],
  },
  {
    slug: "kaoural",
    title: "Offre Standard",
    name: "Kaoural",
    duration: "Sur mesure",
    description:
      "Notre approche classique pour des projets complexes nécessitant une harmonie parfaite.",
    price: "Sur devis",
    icon: Flame,
    features: [
      "Architecture scalable",
      "Design UX/UI premium",
      "Intégrations complexes",
      "Maintenance incluse",
    ],
  },
];

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
    icon: GlobeIcon,
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
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
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
  github?: string;
  facebook?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Mody Saidou Barry",
    role: "Développeur Full-Stack & Designer UX/UI",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Sekou Cissé",
    role: "Développeur Backend",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Hamadoun Cissé",
    role: "Directeur Technique & Stratégie",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Amadou Barry",
    role: "Ingénieur Cloud & DevOps",
    image:
      "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=600&q=80",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
];

export type ProjectCategory = "Web" | "Mobile" | "IA" | "Design" | "Sass";

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
    title: "Faso-Education",
    client: "Ministère de l'Éducation",
    category: "Web",
    year: "2025",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    description: "Modernisation du système éducatif malien avec une plateforme e-learning interactive et accessible hors-ligne.",
    stack: ["Next.js", "Supabase", "Offline-first"],
    url: "https://example.com",
  },
  {
    id: "p2",
    title: "Bamako Express",
    client: "Express Mali",
    category: "Mobile",
    year: "2025",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    description: "Solution de logistique intelligente pour la livraison urbaine optimisée par IA dans le district de Bamako.",
    stack: ["React Native", "Google Maps API", "AI Routing"],
  },
  {
    id: "p3",
    title: "Djigui Finance",
    client: "Coopérative Djigui",
    category: "Web",
    year: "2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    description: "Plateforme de microfinance digitale permettant l'inclusion financière des commerçants des marchés locaux.",
    stack: ["Next.js", "D3", "PostgreSQL"],
  },
  {
    id: "p4",
    title: "Mali Juris",
    client: "Cabinet Cissé & Associés",
    category: "IA",
    year: "2024",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    description: "Assistant IA spécialisé dans le droit malien pour faciliter l'accès à l'information juridique des citoyens.",
    stack: ["RAG", "OpenAI", "Python"],
  },
  {
    id: "p5",
    title: "Sante-Tech Mali",
    client: "ONG Santé Pour Tous",
    category: "Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    description: "Système de télémédecine reliant les centres de santé ruraux aux spécialistes des hôpitaux nationaux.",
    stack: ["Figma", "Storybook", "Tokens"],
  },
  {
    id: "p6",
    title: "Ségou Marché",
    client: "Groupement Agricole Ségou",
    category: "Mobile",
    year: "2023",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    description: "Application mobile de mise en relation directe entre les agriculteurs de la région de Ségou et les acheteurs.",
    stack: ["AgriTech", "E-commerce", "Mobile App"],
  },
  {
    id: "p7",
    title: "Mali-SaaS Facturation",
    client: "Danaya Distribution",
    category: "Sass",
    year: "2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Solution SaaS de facturation et gestion d'inventaire en temps réel développée pour les commerçants de Bamako, intégrée aux moyens de paiement mobile money (Orange Money & Moov Money).",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS", "API Mobile Money"],
  },
  {
    id: "p8",
    title: "Sira ERP",
    client: "Synergie Group",
    category: "Sass",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Logiciel de gestion des ressources humaines et de la paie en mode SaaS, adapté à la législation du travail malienne et de la zone OHADA.",
    stack: ["TypeScript", "NestJS", "React", "Docker"],
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
    name: "Fatoumata Diallo",
    role: "Directrice des Opérations",
    company: "Mali Agro-Logistique",
    quote:
      "Une équipe ultra-rigoureuse : livraison dans les temps, qualité au rendez-vous, et une vraie compréhension des enjeux logistiques maliens.",
    image:
      "https://images.unsplash.com/photo-1560457099-64cb8a5eb503?w=200&q=80",
  },
  {
    id: "t2",
    name: "Oumar Dembélé",
    role: "Fondateur",
    company: "Danaya Services",
    quote:
      "Ils ont transformé notre idée complexe en une plateforme financière fluide, sécurisée et parfaitement adaptée au marché local.",
    image:
      "https://images.unsplash.com/photo-1584530193960-b4eb6c87081c?w=200&q=80",
  },
  {
    id: "t3",
    name: "Salimata Coulibaly",
    role: "Directrice de l'Innovation",
    company: "Ségou Artisanal",
    quote:
      "L'attention portée au design et aux micro-animations est exceptionnelle. Nos artisans vendent beaucoup mieux depuis la refonte.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    id: "t4",
    name: "Moussa Keïta",
    role: "Responsable IT",
    company: "Bamako Énergie",
    quote:
      "Support réactif, écoute attentive et expertise technique inégalée. Exactement le partenaire de long terme dont nous avions besoin.",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&q=80",
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
