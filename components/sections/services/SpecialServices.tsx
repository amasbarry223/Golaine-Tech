"use client";

import { SPECIAL_SERVICES } from "@/lib/constants";
import { Check, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function SpecialServices() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-cyan-tech/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-syne text-3xl font-bold text-text-primary md:text-4xl">
            Nos Offres Spéciales
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Des formules adaptées à vos contraintes de temps et d'envergure, 
            avec la même exigence de qualité.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {SPECIAL_SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gold uppercase tracking-wider">
                  <Clock className="h-3 w-3" />
                  {service.duration}
                </div>
              </div>

              <h3 className="text-sm font-mono text-gold mb-1">
                {service.title}
              </h3>
              <h4 className="font-syne text-2xl font-bold text-text-primary mb-4">
                {service.name}
              </h4>
              <p className="text-sm text-text-muted mb-8 line-height-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs text-text-muted">
                    <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-text-muted">Prix</span>
                <span className="font-syne font-bold text-text-primary">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
