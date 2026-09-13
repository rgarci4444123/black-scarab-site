export const localAiArticlePlacements = {
  "local-ai-hobbyist-budget-guide": {
    earlyAfterSection: 2,
    endAfterSection: 10,
  },
  "local-ai-small-business-guide": {
    earlyAfterSection: 2,
    endAfterSection: 10,
  },
  "local-ai-enterprise-guide": {
    earlyAfterSection: 2,
    endAfterSection: 10,
  },
  "local-ai-server-guide": {
    earlyAfterSection: 3,
    endAfterSection: 13,
  },
} as const;

export type LocalAiArticleSlug = keyof typeof localAiArticlePlacements;
export type LocalAiCtaPlacement = "early_inline" | "end_of_article";

export type LocalAiDeploymentForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  website: string;
  formStartedAt: number;
  sourceArticle: string;
  sourceUrl: string;
  referrer: string;
  ctaPlacement: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
};

export const initialLocalAiDeploymentForm: LocalAiDeploymentForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  website: "",
  formStartedAt: 0,
  sourceArticle: "",
  sourceUrl: "",
  referrer: "",
  ctaPlacement: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hasValidLength(value: unknown, min: number, max: number) {
  return (
    typeof value === "string" &&
    value.trim().length >= min &&
    value.trim().length <= max
  );
}

function isOptionalString(value: unknown, max: number) {
  return typeof value === "string" && value.trim().length <= max;
}

export function validateLocalAiDeploymentForm(
  form: LocalAiDeploymentForm,
) {
  if (!form || typeof form !== "object") {
    return "Please complete the required fields.";
  }

  if (!hasValidLength(form.name, 1, 120)) {
    return "Enter your name.";
  }

  if (
    !hasValidLength(form.email, 3, 254) ||
    !emailPattern.test(form.email.trim())
  ) {
    return "Enter a valid email address.";
  }

  if (!hasValidLength(form.message, 1, 4000)) {
    return "Tell us a little about your project.";
  }

  if (
    !isOptionalString(form.company, 180) ||
    !isOptionalString(form.phone, 80) ||
    !isOptionalString(form.website, 200) ||
    !isOptionalString(form.sourceArticle, 120) ||
    !isOptionalString(form.sourceUrl, 1000) ||
    !isOptionalString(form.referrer, 1000) ||
    !isOptionalString(form.ctaPlacement, 40) ||
    !isOptionalString(form.utmSource, 160) ||
    !isOptionalString(form.utmMedium, 160) ||
    !isOptionalString(form.utmCampaign, 160) ||
    !isOptionalString(form.utmContent, 160)
  ) {
    return "One of the fields is too long.";
  }

  if (
    typeof form.formStartedAt !== "number" ||
    !Number.isFinite(form.formStartedAt)
  ) {
    return "Please refresh the page and try again.";
  }

  return null;
}

export function isLikelyLocalAiSpam(
  form: LocalAiDeploymentForm,
  submittedAt: number,
) {
  if (typeof form.website === "string" && form.website.trim()) {
    return true;
  }

  if (
    typeof form.formStartedAt !== "number" ||
    !Number.isFinite(form.formStartedAt)
  ) {
    return false;
  }

  const completionTime = submittedAt - form.formStartedAt;
  return completionTime < 1_200 || completionTime > 86_400_000;
}

function safeAttributionValue(value: string) {
  return value.trim().replace(/[\r\n]+/g, " ");
}

export function normalizeLocalAiAttribution(form: LocalAiDeploymentForm) {
  const articleSlug = Object.hasOwn(localAiArticlePlacements, form.sourceArticle)
    ? form.sourceArticle
    : "";
  const ctaPlacement =
    form.ctaPlacement === "early_inline" ||
    form.ctaPlacement === "end_of_article"
      ? form.ctaPlacement
      : "";
  const expectedSourceUrl = articleSlug
    ? `https://www.blackscarab.ai/insights/${articleSlug}`
    : "";

  return {
    sourceArticle: articleSlug,
    sourceUrl: expectedSourceUrl,
    referrer: safeAttributionValue(form.referrer),
    ctaPlacement,
    utmSource: safeAttributionValue(form.utmSource),
    utmMedium: safeAttributionValue(form.utmMedium),
    utmCampaign: safeAttributionValue(form.utmCampaign),
    utmContent: safeAttributionValue(form.utmContent),
  };
}

export function airtableFieldsFromLocalAiLead(
  form: LocalAiDeploymentForm,
  submittedAt: string,
) {
  const attribution = normalizeLocalAiAttribution(form);
  const context = [
    "Lead type: Local AI implementation",
    `Source article: ${attribution.sourceArticle || "Direct or unavailable"}`,
    `Source URL: ${attribution.sourceUrl || "Direct or unavailable"}`,
    `Referrer: ${attribution.referrer || "Unavailable"}`,
    `CTA placement: ${attribution.ctaPlacement || "Direct or unavailable"}`,
    `UTM source: ${attribution.utmSource || "None"}`,
    `UTM medium: ${attribution.utmMedium || "None"}`,
    `UTM campaign: ${attribution.utmCampaign || "None"}`,
    `UTM content: ${attribution.utmContent || "None"}`,
  ].join("\n");

  return {
    "Submitted At": submittedAt,
    "Primary Use Case": form.message.trim(),
    "Additional Context": context,
    "Full Name": form.name.trim(),
    "Company Name": form.company.trim(),
    Email: form.email.trim().toLowerCase(),
    "Phone / WhatsApp": form.phone.trim(),
  };
}

export function localAiLeadNotificationText(
  form: LocalAiDeploymentForm,
  submittedAt: string,
) {
  const attribution = normalizeLocalAiAttribution(form);

  return [
    "New Local AI implementation inquiry",
    "",
    `Name: ${form.name.trim()}`,
    `Company: ${form.company.trim() || "Not provided"}`,
    `Email: ${form.email.trim().toLowerCase()}`,
    `Phone: ${form.phone.trim() || "Not provided"}`,
    "",
    "Project:",
    form.message.trim(),
    "",
    `Source article: ${attribution.sourceArticle || "Direct or unavailable"}`,
    `Source URL: ${attribution.sourceUrl || "Direct or unavailable"}`,
    `Referrer: ${attribution.referrer || "Unavailable"}`,
    `CTA placement: ${attribution.ctaPlacement || "Direct or unavailable"}`,
    `UTM source: ${attribution.utmSource || "None"}`,
    `UTM medium: ${attribution.utmMedium || "None"}`,
    `UTM campaign: ${attribution.utmCampaign || "None"}`,
    `UTM content: ${attribution.utmContent || "None"}`,
    `Submitted at: ${submittedAt}`,
  ].join("\n");
}
