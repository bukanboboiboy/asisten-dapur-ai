const recipeQuery = document.getElementById('recipeQuery');
const generateBtn = document.getElementById('generateBtn');
const loadingIndicator = document.getElementById('loadingIndicator');
const resultArea = document.getElementById('resultArea');

generateBtn.addEventListener('click', async () => {
    const query = recipeQuery.value;
    if (!query.trim()) {
        alert('Tolong tulis dulu bahan-bahan atau keinginanmu!');
        return;
    }

    // Tampilkan loading, sembunyikan hasil lama, nonaktifkan tombol
    loadingIndicator.style.display = 'block';
    resultArea.style.display = 'none';
    generateBtn.disabled = true;

    try {
        // **PENTING: Ganti URL ini dengan URL API Gateway-mu yang baru**
        const apiUrl = 'https://0fzrd2ww9b.execute-api.us-east-1.amazonaws.com/default/AI-Kitchen-Assistant';

        const payload = {
            query: query
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();

        if (response.ok) {
            // Tampilkan hasil teks resep
            recipeText.textContent = result.recipe;
            
            // Tampilkan hasil gambar dari data Base64
            if (result.image) {
                // Ini adalah baris kuncinya
                recipeImage.src = 'data:image/png;base64,' + result.image;
                recipeImage.style.display = 'block';
            }

            resultArea.style.display = 'block';
        } else {
            throw new Error(result.message || 'Gagal menghasilkan resep.');
        }

    } catch (error) {
        console.error('Error:', error);
        resultArea.textContent = `Terjadi kesalahan: ${error.message}`;
        resultArea.style.display = 'block';
    } finally {
        // Sembunyikan loading, aktifkan kembali tombol
        loadingIndicator.style.display = 'none';
        generateBtn.disabled = false;
    }
});