import NewsletterSignupForm from "@/components/newsletter-signup-form";

type EmailSignupCardProps = {
  source: string;
  title?: string;
  description?: string;
  compact?: boolean;
};

export default function EmailSignupCard({
  source,
  title = "Catch up on physical AI in one email",
  description = "Every new Black Scarab deep dive and news report, collected into one clear Thursday briefing.",
  compact = false,
}: EmailSignupCardProps) {
  return (
    <section
      className={
        compact
          ? "rounded-[22px] border border-[#d9e4d3] bg-[#f1f6ed] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:p-7"
          : "rounded-[28px] border border-[#d9e4d3] bg-[#edf4e8] p-7 shadow-[0_14px_40px_rgba(15,23,42,0.08)] md:p-10"
      }
    >
      <div
        className={
          compact
            ? "grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] sm:items-center"
            : "grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)] lg:items-center"
        }
      >
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#647456]">
            Black Scarab Weekly
          </p>
          <h2
            className={`${compact ? "mt-3 text-2xl" : "mt-4 text-3xl md:text-4xl"} font-semibold tracking-[-0.03em]`}
          >
            {title}
          </h2>
          <p
            className={`${compact ? "mt-3 text-sm leading-6" : "mt-4 text-base leading-7 md:text-lg"} text-[#606975]`}
          >
            {description}
          </p>
        </div>

        <div>
          <NewsletterSignupForm
            source={source}
            inputId={`newsletter-${source}`}
            buttonLabel="Join Black Scarab Weekly"
            compact={compact}
          />
        </div>
      </div>
    </section>
  );
}
