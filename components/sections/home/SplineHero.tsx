"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-gradient-to-br from-bg-night via-bg-dark to-bg-night" />
  ),
});

const SCENE =
  "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

export default function SplineHero() {
  return (
    <div className="absolute inset-0 z-0 min-h-[520px] md:min-h-[640px]">
      <Suspense
        fallback={
          <div className="h-full w-full bg-bg-primary" aria-hidden />
        }
      >
        <Spline
          scene={SCENE}
          className="h-full w-full"
          onLoad={(spline) => {
            try {
              spline.setZoom?.(0.85);
            } catch {
              /* noop */
            }
          }}
        />
      </Suspense>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/40"
        aria-hidden
      />
    </div>
  );
}
