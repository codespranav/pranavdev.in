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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fff",
        secondary: "#0B1215",
        heading: "#F1C40F",
        paraColour: "#D7D7D7"
      },
      backgroundColor: {
        primary: "#0B1215",
        secondary: "#F1C40F",

      }
    },
  },
  plugins: [],
};
export default config;
