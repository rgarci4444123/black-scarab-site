"use client";

import { useState, type FormEvent } from "react";
import SiteHeader from "@/components/site-header";
import {
  initialIntakeForm,
  intakeInquiryTypes,
  type IntakeForm,
} from "@/lib/intake";

const navLinks = [
  { label: "Insights", href: "/insights", isPage: true },
  { label: "About", href: "/about", isPage: true },
];

const conversationGuide = [
  "Who you are and what your company does",
  "What you are trying to accomplish",
  "What a useful next step would look like",
];

const inputClassName =
  "mt-2 w-full rounded-2xl border border-[#d9d4ca] bg-[#fbfaf7] px-4 py-3.5 text-sm text-[#111827] outline-none transition placeholder:text-[#9a9fa5] focus:border-[#718064] focus:bg-white focus:ring-2 focus:ring-[#dce7d2]";

export default function IntakePage() {
  const [form, setForm] = useState<IntakeForm>(initialIntakeForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateField = <K extends keyof IntakeForm>(
    key: K,
    value: IntakeForm[K],
  ) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(
          payload.error ||
            "We couldn't send your message just yet. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't send your message just yet. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialIntakeForm);
    setSubmitted(false);
    setSubmitError("");
    setIsSubmitting(false);
  };

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

        <section className="relative overflow-hidden bg-[#10150f] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#9eb18e]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#dce7d2]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(520px,1.22fr)] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-10 lg:pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Discuss an opportunity
              </p>
              <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]">
                Tell me what you&apos;re working on.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#d7ddd4] sm:text-lg">
                No formal brief is required. Share the opportunity, problem, or
                introduction you are looking for. Rodolfo reviews every inquiry
                directly.
              </p>

              <div className="mt-9 rounded-[24px] border border-white/15 bg-white/[0.05] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8c7ab]">
                  A useful note includes
                </p>
                <ol className="mt-5 space-y-4 text-sm leading-6 text-[#e0e6dd]">
                  {conversationGuide.map((item, index) => (
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

            {submitted ? (
              <div className="rounded-[30px] border border-[#dce4d6] bg-white p-8 text-center text-[#111827] shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-12">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0e2] text-xl text-[#526148]">
                  ✓
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                  Message received
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Thanks for reaching out.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#626b75]">
                  Rodolfo will review your note directly and follow up if there
                  is a useful next step.
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
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  void handleSubmit(event);
                }}
                className="rounded-[30px] border border-white/15 bg-white p-6 text-[#111827] shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                  Start the conversation
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  A few details are enough.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#626b75] sm:text-base">
                  No budget range, readiness stage, or technical specifications
                  required.
                </p>

                <div className="mt-8 grid gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="text-sm font-medium">
                      Full name
                      <input
                        value={form.fullName}
                        onChange={(event) =>
                          updateField("fullName", event.target.value)
                        }
                        autoComplete="name"
                        maxLength={120}
                        placeholder="Your name"
                        className={inputClassName}
                        required
                      />
                    </label>
                    <label className="text-sm font-medium">
                      Work email
                      <input
                        value={form.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        autoComplete="email"
                        maxLength={254}
                        placeholder="you@company.com"
                        type="email"
                        className={inputClassName}
                        required
                      />
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="text-sm font-medium">
                      Company
                      <input
                        value={form.companyName}
                        onChange={(event) =>
                          updateField("companyName", event.target.value)
                        }
                        autoComplete="organization"
                        maxLength={180}
                        placeholder="Company or organization"
                        className={inputClassName}
                        required
                      />
                    </label>
                    <label className="text-sm font-medium">
                      I represent
                      <select
                        value={form.inquiryType}
                        onChange={(event) =>
                          updateField("inquiryType", event.target.value)
                        }
                        className={inputClassName}
                        required
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {intakeInquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="text-sm font-medium">
                    What are you trying to accomplish?
                    <span className="mt-2 block text-sm font-normal leading-6 text-[#747d86]">
                      For example: entering Mexico, finding technology for an
                      industrial use case, identifying a local partner, or
                      reaching a relevant decision-maker.
                    </span>
                    <textarea
                      value={form.opportunitySummary}
                      onChange={(event) =>
                        updateField("opportunitySummary", event.target.value)
                      }
                      minLength={20}
                      maxLength={3000}
                      rows={6}
                      placeholder="A few sentences are plenty."
                      className={`${inputClassName} mt-3 resize-y`}
                      required
                    />
                  </label>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="text-sm font-medium">
                      Company website
                      <span className="ml-2 font-normal text-[#7b838b]">
                        Optional
                      </span>
                      <input
                        value={form.website}
                        onChange={(event) =>
                          updateField("website", event.target.value)
                        }
                        autoComplete="url"
                        inputMode="url"
                        maxLength={500}
                        placeholder="company.com"
                        className={inputClassName}
                      />
                    </label>
                    <label className="text-sm font-medium">
                      Phone or WhatsApp
                      <span className="ml-2 font-normal text-[#7b838b]">
                        Optional
                      </span>
                      <input
                        value={form.phone}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        autoComplete="tel"
                        maxLength={80}
                        placeholder="+52 ..."
                        type="tel"
                        className={inputClassName}
                      />
                    </label>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute -left-[10000px] h-px w-px overflow-hidden"
                  >
                    <label>
                      Fax number
                      <input
                        value={form.companyFax}
                        onChange={(event) =>
                          updateField("companyFax", event.target.value)
                        }
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
                    className="w-full rounded-full bg-[#111810] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#253023] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send to Rodolfo"}
                  </button>
                  <p
                    aria-live="polite"
                    className={
                      submitError
                        ? "mt-4 text-sm leading-6 text-[#9c4f3d]"
                        : "mt-4 text-xs leading-6 text-[#737b84]"
                    }
                  >
                    {submitError ||
                      "Black Scarab focuses on commercial development. Technology providers and qualified partners retain technical validation and delivery."}
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

        <footer className="border-t border-[#242c22] bg-[#10150f] px-6 py-6 text-center text-sm text-[#b8c0b6] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>
              © 2026 Black Scarab. Physical AI market development for Mexico.
            </span>
            <span className="text-[#596257]">|</span>
            <span>Based in Miami, FL</span>
            <span className="text-[#596257]">|</span>
            <a
              href="mailto:info@blackscarab.ai"
              className="transition hover:text-white"
            >
              info@blackscarab.ai
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
