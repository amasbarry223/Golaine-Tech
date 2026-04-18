"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-bg-dark font-dm text-text-primary antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
          <p className="font-syne text-2xl">Erreur critique</p>
          <p className="max-w-md text-sm text-text-muted">
            {error.message || "L’application n’a pas pu démarrer correctement."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full border border-gold/50 px-6 py-2 font-mono text-xs text-gold transition hover:bg-gold/20"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
