type EmailSignupCardProps = {
  source: string;
  title?: string;
  description?: string;
  compact?: boolean;
};

const baseUrl = "https://www.blackscarab.ai";
const defaultAction = "https://formsubmit.co/info@blackscarab.ai";

export default function EmailSignupCard({
  source,
  title = "Get new edge AI guides in your inbox",
  description = "Get Black Scarab updates on edge AI platforms, case studies, and deployment insights as new articles go live.",
  compact = false,
}: EmailSignupCardProps) {
  const formAction = process.env.NEWSLETTER_FORM_ACTION ?? defaultAction;
  const thankYouUrl = `${baseUrl}/subscribe/thanks?source=${encodeURIComponent(source)}`;
  const subject = `Black Scarab email signup (${source})`;

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
          Email Updates
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[#6b7280] md:text-lg">
          {description}
        </p>
      </div>

      <form
        action={formAction}
        method="POST"
        className={compact ? "mt-6 flex flex-col gap-3 sm:flex-row" : "mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"}
      >
        <input type="hidden" name="_subject" value={subject} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={thankYouUrl} />
        <input type="hidden" name="source" value={source} />
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className="min-w-0 flex-1 rounded-full border border-[#d7d1c6] bg-white px-5 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#7c8b6b]"
        />
        <button
          type="submit"
          className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
        >
          Get Updates
        </button>
      </form>

      <p className={compact ? "mt-3 text-xs leading-6 text-[#6b7280]" : "mt-4 text-center text-xs leading-6 text-[#6b7280]"}>
        Practical updates on edge AI platforms, deployment strategy, and new Black Scarab research.
      </p>
    </section>
  );
}
