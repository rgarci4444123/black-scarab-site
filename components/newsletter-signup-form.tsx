"use client";

import { track } from "@vercel/analytics/react";
import Link from "next/link";
import { FormEvent, useState } from "react";

type NewsletterSignupFormProps = {
  source: string;
  compact?: boolean;
  buttonLabel?: string;
  inputId?: string;
  onSuccess?: () => void;
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function NewsletterSignupForm({
  source,
  compact = false,
  buttonLabel = "Join the weekly",
  inputId,
  onSuccess,
}: NewsletterSignupFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    setState("submitting");
    setMessage("");
    track("Newsletter Signup Started", { source });

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          website: formData.get("website"),
        }),
      });
      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || "Please try again.");
      }

      setState("success");
      setMessage(result.message || "You are subscribed.");
      form.reset();
      window.localStorage.setItem("black-scarab-newsletter-subscribed", "true");
      window.dispatchEvent(new Event("black-scarab:newsletter-subscribed"));
      track("Newsletter Signup Submitted", { source });
      onSuccess?.();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
      track("Newsletter Signup Failed", { source });
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-[20px] border border-[#b7c8aa] bg-white/80 px-5 py-4 text-sm leading-6 text-[#34402f]"
      >
        <span className="font-semibold">You&apos;re in.</span>{" "}
        {message.replace("You are subscribed", "Welcome")}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-analytics-event="newsletter-signup"
      data-analytics-source={source}
      className={
        compact
          ? "flex flex-col gap-3"
          : "flex flex-col gap-3 md:flex-row md:flex-wrap"
      }
    >
      <label className="sr-only" htmlFor={inputId}>
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className="w-full min-w-0 flex-1 rounded-full border border-[#d7d1c6] bg-white px-5 py-3 text-base text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#7c8b6b] focus:ring-2 focus:ring-[#7c8b6b]/20 md:w-auto"
      />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button
        type="submit"
        disabled={state === "submitting"}
        className="shrink-0 rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#7c8b6b] focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
      >
        {state === "submitting" ? "Saving..." : buttonLabel}
      </button>
      {state === "error" ? (
        <p role="alert" className="text-sm leading-6 text-[#9f3b32] sm:basis-full">
          {message}
        </p>
      ) : null}
      <p className="text-xs leading-5 text-[#6b7280] sm:basis-full">
        Weekly reporting and deep dives. Unsubscribe anytime. See our{" "}
        <Link href="/privacy" className="underline decoration-[#9eaa95] underline-offset-2">
          privacy notice
        </Link>
        .
      </p>
    </form>
  );
}
