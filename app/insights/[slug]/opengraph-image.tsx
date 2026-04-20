import { ImageResponse } from "next/og";
import { getCaseStudyBySlug } from "@/lib/case-studies";

export const alt = "Black Scarab case study social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const article = getCaseStudyBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0f172a 0%, #172033 45%, #55624c 100%)",
          color: "#f8fafc",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: 28,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#d2ddc7",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "999px",
                background: "#a7bf8a",
              }}
            />
            Black Scarab
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#e5e7eb",
              padding: "10px 18px",
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: "999px",
            }}
          >
            {article?.industry ?? "Insights"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#c7d2fe",
            }}
          >
            Case Study
          </div>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 700,
              display: "flex",
            }}
          >
            {article?.title ?? "Black Scarab Insight"}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#d1d5db",
              display: "flex",
            }}
          >
            {article?.summary ??
              "Practical edge AI and infrastructure insights for real-world industries."}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#d1d5db",
          }}
        >
          <div style={{ display: "flex" }}>AI infrastructure and edge intelligence</div>
          <div style={{ display: "flex" }}>blackscarab.ai</div>
        </div>
      </div>
    ),
    size,
  );
}
