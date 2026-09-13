"use client";

import { track } from "@vercel/analytics/react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  initialLocalAiDeploymentForm,
  type LocalAiDeploymentForm,
} from "@/lib/local-ai-deployment";

const inputClassName =
  "mt-2 w-full rounded-2xl border border-[#d9d4ca] bg-[#fbfaf7] px-4 py-3.5 text-base text-[#111827] outline-none transition placeholder:text-[#9a9fa5] focus:border-[#718064] focus:bg-white focus:ring-2 focus:ring-[#dce7d2]";

const attributionParameterMap = {
  source_article: "sourceArticle",
  source_url: "sourceUrl",
  cta_placement: "ctaPlacement",
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_content: "utmContent",
} as const;

function readAttribution() {
  const params = new URLSearchParams(window.location.search);
  let referrerParams: URLSearchParams | null = null;

  if (document.referrer) {
    try {
      referrerParams = new URL(document.referrer).searchParams;
    } catch {
      referrerParams = null;
    }
  }

  const attribution: Partial<LocalAiDeploymentForm> = {
    formStartedAt: Date.now(),
    referrer: document.referrer,
  };

  for (const [parameter, field] of Object.entries(attributionParameterMap)) {
    attribution[field] =
      params.get(parameter) ?? referrerParams?.get(parameter) ?? "";
  }

  return attribution;
}

export default function LocalAiDeploymentForm() {
  const [form, setForm] = useState<LocalAiDeploymentForm>(
    initialLocalAiDeploymentForm,
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const trackedStart = useRef(false);

  useEffect(() => {
    setForm((current) => ({ ...current, ...readAttribution() }));
  }, []);

  const updateField = <K extends keyof LocalAiDeploymentForm>(
    key: K,
    value: LocalAiDeploymentForm[K],
  ) => setForm((current) => ({ ...current, [key]: value }));

  const trackFormStart = () => {
    if (trackedStart.current) {
      return;
    }

    trackedStart.current = true;
    track("local_ai_deployment_form_start", {
      source_article: form.sourceArticle || "direct",
      cta_placement: form.ctaPlacement || "direct",
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/local-ai/deployment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(
          payload.error ||
            "We couldn't send your project just yet. Please try again.",
        );
      }

      track("local_ai_deployment_form_submit", {
        source_article: form.sourceArticle || "direct",
        cta_placement: form.ctaPlacement || "direct",
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't send your project just yet. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-[28px] border border-[#dce4d6] bg-white p-8 text-[#111827] shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-10"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f0e2] text-lg text-[#526148]">
          ✓
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Thanks. We&apos;ve received your project.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-[#626b75]">
          We&apos;ll review the information you&apos;ve provided. If one of our
          Local AI implementation partners looks like a good fit, we&apos;ll
          follow up and make a direct introduction.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        void handleSubmit(event);
      }}
      onFocusCapture={trackFormStart}
      className="relative rounded-[28px] border border-white/15 bg-white p-6 text-[#111827] shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8 lg:p-10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
        Tell us about your project
      </p>

      <div className="mt-7 grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Name
            <input
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              autoComplete="name"
              maxLength={120}
              className={inputClassName}
              required
            />
          </label>
          <label className="text-sm font-medium">
            Company
            <span className="ml-2 font-normal text-[#7b838b]">Optional</span>
            <input
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              autoComplete="organization"
              maxLength={180}
              className={inputClassName}
            />
          </label>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Email address
            <input
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              autoComplete="email"
              maxLength={254}
              type="email"
              className={inputClassName}
              required
            />
          </label>
          <label className="text-sm font-medium">
            Phone
            <span className="ml-2 font-normal text-[#7b838b]">Optional</span>
            <input
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              autoComplete="tel"
              maxLength={80}
              type="tel"
              className={inputClassName}
            />
          </label>
        </div>

        <label className="text-sm font-medium">
          Tell us about your project
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            maxLength={4000}
            rows={6}
            placeholder="What are you trying to accomplish? Share as much or as little detail as you'd like."
            className={`${inputClassName} resize-y`}
            required
          />
        </label>

        <div
          aria-hidden="true"
          className="absolute -left-[10000px] h-px w-px overflow-hidden"
        >
          <label>
            Website
            <input
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </label>
        </div>
      </div>

      <div className="mt-8 border-t border-[#eee8de] pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#111810] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#253023] focus:outline-none focus:ring-2 focus:ring-[#718064] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Discuss My Project →"}
        </button>
        <p
          aria-live="polite"
          className={
            submitError
              ? "mt-4 text-sm leading-6 text-[#9c4f3d]"
              : "sr-only"
          }
        >
          {submitError}
        </p>
      </div>
    </form>
  );
}
