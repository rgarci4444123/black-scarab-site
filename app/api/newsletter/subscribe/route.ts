import { NextResponse } from "next/server";
import {
  isValidNewsletterEmail,
  normalizeNewsletterSource,
} from "@/lib/newsletter";

type NewsletterRequest = {
  email?: unknown;
  source?: unknown;
  website?: unknown;
};

const allowedOrigins = new Set([
  "https://www.blackscarab.ai",
  "https://blackscarab.ai",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
]);

function isAllowedRequest(request: Request) {
  const origin = request.headers.get("origin");

  return !origin || allowedOrigins.has(origin);
}

export async function POST(request: Request) {
  if (!isAllowedRequest(request)) {
    return NextResponse.json({ error: "Request origin is not allowed." }, { status: 403 });
  }

  let payload: NewsletterRequest;

  try {
    payload = (await request.json()) as NewsletterRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!isValidNewsletterEmail(payload.email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId =
    process.env.BEEHIIV_PUBLICATION_ID ??
    "pub_c126d8d5-578d-47d6-afbf-f7e38d08686b";

  if (!apiKey || !publicationId) {
    console.error("Newsletter signup is missing beehiiv configuration.");
    return NextResponse.json(
      { error: "Newsletter signup is temporarily unavailable." },
      { status: 503 },
    );
  }

  const source = normalizeNewsletterSource(payload.source);
  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${encodeURIComponent(publicationId)}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email.trim().toLowerCase(),
        reactivate_existing: true,
        send_welcome_email: false,
        double_opt_override: "off",
        utm_source: "black-scarab-website",
        utm_medium: "owned",
        utm_campaign: "black-scarab-weekly",
        utm_content: source,
        referring_site: "https://www.blackscarab.ai",
      }),
      signal: AbortSignal.timeout(10_000),
    },
  ).catch((error: unknown) => {
    console.error("beehiiv newsletter request failed:", error);
    return null;
  });

  if (!response?.ok) {
    const details = await response?.text();
    console.error("beehiiv rejected a newsletter signup:", details);
    return NextResponse.json(
      { error: "We could not save your email just yet. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "You are subscribed to Black Scarab Weekly.",
  });
}
