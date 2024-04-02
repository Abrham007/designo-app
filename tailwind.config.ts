import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      Peach: "#E7816B",
      Black: "#1D1C1E",
      White: "#FFF",
      LightPeach: "#FFAD9B",
      DarkGrey: "#333136",
      LightGrey: "#DFDFDF",
    },
    fontSize: {
      xl2: [
        "3rem",
        {
          lineHeight: "3rem",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      xl: [
        "2.5rem",
        {
          lineHeight: "3rem",
          letterSpacing: "0.125rem",
          fontWeight: "500",
        },
      ],
      lg: [
        "1.25rem",
        {
          lineHeight: "1.625rem",
          letterSpacing: "0.3125rem",
          fontWeight: "500",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.625rem",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
      sm: [
        "0.9375rem",
        {
          lineHeight: "1.5625rem",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      backgroundImage: {
        smallCircles:
          "url('/images/shared/desktop/bg-pattern-small-circle.svg')",
        leafPattern: "url('/images/shared/desktop/bg-pattern-leaf.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
