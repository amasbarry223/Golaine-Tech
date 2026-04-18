"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <p className="font-syne text-2xl text-text-primary">Une erreur est survenue</p>
      <p className="max-w-md text-sm text-text-muted">
        {error.message || "Impossible d’afficher cette page pour le moment."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full border border-gold/50 bg-gold/10 px-6 py-2 font-mono text-xs text-gold transition hover:bg-gold/20"
      >
        Réessayer
      </button>
    </div>
  );
}
