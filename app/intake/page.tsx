"use client";

import { useEffect, useState, type FormEvent } from "react";
import SiteHeader from "@/components/site-header";
import { initialIntakeForm, isValidEmail, type IntakeForm } from "@/lib/intake";

const STORAGE_KEY = "black-scarab-opportunity-inquiry-v2";

const navLinks = [
  { label: "Technology", href: "/catalog", isPage: true },
  { label: "Insights", href: "/insights", isPage: true },
  { label: "About", href: "/about", isPage: true },
];

const inquiryTypes = [
  "Physical AI technology company evaluating Mexico",
  "Industrial operator exploring a use case",
  "Integrator or strategic partner",
  "Other",
];

const industries = [
  "Manufacturing",
  "Warehousing & logistics",
  "Energy & utilities",
  "Mining",
  "Construction & infrastructure",
  "Agriculture",
  "Cross-industry / other",
];

const engagementOptions = [
  "Mexico Market-Entry Assessment",
  "Industrial Opportunity Mapping",
  "Strategic Introductions & Opportunity Development",
  "Technology or solution scouting",
  "Integration or channel partnership",
  "Other",
];

const stageOptions = [
  {
    value: "Idea",
    label: "Exploring the market or problem",
  },
  {
    value: "Evaluating vendors",
    label: "Evaluating technologies or partners",
  },
  {
    value: "Ready to deploy",
    label: "Defined opportunity and ready for a next step",
  },
];

const timelineOptions = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];

const steps = [
  {
    label: "Fit",
    title: "Who is reaching out?",
    description:
      "Choose the relationship that best describes you and give us the basic market context.",
  },
  {
    label: "Opportunity",
    title: "What should we evaluate?",
    description:
      "Describe the commercial question, operational problem, or partnership you want to explore.",
  },
  {
    label: "Contact",
    title: "Where should we follow up?",
    description:
      "Share the best contact details for a direct response from Black Scarab.",
  },
];

type ChoiceGridProps = {
  label: string;
  value: string;
  options: readonly (string | { value: string; label: string })[];
  onChange: (value: string) => void;
  columns?: "one" | "two";
};

function ChoiceGrid({
  label,
  value,
  options,
  onChange,
  columns = "one",
}: ChoiceGridProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={columns === "two" ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}
    >
      {options.map((option) => {
        const optionValue = typeof option === "string" ? option : option.value;
        const optionLabel = typeof option === "string" ? option : option.label;
        const selected = value === optionValue;

        return (
          <button
            key={optionValue}
            type="button"
            onClick={() => onChange(optionValue)}
            aria-pressed={selected}
            className={
              selected
                ? "rounded-2xl border border-[#111810] bg-[#111810] px-4 py-3.5 text-left text-sm font-medium leading-6 text-white shadow-sm"
                : "rounded-2xl border border-[#ddd7cc] bg-white px-4 py-3.5 text-left text-sm font-medium leading-6 text-[#111827] transition hover:border-[#aeb9a6] hover:bg-[#f7faf4]"
            }
          >
            {optionLabel}
          </button>
        );
      })}
    </div>
  );
}

type MultiChoiceGridProps = {
  values: string[];
  options: readonly string[];
  onChange: (values: string[]) => void;
};

function MultiChoiceGrid({ values, options, onChange }: MultiChoiceGridProps) {
  return (
    <div
      role="group"
      aria-label="Ways Black Scarab could help"
      className="grid gap-3 sm:grid-cols-2"
    >
      {options.map((option) => {
        const selected = values.includes(option);

        return (
          <button
            key={option}
            type="button"
            onClick={() =>
              onChange(
                selected
                  ? values.filter((item) => item !== option)
                  : [...values, option],
              )
            }
            aria-pressed={selected}
            className={
              selected
                ? "flex items-start gap-3 rounded-2xl border border-[#111810] bg-[#111810] px-4 py-3.5 text-left text-sm font-medium leading-6 text-white shadow-sm"
                : "flex items-start gap-3 rounded-2xl border border-[#ddd7cc] bg-white px-4 py-3.5 text-left text-sm font-medium leading-6 text-[#111827] transition hover:border-[#aeb9a6] hover:bg-[#f7faf4]"
            }
          >
            <span
              aria-hidden="true"
              className={
                selected
                  ? "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#b8c7ab]"
                  : "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#aeb9a6]"
              }
            />
            {option}
          </button>
        );
      })}
    </div>
  );
}

function isStepValid(form: IntakeForm, step: number) {
  if (step === 0) {
    return Boolean(
      form.inquiryType &&
        form.companyName.trim() &&
        form.country.trim() &&
        form.industry,
    );
  }

  if (step === 1) {
    return Boolean(
      form.engagementInterests.length > 0 &&
        form.opportunitySummary.trim() &&
        form.currentStage &&
        form.timeline,
    );
  }

  return Boolean(
    form.fullName.trim() &&
      form.email.trim() &&
      isValidEmail(form.email.trim()),
  );
}

function opportunityPrompt(inquiryType: string) {
  if (inquiryType.startsWith("Physical AI")) {
    return "Describe the technology, evidence of deployment, and what you want to learn or accomplish in Mexico.";
  }

  if (inquiryType.startsWith("Industrial operator")) {
    return "Describe the operational problem, relevant environment, and the outcome you want to improve.";
  }

  if (inquiryType.startsWith("Integrator")) {
    return "Describe your capabilities and the type of technology, customer opportunity, or partnership you want to explore.";
  }

  return "Describe the question or opportunity and what a useful next step would look like.";
}

export default function IntakePage() {
  const [form, setForm] = useState<IntakeForm>(initialIntakeForm);
  const [hasRestoredDraft, setHasRestoredDraft] = useState(false);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        setForm({ ...initialIntakeForm, ...JSON.parse(saved) });
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    setHasRestoredDraft(true);
  }, []);

  useEffect(() => {
    if (!hasRestoredDraft) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form, hasRestoredDraft]);

  const progress = Math.round(((step + 1) / steps.length) * 100);
  const stepValid = isStepValid(form, step);

  const updateField = <K extends keyof IntakeForm>(
    key: K,
    value: IntakeForm[K],
  ) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stepValid) return;

    if (step < steps.length - 1) {
      setSubmitError("");
      setStep((current) => current + 1);
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
                "We couldn't send your inquiry just yet. Please try again.",
        );
      }

      setSubmitted(true);
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't send your inquiry just yet. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialIntakeForm);
    setStep(0);
    setSubmitted(false);
    setSubmitError("");
    setIsSubmitting(false);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const inputClassName =
    "w-full rounded-2xl border border-[#ddd7cc] bg-white px-4 py-3.5 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#718064] focus:ring-2 focus:ring-[#dce7d2]";

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={navLinks}
          showIndustries={false}
          ctaLabel="Back to Home"
          ctaHref="/"
        />

        <section className="relative overflow-hidden bg-[#10150f] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#9eb18e]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#dce7d2]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Opportunity inquiry
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.75rem]">
                Start with the commercial question.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#d7ddd4] sm:text-lg">
                Whether you are evaluating Mexico, exploring an industrial use
                case, or considering a strategic partnership, share enough
                context for us to identify a useful next step.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/15 bg-white/[0.05] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8c7ab]">
                What happens next
              </p>
              <ol className="mt-5 space-y-4 text-sm leading-6 text-[#e0e6dd]">
                {[
                  "Black Scarab reviews the commercial and market fit.",
                  "We respond directly if there is a credible next step.",
                  "Providers and qualified partners retain technical delivery.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-mono text-xs font-semibold text-[#b8c7ab]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f3] px-6 py-10 md:px-10 md:py-14 lg:px-14">
          {submitted ? (
            <div className="mx-auto max-w-3xl rounded-[28px] border border-[#dce4d6] bg-white p-8 text-center shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:p-12">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0e2] text-xl text-[#526148]">
                ✓
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Inquiry received
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Thank you for the context.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#626b75]">
                Black Scarab will review the opportunity and respond directly
                if there is a credible fit or a useful next step to recommend.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:info@blackscarab.ai"
                  className="rounded-full bg-[#111810] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#253023]"
                >
                  Email Black Scarab
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-[#d7d1c6] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f6f4ef]"
                >
                  Start Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[250px_1fr] lg:gap-9">
              <aside className="h-fit rounded-[26px] border border-[#e3ded5] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] lg:sticky lg:top-28">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#647456]">
                    Your progress
                  </p>
                  <p className="text-sm font-medium text-[#626b75]">{progress}%</p>
                </div>
                <div
                  className="mt-4 h-2 overflow-hidden rounded-full bg-[#ece7dd]"
                  role="progressbar"
                  aria-label="Inquiry progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                >
                  <div
                    className="h-full rounded-full bg-[#647456] transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <ol className="mt-6 grid grid-cols-3 gap-2 lg:grid-cols-1">
                  {steps.map((item, index) => {
                    const active = index === step;
                    const complete = index < step;

                    return (
                      <li
                        key={item.label}
                        aria-current={active ? "step" : undefined}
                        className={
                          active
                            ? "rounded-2xl border border-[#111810] bg-[#111810] px-3 py-3 text-white lg:px-4"
                            : complete
                              ? "rounded-2xl border border-[#dce4d6] bg-[#eef3ea] px-3 py-3 text-[#283225] lg:px-4"
                              : "rounded-2xl border border-[#ebe6dd] bg-white px-3 py-3 text-[#777f87] lg:px-4"
                        }
                      >
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 text-xs font-medium sm:text-sm">
                          {item.label}
                        </p>
                      </li>
                    );
                  })}
                </ol>

                <p className="mt-6 border-t border-[#eee8de] pt-5 text-xs leading-6 text-[#747d86]">
                  Three focused steps. No technical specifications or formal RFP
                  are required.
                </p>
              </aside>

              <form
                onSubmit={(event) => {
                  void handleSubmit(event);
                }}
                className="rounded-[28px] border border-[#e3ded5] bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                  Step {step + 1} of {steps.length}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {steps[step].title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#626b75]">
                  {steps[step].description}
                </p>

                <div className="mt-8">
                  {step === 0 ? (
                    <div className="grid gap-7">
                      <fieldset>
                        <legend className="mb-3 text-sm font-medium">
                          Which best describes you? <RequiredMark />
                        </legend>
                        <ChoiceGrid
                          label="Inquiry type"
                          value={form.inquiryType}
                          options={inquiryTypes}
                          onChange={(value) => updateField("inquiryType", value)}
                          columns="two"
                        />
                      </fieldset>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <label className="text-sm font-medium">
                          Organization <RequiredMark />
                          <input
                            value={form.companyName}
                            onChange={(event) =>
                              updateField("companyName", event.target.value)
                            }
                            autoComplete="organization"
                            placeholder="Company or organization"
                            className={`${inputClassName} mt-2`}
                            required
                          />
                        </label>
                        <label className="text-sm font-medium">
                          Website
                          <input
                            value={form.website}
                            onChange={(event) =>
                              updateField("website", event.target.value)
                            }
                            autoComplete="url"
                            inputMode="url"
                            placeholder="company.com"
                            className={`${inputClassName} mt-2`}
                          />
                        </label>
                      </div>

                      <label className="text-sm font-medium">
                        Headquarters or primary market <RequiredMark />
                        <input
                          value={form.country}
                          onChange={(event) =>
                            updateField("country", event.target.value)
                          }
                          autoComplete="country-name"
                          placeholder="United States, Mexico..."
                          className={`${inputClassName} mt-2`}
                          required
                        />
                      </label>

                      <fieldset>
                        <legend className="mb-3 text-sm font-medium">
                          Primary industry <RequiredMark />
                        </legend>
                        <ChoiceGrid
                          label="Primary industry"
                          value={form.industry}
                          options={industries}
                          onChange={(value) => updateField("industry", value)}
                          columns="two"
                        />
                      </fieldset>
                    </div>
                  ) : null}

                  {step === 1 ? (
                    <div className="grid gap-7">
                      <fieldset>
                        <legend className="mb-3 text-sm font-medium">
                          What would be most useful? <RequiredMark />
                          <span className="ml-2 font-normal text-[#747d86]">
                            Select all that apply.
                          </span>
                        </legend>
                        <MultiChoiceGrid
                          values={form.engagementInterests}
                          options={engagementOptions}
                          onChange={(values) =>
                            updateField("engagementInterests", values)
                          }
                        />
                      </fieldset>

                      <label className="text-sm font-medium">
                        Tell us about the opportunity <RequiredMark />
                        <span className="mt-2 block text-sm font-normal leading-6 text-[#747d86]">
                          {opportunityPrompt(form.inquiryType)}
                        </span>
                        <textarea
                          value={form.opportunitySummary}
                          onChange={(event) =>
                            updateField("opportunitySummary", event.target.value)
                          }
                          rows={6}
                          placeholder="A short, practical description is enough to begin."
                          className={`${inputClassName} mt-3 resize-y`}
                          required
                        />
                      </label>

                      <div className="grid gap-7 lg:grid-cols-2">
                        <fieldset>
                          <legend className="mb-3 text-sm font-medium">
                            Current stage <RequiredMark />
                          </legend>
                          <ChoiceGrid
                            label="Current stage"
                            value={form.currentStage}
                            options={stageOptions}
                            onChange={(value) =>
                              updateField("currentStage", value)
                            }
                          />
                        </fieldset>
                        <fieldset>
                          <legend className="mb-3 text-sm font-medium">
                            Timing <RequiredMark />
                          </legend>
                          <ChoiceGrid
                            label="Timing"
                            value={form.timeline}
                            options={timelineOptions}
                            onChange={(value) => updateField("timeline", value)}
                          />
                        </fieldset>
                      </div>

                      <label className="text-sm font-medium">
                        Additional context
                        <textarea
                          value={form.additionalContext}
                          onChange={(event) =>
                            updateField("additionalContext", event.target.value)
                          }
                          rows={4}
                          placeholder="Relevant markets, stakeholders, constraints, links, or anything else we should know."
                          className={`${inputClassName} mt-2 resize-y`}
                        />
                      </label>
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <div className="grid gap-7">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <label className="text-sm font-medium">
                          Full name <RequiredMark />
                          <input
                            value={form.fullName}
                            onChange={(event) =>
                              updateField("fullName", event.target.value)
                            }
                            autoComplete="name"
                            placeholder="Your full name"
                            className={`${inputClassName} mt-2`}
                            required
                          />
                        </label>
                        <label className="text-sm font-medium">
                          Role or title
                          <input
                            value={form.jobTitle}
                            onChange={(event) =>
                              updateField("jobTitle", event.target.value)
                            }
                            autoComplete="organization-title"
                            placeholder="Founder, operations director..."
                            className={`${inputClassName} mt-2`}
                          />
                        </label>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <label className="text-sm font-medium">
                          Work email <RequiredMark />
                          <input
                            value={form.email}
                            onChange={(event) =>
                              updateField("email", event.target.value)
                            }
                            autoComplete="email"
                            type="email"
                            placeholder="you@company.com"
                            className={`${inputClassName} mt-2`}
                            required
                          />
                        </label>
                        <label className="text-sm font-medium">
                          Phone or WhatsApp
                          <input
                            value={form.phone}
                            onChange={(event) =>
                              updateField("phone", event.target.value)
                            }
                            autoComplete="tel"
                            type="tel"
                            placeholder="+52 ..."
                            className={`${inputClassName} mt-2`}
                          />
                        </label>
                      </div>

                      <div className="rounded-2xl border border-[#dce4d6] bg-[#eef3ea] px-5 py-5 text-sm leading-7 text-[#526148]">
                        By sending this inquiry, you are asking Black Scarab to
                        evaluate commercial fit. Technical validation,
                        engineering, deployment, warranties, and ongoing support
                        remain with the technology provider and qualified
                        implementation partners.
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="mt-10 flex flex-col-reverse gap-4 border-t border-[#eee8de] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitError("");
                      setStep((current) => Math.max(0, current - 1));
                    }}
                    disabled={step === 0}
                    className="rounded-full border border-[#d7d1c6] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f6f4ef] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Back
                  </button>

                  <div className="flex flex-col items-stretch gap-3 sm:items-end">
                    <p
                      aria-live="polite"
                      className={
                        submitError
                          ? "max-w-xl text-sm leading-6 text-[#9c4f3d]"
                          : "text-sm text-[#747d86]"
                      }
                    >
                      {submitError
                        ? submitError
                        : stepValid
                          ? "Ready for the next step."
                          : "Complete the required fields to continue."}
                    </p>
                    <button
                      type="submit"
                      disabled={!stepValid || isSubmitting}
                      className="rounded-full bg-[#111810] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#253023] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {step === steps.length - 1
                        ? isSubmitting
                          ? "Sending..."
                          : "Send Inquiry"
                        : "Continue →"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </section>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#626b75] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>
              © 2026 Black Scarab. Physical AI market development for Mexico.
            </span>
            <span className="text-[#c9c1b5]">|</span>
            <span>Based in Miami, FL</span>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="mailto:info@blackscarab.ai"
              className="transition hover:text-[#111827]"
            >
              info@blackscarab.ai
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function RequiredMark() {
  return (
    <span className="text-[#9c4f3d]" aria-hidden="true">
      *
    </span>
  );
}
