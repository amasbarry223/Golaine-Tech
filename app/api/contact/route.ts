import { z } from "zod";
import { Resend } from "resend";

const bodySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  budget: z.number().min(1).max(5),
  message: z.string().min(10),
  gdpr: z
    .boolean()
    .refine((v) => v === true, { message: "RGPD requis" }),
});

const BUDGET_LABELS = [
  "< 5k €",
  "5k – 15k €",
  "15k – 50k €",
  "50k – 150k €",
  "150k+ €",
];

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return Response.json({ error: "Corps invalide" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return Response.json(
      { error: "Validation échouée", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOX ?? "contact@golaine.tech";
  const from =
    process.env.RESEND_FROM ?? "Golaïne Tech <onboarding@resend.dev>";

  const budgetLabel = BUDGET_LABELS[data.budget - 1] ?? String(data.budget);

  const html = `
    <h2>Nouveau message — Contact site</h2>
    <p><strong>Nom :</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</p>
    <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(data.phone ?? "—")}</p>
    <p><strong>Service :</strong> ${escapeHtml(data.service)}</p>
    <p><strong>Budget :</strong> ${escapeHtml(budgetLabel)}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
  `;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY manquant — message loggé uniquement.");
    console.info("[contact]", { ...data, budgetLabel });
    return Response.json({
      ok: true,
      dev: true,
      message: "Mode dev : configurez RESEND_API_KEY pour l’envoi réel.",
    });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `[Golaïne Tech] Contact — ${data.firstName} ${data.lastName}`,
    html,
  });

  if (error) {
    console.error("[contact] Resend", error);
    return Response.json({ error: "Échec d’envoi email" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
