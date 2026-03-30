"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type IntakeForm = {
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

const STORAGE_KEY = "black-scarab-intake";

const initialForm: IntakeForm = {
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

const industries = [
  "Agriculture",
  "Manufacturing",
  "Transportation & Logistics",
  "Healthcare",
  "Retail",
  "Other",
];

const companySizes = ["1–10 employees", "10–50", "50–200", "200+"];

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

const budgetOptions = ["<$10K", "$10K–$50K", "$50K–$150K", "$150K+"];

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
      return initialForm;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return initialForm;
    }

    try {
      return { ...initialForm, ...JSON.parse(saved) };
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return initialForm;
    }
  });
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const progress = useMemo(
    () => Math.round(((step + 1) / steps.length) * 100),
    [step],
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

  const nextStep = () => {
    if (!stepValid) return;
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }

    setSubmitted(true);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const previousStep = () => {
    if (step === 0) return;
    setStep((current) => current - 1);
  };

  const resetForm = () => {
    setForm(initialForm);
    setStep(0);
    setSubmitted(false);
    window.localStorage.removeItem(STORAGE_KEY);
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
        <header className="border-b border-[#efeae1] px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/black-scarab-mark.png"
                alt="Black Scarab logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-base font-bold tracking-tight">
                BLACK SCARAB
              </span>
            </Link>

            <Link
              href="/"
              className="rounded-full border border-[#e5e7eb] px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#111827] hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </header>

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-10 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Client Intake
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Tell us what you&apos;re building
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              This takes about 2–3 minutes. We&apos;ll use your answers to scope
              the right AI infrastructure system for your business.
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
                Your intake has been saved
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#6b7280]">
                Thanks. This phase-one intake flow stores your answers locally in
                your browser while we wire up full submission and notifications.
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
          ) : (
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[280px_1fr]">
              <aside className={`${sectionCard} h-fit`}>
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
                    {stepValid
                      ? "Looks good — continue when you're ready."
                      : "Complete the required fields to continue."}
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!stepValid}
                    className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {step === steps.length - 1 ? "Design My System" : "Next →"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
