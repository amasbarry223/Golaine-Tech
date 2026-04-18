# 🧠 MEGA PROMPT — Site Web Golaine Tech
## Stack : Next.js 14 · GSAP · Framer Motion · Spline · Cursor Personnalisé · Tailwind CSS

---

## 🎯 CONTEXTE GÉNÉRAL

Tu es un expert développeur front-end senior spécialisé en expériences web haut de gamme.
Crée un site web **multi-pages ultra-moderne** pour **Golaïne Tech**, une agence de transformation numérique basée en Afrique, orientée excellence, IA et innovation.

Le site doit être **visuellement spectaculaire**, techniquement irréprochable, et refléter les valeurs de l'agence : **audace, précision, futurisme**.

---

## 🛠️ STACK TECHNIQUE OBLIGATOIRE

```bash
Framework     : Next.js 14 (App Router)
Styling       : Tailwind CSS + CSS Modules pour effets avancés
Animations    : GSAP (ScrollTrigger, SplitText, MorphSVG) + Framer Motion
3D            : Spline (@splinetool/react-spline)
Curseur       : Curseur personnalisé magnétique en canvas ou div suiveur
Images réelles: Unsplash API ou images statiques via next/image (optimisées)
Fonts         : Google Fonts (ex: Syne + DM Sans) ou Variable fonts
Icons         : Lucide React + React Icons
Formulaire    : React Hook Form + EmailJS ou Resend
SEO           : next-seo + metadata API de Next.js 14
Déploiement   : Vercel (config vercel.json incluse)
```

---

## 🎨 DIRECTION ARTISTIQUE

### Palette de couleurs (CSS Variables)
```css
:root {
  --bg-primary:    #050A0E;   /* Noir profond */
  --bg-secondary:  #0A1628;   /* Bleu nuit */
  --accent-gold:   #C9A84C;   /* Or Golaine - couleur signature */
  --accent-cyan:   #00D4FF;   /* Cyan tech */
  --accent-green:  #00FF87;   /* Vert néon IA */
  --text-primary:  #F0EDE8;   /* Blanc cassé */
  --text-muted:    #6B7280;   /* Gris secondaire */
  --glass:         rgba(255,255,255,0.04); /* Glassmorphism */
  --border-subtle: rgba(201,168,76,0.2);   /* Bordure or subtile */
}
```

### Typographie
```
Display / Titres : "Syne" (bold 700-800) — caractère, force, futurisme
Corps de texte   : "DM Sans" (400-500) — lisibilité premium
Mono / Code      : "JetBrains Mono" — sections techniques et badges
```

### Esthétique globale
- **Dark luxury tech** : fond quasi-noir, accents or + néon
- Grids et lignes géométriques en overlay très subtiles (10% opacité)
- Glassmorphism sur les cartes et modals
- Particules flottantes légères en background (canvas ou tsParticles)
- Grain texture sur les sections hero (CSS noise overlay)
- Blobs animés en arrière-plan (SVG + GSAP morphing)

---

## 📄 ARCHITECTURE DES PAGES

```
/                    → Home (Hero 3D + Services + Stats + Témoignages + CTA)
/services            → Services détaillés (9 services avec animations)
/projets             → Portfolio / Réalisations (grille filtrée)
/a-propos            → À propos (Story + Équipe + Valeurs GOLLAL)
/formations          → Page Formations IA & Tech
/contact             → Contact (formulaire + carte + infos)
/blog                → Articles & Insights (optionnel)
```

---

## 🧩 COMPOSANTS GLOBAUX REQUIS

### 1. 🖱️ Curseur Magnétique Personnalisé
```tsx
// components/ui/CustomCursor.tsx
// - Cercle outer (40px) qui suit avec lag (lerp 0.08)
// - Point inner (6px) qui suit instantanément
// - Effet "magnétique" sur les boutons et liens (repousse/attire)
// - State : default | hover-link | hover-button | drag
// - Changement de couleur selon la section (blanc → or → cyan)
// - Blend mode: mix-blend-mode: difference sur sections claires

// Implémentation avec useRef + useEffect + requestAnimationFrame
// Utiliser Framer Motion pour les transitions de scale
```

### 2. 🔝 Navbar Glassmorphism
```tsx
// components/layout/Navbar.tsx
// - Position: fixed top, blur(16px) background au scroll
// - Logo "G•TECH" avec animation SVG path drawing au chargement
// - Menu desktop : liens avec underline magnétique au hover
// - Hamburger mobile : animation morphing (≡ → ✕)
// - Menu mobile : fullscreen overlay avec stagger d'apparition des items
// - Indicateur de section active (dot doré)
// - GSAP: hideOnLeave scroll behavior (se cache en scrollant bas, réapparaît en montant)
```

### 3. 👣 Footer Premium
```tsx
// components/layout/Footer.tsx
// - Grille 4 colonnes : Logo+tagline | Services | Liens | Contact
// - Marquee ticker horizontal : "INNOVATION • IA • WEB • MOBILE • DESIGN • GOLLAL •"
// - Ligne animée séparatrice (GSAP drawSVG)
// - Copyright avec effet glitch sur "Golaïne Tech"
// - Réseaux sociaux avec hover 3D tilt
```

### 4. 🔄 Loader / Splash Screen
```tsx
// components/ui/Loader.tsx
// - Plein écran noir au démarrage
// - Animation : lettres "GOLAÏNE TECH" qui s'écrivent (SplitText GSAP)
// - Barre de progression simulée (0→100%)
// - Glitch effect sur le logo à 100%
// - Sortie : curtain slide-up révélant le site
// - Durée totale : ~2.5s, cookie pour ne pas reshower
```

### 5. 🌀 Page Transition
```tsx
// components/ui/PageTransition.tsx
// - Framer Motion AnimatePresence
// - Transition : rideau noir qui couvre puis se retire (Y: 0% → -100%)
// - Ou : morphing de blobs entre pages
```

---

## 🏠 PAGE HOME — DÉTAILS COMPLETS

### Section 1 : Hero 3D Immersif
```tsx
// sections/home/Hero.tsx

LAYOUT:
- Fond : scène Spline 3D (globe tournant ou particules 3D orbitales)
- URL Spline suggérée : https://prod.spline.design/[votre-scene]/scene.splinecode
- Alternative si pas de scène custom : Three.js avec particules connectées
- Overlay gradient sur le Spline (transparent → --bg-primary)

CONTENU (positionné en z-index supérieur):
- Badge animé : "🚀 Agence #1 Innovation Numérique" (pill avec bordure or pulsante)
- H1 en 2 lignes :
    Ligne 1 : "Transformez votre" (Syne 72px, blanc)
    Ligne 2 : "Vision Digitale" (Syne 80px, gradient or→cyan, clip-text)
- Sous-titre : "Solutions IA · Web · Mobile · Design pour votre croissance"
- 2 CTAs :
    Primaire : "Démarrer un projet →" (fond or, texte noir, hover scale+glow)
    Secondaire : "Voir nos réalisations" (outline blanc, hover fill)
- Scroll indicator : chevron animé + "Découvrir" en mono

ANIMATIONS (GSAP timeline):
- staggered reveal : badge → H1 mots → sous-titre → CTAs (durée 1.2s total)
- H1 : chaque mot entre par Y:40px → Y:0, opacity 0→1
- Parallax : le Spline bouge légèrement au mousemove (useMouseParallax hook)

IMAGES RÉELLES (Unsplash) en arrière-plan ou en décoration:
https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600  (IA/tech abstract)
https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600  (circuit board)
```

### Section 2 : Stats / Chiffres Clés
```tsx
// sections/home/Stats.tsx
// 4 métriques avec compteur animé au scroll (GSAP CountUp)

Métriques :
  [0] "150+"  → "Projets livrés"
  [1] "98%"   → "Satisfaction client"
  [2] "5 ans" → "D'expertise"
  [3] "3×"    → "ROI moyen client"

DESIGN:
- Fond : --bg-secondary avec bordure subtile
- Chaque stat dans une card glassmorphism
- Ligne de séparation dorée animée entre les cards
- Icône lucide-react par stat (Rocket, Star, Clock, TrendingUp)
- ScrollTrigger : animation trigger à 70% du viewport
```

### Section 3 : Services (Aperçu)
```tsx
// sections/home/ServicesPreview.tsx
// Grille 3×3 avec hover 3D tilt (Framer Motion)

Chaque card service :
- Icône animée (Lottie ou SVG animé au hover)
- Titre du service
- Description 1 ligne
- "En savoir plus →" avec arrow animation
- Hover : card se lève (Y:-8px), bordure or s'illumine, fond s'éclaircit légèrement
- Background card : glassmorphism + gradient radial subtil centré sur l'icône

Services (avec icônes Lucide):
  Smartphone    → Apps Mobile Android/iOS
  Globe         → Développement Web
  Code2         → Logiciels Métiers
  Brain         → Intelligence Artificielle
  GraduationCap → Formations Tech
  Wrench        → Maintenance IT
  Palette       → Design UI/UX
  Shield        → Sécurité & Vidéosurveillance
  Phone         → Téléphonie IP

Images Unsplash à intégrer dans certaines cards en overlay:
https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600  (AI/code)
https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600  (dev web)
https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600  (design UI)
```

### Section 4 : Processus / Méthodologie
```tsx
// sections/home/Process.tsx
// Timeline horizontale animée (GSAP ScrollTrigger horizontal)

Étapes avec icônes et numéros stylisés :
  01 → Écoute & Analyse  (icon: Ear)
  02 → Conception        (icon: PenTool)
  03 → Développement     (icon: Code)
  04 → Livraison & Suivi (icon: Rocket)

ANIMATION:
- Ligne connectrice qui se "draw" (SVG stroke-dashoffset GSAP)
- Chaque étape fade+slide quand la ligne l'atteint
- Mobile : stack vertical avec ligne verticale
```

### Section 5 : Valeur GOLLAL
```tsx
// sections/home/Gollal.tsx
// Section immersive full-width avec fond Spline ou vidéo loop

DESIGN:
- Fond sombre avec texture grain
- Grand texte "GOLLAL" en display 120px, quasi-transparent (outline only)
- Par-dessus : 3 colonnes avec Excellence | Persévérance | Qualité
- Chaque valeur avec description courte
- Animation : GOLLAL text se remplit progressivement au scroll (clip-path)
```

### Section 6 : Témoignages
```tsx
// sections/home/Testimonials.tsx
// Carrousel 3D (Framer Motion layoutId ou GSAP 3D carousel)

3-5 témoignages fictifs mais réalistes :
  - Photo (Unsplash portraits professionnels)
  - Nom, Poste, Entreprise
  - Note (5 étoiles SVG animées)
  - Citation courte et percutante

Navigation : dots + swipe mobile
Auto-play avec pause au hover
```

### Section 7 : CTA Final
```tsx
// sections/home/CTA.tsx
// Section pleine largeur, impact maximal

- Titre : "Prêt à transformer votre entreprise ?"
- Sous-titre : "Discutons de votre projet en 30 minutes"
- Bouton : "Planifier un appel gratuit" (large, or, hover glow explosion)
- Background : gradient mesh animé (blobs qui bougent lentement)
- Décoration : formes géométriques flottantes
```

---

## 📋 PAGE SERVICES — DÉTAILS

```tsx
// app/services/page.tsx

HERO:
- Titre "Nos Services" avec word split animation
- Breadcrumb animé
- Image hero : https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600

CONTENU:
- 9 sections de services, alternées (image gauche/droite)
- Chaque service :
    * Titre + icône grande (64px)
    * Description longue (3-4 lignes)
    * Liste de sous-services (bullets avec check-or)
    * Image réelle Unsplash pertinente (400×300, rounded-2xl)
    * Tag de technologie utilisée

Images Unsplash par service :
  Mobile    : https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600
  Web       : https://images.unsplash.com/photo-1547658719-da2b51169166?w=600
  Logiciel  : https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600
  IA        : https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600
  Formation : https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600
  Maintenance: https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600
  Design    : https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600
  Sécurité  : https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600
  Téléphonie: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600

ANIMATIONS ScrollTrigger:
- Chaque section entre depuis la gauche ou droite selon alternance
- Image avec parallax vertical léger (GSAP)
- Progress bar dorée qui se remplit en scrollant (top de page)
```

---

## 💼 PAGE PROJETS / PORTFOLIO

```tsx
// app/projets/page.tsx

FILTRE:
- Tabs animés (Framer Motion layoutId underline)
- Catégories : Tous | Web | Mobile | IA | Design

GRILLE:
- Masonry layout (CSS columns ou react-masonry-css)
- Cards avec image full, titre en overlay slide-up au hover
- Hover : scale(1.02) + overlay gradient + bouton "Voir →"
- Click : modal plein écran avec détails du projet

Images placeholder projets (Unsplash) :
https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800
https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800
https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800
https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800
https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800
https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800

MODAL PROJET:
- AnimatePresence Framer Motion
- Détails : titre, client, date, stack tech, description, screenshots
- Bouton "Visiter le site" (si applicable)
```

---

## 👥 PAGE À PROPOS

```tsx
// app/a-propos/page.tsx

HERO:
- Image : https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600 (team)
- Ken Burns effect (zoom lent GSAP)
- Titre par-dessus : "Notre Histoire, Votre Succès"

STORY SECTION:
- Timeline verticale 2025 → aujourd'hui
- Milestones clés de l'agence
- Chaque milestone : date + titre + description + icon

ÉQUIPE:
- Grille 3-4 membres (photos Unsplash portraits pro)
- Card : photo (hover grayscale→couleur), nom, rôle, réseaux sociaux
- Photos équipe :
  https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400 (homme)
  https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400 (femme)
  https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400 (homme)
  https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400 (femme)

VALEURS GOLLAL:
- 3 cards immersives : Excellence | Persévérance | Qualité
- Chaque card : icône SVG animée + texte + fond gradient unique
- Hover : 3D rotation (Framer Motion rotateY)

MISSION & VISION:
- Split screen : gauche image, droite texte
- GSAP horizontal reveal (clip-path left→right)
```

---

## 📚 PAGE FORMATIONS

```tsx
// app/formations/page.tsx

Hero:
- https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600

CATALOGUE:
- Cards formations avec :
    * Badge niveau (Débutant/Intermédiaire/Expert) coloré
    * Durée + nb participants max
    * Programme accordion (Framer Motion height animation)
    * Prix ou "Sur devis"
    * CTA "S'inscrire"

Formations proposées :
  - IA & Machine Learning Fondamentaux (3 jours)
  - Automatisation no-code/low-code (2 jours)
  - Développement Web React/Next.js (5 jours)
  - UI/UX Design Thinking (2 jours)
  - Cybersécurité Essentiels (1 jour)
  - Maintenance Informatique (2 jours)

SECTION AVANTAGES:
- 4 points forts avec icônes et texte
- Fond différencié (--bg-secondary)
```

---

## 📞 PAGE CONTACT

```tsx
// app/contact/page.tsx

LAYOUT: Split 50/50
Gauche : Informations de contact
Droite : Formulaire

GAUCHE:
- Titre "Parlons de votre projet"
- Sous-titre inspirant
- 3 blocs contact (email, téléphone, adresse) avec icônes animées
- Horaires d'ouverture
- Image : https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600

FORMULAIRE (React Hook Form):
Champs :
  - Prénom + Nom (2 colonnes)
  - Email (validation regex)
  - Téléphone
  - Service intéressé (select avec options)
  - Budget approximatif (range slider stylisé)
  - Message (textarea auto-resize)
  - Checkbox RGPD

ANIMATIONS formulaire:
- Labels flottants (float sur focus)
- Bordure or qui apparaît au focus (CSS + Framer)
- Submit : bouton loading spinner → succès confetti (canvas-confetti)
- Toast notification succès/erreur (framer motion toast)

CARTE:
- Section carte (OpenStreetMap via Leaflet ou iframe Google Maps stylisée)
- Pin personnalisé aux couleurs Golaine Tech
```

---

## 🎭 ANIMATIONS GSAP — GUIDE IMPLÉMENTATION

```tsx
// hooks/useGSAP.ts — hook réutilisable

// 1. HERO TEXT SPLIT
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText, ScrollTrigger)

const splitHero = new SplitText('#hero-title', { type: 'words,chars' })
gsap.from(splitHero.words, {
  y: 60,
  opacity: 0,
  stagger: 0.08,
  duration: 0.9,
  ease: 'power3.out',
})

// 2. SCROLL REVEAL CARDS
gsap.from('.service-card', {
  scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
  y: 50,
  opacity: 0,
  stagger: 0.12,
  duration: 0.8,
  ease: 'power2.out',
})

// 3. HORIZONTAL SCROLL SECTION (Process)
const horizontalSection = document.querySelector('.process-track')
gsap.to(horizontalSection, {
  x: () => -(horizontalSection.scrollWidth - window.innerWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.process-container',
    pin: true,
    scrub: 1,
    end: () => '+=' + horizontalSection.scrollWidth,
  },
})

// 4. COUNTER ANIMATION
gsap.from('.stat-number', {
  scrollTrigger: { trigger: '.stats-section', start: 'top 70%' },
  textContent: 0,
  duration: 2,
  ease: 'power1.out',
  snap: { textContent: 1 },
  stagger: 0.2,
})

// 5. SVG LINE DRAW (Timeline/Process)
gsap.from('.process-line', {
  scrollTrigger: { trigger: '.process-section', scrub: true },
  strokeDashoffset: 1000,
  ease: 'none',
})

// 6. PARALLAX IMAGES
gsap.to('.parallax-img', {
  yPercent: -20,
  ease: 'none',
  scrollTrigger: { trigger: '.parallax-section', scrub: true },
})
```

---

## 🖱️ CURSEUR MAGNÉTIQUE — CODE COMPLET

```tsx
// components/ui/CustomCursor.tsx
'use client'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 })
  const outerX = useSpring(cursorX, { stiffness: 150, damping: 20 })
  const outerY = useSpring(cursorY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    // EFFET MAGNÉTIQUE sur les boutons
    const magnetics = document.querySelectorAll('[data-magnetic]')
    magnetics.forEach(el => {
      el.addEventListener('mousemove', (e: any) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        ;(el as HTMLElement).style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
      })
      el.addEventListener('mouseleave', () => {
        ;(el as HTMLElement).style.transform = 'translate(0,0)'
      })
    })

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Point intérieur */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[--accent-gold] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: springX, y: springY }}
      />
      {/* Cercle extérieur */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[--accent-gold]/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x: outerX, y: outerY }}
      />
    </>
  )
}
```

---

## 🌐 INTÉGRATION SPLINE 3D

```tsx
// sections/home/SplineHero.tsx
'use client'
import Spline from '@splinetool/react-spline'
import { Suspense } from 'react'

// Scènes Spline recommandées (publiques, gratuites) :
// Globe tech :  https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode
// Particules :  https://prod.spline.design/2FLcXbCUWDH2pE8f/scene.splinecode

export default function SplineHero() {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<div className="w-full h-full bg-bg-primary" />}>
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          className="w-full h-full"
          onLoad={(spline) => {
            // Contrôle programmatique de la caméra
            spline.setZoom(0.8)
          }}
        />
      </Suspense>
      {/* Gradient overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/70 to-transparent" />
    </div>
  )
}
```

---

## 🏗️ STRUCTURE DU PROJET NEXT.JS

```
golaine-tech/
├── app/
│   ├── layout.tsx              ← RootLayout avec Loader + Cursor + Navbar + Footer
│   ├── page.tsx                ← Home
│   ├── services/page.tsx
│   ├── projets/page.tsx
│   ├── a-propos/page.tsx
│   ├── formations/page.tsx
│   ├── contact/page.tsx
│   └── globals.css             ← Variables CSS + reset + utilities
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── CustomCursor.tsx
│   │   ├── Loader.tsx
│   │   ├── PageTransition.tsx
│   │   ├── Button.tsx          ← Bouton réutilisable (primary/secondary/ghost)
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── MarqueeTicker.tsx
│   └── sections/
│       ├── home/
│       │   ├── Hero.tsx
│       │   ├── Stats.tsx
│       │   ├── ServicesPreview.tsx
│       │   ├── Process.tsx
│       │   ├── Gollal.tsx
│       │   ├── Testimonials.tsx
│       │   └── CTA.tsx
│       ├── services/
│       ├── projets/
│       └── contact/
│
├── hooks/
│   ├── useGSAP.ts
│   ├── useMouseParallax.ts
│   └── useSmoothScroll.ts
│
├── lib/
│   ├── animations.ts           ← Variants Framer Motion centralisés
│   └── constants.ts            ← Données services, équipe, projets...
│
├── public/
│   └── fonts/
│       └── [variable-fonts]
│
├── tailwind.config.ts          ← Config étendue avec couleurs Golaine
└── next.config.ts              ← Config images Unsplash + Spline
```

---

## ⚙️ CONFIGURATION CLÉS

### next.config.ts
```ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
  transpilePackages: ['@splinetool/react-spline'],
}
```

### tailwind.config.ts
```ts
theme: {
  extend: {
    colors: {
      'gold':    '#C9A84C',
      'cyan-tech': '#00D4FF',
      'green-neon': '#00FF87',
      'bg-dark':  '#050A0E',
      'bg-night': '#0A1628',
    },
    fontFamily: {
      syne:   ['Syne', 'sans-serif'],
      dm:     ['DM Sans', 'sans-serif'],
      mono:   ['JetBrains Mono', 'monospace'],
    },
    animation: {
      'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4,0,0.6,1) infinite',
      'float':      'float 6s ease-in-out infinite',
      'ticker':     'ticker 20s linear infinite',
    },
  },
}
```

---

## 📦 PACKAGES À INSTALLER

```bash
npx create-next-app@latest golaine-tech --typescript --tailwind --app

npm install \
  gsap \
  @gsap/react \
  framer-motion \
  @splinetool/react-spline \
  @splinetool/loader \
  lucide-react \
  react-icons \
  react-hook-form \
  @hookform/resolvers \
  zod \
  canvas-confetti \
  @types/canvas-confetti \
  lenis \
  react-intersection-observer \
  next-seo \
  clsx \
  tailwind-merge
```

---

## 🔑 RÈGLES DE QUALITÉ ABSOLUES

```
✅ Toutes les images next/image avec width/height et priority sur les above-fold
✅ Lazy loading pour Spline (dynamic import avec ssr:false)
✅ useEffect pour tout GSAP (éviter SSR errors)
✅ 'use client' uniquement sur composants interactifs
✅ Server Components pour les pages statiques
✅ Pas de layout shift (réserver l'espace Spline/images)
✅ Accessibilité : aria-labels sur icônes, focus visible, skip-nav
✅ Mobile-first : breakpoints sm/md/lg/xl dans Tailwind
✅ Smooth scroll : Lenis (lightweight smooth scroll library)
✅ Performance : code splitting, dynamic imports, font display swap
✅ SEO : metadata par page, og:image, sitemap.xml, robots.txt
✅ TypeScript strict : interfaces pour tous les props et données
```

---

## 🚀 COMMANDE DE DÉMARRAGE

```
Génère l'intégralité de ce projet Next.js en commençant par :

1. La structure des dossiers et fichiers
2. globals.css avec toutes les variables CSS
3. tailwind.config.ts et next.config.ts
4. RootLayout avec Loader, Cursor, Navbar, Footer
5. La page Home complète avec toutes ses sections
6. Puis les autres pages dans l'ordre prioritaire

Pour chaque section, génère le code TypeScript COMPLET,
fonctionnel, sans placeholder. Utilise les images Unsplash
fournies, les couleurs définies, et les animations décrites.
Le résultat doit être déployable sur Vercel immédiatement.
```

---

*© 2026 Golaïne Tech — Mega Prompt généré pour une expérience web d'exception*