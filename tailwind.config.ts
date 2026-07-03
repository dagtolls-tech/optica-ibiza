import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        bone: "#f4f1ea",
        rojo: "#e2231a",
        marino: "#0a2340",
        marino2: "#123a5c",
        acero: "#2f74c0",
        aceroLight: "#5aa0e6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "system-ui", "sans-serif"],
        surgena: [
          "Surgena",
          "var(--font-space)",
          "var(--font-sora)",
          "system-ui",
          "sans-serif",
        ],
        elegant: ["var(--font-elegant)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
