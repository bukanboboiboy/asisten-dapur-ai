// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#ea5e5e", dark: "#d94848", darker: "#c33f3f" },
        success: { DEFAULT: "#98d468", dark: "#82b954" },
        danger: { DEFAULT: "#e53e3e", dark: "#c53030" },
        background: "#ffffff",
        surface: "#f9fafb",
        border: "#e0e0e0",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
