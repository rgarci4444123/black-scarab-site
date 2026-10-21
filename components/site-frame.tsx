import type { ReactNode } from "react";

export function SitePage({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f5f5f7] px-3 py-3 text-[#101410] sm:px-5 sm:py-5 lg:px-7">
      {children}
    </main>
  );
}

export function SiteSurface({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[24px] border border-[#e2e2e5] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.055)] sm:rounded-[30px]">
      {children}
    </div>
  );
}
