import AboutPreview from "@/components/sections/home/AboutPreview";
import CTA from "@/components/sections/home/CTA";
import Gollal from "@/components/sections/home/Gollal";
import Hero from "@/components/sections/home/Hero";
import Process from "@/components/sections/home/Process";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import Stats from "@/components/sections/home/Stats";
import Testimonials from "@/components/sections/home/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Golaïne Tech — agence de transformation numérique : IA, web, mobile et design pour une croissance durable.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Stats />
      <Process />
      <Gollal />
      <Testimonials />
      <CTA />
    </>
  );
}
