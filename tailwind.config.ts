import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        muted: "#6E6E73",
        faint: "#AEAEB2",
        hairline: "#E9E9EC",
        wash: "#F5F5F7",
        accent: {
          DEFAULT: "#FF4D24",
          dark: "#D63A15",
          soft: "#FFF1EC",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          "Inter",
          '"Segoe UI"',
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          '"SF Mono"',
          "SFMono-Regular",
          '"Geist Mono"',
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        frame: "0 24px 64px -24px rgba(0,0,0,0.18)",
        card: "0 1px 2px rgba(0,0,0,0.04), 0 12px 32px -16px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
