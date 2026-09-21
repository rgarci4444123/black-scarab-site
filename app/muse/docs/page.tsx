import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Muse Connector API",
  description:
    "Technical documentation for the Black Scarab publication discovery connector.",
  alternates: { canonical: "/muse/docs" },
};

const endpoint = "https://www.blackscarab.ai/api/muse/search";
const example = `${endpoint}?q=latest%20physical%20AI%20news&content_type=news&limit=5`;

export default function MuseDocsPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader homeHref="/" ctaLabel="Discuss an Opportunity" ctaHref="/intake" />
        <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
            Connector documentation
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Black Scarab publication discovery API
          </h1>
          <p className="mt-6 text-base leading-8 text-[#59616b] sm:text-lg">
            This public read only API helps assistants find relevant Black Scarab news and insights. It returns publication metadata, limited previews, and canonical links. It never returns complete article bodies.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-[#4b5563]">
            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Endpoint</h2>
              <pre className="mt-4 overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm leading-6 text-[#f8fafc]">
                <code>GET {endpoint}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Query parameters</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[#e7e3da]">
                <dl className="divide-y divide-[#e7e3da]">
                  <div className="grid gap-1 p-5 sm:grid-cols-[140px_1fr]">
                    <dt className="font-semibold text-[#111827]">q</dt>
                    <dd>Required natural language query containing 2 to 200 characters.</dd>
                  </div>
                  <div className="grid gap-1 p-5 sm:grid-cols-[140px_1fr]">
                    <dt className="font-semibold text-[#111827]">content_type</dt>
                    <dd>Optional filter. Accepted values are all, news, and insight.</dd>
                  </div>
                  <div className="grid gap-1 p-5 sm:grid-cols-[140px_1fr]">
                    <dt className="font-semibold text-[#111827]">limit</dt>
                    <dd>Optional result count from 1 to 5. The default is 5.</dd>
                  </div>
                </dl>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Example request</h2>
              <pre className="mt-4 overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm leading-6 text-[#f8fafc]">
                <code>{example}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Response contract</h2>
              <p className="mt-3">
                Each result contains a title, content type, publication time, preview, and canonical URL. Responses contain no more than five results. Every preview is capped at 250 characters and directs the user to the complete report at its canonical URL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Access requirements</h2>
              <p className="mt-3">
                No account, payment, API key, OAuth flow, or regional qualification is required. The endpoint supports public read only discovery requests. Clients should cache responses when practical and avoid automated bulk collection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">OpenAPI specification</h2>
              <p className="mt-3">
                The machine readable contract is available at{" "}
                <Link
                  href="/api/muse/openapi.json"
                  className="font-medium text-[#34402f] underline decoration-[#9eaa95] underline-offset-4"
                >
                  /api/muse/openapi.json
                </Link>
                . Questions can be sent to{" "}
                <Link
                  href="mailto:info@blackscarab.ai"
                  className="font-medium text-[#34402f] underline decoration-[#9eaa95] underline-offset-4"
                >
                  info@blackscarab.ai
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
