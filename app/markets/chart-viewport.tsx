"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ChartViewport({ className, titleId, children }: {
  className: string;
  titleId: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const figure = ref.current;
    if (!figure || !("IntersectionObserver" in window) ||
        !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      figure.dataset.chartEntered = "";
      observer.disconnect();
    });
    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  return (
    <figure ref={ref} className={className} aria-labelledby={titleId}>
      {children}
    </figure>
  );
}
