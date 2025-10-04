// Pastikan ID ini cocok dengan yang ada di HTML Anda
// Pada contoh sebelumnya, kita menggunakan id="loader", bukan "loadingIndicator"
const recipeQuery = document.getElementById("recipeQuery");
const generateBtn = document.getElementById("generateBtn");
const loader = document.getElementById("loader"); // Ubah: Sesuaikan nama variabel jika perlu
const resultArea = document.getElementById("resultArea");

generateBtn.addEventListener("click", async () => {
  const query = recipeQuery.value;
  if (!query.trim()) {
    alert("Tolong tulis dulu bahan-bahan atau keinginanmu!");
    return;
  }

  // Tampilkan loading, sembunyikan hasil lama, nonaktifkan tombol
  loader.classList.remove("hidden"); // Ubah: Hapus kelas 'hidden' untuk menampilkan
  resultArea.classList.add("hidden"); // Ubah: Tambah kelas 'hidden' untuk menyembunyikan
  generateBtn.disabled = true; // Tetap sama, Tailwind akan menangani stylenya

  try {
    // **PENTING: Ganti URL ini dengan URL API Gateway-mu yang baru**
    const apiUrl =
      "https://0fzrd2ww9b.execute-api.us-east-1.amazonaws.com/default/AI-Kitchen-Assistant";
    const payload = {
      query: query,
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (response.ok) {
      // Tampilkan hasil resep di area hasil
      resultArea.textContent = result.recipe;
      resultArea.classList.remove("hidden"); // Ubah: Hapus 'hidden' untuk menampilkan hasil
    } else {
      throw new Error(result.message || "Gagal menghasilkan resep.");
    }
  } catch (error) {
    console.error("Error:", error);
    resultArea.textContent = `Terjadi kesalahan: ${error.message}`;
    resultArea.classList.remove("hidden"); // Ubah: Tampilkan juga area hasil saat error
  } finally {
    // Sembunyikan loading, aktifkan kembali tombol
    loader.classList.add("hidden"); // Ubah: Tambah 'hidden' untuk menyembunyikan loader
    generateBtn.disabled = false; // Tetap sama
  }
});

// (Kode API Anda di atas biarkan saja, tidak perlu diubah)

const slider = document.querySelector(".toggle-slider");
const buttons = document.querySelectorAll(".toggle-button");
const contents = document.querySelectorAll(".content");

function showContent(type, clickedButton) {
  // 1. Cari tahu tombol ke berapa yang diklik (0, 1, atau 2)
  const buttonIndex = Array.from(buttons).indexOf(clickedButton);

  // 2. Geser slider sesuai dengan urutan tombol
  // UBAH: Dari 200 menjadi 100
  slider.style.transform = `translateX(${buttonIndex * 100}%)`;

  // 3. PERBAIKAN: Atur class 'active' dan warna untuk SEMUA tombol dalam satu kali proses
  buttons.forEach((btn) => {
    // Hapus status aktif dari semua tombol terlebih dahulu
    btn.classList.remove("active", "text-white");
    btn.classList.add("text-gray-700");
  });

  // Kemudian, tambahkan status aktif HANYA pada tombol yang diklik
  clickedButton.classList.add("active", "text-white");
  clickedButton.classList.remove("text-gray-700");

  // 4. Atur class 'active' untuk konten (bagian ini sudah benar)
  contents.forEach((content) => {
    if (content.id === type) {
      content.classList.add("active");
      content.classList.remove("opacity-0", "translate-x-5");
      content.classList.add("opacity-100");
      content.style.pointerEvents = "auto";
    } else {
      content.classList.remove("active", "opacity-100");
      content.classList.add("opacity-0", "translate-x-5");
      content.style.pointerEvents = "none";
    }
  });
}
