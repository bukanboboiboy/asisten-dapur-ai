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
    const apiUrl = "https://YOUR-NEW-API-GATEWAY-URL/generate-recipe";

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
