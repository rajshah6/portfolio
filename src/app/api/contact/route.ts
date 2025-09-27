import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// In-memory cooldown store (per deployment instance)
// Keyed by IP address to mitigate spam. You can extend to include email as well.
const ipToLastSentAt = new Map<string, number>();

const FIVE_MINUTES_MS = 5 * 60 * 1000;

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const parts = xff.split(",");
    if (parts.length > 0) return parts[0].trim();
  }
  // NextRequest.ip can be undefined in some runtimes
  // Fallback to remote address headers if available
  return (req.ip || req.headers.get("x-real-ip") || "unknown").toString();
}

function validate(payload: any): { valid: boolean; errors?: string[] } {
  const errors: string[] = [];
  if (!payload || typeof payload !== "object") {
    return { valid: false, errors: ["Invalid JSON body."] };
  }
  const { name, email, subject, message } = payload as ContactPayload;
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name is required and must be at least 2 characters.");
  }
  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.push("A valid email is required.");
  }
  if (!subject || typeof subject !== "string" || subject.trim().length < 2) {
    errors.push("Subject is required and must be at least 2 characters.");
  }
  if (!message || typeof message !== "string" || message.trim().length < 5) {
    errors.push("Message is required and must be at least 5 characters.");
  }
  return { valid: errors.length === 0, errors };
}

async function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error(
      "SMTP configuration is missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS environment variables."
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  });

  // Verify connection configuration early to fail fast
  await transporter.verify();
  return transporter;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // Cooldown check
    const last = ipToLastSentAt.get(ip) || 0;
    const now = Date.now();
    const diff = now - last;
    if (diff < FIVE_MINUTES_MS) {
      const retryAfterSec = Math.ceil((FIVE_MINUTES_MS - diff) / 1000);
      return NextResponse.json(
        {
          ok: false,
          error: "Please wait before sending another message.",
          retryAfter: retryAfterSec,
        },
        { status: 429, headers: { "Retry-After": String(retryAfterSec) } }
      );
    }

    const payload = (await req.json()) as ContactPayload;
    const { valid, errors } = validate(payload);
    if (!valid) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
    if (!toEmail) {
      return NextResponse.json(
        { ok: false, error: "Destination email not configured (CONTACT_TO_EMAIL)." },
        { status: 500 }
      );
    }

    const transporter = await getTransporter();

    const { name, email, subject, message } = payload;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 8px 0;">New Portfolio Contact</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <pre style="white-space: pre-wrap; font-family: inherit;">${message}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: {
        name: "Portfolio Contact",
        address: process.env.SMTP_USER as string,
      },
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html,
    });

    // Set cooldown
    ipToLastSentAt.set(ip, now);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("/api/contact error:", error);
    const isProd = process.env.NODE_ENV === "production";
    const message = isProd
      ? "Failed to send message."
      : (error?.message as string) || "Failed to send message.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}


