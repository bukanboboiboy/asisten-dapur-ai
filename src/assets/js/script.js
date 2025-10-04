// --- [1] DEKLARASI ELEMEN ---
const recipeQuery = document.getElementById("recipeQuery");
const generateBtn = document.getElementById("generateBtn");
const loadingIndicator = document.getElementById("loadingIndicator");
const resultArea = document.getElementById("resultArea");
const recipeImage = document.getElementById("recipeImage");
const recipeText = document.getElementById("recipeText");
const slider = document.querySelector(".toggle-slider");
const toggleButtons = document.querySelectorAll(".toggle-button");

// --- [2] LOGIKA API CALL (MENGHASILKAN RESEP) ---
generateBtn.addEventListener("click", async () => {
    const query = recipeQuery.value;
    if (!query.trim()) {
        alert("Tolong tulis dulu bahan-bahan atau keinginanmu!");
        return;
    }

    // --- PERUBAHAN DIMULAI DI SINI ---
    // 1. Cari tombol kategori yang sedang aktif
    const activeButton = document.querySelector(".toggle-button.active");
    // 2. Ambil nilai kategorinya (misal: "indonesia"), jika tidak ada, default ke "indonesia"
    const category = activeButton ? activeButton.dataset.type : "indonesia";
    // --- AKHIR PERUBAHAN ---

    loadingIndicator.style.display = "block";
    resultArea.style.display = "none";
    generateBtn.disabled = true;

    try {
        const apiUrl = "https://0fzrd2ww9b.execute-api.us-east-1.amazonaws.com/default/AI-Kitchen-Assistant";
        
        // --- PERUBAHAN DIMULAI DI SINI ---
        // 3. Tambahkan 'category' ke dalam payload yang dikirim ke backend
        const payload = { 
            query: query,
            category: category 
        };
        // --- AKHIR PERUBAHAN ---

        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
        });

        const result = await response.json();

        if (response.ok) {
            recipeText.textContent = result.recipe;
            if (result.image) {
                recipeImage.src = "data:image/png;base64," + result.image;
                recipeImage.style.display = "block";
            }
            resultArea.style.display = "flex";
        } else {
            throw new Error(result.message || "Gagal menghasilkan resep.");
        }
    } catch (error) {
        console.error("Error:", error);
        recipeText.textContent = `Terjadi kesalahan: ${error.message}`;
        resultArea.style.display = "flex";
    } finally {
        loadingIndicator.style.display = "none";
        generateBtn.disabled = false;
    }
});

// --- [3] FUNGSI BANTUAN & EVENT LAINNYA ---
recipeQuery.addEventListener("input", () => {
    recipeQuery.style.height = "auto";
    recipeQuery.style.height = recipeQuery.scrollHeight + "px";
});

recipeQuery.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        generateBtn.click();
    }
});

toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        slider.style.transform = `translateX(${index * 100}%)`;
        toggleButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});// tailwind.config.js