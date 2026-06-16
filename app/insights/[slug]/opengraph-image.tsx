import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getCaseStudyBySlug } from "@/lib/case-studies";

export const alt = "Black Scarab insight social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getArticleImageSource(imagePath?: string) {
  if (!imagePath) {
    return null;
  }

  try {
    const filePath = join(process.cwd(), "public", imagePath);
    const image = await readFile(filePath);
    const extension = imagePath.split(".").pop()?.toLowerCase();
    const mimeType = extension === "jpg" || extension === "jpeg" ? "image/jpeg" : "image/png";

    return `data:${mimeType};base64,${image.toString("base64")}`;
  } catch {
    return null;
  }
}

function getTitleFontSize(title: string) {
  if (title.length > 124) {
    return 32;
  }

  if (title.length > 108) {
    return 36;
  }

  if (title.length > 92) {
    return 40;
  }

  if (title.length > 72) {
    return 44;
  }

  if (title.length > 52) {
    return 48;
  }

  return 58;
}

function getSummaryMaxLength(title: string) {
  if (title.length > 108) {
    return 100;
  }

  if (title.length > 92) {
    return 120;
  }

  if (title.length > 72) {
    return 140;
  }

  return 165;
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trim()}...`;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const article = getCaseStudyBySlug(slug);
  const articleImageSource = await getArticleImageSource(article?.image);
  const typeLabel =
    article?.typeLabel ??
    (article?.publishedLabel.startsWith("Case Study") ? "Case Study" : "Insight");
  const title = truncateText(article?.title ?? "Black Scarab Insight", 132);
  const summary =
    article?.summary ??
    "Practical edge AI and infrastructure insights for real-world industries.";
  const titleFontSize = getTitleFontSize(title);
  const summaryText = truncateText(summary, getSummaryMaxLength(title));

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background: "#0f172a",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        {articleImageSource ? (
          <img
            src={articleImageSource}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              opacity: 0.88,
            }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(7, 13, 26, 0.39) 0%, rgba(7, 13, 26, 0.34) 52%, rgba(7, 13, 26, 0.27) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background:
              "linear-gradient(0deg, rgba(7, 13, 26, 0.43) 0%, rgba(7, 13, 26, 0.29) 52%, rgba(7, 13, 26, 0.41) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "linear-gradient(rgba(7, 13, 26, 0.34), rgba(7, 13, 26, 0.34))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "34px",
            display: "flex",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "12px",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
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
              color: "#f8fafc",
              textShadow: "0 2px 10px rgba(0,0,0,0.65)",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "999px",
                  background: "#a3e635",
                }}
              />
              Black Scarab
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "660px",
            }}
          >
            <div
              style={{
                fontSize: 26,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "#bef264",
                textShadow: "0 2px 10px rgba(0,0,0,0.75)",
              }}
            >
              {typeLabel}
            </div>
            <div
              style={{
                fontSize: titleFontSize,
                lineHeight: 1.06,
                fontWeight: 700,
                display: "flex",
                textShadow: "0 3px 14px rgba(0,0,0,0.78)",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 25,
                lineHeight: 1.36,
                color: "#e5e7eb",
                display: "flex",
                textShadow: "0 2px 10px rgba(0,0,0,0.78)",
              }}
            >
              {summaryText}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              fontSize: 24,
              color: "#e5e7eb",
              textShadow: "0 2px 10px rgba(0,0,0,0.75)",
            }}
          >
            <div style={{ display: "flex" }}>blackscarab.ai</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
