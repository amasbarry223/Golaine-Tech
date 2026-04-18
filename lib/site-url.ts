const DEFAULT_SITE_URL = "https://golaine-tech.vercel.app";

/**
 * URL canonique du site (metadata, sitemap, robots).
 * Ignore les chaînes vides et les URLs invalides — `NEXT_PUBLIC_SITE_URL=` ne doit pas casser le build.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof raw !== "string") return DEFAULT_SITE_URL;
  const trimmed = raw.trim();
  if (!trimmed) return DEFAULT_SITE_URL;
  try {
    const u = new URL(trimmed);
    if (u.protocol !== "http:" && u.protocol !== "https:") return DEFAULT_SITE_URL;
    if (u.pathname === "/" && !u.search && !u.hash) return u.origin;
    return u.href;
  } catch {
    return DEFAULT_SITE_URL;
  }
}
