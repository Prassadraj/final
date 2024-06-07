import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#10b981",
      },
      keyframes: {
        moveUp: {
          "0%,100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0px)" },
        },
        rightDown: {
          "0%,100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(10px) translateX(10px)" },
        },
        leftRight: {
          "0%,100%": { transform: "translateY(0px) translateX(-0px)" },
          "50%": { transform: "translateY(10px) translateX(-10px)" },
        },
        rightUp: {
          "0%,100%": { transform: "translateY(0px) translateX(-0px)" },
          "50%": { transform: "translateY(-10px) translateX(10px)" },
        },
        leftUp: {
          "0%,100%": { transform: "translateY(0px) translateX(-0px)" },
          "50%": { transform: "translateY(-10px) translateX(-10px)" },
        },
      },
      animation: {
        moveUp: "moveUp 5s ease-in-out infinite",
        leftRight: "leftRight 8s ease-in-out infinite",
        rightDown: "rightDown 8s ease-in-out infinite",
        rightUp: "rightUp 8s ease-in-out infinite",

        leftUp: "leftUp 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
