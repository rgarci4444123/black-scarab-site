"use client";

import { track } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type InsightReadTrackerProps = {
  slug: string;
};

type PageEventProps = {
  name: string;
  properties?: Record<string, string | number | boolean | null>;
};

export function EngagementAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const utmParameters = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
    ] as const;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>("a[href]");

      if (!link) {
        return;
      }

      if (link.dataset.analyticsEvent === "local-ai-cta") {
        const cta = link.closest<HTMLElement>("[data-local-ai-cta]");
        const destination = new URL(link.href);
        const currentParams = new URLSearchParams(window.location.search);

        for (const parameter of utmParameters) {
          const value = currentParams.get(parameter);

          if (value) {
            destination.searchParams.set(parameter, value);
          }
        }

        link.href = destination.toString();
        track("local_ai_cta_click", {
          article_url: cta?.dataset.articleUrl ?? window.location.href,
          article_identifier: cta?.dataset.articleIdentifier ?? "unknown",
          cta_placement: cta?.dataset.ctaPlacement ?? "unknown",
        });
        return;
      }

      if (link.dataset.analyticsEvent === "source-link") {
        track("Source Link Click", {
          path: window.location.pathname,
          source: link.dataset.analyticsLabel ?? "unknown",
        });
        return;
      }

      if (link.dataset.analyticsEvent === "related-insight") {
        track("Related Insight Click", {
          path: window.location.pathname,
          destination: link.dataset.analyticsLabel ?? link.pathname,
        });
        return;
      }

      if (link.origin === window.location.origin && link.pathname === "/intake") {
        track("Opportunity CTA Click", {
          path: window.location.pathname,
        });
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLFormElement)) {
        return;
      }

      if (target.dataset.analyticsEvent === "newsletter-signup") {
        track("Newsletter Signup Started", {
          source: target.dataset.analyticsSource ?? "unknown",
        });
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    const trackedCtas = new Set<string>();
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const cta = entry.target as HTMLElement;
          const articleIdentifier =
            cta.dataset.articleIdentifier ?? "unknown";
          const ctaPlacement = cta.dataset.ctaPlacement ?? "unknown";
          const trackingKey = `${articleIdentifier}:${ctaPlacement}`;

          if (trackedCtas.has(trackingKey)) {
            continue;
          }

          trackedCtas.add(trackingKey);
          track("local_ai_cta_view", {
            article_url: cta.dataset.articleUrl ?? window.location.href,
            article_identifier: articleIdentifier,
            cta_placement: ctaPlacement,
          });
          ctaObserver.unobserve(cta);
        }
      },
      { threshold: 0.35 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-local-ai-cta]")
      .forEach((cta) => ctaObserver.observe(cta));

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
      ctaObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

export function InsightReadTracker({ slug }: InsightReadTrackerProps) {
  const sentDepths = useRef(new Set<number>());

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("[data-insight-article]");

    if (!article) {
      return;
    }

    let animationFrame = 0;

    const measure = () => {
      animationFrame = 0;
      const bounds = article.getBoundingClientRect();
      const articleTop = bounds.top + window.scrollY;
      const articleHeight = article.offsetHeight;

      if (articleHeight === 0) {
        return;
      }

      const viewportBottom = window.scrollY + window.innerHeight;
      const depth = Math.max(
        0,
        Math.min(100, ((viewportBottom - articleTop) / articleHeight) * 100),
      );

      for (const threshold of [50, 90]) {
        if (depth >= threshold && !sentDepths.current.has(threshold)) {
          sentDepths.current.add(threshold);
          track("Insight Read", { slug, depth: threshold });
        }
      }
    };

    const scheduleMeasure = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(measure);
      }
    };

    measure();
    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", scheduleMeasure);

    return () => {
      window.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [slug]);

  return null;
}

export function PageEvent({ name, properties }: PageEventProps) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) {
      return;
    }

    sent.current = true;
    track(name, properties);
  }, [name, properties]);

  return null;
}
