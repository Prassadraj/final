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
          "50%": { transform: "translateY(80px) translateX(10px)" },
        },
        moveDown: {
          "0%,100%": { transform: "translateY(0px) translateX(-0px)" },
          "50%": { transform: "translateY(-20px) translateX(20px)" },
        },
      },
      animation: {
        moveUp: "moveUp 5s ease-in-out infinite",
        moveDown: "moveDown 8s ease-in-out infinite",
        rightDown: "moveDown 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
