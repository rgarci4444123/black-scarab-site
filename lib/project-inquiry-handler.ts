import type { ProjectInquiryType } from "@/lib/robotics-partner";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  airtableFieldsFromLocalAiLead,
  isLikelyLocalAiSpam,
  localAiLeadNotificationText,
  type LocalAiDeploymentForm,
  validateLocalAiDeploymentForm,
} from "@/lib/local-ai-deployment";

const productionOrigins = new Set([
  "https://www.blackscarab.ai",
  "https://blackscarab.ai",
]);

function isAllowedRequest(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  return (
    origin === new URL(request.url).origin || productionOrigins.has(origin)
  );
}

export function createProjectInquiryHandler(inquiryType: ProjectInquiryType) {
  const robotics = inquiryType === "robotics_partner_inquiry";
  const label = robotics ? "Robotics partner" : "Local AI";
  return async function POST(request: Request) {
    if (!isAllowedRequest(request)) {
      return NextResponse.json(
        { error: "Request origin is not allowed." },
        { status: 403 },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? 0);

    if (contentLength > 16_000) {
      return NextResponse.json(
        { error: "Request payload is too large." },
        { status: 413 },
      );
    }

    let form: LocalAiDeploymentForm;

    try {
      form = (await request.json()) as LocalAiDeploymentForm;
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 },
      );
    }

    const submittedAtMs = Date.now();

    if (form && isLikelyLocalAiSpam(form, submittedAtMs)) {
      return NextResponse.json({ ok: true });
    }

    const validationError = validateLocalAiDeploymentForm(form);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const airtableToken = process.env.AIRTABLE_TOKEN;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME;
    const smtpEmail =
      process.env.PORKBUN_SMTP_EMAIL?.trim() || "rodolfo@blackscarab.ai";
    const smtpPassword = process.env.PORKBUN_SMTP_PASSWORD;
    const notificationEmail =
      process.env.LOCAL_AI_LEAD_NOTIFICATION_EMAIL?.trim() || smtpEmail;

    if (!airtableToken || !airtableBaseId || !airtableTableName) {
      console.error(`${label} lead intake is missing Airtable configuration.`);
      return NextResponse.json(
        { error: "Project intake is temporarily unavailable." },
        { status: 503 },
      );
    }

    if (!smtpPassword) {
      console.error(`${label} lead intake is missing notification configuration.`);
      return NextResponse.json(
        { error: "Project intake is temporarily unavailable." },
        { status: 503 },
      );
    }

    const submittedAt = new Date(submittedAtMs).toISOString();
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtableToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            { fields: airtableFieldsFromLocalAiLead(form, submittedAt, inquiryType) },
          ],
        }),
        signal: AbortSignal.timeout(10_000),
      },
    ).catch((error: unknown) => {
      console.error(`Airtable ${label} lead request failed:`, error);
      return null;
    });

    if (!airtableResponse?.ok) {
      const details = await airtableResponse?.text();
      console.error(`Airtable rejected a ${label} lead:`, details);
      return NextResponse.json(
        { error: "We couldn't send your project just yet. Please try again." },
        { status: 502 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.porkbun.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 10_000,
    });

    await transporter
      .sendMail({
        from: `Black Scarab <${smtpEmail}>`,
        to: notificationEmail,
        replyTo: form.email.trim().toLowerCase(),
        subject: `${label} project from ${form.name.trim().replace(/[\r\n]+/g, " ")}`,
        text: localAiLeadNotificationText(form, submittedAt, inquiryType),
      })
      .then(() => {
        console.info(`${label} lead notification accepted by SMTP.`);
      })
      .catch((error: unknown) => {
        console.error(`${label} lead notification request failed:`, error);
      });

    return NextResponse.json({ ok: true });
  };
}
