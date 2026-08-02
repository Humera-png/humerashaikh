import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FBFAF7",
        paper: "#F5F2ED",
        surface: "#FFFFFF",
        accent: {
          DEFAULT: "#6D5EF9",
          2: "#8C83FF",
        },
        ink: "#17161A",
        muted: "#6B675F",
        line: "#E7E2D9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      maxWidth: {
        container: "1160px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(23, 22, 26, 0.04)",
        md: "0 10px 30px rgba(23, 22, 26, 0.06)",
        lg: "0 30px 70px rgba(23, 22, 26, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
