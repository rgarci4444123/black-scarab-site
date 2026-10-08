import Link from "next/link";
import { socialLinks } from "@/lib/site-links";

type SiteFooterProps = {
  tone?: "light" | "dark";
};

function SocialLogo({ label, dark }: { label: string; dark: boolean }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.51v5.26Z" />
      </svg>
    );
  }

  if (label === "X") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.486 3.24H4.298l13.313 17.403Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <g fill="none" stroke={dark ? "#10150f" : "#ffffff"} strokeLinecap="round">
        <path d="M5.7 8.2c4.3-1.2 9.3-.8 12.6 1.2" strokeWidth="2" />
        <path d="M6.5 11.8c3.7-1 7.9-.6 10.8 1.1" strokeWidth="1.7" />
        <path d="M7.2 15.3c3-.8 6.4-.4 8.8 1" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export default function SiteFooter({ tone = "light" }: SiteFooterProps) {
  const dark = tone === "dark";
  const linkClassName = `transition focus-visible:outline-2 focus-visible:outline-offset-4 ${
    dark
      ? "hover:text-white focus-visible:outline-[#b8c7ab]"
      : "hover:text-[#0071e3] focus-visible:outline-[#0071e3]"
  }`;

  return (
    <footer
      className={`border-t px-6 py-7 md:px-10 md:py-8 ${
        dark
          ? "border-[#293127] bg-[#10150f] text-[#b8c0b6]"
          : "border-[#e2e2e5] bg-[#ffffff] text-[#6e6e73]"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <div>
          <Link
            href="/"
            className={`${linkClassName} text-lg font-semibold tracking-[-0.025em] ${dark ? "text-[#f5f5f7]" : "text-[#171a17]"}`}
          >
            Black Scarab
          </Link>
          <p className="mt-1 text-[13px] leading-6">
            Intelligence for the physical AI economy.
          </p>
        </div>
        <nav aria-label="Follow Black Scarab" className="flex items-center">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Black Scarab on ${item.label}`}
              title={item.label}
              className={`${linkClassName} inline-flex h-11 w-11 items-center justify-center rounded-full ${dark ? "text-[#d2d9cf] hover:bg-white/5" : "text-[#515154] hover:bg-[#f0f7ff]"}`}
            >
              <SocialLogo label={item.label} dark={dark} />
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`mt-5 flex flex-col gap-3 border-t pt-4 text-xs leading-5 md:flex-row md:items-center md:justify-between md:gap-6 ${
          dark ? "border-[#293127]" : "border-[#e2e2e5]"
        }`}
      >
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span>© {new Date().getFullYear()} Black Scarab</span>
          <span>Miami, FL</span>
          <a href="mailto:info@blackscarab.ai" className={linkClassName}>
            info@blackscarab.ai
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <nav aria-label="Footer resources">
            <Link
              href="/resources/physical-ai-glossary"
              className={linkClassName}
            >
              Physical AI Glossary
            </Link>
          </nav>
          <nav aria-label="Legal" className="flex gap-5">
            <Link href="/privacy" className={linkClassName}>Privacy</Link>
            <Link href="/terms" className={linkClassName}>Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
