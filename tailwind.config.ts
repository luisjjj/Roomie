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
        cream: "#FFFBF4",
        sand: "#F6EEE1",
        ink: "#181410",
        muted: "#6B6259",
        roomie: {
          DEFAULT: "#FF4D24",
          dark: "#D63A15",
          soft: "#FFE9E1",
          deep: "#1E2B25",
        },
        leaf: "#0E3B2E",
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-roomie)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 32px -12px rgba(24,20,16,0.18)",
        pop: "0 8px 24px -8px rgba(255,77,36,0.45)",
      },
      borderRadius: {
        xl2: "1.4rem",
      },
    },
  },
  plugins: [],
};
export default config;
