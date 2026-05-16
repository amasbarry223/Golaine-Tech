import { PROJECTS } from "@/lib/constants";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Link
          href="/projets"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-gold transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux projets
        </Link>
        
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
        
        <div className="mb-4">
          <p className="font-mono text-sm uppercase tracking-widest text-gold">
            {project.category} · {project.year}
          </p>
        </div>
        
        <h1 className="font-syne text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl mb-4">
          {project.title}
        </h1>
        
        <p className="text-lg text-text-muted mb-8">Client : {project.client}</p>
        
        <div className="prose prose-invert max-w-none text-text-muted">
          <p className="text-lg md:text-xl leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-white/10 pt-8">
          <div>
            <h3 className="font-syne text-lg font-semibold text-text-primary mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-sm text-cyan-tech"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 font-syne text-base font-semibold text-gold transition-colors hover:border-gold/60 hover:bg-gold/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/50"
            >
              Visiter le site
              <ArrowRight className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
