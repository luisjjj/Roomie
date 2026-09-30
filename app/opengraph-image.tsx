import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#0A0A0A",
              color: "#fff",
              fontSize: "40px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            R
          </div>
          <div style={{ fontSize: "44px", fontWeight: 600, color: "#0A0A0A" }}>Roomie</div>
        </div>
        <div style={{ marginTop: "28px", fontSize: "56px", fontWeight: 600, lineHeight: 1.1, color: "#0A0A0A" }}>
          Find someone you&apos;ll actually enjoy living with.
        </div>
        <div style={{ marginTop: "20px", fontSize: "28px", color: "#6E6E73" }}>
          Compatible roommates across Nigeria. Early access now open.
        </div>
      </div>
    ),
    { ...size }
  );
}
