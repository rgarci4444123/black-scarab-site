"use client";

import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/site-header";
import { initialIntakeForm, type IntakeForm } from "@/lib/intake";

const ADVANCED_STORAGE_KEY = "black-scarab-intake-advanced";
const LEAD_CAPTURE_STORAGE_KEY = "black-scarab-intake-lead-capture";

type WorkTrack = "advanced" | "lead-capture";

type LeadCaptureForm = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  website: string;
  country: string;
  companySize: string;
  leadSources: string[];
  responseFlow: string;
  desiredOutcomes: string[];
  timeline: string;
  notes: string;
};

const initialLeadCaptureForm: LeadCaptureForm = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  website: "",
  country: "",
  companySize: "",
  leadSources: [],
  responseFlow: "",
  desiredOutcomes: [],
  timeline: "",
  notes: "",
};

const industries = [
  "Agriculture",
  "Manufacturing",
  "Transportation & Logistics",
  "Healthcare",
  "Retail",
  "Other",
];

const companySizes = ["1–10 employees", "10–50", "50–200", "200+"];

const leadSourceOptions = [
  "Website form",
  "WhatsApp",
  "Instagram / Facebook",
  "Phone calls",
  "Email",
  "Multiple channels",
];

const responseFlowOptions = [
  "I respond manually",
  "My team responds manually",
  "We often respond late",
  "We do not have a clear process",
];

const leadOutcomeOptions = [
  "Instant lead response",
  "Automated follow-up",
  "Call booking flow",
  "Lead tracking",
];

const leadTimelineOptions = ["This week", "This month", "Just exploring"];

const locationOptions = [
  "Single location",
  "Multiple locations",
  "Nationwide operations",
];

const objectiveOptions = [
  "Reduce costs",
  "Increase efficiency",
  "Monitor operations",
  "Predict failures",
  "Automate decisions",
  "Improve customer experience",
];

const environmentOptions = [
  "Indoor facility",
  "Outdoor environment",
  "Vehicles / mobile",
  "Mixed",
];

const infrastructureOptions = [
  "Cameras",
  "Sensors (temperature, motion, etc.)",
  "IoT devices",
  "Cloud systems (AWS, Azure, etc.)",
  "None",
];

const internetOptions = ["Strong / stable", "Intermittent", "Limited / rural"];

const dataOptions = [
  "We already collect structured data",
  "We collect limited data",
  "No structured data",
];

const aiExperienceOptions = [
  "No",
  "Exploring",
  "Pilot projects",
  "Production systems",
];

const stageOptions = ["Idea", "Evaluating vendors", "Ready to deploy"];

const deploymentOptions = [
  "On-premise (local hardware)",
  "Hybrid (local + cloud)",
  "Cloud only",
  "Not sure",
];

const budgetOptions = [
  "Under $25K",
  "$25K–$100K",
  "$100K–$250K",
  "$250K+",
  "Not sure yet",
];

const timelineOptions = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];

const steps = [
  {
    label: "Business",
    title: "Business Context",
    description:
      "Tell us about your organization and where your operations take place.",
  },
  {
    label: "Goals",
    title: "Operational Objective",
    description:
      "Help us understand the outcome you want and the environment where the system will operate.",
  },
  {
    label: "Infrastructure",
    title: "Current Infrastructure",
    description:
      "Give us a quick sense of what systems, connectivity, and data you already have in place.",
  },
  {
    label: "Readiness",
    title: "AI & Deployment Readiness",
    description:
      "This helps us gauge how advanced your team is and what kind of deployment approach makes sense.",
  },
  {
    label: "Budget",
    title: "Budget & Timeline",
    description:
      "Share your time horizon and investment range so we can scope recommendations appropriately.",
  },
  {
    label: "Contact",
    title: "Contact Information",
    description:
      "Tell us who to reach out to once we review your project requirements.",
  },
];

function toggleValue(values: string[], value: string) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

export default function IntakePage() {
  const [form, setForm] = useState<IntakeForm>(() => {
    if (typeof window === "undefined") {
      return initialIntakeForm;
    }

    const saved = window.localStorage.getItem(ADVANCED_STORAGE_KEY);

    if (!saved) {
      return initialIntakeForm;
    }

    try {
      return { ...initialIntakeForm, ...JSON.parse(saved) };
    } catch {
      window.localStorage.removeItem(ADVANCED_STORAGE_KEY);
      return initialIntakeForm;
    }
  });
  const [leadForm, setLeadForm] = useState<LeadCaptureForm>(() => {
    if (typeof window === "undefined") {
      return initialLeadCaptureForm;
    }

    const saved = window.localStorage.getItem(LEAD_CAPTURE_STORAGE_KEY);

    if (!saved) {
      return initialLeadCaptureForm;
    }

    try {
      return { ...initialLeadCaptureForm, ...JSON.parse(saved) };
    } catch {
      window.localStorage.removeItem(LEAD_CAPTURE_STORAGE_KEY);
      return initialLeadCaptureForm;
    }
  });
  const [selectedTrack, setSelectedTrack] = useState<WorkTrack | null>(null);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    window.localStorage.setItem(ADVANCED_STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    window.localStorage.setItem(
      LEAD_CAPTURE_STORAGE_KEY,
      JSON.stringify(leadForm),
    );
  }, [leadForm]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const track = new URLSearchParams(window.location.search).get("track");

    if (track === "advanced" || track === "lead-capture") {
      setSelectedTrack(track);
      return;
    }

    setSelectedTrack(null);
  }, []);

  const progress = useMemo(
    () => Math.round(((step + 1) / steps.length) * 100),
    [step],
  );

  const leadStepValid = useMemo(
    () =>
      Boolean(
        leadForm.fullName.trim() &&
          leadForm.companyName.trim() &&
          leadForm.email.trim() &&
          leadForm.country.trim() &&
          leadForm.leadSources.length > 0 &&
          leadForm.responseFlow &&
          leadForm.desiredOutcomes.length > 0 &&
          leadForm.timeline,
      ),
    [leadForm],
  );

  const stepValid = useMemo(() => {
    switch (step) {
      case 0:
        return Boolean(form.industry && form.country);
      case 1:
        return Boolean(
          form.objectives.length > 0 &&
            form.primaryUseCase.trim() &&
            form.environment,
        );
      case 2:
        return Boolean(
          form.currentInfrastructure.length > 0 &&
            form.internetReliability &&
            form.dataAvailability,
        );
      case 3:
        return Boolean(
          form.aiExperience && form.currentStage && form.deploymentSetup,
        );
      case 4:
        return Boolean(form.budget && form.timeline);
      case 5:
        return Boolean(
          form.fullName.trim() &&
            form.companyName.trim() &&
            form.email.trim(),
        );
      default:
        return false;
    }
  }, [form, step]);

  const updateField = <K extends keyof IntakeForm>(key: K, value: IntakeForm[K]) =>
    setForm((current) => ({ ...current, [key]: value }));

  const updateLeadField = <K extends keyof LeadCaptureForm>(
    key: K,
    value: LeadCaptureForm[K],
  ) => setLeadForm((current) => ({ ...current, [key]: value }));

  const nextStep = async () => {
    if (!stepValid) return;
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as {
        error?: string;
        details?: string;
      };

      if (!response.ok) {
        throw new Error(
          payload.details
            ? `${payload.error || "Submission failed."} ${payload.details}`
            : payload.error ||
              "We couldn't submit your intake just yet. Please try again.",
        );
      }

      setSubmitted(true);
      window.localStorage.removeItem(ADVANCED_STORAGE_KEY);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't submit your intake just yet. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const previousStep = () => {
    if (step === 0) return;
    setStep((current) => current - 1);
  };

  const submitLeadCapture = async () => {
    if (!leadStepValid) return;

    setSubmitError("");
    setIsSubmitting(true);

    const timelineMap: Record<string, IntakeForm["timeline"]> = {
      "This week": "ASAP",
      "This month": "1–3 months",
      "Just exploring": "Just exploring",
    };

    const requestBody: IntakeForm = {
      ...initialIntakeForm,
      industry: "Lead Capture Systems",
      companySize: leadForm.companySize,
      country: leadForm.country,
      locations: "Single location",
      objectives: leadForm.desiredOutcomes,
      primaryUseCase: leadForm.responseFlow,
      environment: "Digital lead capture",
      currentInfrastructure: leadForm.leadSources,
      internetReliability: "Strong / stable",
      dataAvailability: "We collect limited data",
      aiExperience: "No",
      currentStage:
        leadForm.timeline === "Just exploring"
          ? "Evaluating vendors"
          : "Ready to deploy",
      deploymentSetup: "Cloud only",
      budget: "Under $25K",
      timeline: timelineMap[leadForm.timeline],
      additionalContext: [
        leadForm.website ? `Website: ${leadForm.website}` : "",
        leadForm.notes ? `Notes: ${leadForm.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      fullName: leadForm.fullName,
      companyName: leadForm.companyName,
      email: leadForm.email,
      phone: leadForm.phone,
    };

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseBody = (await response.json()) as {
        error?: string;
        details?: string;
      };

      if (!response.ok) {
        throw new Error(
          responseBody.details
            ? `${responseBody.error || "Submission failed."} ${responseBody.details}`
            : responseBody.error ||
                "We couldn't submit your request just yet. Please try again.",
        );
      }

      setSubmitted(true);
      window.localStorage.removeItem(LEAD_CAPTURE_STORAGE_KEY);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't submit your request just yet. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialIntakeForm);
    setLeadForm(initialLeadCaptureForm);
    setStep(0);
    setSubmitted(false);
    setSubmitError("");
    setIsSubmitting(false);
    setSelectedTrack(null);
    window.localStorage.removeItem(ADVANCED_STORAGE_KEY);
    window.localStorage.removeItem(LEAD_CAPTURE_STORAGE_KEY);
  };

  const inputClassName =
    "w-full rounded-2xl border border-[#ddd7cc] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#111827]";

  const sectionCard =
    "rounded-[28px] border border-[#e7e3da] bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)] md:p-8";

  const renderMultiSelect = (
    values: string[],
    options: string[],
    onChange: (next: string[]) => void,
  ) => (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const selected = values.includes(option);

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(toggleValue(values, option))}
            className={
              selected
                ? "rounded-full border border-[#111827] bg-[#111827] px-4 py-2 text-sm font-medium text-white"
                : "rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
            }
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  const renderOptions = (
    name: string,
    value: string,
    options: string[],
    onChange: (next: string) => void,
  ) => (
    <div className="grid gap-3">
      {options.map((option) => {
        const selected = value === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={
              selected
                ? "rounded-2xl border border-[#111827] bg-[#111827] px-4 py-3 text-left text-sm font-medium text-white"
                : "rounded-2xl border border-[#ddd7cc] bg-white px-4 py-3 text-left text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
            }
            aria-pressed={selected}
            aria-label={`${name}-${option}`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={[
            { label: "Products", href: "/catalog", isPage: true },
            { label: "Models", href: "/models", isPage: true },
            { label: "Insights", href: "/insights", isPage: true },
            { label: "About", href: "/about", isPage: true },
          ]}
          ctaLabel="Back to Home"
          ctaHref="/"
        />

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-10 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Ways to Work With Black Scarab
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Choose the system that fits your next step
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              Black Scarab works on two levels: advanced operational AI systems
              for complex environments, and fast lead capture systems for
              businesses that want faster response and higher conversion.
            </p>
          </div>
        </section>

        <section className="px-6 py-10 md:px-10 md:py-12">
          {submitted ? (
            <div className={`${sectionCard} mx-auto max-w-3xl text-center`}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                Received
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                {selectedTrack === "lead-capture"
                  ? "Your lead capture request has been saved"
                  : "Your intake has been saved"}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#6b7280]">
                {selectedTrack === "lead-capture"
                  ? "Thanks. We have your details and will follow up about your lead capture system and next steps."
                  : "Thanks. We&apos;ve received your intake and will review your project details before following up with next steps."}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:info@blackscarab.ai"
                  className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  Email Black Scarab
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                >
                  Start Again
                </button>
              </div>
            </div>
          ) : selectedTrack === null ? (
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-[#e7e3da] bg-white p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                  Advanced Systems
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Custom edge AI for real-world operations
                </h2>
                <p className="mt-4 text-base leading-7 text-[#6b7280]">
                  For manufacturing, agriculture, logistics, and other
                  environments where real-time decisions, sensing, and reliable
                  deployment matter.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#4b5563]">
                  <li>Custom edge AI architecture and deployment planning</li>
                  <li>Operational systems for industrial and field settings</li>
                  <li>Best for teams evaluating larger or more technical builds</li>
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedTrack("advanced")}
                  className="mt-8 rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  Plan an Advanced System
                </button>
              </div>

              <div className="rounded-[28px] border border-[#dde7d7] bg-[#edf4e8] p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                  Lead Capture Systems
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  AI-powered lead response in days, not weeks
                </h2>
                <p className="mt-4 text-base leading-7 text-[#55634b]">
                  For businesses that want instant lead response, automated
                  follow-up, cleaner lead tracking, and faster call booking
                  without adding more manual work.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#46533f]">
                  <li>Instant lead response and automated follow-up</li>
                  <li>Fast setup with a focused, repeatable delivery model</li>
                  <li>Built using the same operational thinking behind our larger systems</li>
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedTrack("lead-capture")}
                  className="mt-8 rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  Set Up Lead Capture
                </button>
              </div>
            </div>
          ) : selectedTrack === "lead-capture" ? (
            <div className={`${sectionCard} mx-auto max-w-4xl`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                    Lead Capture Systems
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                    Set up AI lead response in days, not weeks
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6b7280]">
                    Tell us how leads come in today and what you want to
                    automate. This path is designed for a fast turnaround and a
                    simple setup conversation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTrack(null)}
                  className="rounded-full border border-[#ddd7cc] px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                >
                  Switch Path
                </button>
              </div>

              <div className="mt-8 grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#111827]">
                      Full Name <span className="text-[#9c4f3d]">*</span>
                    </label>
                    <input
                      value={leadForm.fullName}
                      onChange={(event) =>
                        updateLeadField("fullName", event.target.value)
                      }
                      placeholder="Your full name"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#111827]">
                      Business Name <span className="text-[#9c4f3d]">*</span>
                    </label>
                    <input
                      value={leadForm.companyName}
                      onChange={(event) =>
                        updateLeadField("companyName", event.target.value)
                      }
                      placeholder="Business name"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#111827]">
                      Email <span className="text-[#9c4f3d]">*</span>
                    </label>
                    <input
                      value={leadForm.email}
                      onChange={(event) =>
                        updateLeadField("email", event.target.value)
                      }
                      placeholder="you@business.com"
                      type="email"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#111827]">
                      Phone / WhatsApp
                    </label>
                    <input
                      value={leadForm.phone}
                      onChange={(event) =>
                        updateLeadField("phone", event.target.value)
                      }
                      placeholder="+1 ..."
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#111827]">
                      Website
                    </label>
                    <input
                      value={leadForm.website}
                      onChange={(event) =>
                        updateLeadField("website", event.target.value)
                      }
                      placeholder="https://yourbusiness.com"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#111827]">
                      Country / Market <span className="text-[#9c4f3d]">*</span>
                    </label>
                    <input
                      value={leadForm.country}
                      onChange={(event) =>
                        updateLeadField("country", event.target.value)
                      }
                      placeholder="United States, Mexico, Colombia..."
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[#111827]">
                    Company Size
                  </label>
                  {renderOptions(
                    "lead-company-size",
                    leadForm.companySize,
                    companySizes,
                    (next) => updateLeadField("companySize", next),
                  )}
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[#111827]">
                    How do leads come in now?{" "}
                    <span className="text-[#9c4f3d]">*</span>
                  </label>
                  {renderMultiSelect(
                    leadForm.leadSources,
                    leadSourceOptions,
                    (next) => updateLeadField("leadSources", next),
                  )}
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[#111827]">
                    What happens after someone contacts you?{" "}
                    <span className="text-[#9c4f3d]">*</span>
                  </label>
                  {renderOptions(
                    "lead-response-flow",
                    leadForm.responseFlow,
                    responseFlowOptions,
                    (next) => updateLeadField("responseFlow", next),
                  )}
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[#111827]">
                    What do you want us to set up?{" "}
                    <span className="text-[#9c4f3d]">*</span>
                  </label>
                  {renderMultiSelect(
                    leadForm.desiredOutcomes,
                    leadOutcomeOptions,
                    (next) => updateLeadField("desiredOutcomes", next),
                  )}
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[#111827]">
                    Preferred timeline <span className="text-[#9c4f3d]">*</span>
                  </label>
                  {renderOptions(
                    "lead-timeline",
                    leadForm.timeline,
                    leadTimelineOptions,
                    (next) => updateLeadField("timeline", next),
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#111827]">
                    Notes
                  </label>
                  <textarea
                    value={leadForm.notes}
                    onChange={(event) =>
                      updateLeadField("notes", event.target.value)
                    }
                    rows={4}
                    placeholder="Anything we should know about your lead flow, follow-up process, or booking setup?"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#efeae1] pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedTrack(null)}
                  className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                >
                  Back
                </button>

                <div className="text-sm text-[#6b7280]">
                  {submitError ? (
                    <span className="text-[#9c4f3d]">{submitError}</span>
                  ) : leadStepValid ? (
                    "Looks good — submit when you're ready."
                  ) : (
                    "Complete the required fields to continue."
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    void submitLeadCapture();
                  }}
                  disabled={!leadStepValid || isSubmitting}
                  className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isSubmitting ? "Submitting..." : "Get My System Set Up"}
                </button>
              </div>
            </div>
          ) : (
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[280px_1fr]">
              <aside className={`${sectionCard} h-fit`}>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedTrack(null)}
                    className="rounded-full border border-[#ddd7cc] px-4 py-2 text-xs font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                  >
                    Switch Path
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                    Progress
                  </p>
                  <p className="text-sm font-medium text-[#6b7280]">{progress}%</p>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#ece7dd]">
                  <div
                    className="h-full rounded-full bg-[#111827] transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-8 space-y-3">
                  {steps.map((item, index) => {
                    const active = index === step;
                    const complete = index < step;

                    return (
                      <div
                        key={item.label}
                        className={
                          active
                            ? "rounded-2xl border border-[#111827] bg-[#111827] px-4 py-3 text-white"
                            : complete
                              ? "rounded-2xl border border-[#ddd7cc] bg-[#faf8f3] px-4 py-3 text-[#111827]"
                              : "rounded-2xl border border-[#eee8de] bg-white px-4 py-3 text-[#6b7280]"
                        }
                      >
                        <p className="text-xs font-medium uppercase tracking-[0.18em]">
                          Step {index + 1}
                        </p>
                        <p className="mt-1 text-sm font-medium">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </aside>

              <div className={sectionCard}>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                  Step {step + 1}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  {steps[step].title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6b7280]">
                  {steps[step].description}
                </p>

                <div className="mt-8">
                  {step === 0 && (
                    <div className="grid gap-6">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#111827]">
                          Industry <span className="text-[#9c4f3d]">*</span>
                        </label>
                        {renderOptions(
                          "industry",
                          form.industry,
                          industries,
                          (next) => updateField("industry", next),
                        )}
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#111827]">
                          Company Size
                        </label>
                        {renderOptions(
                          "companySize",
                          form.companySize,
                          companySizes,
                          (next) => updateField("companySize", next),
                        )}
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#111827]">
                            Country of Operation{" "}
                            <span className="text-[#9c4f3d]">*</span>
                          </label>
                          <input
                            value={form.country}
                            onChange={(event) =>
                              updateField("country", event.target.value)
                            }
                            placeholder="Mexico, Brazil, Colombia..."
                            className={inputClassName}
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-medium text-[#111827]">
                            Number of Locations / Sites
                          </label>
                          {renderOptions(
                            "locations",
                            form.locations,
                            locationOptions,
                            (next) => updateField("locations", next),
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="grid gap-6">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#111827]">
                          What are you trying to improve?{" "}
                          <span className="text-[#9c4f3d]">*</span>
                        </label>
                        {renderMultiSelect(
                          form.objectives,
                          objectiveOptions,
                          (next) => updateField("objectives", next),
                        )}
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#111827]">
                          Primary Use Case{" "}
                          <span className="text-[#9c4f3d]">*</span>
                        </label>
                        <input
                          value={form.primaryUseCase}
                          onChange={(event) =>
                            updateField("primaryUseCase", event.target.value)
                          }
                          placeholder="Track warehouse activity and reduce idle time using cameras"
                          className={inputClassName}
                        />
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#111827]">
                          Where will this system operate?{" "}
                          <span className="text-[#9c4f3d]">*</span>
                        </label>
                        {renderOptions(
                          "environment",
                          form.environment,
                          environmentOptions,
                          (next) => updateField("environment", next),
                        )}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid gap-6">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#111827]">
                          Which of these do you already use?{" "}
                          <span className="text-[#9c4f3d]">*</span>
                        </label>
                        {renderMultiSelect(
                          form.currentInfrastructure,
                          infrastructureOptions,
                          (next) => updateField("currentInfrastructure", next),
                        )}
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#111827]">
                          Internet Reliability{" "}
                          <span className="text-[#9c4f3d]">*</span>
                        </label>
                        {renderOptions(
                          "internetReliability",
                          form.internetReliability,
                          internetOptions,
                          (next) => updateField("internetReliability", next),
                        )}
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#111827]">
                          Data Availability{" "}
                          <span className="text-[#9c4f3d]">*</span>
                        </label>
                        {renderOptions(
                          "dataAvailability",
                          form.dataAvailability,
                          dataOptions,
                          (next) => updateField("dataAvailability", next),
                        )}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="grid gap-6">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#111827]">
                          Have you implemented AI before?{" "}
                          <span className="text-[#9c4f3d]">*</span>
                        </label>
                        {renderOptions(
                          "aiExperience",
                          form.aiExperience,
                          aiExperienceOptions,
                          (next) => updateField("aiExperience", next),
                        )}
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-3 block text-sm font-medium text-[#111827]">
                            Current Stage <span className="text-[#9c4f3d]">*</span>
                          </label>
                          {renderOptions(
                            "currentStage",
                            form.currentStage,
                            stageOptions,
                            (next) => updateField("currentStage", next),
                          )}
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-medium text-[#111827]">
                            Preferred Deployment Setup{" "}
                            <span className="text-[#9c4f3d]">*</span>
                          </label>
                          {renderOptions(
                            "deploymentSetup",
                            form.deploymentSetup,
                            deploymentOptions,
                            (next) => updateField("deploymentSetup", next),
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="grid gap-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-3 block text-sm font-medium text-[#111827]">
                            Estimated Budget{" "}
                            <span className="text-[#9c4f3d]">*</span>
                          </label>
                          {renderOptions(
                            "budget",
                            form.budget,
                            budgetOptions,
                            (next) => updateField("budget", next),
                          )}
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-medium text-[#111827]">
                            Timeline <span className="text-[#9c4f3d]">*</span>
                          </label>
                          {renderOptions(
                            "timeline",
                            form.timeline,
                            timelineOptions,
                            (next) => updateField("timeline", next),
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#111827]">
                          Anything else we should know?
                        </label>
                        <textarea
                          value={form.additionalContext}
                          onChange={(event) =>
                            updateField("additionalContext", event.target.value)
                          }
                          rows={5}
                          placeholder="Share any extra context, constraints, or system requirements."
                          className={inputClassName}
                        />
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="grid gap-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#111827]">
                            Full Name <span className="text-[#9c4f3d]">*</span>
                          </label>
                          <input
                            value={form.fullName}
                            onChange={(event) =>
                              updateField("fullName", event.target.value)
                            }
                            placeholder="Your full name"
                            className={inputClassName}
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#111827]">
                            Company Name{" "}
                            <span className="text-[#9c4f3d]">*</span>
                          </label>
                          <input
                            value={form.companyName}
                            onChange={(event) =>
                              updateField("companyName", event.target.value)
                            }
                            placeholder="Company name"
                            className={inputClassName}
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#111827]">
                            Email <span className="text-[#9c4f3d]">*</span>
                          </label>
                          <input
                            value={form.email}
                            onChange={(event) =>
                              updateField("email", event.target.value)
                            }
                            placeholder="you@company.com"
                            type="email"
                            className={inputClassName}
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#111827]">
                            Phone / WhatsApp
                          </label>
                          <input
                            value={form.phone}
                            onChange={(event) =>
                              updateField("phone", event.target.value)
                            }
                            placeholder="+52 ..."
                            className={inputClassName}
                          />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-dashed border-[#ddd7cc] bg-[#faf8f3] px-4 py-5 text-sm leading-6 text-[#6b7280]">
                        File upload is being added in the next phase. For now,
                        mention diagrams, floor plans, or reference materials in
                        the additional context field, and we&apos;ll follow up
                        directly if needed.
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#efeae1] pt-6">
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={step === 0}
                    className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Back
                  </button>

                  <div className="text-sm text-[#6b7280]">
                    {submitError ? (
                      <span className="text-[#9c4f3d]">{submitError}</span>
                    ) : stepValid
                      ? "Looks good — continue when you're ready."
                      : "Complete the required fields to continue."}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      void nextStep();
                    }}
                    disabled={!stepValid || isSubmitting}
                    className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {step === steps.length - 1
                      ? isSubmitting
                        ? "Submitting..."
                        : "Design My System"
                      : "Next →"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#6b7280] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>© 2026 Black Scarab. AI infrastructure for modern industry.</span>
            <span className="text-[#c9c1b5]">|</span>
            <span>Based in Miami, FL</span>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="mailto:info@blackscarab.ai"
              className="transition hover:text-[#111827]"
            >
              info@blackscarab.ai
            </a>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="https://www.linkedin.com/company/black-scarab/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#111827]"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
