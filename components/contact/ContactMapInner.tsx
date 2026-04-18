"use client";

import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ResizeOnMount() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

const goldIcon = L.divIcon({
  className: "golaine-pin",
  html: `<div style="width:22px;height:22px;border-radius:9999px;background:#C9A84C;box-shadow:0 0 0 4px rgba(201,168,76,0.35);border:2px solid #050A0E"></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

export default function ContactMapInner({
  center,
}: {
  center: [number, number];
}) {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="z-0 h-[320px] w-full md:h-[400px]"
      style={{ background: "#050A0E" }}
    >
      <ResizeOnMount />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={goldIcon} />
    </MapContainer>
  );
}
