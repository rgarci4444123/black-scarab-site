export const intakeInquiryTypes = [
  {
    value: "technology-company",
    label: "Physical AI or robotics company",
  },
  {
    value: "industrial-operator",
    label: "Industrial company or operator",
  },
  {
    value: "strategic-partner",
    label: "Integrator or strategic partner",
  },
  {
    value: "other",
    label: "Other",
  },
] as const;

export type IntakeForm = {
  inquiryType: string;
  companyName: string;
  website: string;
  opportunitySummary: string;
  fullName: string;
  email: string;
  phone: string;
  companyFax: string;
};

export const initialIntakeForm: IntakeForm = {
  inquiryType: "",
  companyName: "",
  website: "",
  opportunitySummary: "",
  fullName: "",
  email: "",
  phone: "",
  companyFax: "",
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasValidLength(value: unknown, min: number, max: number) {
  return (
    typeof value === "string" &&
    value.trim().length >= min &&
    value.trim().length <= max
  );
}

export function validateIntakeForm(form: IntakeForm) {
  if (!form || typeof form !== "object") {
    return "Please complete the required fields.";
  }

  const validInquiryTypes = new Set<string>(
    intakeInquiryTypes.map((inquiryType) => inquiryType.value),
  );

  if (
    !hasValidLength(form.fullName, 1, 120) ||
    !hasValidLength(form.companyName, 1, 180) ||
    !hasValidLength(form.email, 3, 254) ||
    !isValidEmail(form.email.trim())
  ) {
    return "Your name, company, or email is incomplete or invalid.";
  }

  if (
    typeof form.inquiryType !== "string" ||
    !validInquiryTypes.has(form.inquiryType)
  ) {
    return "Please tell us what kind of organization you represent.";
  }

  if (!hasValidLength(form.opportunitySummary, 20, 3000)) {
    return "Please describe the opportunity in at least 20 characters.";
  }

  if (
    typeof form.website !== "string" ||
    form.website.trim().length > 500 ||
    typeof form.phone !== "string" ||
    form.phone.trim().length > 80 ||
    typeof form.companyFax !== "string" ||
    form.companyFax.trim().length > 200
  ) {
    return "One of the optional fields is too long.";
  }

  return null;
}

export function isLikelySpam(form: IntakeForm) {
  return Boolean(form.companyFax.trim());
}

export function airtableFieldsFromIntake(form: IntakeForm) {
  const inquiryType = intakeInquiryTypes.find(
    (type) => type.value === form.inquiryType,
  );
  const context = [
    `Inquiry type: ${inquiryType?.label ?? form.inquiryType}`,
    form.website.trim()
      ? `Company website: ${form.website.trim()}`
      : null,
    "Source: Black Scarab website",
  ]
    .filter((line): line is string => Boolean(line))
    .join("\n");

  return {
    "Submitted At": new Date().toISOString(),
    "Primary Use Case": form.opportunitySummary.trim(),
    "Additional Context": context,
    "Full Name": form.fullName.trim(),
    "Company Name": form.companyName.trim(),
    Email: form.email.trim(),
    "Phone / WhatsApp": form.phone.trim(),
  };
}
