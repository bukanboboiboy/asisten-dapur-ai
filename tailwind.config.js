// tailwind.config.js (Contoh untuk v4)
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      // Kita masih menggunakan theme.extend untuk font
      fontFamily: {
        // Ini akan membuat 'font-sans' menggunakan font Anda
        sans: ['"Montserrat Alternates"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
