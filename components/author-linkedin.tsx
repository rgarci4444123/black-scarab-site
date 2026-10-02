type AuthorLinkedInProps = {
  href: string;
};

export default function AuthorLinkedIn({ href }: AuthorLinkedInProps) {
  const icon = (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.51v5.26Z" />
    </svg>
  );
  const className = "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#647456] transition hover:bg-[#edf0e8] hover:text-[#0a66c2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#647456]";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Rodolfo Garcia Calderoni on LinkedIn" title="Rodolfo on LinkedIn" className={className}>
      {icon}
    </a>
  );
}
