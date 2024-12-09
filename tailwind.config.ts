import type { Config } from "tailwindcss";

export default {
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
        primary: "#FAFAFA",
        secondary: "#23A6F0",
        ter: "#252B42",
        buttoncolor: "#2DC071",
        fcolor: "#737373",
        fcolor2: "#BDBDBD",
        bancolor2: "#23856D",
      },
    },
  },
  plugins: [],
} satisfies Config;
