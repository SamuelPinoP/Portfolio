import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = "Samuel Pino software engineer portfolio preview";
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
          alignItems: "stretch",
          background: "#f8faf8",
          color: "#171717",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100%",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #d8dfd8",
            borderRadius: "28px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "56px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <div
              style={{
                alignItems: "center",
                background: "#194d45",
                borderRadius: "18px",
                color: "#ffffff",
                display: "flex",
                fontSize: 34,
                fontWeight: 800,
                height: 92,
                justifyContent: "center",
                width: 92,
              }}
            >
              SP
            </div>
            <div
              style={{
                color: "#5f6962",
                display: "flex",
                flexDirection: "column",
                fontSize: 28,
                gap: 10,
                textAlign: "right",
              }}
            >
              <span>{portfolio.profile.location}</span>
              <span>Full-stack | Backend | Mobile</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 42, width: "100%" }}>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
              <div
                style={{
                  color: "#8a3f38",
                  fontSize: 26,
                  fontWeight: 800,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                }}
              >
                Portfolio
              </div>
              <h1
                style={{
                  color: "#171717",
                  fontSize: 88,
                  fontWeight: 800,
                  letterSpacing: 0,
                  lineHeight: 0.96,
                  margin: "14px 0 0",
                }}
              >
                {portfolio.profile.name}
              </h1>
              <div
                style={{
                  color: "#194d45",
                  fontSize: 42,
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginTop: 20,
                }}
              >
                {portfolio.profile.title}
              </div>
              <p
                style={{
                  color: "#5f6962",
                  fontSize: 28,
                  lineHeight: 1.42,
                  margin: "24px 0 0",
                  maxWidth: 720,
                }}
              >
                Practical software across web, API, data, and Android surfaces.
              </p>
            </div>

            <div
              style={{
                alignSelf: "flex-end",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                width: 300,
              }}
            >
              {["Next.js", "TypeScript", "PostgreSQL", "Kotlin", "FastAPI"].map((skill) => (
                <div
                  key={skill}
                  style={{
                    background: "#eef3ef",
                    border: "1px solid #d8dfd8",
                    borderRadius: "16px",
                    color: "#194d45",
                    display: "flex",
                    fontSize: 28,
                    fontWeight: 800,
                    justifyContent: "center",
                    padding: "13px 20px",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
