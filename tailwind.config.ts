import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        7.5: "1.875rem",
      },
      colors: {
        primary: {
          600: '#E31B39',
        }
      },
    },
  },
  plugins: [],
};
export default config;
