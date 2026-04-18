"use client";

import { MAP_COORDS } from "@/lib/constants";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const MapInner = dynamic(() => import("./ContactMapInner"), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] w-full animate-pulse rounded-2xl bg-bg-secondary md:h-[400px]" />
  ),
});

export default function ContactMap() {
  const center = useMemo(() => MAP_COORDS, []);
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <MapInner center={center} />
    </div>
  );
}
