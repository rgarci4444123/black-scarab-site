import type { CaseStudyArticle } from "@/lib/case-studies";

type Props = {
  referral: NonNullable<CaseStudyArticle["referral"]>;
  placement: "article_top" | "article_end_primary";
};

export default function ReferralCta({ referral, placement }: Props) {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 overflow-hidden rounded-[28px] border border-[#d7e2d1] bg-[#111827] p-7 text-white shadow-[0_18px_44px_rgba(15,23,42,0.14)] md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-9">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9c9ae]">
          {referral.label ?? "Referral marketplace access"}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          {referral.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#d1d5db] md:text-base">
          {referral.description}
        </p>
        {referral.code ? <p className="mt-5 break-all text-sm text-[#d1d5db]">
          Black Scarab referral code{" "}
          <span className="rounded-md border border-white/15 bg-white/10 px-2.5 py-1 font-mono font-semibold tracking-[0.08em] text-white">
            {referral.code}
          </span>
        </p> : null}
        {referral.disclosure ? <p className="mt-4 max-w-3xl text-xs leading-6 text-[#d1d5db]">{referral.disclosure}</p> : null}
      </div>
      <a
        href={referral.url}
        target="_blank"
        rel="sponsored noreferrer"
        data-analytics-event="referral-cta"
        data-referral-placement={placement}
        data-referral-version={referral.analyticsVersion ?? "baseline"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#edf4e8] px-6 py-3 text-center text-sm font-semibold text-[#111827] transition hover:bg-white"
      >
        {referral.buttonLabel ?? "Access the Marketplace"}
      </a>
    </div>
  );
}
