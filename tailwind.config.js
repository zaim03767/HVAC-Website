/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["'Sora'", "sans-serif"],
      },
      colors: {
        navy:    "#0f1f3d",
        brand:   "#1a73e8",
        dark:    "#0d47a1",
        light:   "#64b5f6",
        muted:   "#546e8c",
        surface: "#f8fbff",
        bdr:     "#d0dce8",
        tag:     "#e8f0fe",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        pulse2: {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":     { opacity: "1",   transform: "scale(1.05)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        float:  "float 4s ease-in-out infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
