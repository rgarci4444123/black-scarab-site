import NewsletterSignupForm from "@/components/newsletter-signup-form";

type EmailSignupCardProps = {
  source: string;
  title?: string;
  description?: string;
  compact?: boolean;
};

export default function EmailSignupCard({
  source,
  title = "Make sense of the week in physical AI",
  description = "Get every new Black Scarab deep dive and news report in one sharp Thursday briefing.",
  compact = false,
}: EmailSignupCardProps) {
  return (
    <section
      className={
        compact
          ? "rounded-[24px] border border-[#e8e4dc] bg-[#faf8f3] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
          : "rounded-[28px] border border-[#dde7d7] bg-[#edf4e8] p-8 shadow-[0_14px_40px_rgba(15,23,42,0.08)] md:p-10"
      }
    >
      <div className={compact ? "max-w-2xl" : "mx-auto max-w-3xl text-center"}>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
          Black Scarab Weekly
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[#6b7280] md:text-lg">
          {description}
        </p>
      </div>

      <div className={compact ? "mt-6" : "mx-auto mt-8 max-w-2xl"}>
        <NewsletterSignupForm source={source} inputId={`newsletter-${source}`} />
      </div>

      <p className={compact ? "mt-3 text-xs leading-6 text-[#6b7280]" : "mt-4 text-center text-xs leading-6 text-[#6b7280]"}>
        Useful reporting on real world AI systems, delivered Thursdays.
      </p>
    </section>
  );
}
