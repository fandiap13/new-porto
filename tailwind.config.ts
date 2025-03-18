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
        dark: "#0c0c1d",
        orangeCustom: "#CB7237",
        bgdark: "#1e1f26",
        bgdark2: "#0c0c1d",
        primary: "#363058",
        defaultblue: "#2563eb",
      },
    },
  },
  plugins: [],
};
export default config;
