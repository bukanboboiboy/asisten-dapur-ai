// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,js}", // Sesuaikan dengan path file proyek Anda
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      // Di sinilah kita "mengajarkan" warna-warna baru ke Tailwind
      colors: {
        primary: {
          DEFAULT: "#ea5e5e", // akan menjadi bg-primary, text-primary, dll.
          dark: "#d94848", // akan menjadi bg-primary-dark, text-primary-dark
          darker: "#c3f3f", // akan menjadi bg-primary-darker, dll.
        },
        success: {
          DEFAULT: "#98d468",
          dark: "#82b954",
        },
        danger: {
          DEFAULT: "#e53e3e",
          dark: "#c53030",
        },
        background: "#ffffff", // akan menjadi bg-background
        surface: "#f1feea", // akan menjadi bg-surface
        border: "#e0e0e0", // akan menjadi border-border

        // Ini adalah cara untuk warna teks
        // Kita bisa langsung pakai text-primary, text-secondary, dll. dari warna di atas
        // Tapi jika ingin nama khusus, bisa juga ditambahkan di sini.
        // Contoh: 'text-primary': '#555555'
      },
      // Kita juga bisa tambahkan font-family di sini
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Mengganti font default sans
      },
    },
  },
  plugins: [],
};
