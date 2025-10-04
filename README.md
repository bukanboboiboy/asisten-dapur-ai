# 📄 Project Overview: Asisten Dapur AI

**Nama Tim:** SIGMA (Σ)
**Proyek:** AWS Back-End Academy 2025 Online Hackathon

---

## Ringkasan Eksekutif

**Asisten Dapur AI** adalah aplikasi web cerdas yang dirancang untuk memecahkan masalah umum "bingung mau masak apa" dengan memanfaatkan bahan-bahan yang sudah ada di dapur. Dengan menggunakan kekuatan AI generatif dari **Amazon Bedrock**, aplikasi ini mengubah daftar bahan sederhana menjadi resep masakan yang lezat dan mudah diikuti, membantu pengguna menghemat waktu, mengurangi sisa makanan, dan menemukan inspirasi memasak setiap hari.

---

### 1. Analisis Masalah

* **Masalah Utama yang Diselesaikan:**
    Banyak orang mengalami "creative block" di dapur. Mereka memiliki bahan-bahan dasar namun terjebak dalam rutinitas menu yang sama atau tidak tahu bagaimana mengolahnya menjadi hidangan yang berbeda. Contoh kasus: *"Aku punya ayam, bawang, dan kecap di kulkas, tapi bingung mau masak apa selain digoreng."* Hal ini seringkali berujung pada kebosanan atau bahkan sisa bahan makanan yang terbuang.

* **Target Pengguna Utama:**
    * **Anak kos & Mahasiswa:** Kelompok yang sering memiliki bahan makanan dan alat masak yang terbatas, serta membutuhkan ide resep yang cepat dan hemat.
    * **Pemula dalam Memasak:** Individu yang baru belajar memasak dan membutuhkan panduan langkah demi langkah yang jelas.
    * **Ibu Rumah Tangga/Profesional Sibuk:** Mereka yang butuh inspirasi cepat untuk menu harian tanpa harus menghabiskan waktu mencari resep secara manual.

### 2. Solusi & Fitur Inti (MVP)

* **Solusi yang Ditawarkan:**
    Sebuah platform berbasis AI yang berfungsi sebagai asisten koki virtual. Pengguna cukup memasukkan bahan yang mereka miliki, dan AI akan meracik resep yang paling sesuai.

* **Fitur Inti (Minimum Viable Product):**
    Fokus utama untuk hackathon ini adalah satu fitur yang paling berdampak:
    > **"Pengguna memasukkan daftar bahan dalam bahasa natural, dan AI akan memberikan satu resep masakan lengkap yang mencakup Judul, Daftar Bahan yang dibutuhkan, dan Langkah-langkah Memasak yang detail."**

* **Rencana Pengembangan:**
    Jika waktu memungkinkan, fitur selanjutnya adalah menambahkan kemampuan AI untuk menghasilkan gambar dari masakan yang direkomendasikan.

### 3. Arsitektur & Alur Teknis

Kami akan mengimplementasikan arsitektur **serverless** yang modern, efisien, dan skalabel di AWS.

* **Komponen Arsitektur:**
    1.  **Front-end:** HTML, CSS, JavaScript (UI untuk input pengguna).
    2.  **Amazon API Gateway:** Sebagai pintu gerbang (endpoint) yang aman untuk menerima permintaan dari front-end.
    3.  **AWS Lambda:** Sebagai "otak" back-end yang menjalankan logika bisnis tanpa perlu mengelola server.
    4.  **Amazon Bedrock:** Layanan AI generatif yang akan membuat resep.

* **Alur Kerja Aplikasi (End-to-End Flow):**
    1.  Pengguna memasukkan bahan-bahan di antarmuka web.
    2.  Front-end mengirim permintaan (call) ke endpoint API Gateway.
    3.  API Gateway secara otomatis memicu eksekusi fungsi Lambda.
    4.  Fungsi Lambda memformat input dari pengguna menjadi *prompt* yang efektif.
    5.  Lambda memanggil model AI (misalnya, Anthropic Claude) di Amazon Bedrock dengan *prompt* tersebut.
    6.  Bedrock memproses *prompt* dan menghasilkan resep dalam format teks.
    7.  Lambda menerima hasil dari Bedrock dan memformatnya menjadi respons JSON.
    8.  API Gateway meneruskan respons tersebut kembali ke front-end.
    9.  Front-end menampilkan resep yang sudah jadi kepada pengguna.

### 4. Rencana Implementasi & Best Practices

Berdasarkan konsultasi dan *best practices* AWS, berikut adalah poin-poin yang akan kami terapkan:

* **Implementasi AI (Amazon Bedrock):**
    * **Model:** Menggunakan model `Anthropic Claude 3 Sonnet` karena kemampuannya yang kuat dalam pemahaman bahasa dan pembuatan konten kreatif.
    * **Prompt Engineering:** Merancang *prompt template* yang robust untuk memastikan output resep selalu konsisten dalam format (Judul, Bahan, Langkah-langkah).

* **Optimalisasi Back-end (AWS Lambda):**
    * Menggunakan *environment variables* untuk menyimpan konfigurasi (seperti ID Model Bedrock) agar kode lebih bersih.
    * Mengimplementasikan *error handling* yang baik untuk mengelola potensi kegagalan saat memanggil API Bedrock.
    * Mengatur alokasi memori yang optimal (diuji antara 512MB - 1GB) untuk performa terbaik.

* **Keamanan & Konfigurasi (API Gateway & IAM):**
    * Mengaktifkan **CORS** (Cross-Origin Resource Sharing) di API Gateway untuk integrasi yang mulus dengan front-end.
    * Menerapkan prinsip **Least Privilege** pada IAM Role yang digunakan oleh Lambda, memberinya izin hanya untuk `bedrock:InvokeModel`.
    * Melakukan validasi input dasar di Lambda untuk mencegah *prompt injection*.

* **Fokus Selama Hackathon:**
    1.  Membangun alur end-to-end yang fungsional secepat mungkin.
    2.  Memastikan *user experience* (UX) yang *smooth* dan intuitif.
    3.  Memprioritaskan fungsionalitas inti (MVP) di atas fitur-fitur tambahan.