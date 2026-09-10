"use client";

import { track } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NewsletterSignupForm from "@/components/newsletter-signup-form";

const sevenDays = 7 * 24 * 60 * 60 * 1000;
const promptTimestampKey = "black-scarab-newsletter-prompted-at";
const subscribedKey = "black-scarab-newsletter-subscribed";

function canShowPrompt() {
  if (window.localStorage.getItem(subscribedKey) === "true") {
    return false;
  }

  const promptedAt = Number(window.localStorage.getItem(promptTimestampKey));
  return !promptedAt || Date.now() - promptedAt > sevenDays;
}

export default function NewsletterCapture() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const openedRef = useRef(false);
  const promptRef = useRef<HTMLElement>(null);
  const excluded =
    pathname.startsWith("/intake") ||
    pathname.startsWith("/subscribe") ||
    pathname.startsWith("/privacy");

  useEffect(() => {
    if (excluded || !canShowPrompt()) {
      return;
    }

    const startedAt = Date.now();
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const openPrompt = (trigger: "exit" | "engaged-mobile") => {
      if (openedRef.current || !canShowPrompt()) {
        return;
      }

      openedRef.current = true;
      window.localStorage.setItem(promptTimestampKey, String(Date.now()));
      setIsOpen(true);
      track("Newsletter Prompt Shown", { trigger, path: pathname });
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (
        isDesktop &&
        Date.now() - startedAt >= 20_000 &&
        event.clientY <= 8 &&
        !event.relatedTarget
      ) {
        openPrompt("exit");
      }
    };

    let mobileTimer = 0;
    const handleScroll = () => {
      if (isDesktop || Date.now() - startedAt < 45_000) {
        return;
      }

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= 0.6) {
        openPrompt("engaged-mobile");
      }
    };

    if (isDesktop) {
      document.addEventListener("mouseout", handleMouseOut);
    } else {
      mobileTimer = window.setTimeout(handleScroll, 45_000);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(mobileTimer);
    };
  }, [excluded, pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    promptRef.current?.querySelector<HTMLInputElement>('input[type="email"]')?.focus();

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const hidePrompt = () => setIsOpen(false);
    window.addEventListener("black-scarab:newsletter-subscribed", hidePrompt);
    return () => window.removeEventListener("black-scarab:newsletter-subscribed", hidePrompt);
  }, []);

  if (!isOpen || excluded) {
    return null;
  }

  return (
    <aside
      ref={promptRef}
      role="dialog"
      aria-labelledby="newsletter-capture-title"
      aria-describedby="newsletter-capture-description"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-[26px] border border-[#dce6d5] bg-[#f3f7ef] p-6 text-[#111827] shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:mx-0 sm:p-7"
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        aria-label="Close newsletter invitation"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#687164] transition hover:bg-white hover:text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#7c8b6b]"
      >
        <span aria-hidden="true">×</span>
      </button>
      <p className="pr-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#647456]">
        Before you go
      </p>
      <h2
        id="newsletter-capture-title"
        className="mt-3 pr-8 text-2xl font-semibold leading-tight tracking-[-0.025em]"
      >
        Take the week in physical AI with you.
      </h2>
      <p
        id="newsletter-capture-description"
        className="mt-3 text-sm leading-6 text-[#59616b]"
      >
        Every new deep dive and news report, edited into one sharp Thursday briefing.
      </p>
      <div className="mt-5">
        <NewsletterSignupForm
          source={`capture:${pathname}`}
          compact
          buttonLabel="Join Black Scarab Weekly"
          inputId="newsletter-capture-email"
        />
      </div>
    </aside>
  );
}
