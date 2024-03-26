import { Archivo } from "next/font/google";
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
        brand: "#1E9E6A",
        dark: {
          "10": "#1A202C",
          "20": "#656769",
          "30": "#E8E8E8",
          "40": "#F7FAFC",
          "50": "#FFFFFF",
        },
      },
      fontFamily: {
        archivo: "Archivo",
      },
    },
  },
  plugins: [],
};
export default config;
