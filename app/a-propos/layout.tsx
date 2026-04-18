import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Histoire, équipe et valeurs GOLLAL — Golaïne Tech, agence digitale & IA.",
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
