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
          pink: { DEFAULT: "#FFCFE2", deep: "#ED35CB" },
          custard: "#FFF4A5",
        },
        body: {
          text: "#1E1E1E",
        },
      },
      fontFamily: {
        noto: ["var(--noto-sans-mono)", "sans-serif"],
        dm: ["var(--dm-sans)", "sans-serif"],
        millik: ["millik", "sans"],
        jomhuria: ["Jomhuria", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          "2xl": "0px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1377px",
          "3xl": "1377px",
          "4xl": "1377px",
          "5xl": "1377px",
        },
      },
      zIndex: {
        header: "5",
      },
      boxShadow: {
        pink: "0px 4px 0px #E126FF",
      },
    },
  },
  plugins: [],
};
export default config;
