import { ImageResponse } from "next/og"

export const alt = "Honara7ty — Build your daily devotional habit"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(700px 420px at 85% 10%, rgba(201,168,76,0.25), rgba(201,168,76,0) 60%), radial-gradient(800px 500px at 10% 90%, rgba(70,100,180,0.35), rgba(70,100,180,0) 60%), linear-gradient(160deg, #0a1124 0%, #101a36 60%, #1b2a52 130%)",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "12px 34px",
            borderRadius: 999,
            border: "1px solid rgba(224,189,99,0.55)",
            color: "#e0bd63",
            fontSize: 28,
            marginBottom: 44,
          }}
        >
          Your daily time with God
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#ffffff",
          }}
        >
          Honara7ty
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#e0bd63",
            marginTop: 18,
          }}
        >
          Build your daily devotional habit
        </div>

        <div
          style={{
            display: "flex",
            gap: 26,
            marginTop: 58,
            fontSize: 25,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: 2,
          }}
        >
          <div>Google Play</div>
          <div style={{ color: "#e0bd63" }}>•</div>
          <div>App Store</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
