import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#194d45",
          border: "3px solid #dceee8",
          borderRadius: "16px",
          color: "#ffffff",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 28,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        SP
      </div>
    ),
    size,
  );
}
