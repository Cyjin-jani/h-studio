import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, e }) {
      addUtilities({
        [`.${e("?")}`]: {
          animation: `${e("?")}wobble 0.5s ease-in-out alternate infinite`,
        },
        [`@keyframes ${e("?")}wobble`]: {
          "0%": {
            "box-shadow": "inset 4px 4px rgb(236, 15, 170), inset -4px -4px rgb(236, 15, 170)",
          },
          "100%": {
            "box-shadow": "inset 8px 8px rgb(236, 15, 170), inset -8px -8px rgb(236, 15, 170)",
          },
        },
        ".drag-none": {
          "-webkit-user-drag": "none",
          "-khtml-user-drag": "none",
          "-moz-user-drag": "none",
          "-o-user-drag": "none",
          "user-drag": "none",
        },
      });
    }),
  ],
};
export default config;
