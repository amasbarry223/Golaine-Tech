import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Formations IA, web, design et cybersécurité — programmes sur mesure Golaïne Tech.",
};

export default function FormationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
