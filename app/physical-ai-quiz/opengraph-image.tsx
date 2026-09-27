import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f4f1e9",
          color: "#121713",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "64px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#718069",
            display: "flex",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          BLACK SCARAB PHYSICAL AI QUIZ
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.02,
            marginTop: 72,
            maxWidth: 980,
          }}
        >
          You know AI. Do you know what makes it move?
        </div>
        <div
          style={{
            bottom: 54,
            color: "#59645a",
            display: "flex",
            fontSize: 26,
            left: 72,
            position: "absolute",
          }}
        >
          Take the Physical AI Quiz
        </div>
        <div
          style={{
            border: "46px solid #dfe5da",
            borderRadius: 999,
            height: 270,
            position: "absolute",
            right: -100,
            top: -90,
            width: 270,
          }}
        />
      </div>
    ),
    size,
  );
}
