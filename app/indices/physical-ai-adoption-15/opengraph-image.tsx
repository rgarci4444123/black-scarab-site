import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Black Scarab Physical AI 15";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#101710",
          color: "#f4f3ed",
          display: "flex",
          height: "100%",
          padding: "64px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "74%" }}>
          <div style={{ color: "#aebfa4", display: "flex", fontSize: 20, fontWeight: 700, letterSpacing: 4 }}>
            BLACK SCARAB INDICES · BSPI15
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -4, lineHeight: 0.96, marginTop: 74 }}>
            Physical AI 15
          </div>
          <div style={{ color: "#b9c5b4", display: "flex", fontSize: 24, lineHeight: 1.4, marginTop: 38, maxWidth: 760 }}>
            Equal weight exposure across robotics, motion, perception, control, and autonomy.
          </div>
        </div>
        <div style={{ alignItems: "center", display: "flex", height: "100%", justifyContent: "center", width: "26%" }}>
          <div style={{ alignItems: "center", border: "32px solid #7f9676", borderRadius: 999, display: "flex", flexDirection: "column", height: 240, justifyContent: "center", width: 240 }}>
            <div style={{ display: "flex", fontSize: 54, fontWeight: 700 }}>15</div>
            <div style={{ color: "#b9c5b4", display: "flex", fontSize: 13, fontWeight: 700, letterSpacing: 2 }}>EQUAL WEIGHTS</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
