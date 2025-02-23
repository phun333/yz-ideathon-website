import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E7D32", // Koyu yeşil
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#81C784", // Açık yeşil
          foreground: "#1a1a1a",
        },
        background: "#FAFDF7", // Çok açık yeşilimsi beyaz
        card: "#ffffff",
        muted: {
          DEFAULT: "#E8F5E9", // Çok açık yeşil
          foreground: "#2E7D32",
        },
        border: "#C8E6C9", // Açık yeşil border
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
