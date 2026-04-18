import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A84C",
        "cyan-tech": "#00D4FF",
        "green-neon": "#00FF87",
        "bg-dark": "#050A0E",
        "bg-night": "#0A1628",
        "text-primary": "#F0EDE8",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-gold-cyan":
          "linear-gradient(135deg, #C9A84C 0%, #00D4FF 100%)",
        "mesh-hero":
          "radial-gradient(at 40% 20%, rgba(201,168,76,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,212,255,0.12) 0px, transparent 45%), radial-gradient(at 0% 50%, rgba(0,255,135,0.08) 0px, transparent 40%)",
      },
      animation: {
        "pulse-gold": "pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        ticker: "ticker 20s linear infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 168, 76, 0.35)" },
          "50%": { boxShadow: "0 0 24px 4px rgba(201, 168, 76, 0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
