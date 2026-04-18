"use client";

import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "Requis"),
  lastName: z.string().min(1, "Requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  service: z.string().min(1, "Choisissez un service"),
  budget: z.number().int().min(1).max(5),
  message: z.string().min(10, "10 caractères minimum"),
  gdpr: z
    .boolean()
    .refine((v) => v === true, { message: "Vous devez accepter la politique" }),
});

type ContactFormValues = z.infer<typeof schema>;

const BUDGET_LABELS = [
  "< 5k €",
  "5k – 15k €",
  "15k – 50k €",
  "50k – 150k €",
  "150k+ €",
];

export default function ContactForm() {
  const [toast, setToast] = useState<{
    type: "ok" | "err";
    message: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      budget: 3,
      gdpr: false,
    },
  });

  const budget = watch("budget") ?? 3;

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setToast(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Envoi impossible");
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.65 } });
      setToast({ type: "ok", message: "Message envoyé. Nous revenons vers vous vite." });
      reset();
    } catch (e) {
      setToast({
        type: "err",
        message:
          e instanceof Error ? e.message : "Erreur d’envoi. Réessayez plus tard.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className={cn(
              "mb-6 rounded-xl border px-4 py-3 font-mono text-sm",
              toast.type === "ok"
                ? "border-green-neon/40 bg-green-neon/10 text-green-neon"
                : "border-red-400/40 bg-red-500/10 text-red-300",
            )}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <fieldset className="space-y-6 border-0 p-0">
          <legend className="mb-0 w-full border-b border-white/10 pb-3 font-mono text-xs uppercase tracking-[0.25em] text-gold/80">
            Identité & contact
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative">
              <label className="mb-1 block font-mono text-xs text-text-muted">
                Prénom
              </label>
              <input
                {...register("firstName")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold/60"
                autoComplete="given-name"
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className="mb-1 block font-mono text-xs text-text-muted">
                Nom
              </label>
              <input
                {...register("lastName")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold/60"
                autoComplete="family-name"
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-400">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1 block font-mono text-xs text-text-muted">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold/60"
              autoComplete="email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block font-mono text-xs text-text-muted">
              Téléphone <span className="font-sans normal-case text-text-muted/70">(optionnel)</span>
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold/60"
              autoComplete="tel"
            />
          </div>
        </fieldset>

        <fieldset className="space-y-6 border-0 p-0">
          <legend className="mb-0 w-full border-b border-white/10 pb-3 font-mono text-xs uppercase tracking-[0.25em] text-gold/80">
            Votre besoin
          </legend>
          <div>
            <label className="mb-1 block font-mono text-xs text-text-muted">
              Service concerné
            </label>
            <select
              {...register("service")}
              className="w-full rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-sm outline-none focus:border-gold/60"
            >
              <option value="">— Sélectionner —</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
            )}
          </div>

          <div>
            <div className="mb-2 flex justify-between font-mono text-xs text-text-muted">
              <span>Budget indicatif</span>
              <span className="text-gold">{BUDGET_LABELS[budget - 1]}</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              {...register("budget", { valueAsNumber: true, min: 1, max: 5 })}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-gold"
              aria-valuetext={BUDGET_LABELS[budget - 1]}
            />
          </div>
        </fieldset>

        <fieldset className="space-y-6 border-0 p-0">
          <legend className="mb-0 w-full border-b border-white/10 pb-3 font-mono text-xs uppercase tracking-[0.25em] text-gold/80">
            Message
          </legend>
          <div>
            <label className="mb-1 block font-mono text-xs text-text-muted">
              Décrivez votre contexte
            </label>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold/60"
              placeholder="Objectif, contraintes, délais souhaités…"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          <label className="flex cursor-pointer items-start gap-3 text-sm text-text-muted">
            <input
              type="checkbox"
              {...register("gdpr")}
              className="mt-1 rounded border-white/20 bg-bg-dark text-gold focus:ring-gold"
            />
            <span>
              J&apos;accepte que mes données soient utilisées pour répondre à ma
              demande (RGPD).
            </span>
          </label>
          {errors.gdpr && (
            <p className="text-xs text-red-400">{errors.gdpr.message}</p>
          )}

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-text-muted">
              Besoin d&apos;un NDA ou d&apos;un appel visio ? Mentionnez-le dans le message.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-gold px-8 py-4 font-syne font-semibold text-bg-dark transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Envoi…" : "Envoyer le message"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
