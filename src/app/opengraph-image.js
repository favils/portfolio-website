import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fatima Villena — Engineer / Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#333333",
          fontFamily: "monospace",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 2,
            color: "#8a898e",
          }}
        >
          PORTFOLIO \ FATIMA VILLENA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.1,
              color: "#333333",
            }}
          >
            Fatima Villena
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 32,
              letterSpacing: 4,
              color: "#9b87f5",
            }}
          >
            ENGINEER / DESIGNER
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 20,
            color: "#8a898e",
          }}
        >
          [ full-stack development — graphic design — miami, fl ]
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
