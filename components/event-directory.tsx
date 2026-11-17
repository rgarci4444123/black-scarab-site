import type { MouseEventHandler, ReactNode } from "react";

export function ArrowUpRight() {
  return <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4" fill="none">
    <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.4" />
  </svg>;
}

export function EventPriorityBadge() {
  return <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c64c3b]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#c64c3b]" />
    Priority
  </span>;
}

export function EventMonthGroup({ monthKey, month, children }: {
  monthKey: string; month: string; children: ReactNode;
}) {
  return <section id={monthKey} aria-labelledby={`${monthKey}-heading`}
    className="scroll-mt-28 grid gap-4 border-b border-[#e2e2e5] py-8 first:pt-10 last:border-b-0 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-10 lg:py-10 lg:first:pt-12">
    <div><h2 id={`${monthKey}-heading`} className="text-xl font-semibold tracking-[-0.025em] text-[#273126] lg:sticky lg:top-28">{month}</h2></div>
    <div>{children}</div>
  </section>;
}

export function EventDirectoryRow({ dateLabel, dateDetails, meta, title, summary, url, actionLabel,
  actionAriaLabel, onClick, onAuxClick, children }: {
  dateLabel: ReactNode; dateDetails: ReactNode; meta: ReactNode; title: string; summary: string;
  url: string; actionLabel: string; actionAriaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>; onAuxClick?: MouseEventHandler<HTMLAnchorElement>; children?: ReactNode;
}) {
  return <article className="group grid gap-5 border-t border-[#e2e2e5] py-7 first:border-t-0 sm:grid-cols-[140px_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-8">
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#687263]">{dateLabel}</p>
      <p className="mt-2 text-sm text-[#747c84]">{dateDetails}</p>
    </div>
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-3">{meta}</div>
      <h3 className="mt-3 text-[1.65rem] font-semibold leading-[1.03] tracking-[-0.04em] text-[#111611] [overflow-wrap:anywhere] sm:text-[1.9rem]">{title}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#626b75]">{summary}</p>
    </div>
    <a href={url} target="_blank" rel="noreferrer" aria-label={actionAriaLabel} onClick={onClick} onAuxClick={onAuxClick}
      className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-[#e2e2e5] px-5 py-2.5 text-sm font-medium text-[#0071e3] transition hover:border-[#0071e3] hover:bg-[#f0f7ff] sm:mt-1">
      {actionLabel} <ArrowUpRight />
    </a>
    {children}
  </article>;
}
