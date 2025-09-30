# Panduan Kolaborasi Git untuk Tim SIGMA

Selamat datang, Tim SIGMA.

Dokumen ini adalah panduan kerja kita untuk menggunakan Git dan GitHub. Tujuannya adalah agar alur kerja kita teratur, efisien, dan tidak ada pekerjaan yang tumpang tindih atau hilang.

### Konsep Dasar

Untuk menyederhanakan, bayangkan proyek kita memiliki dua area:

1.  **Cabang `main` (Kode Utama)**
    Ini adalah versi resmi dan stabil dari proyek kita. Anggap saja ini adalah produk final yang tidak boleh diubah sembarangan.

2.  **Cabang Kerja atau `Branch` (Area Kerja Pribadi)**
    Setiap kali Anda mengerjakan tugas baru, Anda harus membuat "cabang" baru. Ini adalah ruang kerja pribadi Anda. Anda bisa bebas melakukan perubahan di sini tanpa mengganggu kode utama.

---

## Alur Kerja Tim (Wajib Diikuti)

Setiap anggota tim harus mengikuti siklus ini untuk setiap tugas yang dikerjakan.

### Langkah 1: Memulai Tugas Baru

Sebelum mulai menulis kode, pastikan Anda bekerja dengan versi terbaru.

1.  **Ambil Perubahan Terbaru dari `main`**
    Perintah ini akan mengunduh semua pembaruan dari repositori pusat.

    ```bash
    git pull origin main
    ```

2.  **Buat Cabang Kerja Baru**
    Buat cabang dengan nama yang deskriptif sesuai tugas Anda.

    ```bash
    # Format: git checkout -b nama-cabang
    # Contoh untuk fitur baru:
    git checkout -b fitur/halaman-login

    # Contoh untuk perbaikan bug:
    git checkout -b fix/tombol-submit-error
    ```

### Langkah 2: Mengerjakan dan Menyimpan Progres

Setelah Anda berada di cabang baru, Anda bisa mulai bekerja.

1.  **Tulis Kode Anda**
    Lakukan semua perubahan yang diperlukan untuk menyelesaikan tugas Anda.

2.  **Simpan Perubahan Anda (Commit)**
    Anggap ini seperti membuat "titik simpan" atau _save point_. Lakukan ini secara berkala.

    ```bash
    # 1. Pilih semua file yang ingin disimpan
    git add .

    # 2. Buat titik simpan dengan pesan yang jelas
    git commit -m "feat: menambahkan validasi untuk form login"
    ```

### Langkah 3: Mengajukan Hasil Kerja

Setelah tugas Anda selesai di cabang Anda:

1.  **Unggah Cabang Anda ke GitHub (Push)**
    Kirim semua "titik simpan" yang telah Anda buat ke repositori online.

    ```bash
    # Ganti 'nama-cabang' dengan nama cabang Anda
    git push origin nama-cabang
    ```

2.  **Buat Pull Request (PR) di GitHub**
    Pull Request adalah permintaan resmi untuk menggabungkan hasil kerja Anda ke cabang `main`. Buka situs GitHub, dan Anda akan melihat opsi untuk membuat Pull Request dari cabang yang baru saja Anda unggah.

    Tulis judul dan deskripsi yang jelas, lalu minta anggota tim lain untuk meninjau (review) kode Anda. Jika disetujui, kode Anda akan digabungkan ke `main`.

---

## Aturan Utama Tim

- **DILARANG KERAS** melakukan `push` langsung ke cabang `main`.
- **SELALU** jalankan `git pull origin main` sebelum membuat cabang baru.
- Gunakan nama cabang dan pesan commit yang jelas dan deskriptif.
- Jika ada masalah atau kebingungan, segera diskusikan dengan tim.

---

## Cheatsheet Perintah Git

Gunakan ini sebagai contekan cepat untuk alur kerja harian.

### Persiapan Awal (Hanya dilakukan sekali)

```bash
# Mengkloning atau menyalin repositori dari GitHub ke komputer Anda
git clone [https://github.com/orgs/github/repositories](https://github.com/orgs/github/repositories)


### Siklus Kerja Harian (Untuk setiap tugas baru)
Bash

# 1. Pastikan Anda berada di cabang main dan ambil update terbaru
git checkout main
git pull origin main

# 2. Buat dan pindah ke cabang kerja baru
git checkout -b [nama-cabang-baru]

# --- Lakukan pekerjaan dan penulisan kode di sini ---

# 3. Pilih semua file yang berubah untuk disimpan
git add .

# 4. Buat titik simpan dengan pesan yang jelas
git commit -m "Tulis pesan perubahan Anda di sini"

# 5. Unggah cabang Anda ke GitHub
git push origin [nama-cabang-baru]

# 6. Buka situs GitHub untuk membuat Pull Request
```
