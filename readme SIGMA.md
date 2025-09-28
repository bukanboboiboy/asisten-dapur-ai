# 🍳 Panduan Kolaborasi Tim - Proyek Asisten Dapur AI

Selamat datang di tim! Agar kolaborasi kita lancar, efisien, dan bebas dari drama "kode hilang" atau "kerjaan ketimpa", kita akan menggunakan Git dan GitHub dengan alur kerja yang sudah disepakati.

##  ана Analogi: Folder Ajaib di Awan

Bayangkan kita punya satu **"Folder Ajaib" 📁** (disebut **Repository** atau **Repo**) yang disimpan di GitHub. Ini adalah versi "resmi" dari proyek kita. Setiap dari kita akan menyalin (clone) folder ini ke laptop masing-masing.

Kita akan bekerja di salinan lokal kita. Jika pekerjaan kita sudah selesai dan bagus, baru kita ajukan untuk digabungkan ke folder pusat agar semua orang bisa mendapatkan update-nya.

---

## 🔑 Konsep Inti Git yang Wajib Dipahami

1.  **Branch (Cabang 🌿):**
    > Jangan pernah bekerja langsung di `main`! `main` adalah batang utama pohon. Untuk setiap tugas baru (misal: "memperbaiki tombol"), buatlah **cabang baru**. Di cabang inilah kamu bebas bekerja tanpa mengganggu orang lain. **Satu tugas = Satu cabang**.

2.  **Commit (Simpan/Snapshot 📸):**
    > `commit` adalah cara menyimpan "snapshot" atau "foto" dari pekerjaanmu di satu titik waktu. Setiap commit memiliki pesan yang menjelaskan perubahan yang kamu buat.

3.  **Push (Kirim 🚀):**
    > Setelah menyimpan beberapa `commit` di cabang lokalmu, `push` adalah perintah untuk mengirim cabang tersebut ke Repository di GitHub agar bisa dilihat oleh tim.

4.  **Pull Request (Ajukan Proposal 📬):**
    > Setelah `push`, kamu membuat **Pull Request (PR)** di GitHub. Ini adalah cara formal untuk bilang: *"Hai tim, kerjaanku sudah selesai. Tolong dicek sebelum digabungkan ke `main`."*

5.  **Merge (Gabung ✅):**
    > Setelah PR disetujui, perubahan dari cabangmu akan digabungkan secara resmi ke `main`.

---

## 🔄 Alur Kerja Tim (Wajib Diikuti!)

Ini adalah siklus kerja yang akan kita pakai terus-menerus.

### A. Persiapan (Hanya dilakukan sekali)

1.  **Ketua Tim:** Membuat repository ini di GitHub, mengundang anggota tim sebagai kolaborator, dan mengunggah file awal (`index.html`, `style.css`, `script.js`) ke `main`.
2.  **Semua Anggota:** Melakukan `clone` repository ini ke komputer masing-masing.
    ```bash
    git clone https://github.com/bukanboboiboy/asisten-dapur-ai.git
    ```

### B. Siklus Kerja Harian (Diulang untuk setiap tugas)

Misalnya, kamu mendapat tugas "Menambahkan Animasi Loading".

1.  **Sinkronisasi Dulu!**
    Pastikan kodemu adalah yang paling baru. Selalu jalankan perintah ini sebelum memulai pekerjaan baru.
    ```bash
    git pull origin main
    ```

2.  **Buat Cabang Baru**
    Buat "arena bermain" pribadimu. Beri nama yang deskriptif.
    ```bash
    # Contoh nama branch untuk fitur baru
    git checkout -b feat/tambah-animasi-loading

    # Contoh nama branch untuk perbaikan bug
    # git checkout -b fix/tombol-tidak-berfungsi
    ```

3.  **Kerjakan Tugasmu**
    Saatnya *ngoding*! Buka VS Code dan buat perubahan yang diperlukan.

4.  **Simpan Progres (Commit)**
    Simpan perubahanmu secara berkala dengan pesan yang jelas.
    ```bash
    # 1. Pilih semua file yang berubah
    git add .

    # 2. Buat snapshot dengan pesan
    git commit -m "feat: Menambahkan animasi spinner saat loading"
    ```

5.  **Kirim ke GitHub (Push)**
    Jika pekerjaan di cabangmu sudah selesai, unggah ke GitHub.
    ```bash
    git push origin feat/tambah-animasi-loading
    ```

6.  **Buat Pull Request (PR) di GitHub**
    - Buka halaman repository di GitHub.
    - Klik tombol **"Compare & pull request"** yang muncul untuk cabang barumu.
    - Beri judul yang jelas, tulis deskripsi singkat, dan tambahkan **Reviewers** (pilih teman setim).
    - Klik **"Create pull request"**.

7.  **Review dan Merge**
    - Tim akan me-review PR-mu.
    - Jika disetujui, salah satu anggota akan menekan tombol **"Merge pull request"**.
    - Hore! Karyamu sudah masuk ke `main`!

8.  **Ulangi Siklus**
    Semua anggota tim sekarang harus kembali ke **Langkah 1 (`git pull origin main`)** untuk mendapatkan versi terbaru dari proyek sebelum memulai tugas baru.

---

## ⭐ Aturan Emas Tim Kita

-   **DILARANG KERAS** melakukan `push` langsung ke branch `main`. Selalu gunakan alur Pull Request.
-   **SELALU** jalankan `git pull origin main` sebelum membuat branch baru.
-   Tulis nama branch dan pesan `commit` yang jelas dan informatif.
-   Jika ada kesulitan, jangan sungkan untuk bertanya di grup!

Selamat bekerja, tim! 💪
