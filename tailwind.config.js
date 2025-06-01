/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "custom-green": "0px 14px 23px #70C39257",
      },
      colors: {
        ijo: {
          50: "#e1f5ed",
          75: "#cae2d6",
          100: "#b4d0c4",
          200: "#8cb8a8",
          300: "#709f8c",
          400: "#4e8b66",
          500: "#4d926a",
        },
        neutral: {
          50: "#f6f6f6",
          75: "#e9e9e9",
          100: "#dcdcdc",
          200: "#c3c3c3",
          300: "#a9a9a9",
          400: "#909090",
          500: "#767676",
          600: "#5d5d5d",
          700: "#434343",
          800: "#2a2a2a",
          900: "#101010",
        },
        "error-red": {
          50: "#ffebeb",
          100: "#ffcaca",
          200: "#ff9696",
          300: "#ff6262",
          400: "#ff2e2e",
          500: "#ff0000",
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
        },
        "correct-green": {
          50: "#ebffeb",
          100: "#caffca",
          200: "#96ff96",
          300: "#62ff62",
          400: "#2eff2e",
          500: "#00ff00",
          600: "#00cc00",
          700: "#009900",
          800: "#006600",
          900: "#003300",
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 25s) linear infinite",
        marquee_reverse:
          "marquee_reverse var(--marquee-duration, 25s) linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee_reverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
