import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1B2B",
          60: "#5B6472",
          soft: "#16273B",
        },
        paper: {
          DEFAULT: "#F6F4EE",
          dim: "#EDEAE0",
        },
        // Primary brand accent — matches Discovery Pathway logo blue (#2453A5)
        brass: {
          DEFAULT: "#2453A5",
          light: "#6E97DE",
          dark: "#173B7D",
        },
        // Kept as the semantic "success / confirmed" green — unrelated to brand mark
        route: {
          DEFAULT: "#2F6F5E",
          light: "#4A9481",
          dark: "#1F4B3F",
        },
        // Secondary brand accent — matches Discovery Pathway logo cyan (#45C4DD)
        sky: {
          DEFAULT: "#45C4DD",
          light: "#8CDFEE",
          dark: "#2C9CB3",
        },
        // Explicit brand aliases, same values as brass/sky, for clarity in new code
        brand: {
          DEFAULT: "#2453A5",
          light: "#6E97DE",
          dark: "#173B7D",
        },
        cyan: {
          DEFAULT: "#45C4DD",
          light: "#8CDFEE",
          dark: "#2C9CB3",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      letterSpacing: {
        stamp: "0.08em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundImage: {
        "grain": "url('/images/grain.png')",
      },
      boxShadow: {
        stamp: "0 1px 0 rgba(14,27,43,0.06), 0 8px 24px -12px rgba(14,27,43,0.25)",
        panel: "0 20px 60px -20px rgba(14,27,43,0.35)",
      },
      borderRadius: {
        pass: "1.25rem",
      },
      keyframes: {
        "stamp-in": {
          "0%": { opacity: "0", transform: "scale(1.4) rotate(-8deg)" },
          "60%": { opacity: "1", transform: "scale(0.96) rotate(2deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-3deg)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "stamp-in": "stamp-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
