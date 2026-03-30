export type IntakeForm = {
  industry: string;
  companySize: string;
  country: string;
  locations: string;
  objectives: string[];
  primaryUseCase: string;
  environment: string;
  currentInfrastructure: string[];
  internetReliability: string;
  dataAvailability: string;
  aiExperience: string;
  currentStage: string;
  deploymentSetup: string;
  budget: string;
  timeline: string;
  additionalContext: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
};

export const initialIntakeForm: IntakeForm = {
  industry: "",
  companySize: "",
  country: "",
  locations: "",
  objectives: [],
  primaryUseCase: "",
  environment: "",
  currentInfrastructure: [],
  internetReliability: "",
  dataAvailability: "",
  aiExperience: "",
  currentStage: "",
  deploymentSetup: "",
  budget: "",
  timeline: "",
  additionalContext: "",
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateIntakeForm(form: IntakeForm) {
  if (!form.industry || !form.country.trim()) {
    return "Business context is incomplete.";
  }

  if (
    form.objectives.length === 0 ||
    !form.primaryUseCase.trim() ||
    !form.environment
  ) {
    return "Operational objective is incomplete.";
  }

  if (
    form.currentInfrastructure.length === 0 ||
    !form.internetReliability ||
    !form.dataAvailability
  ) {
    return "Current infrastructure details are incomplete.";
  }

  if (!form.aiExperience || !form.currentStage || !form.deploymentSetup) {
    return "AI readiness details are incomplete.";
  }

  if (!form.budget || !form.timeline) {
    return "Budget and timeline are incomplete.";
  }

  if (
    !form.fullName.trim() ||
    !form.companyName.trim() ||
    !form.email.trim() ||
    !isValidEmail(form.email.trim())
  ) {
    return "Contact details are incomplete or invalid.";
  }

  return null;
}

export function airtableFieldsFromIntake(form: IntakeForm) {
  return {
    "Submitted At": new Date().toISOString(),
    Industry: form.industry,
    "Company Size": form.companySize,
    "Country of Operation": form.country,
    "Number of Locations / Sites": form.locations,
    "Operational Objectives": form.objectives.join(", "),
    "Primary Use Case": form.primaryUseCase,
    "Operating Environment": form.environment,
    "Current Infrastructure": form.currentInfrastructure.join(", "),
    "Internet Reliability": form.internetReliability,
    "Data Availability": form.dataAvailability,
    "AI Experience": form.aiExperience,
    "Current Stage": form.currentStage,
    "Preferred Deployment Setup": form.deploymentSetup,
    "Estimated Budget": form.budget,
    Timeline: form.timeline,
    "Additional Context": form.additionalContext,
    "Full Name": form.fullName,
    "Company Name": form.companyName,
    Email: form.email,
    "Phone / WhatsApp": form.phone,
  };
}
