export type IntakeForm = {
  inquiryType: string;
  companyName: string;
  website: string;
  country: string;
  industry: string;
  engagementInterests: string[];
  opportunitySummary: string;
  currentStage: string;
  timeline: string;
  additionalContext: string;
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
};

export const initialIntakeForm: IntakeForm = {
  inquiryType: "",
  companyName: "",
  website: "",
  country: "",
  industry: "",
  engagementInterests: [],
  opportunitySummary: "",
  currentStage: "",
  timeline: "",
  additionalContext: "",
  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateIntakeForm(form: IntakeForm) {
  if (
    !form ||
    typeof form.inquiryType !== "string" ||
    typeof form.companyName !== "string" ||
    typeof form.website !== "string" ||
    typeof form.country !== "string" ||
    typeof form.industry !== "string" ||
    !form.inquiryType.trim() ||
    !form.companyName.trim() ||
    !form.country.trim() ||
    !form.industry.trim()
  ) {
    return "Organization details are incomplete.";
  }

  if (
    !Array.isArray(form.engagementInterests) ||
    form.engagementInterests.length === 0 ||
    !form.engagementInterests.every((item) => typeof item === "string") ||
    typeof form.opportunitySummary !== "string" ||
    !form.opportunitySummary.trim() ||
    typeof form.currentStage !== "string" ||
    !form.currentStage.trim() ||
    typeof form.timeline !== "string" ||
    !form.timeline.trim() ||
    typeof form.additionalContext !== "string"
  ) {
    return "Opportunity details are incomplete.";
  }

  if (
    typeof form.fullName !== "string" ||
    typeof form.jobTitle !== "string" ||
    typeof form.email !== "string" ||
    typeof form.phone !== "string" ||
    !form.fullName.trim() ||
    !form.email.trim() ||
    !isValidEmail(form.email.trim())
  ) {
    return "Contact details are incomplete or invalid.";
  }

  return null;
}

function optionalLine(label: string, value: string) {
  const normalized = value.trim();
  return normalized ? `${label}: ${normalized}` : null;
}

export function airtableFieldsFromIntake(form: IntakeForm) {
  const context = [
    `Inquiry type: ${form.inquiryType.trim()}`,
    optionalLine("Organization website", form.website),
    optionalLine("Contact role", form.jobTitle),
    optionalLine("Additional context", form.additionalContext),
  ]
    .filter((line): line is string => Boolean(line))
    .join("\n");

  // Keep the established Airtable column names so the new inquiry flow can use
  // the existing base without a schema migration. Legacy deployment-only fields
  // are intentionally omitted instead of filling them with misleading values.
  return {
    "Submitted At": new Date().toISOString(),
    Industry: form.industry.trim(),
    "Country of Operation": form.country.trim(),
    "Operational Objectives": form.engagementInterests.join(", "),
    "Primary Use Case": form.opportunitySummary.trim(),
    "Current Stage": form.currentStage,
    Timeline: form.timeline,
    "Additional Context": context,
    "Full Name": form.fullName.trim(),
    "Company Name": form.companyName.trim(),
    Email: form.email.trim(),
    "Phone / WhatsApp": form.phone.trim(),
  };
}
