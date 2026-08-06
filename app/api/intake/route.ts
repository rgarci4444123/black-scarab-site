import { NextResponse } from "next/server";
import {
  airtableFieldsFromIntake,
  isLikelySpam,
  type IntakeForm,
  validateIntakeForm,
} from "@/lib/intake";

export async function POST(request: Request) {
  let form: IntakeForm;

  try {
    form = (await request.json()) as IntakeForm;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  if (
    form &&
    typeof form.companyFax === "string" &&
    isLikelySpam(form)
  ) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validateIntakeForm(form);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!token || !baseId || !tableName) {
    return NextResponse.json(
      {
        error:
          "Airtable is not configured yet. Add AIRTABLE_TOKEN, AIRTABLE_BASE_ID, and AIRTABLE_TABLE_NAME in Vercel and your local environment.",
      },
      { status: 503 },
    );
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields: airtableFieldsFromIntake(form) }],
      }),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    console.error("Airtable rejected an intake submission:", details);

    return NextResponse.json(
      {
        error: "We couldn't send your message just yet. Please try again.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
