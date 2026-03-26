# *Informatics Notes*

Koleksi materi, latihan, dan solusi latihan untuk pelatihan persiapan OSN 2026 Tim Olimpiade Informatika MAN 2 Kota Pekanbaru.

Peladen Node.js dengan [Marked.js](https://marked.js.org/) untuk merender HTML.

## Instalasi dan Menjalankan

1. Pastikan Node.js terinstal (versi 16+).
2. Klon atau unduh repositori ini.
	- `git clone https://github.com/zf-ran/informatics-notes`
3. Jalankan `npm install` untuk instal dependensi.
4. Jalankan `npm start` untuk menjalankan peladen di [localhost:8080](https://localhost:8080/).

## Struktur

```
./
├── index.js              <- Kode utama
├── package.json
├── LICENSE
├── LICENSE-CONTENT
├── README.md
├── config/               <- Konfigurasi Marked.js
│   ├── marked.js
│   ├── marked/
│   │   ├── base.js
│   │   ├── materials.js
│   │   ├── problemsets.js
│   │   └── slides.js
├── contents/             <- Konten utama
│   ├── materials/
│   ├── problemsets/
│   ├── editorials/
│   └── slides/
├── public/               <- Aset statis: CSS, JS, dan font
└── views/                <- Templat EJS
```

## Daftar Isi

Isi terletak pada folder [contents/](contents/):

- [materials/](contents/materials/)
	- Berisi rangkuman materi-materi.
- [problemsets/](contents/problemsets/)
	- Latihan-latihan seiring waktu.
- [editorials/](contents/editorials/)
	- Solusi latihan.
	- *Styling* dan *script* pada *editorials* sama dengan *problemsets*.
- [slides/](contents/slides/)
	- *Slide* untuk presentasi.

## Menambah Dokumen Baru

Dokumen-dokumen ditulis dengan Markdown yang telah dimodifikasi.

- Pertama-tama, isi *frontmatter* yang sesuai.
- Panduan menulis dan sintaks-sintaks khusus terletak pada README masing-masing folder.
- Pastikan untuk menggunakan bahasa yang formal, mudah dimengerti, dan tidak multitafsir!

## Render/Cetak

Gunakan peramban **berbasis Chromium** agar mendapat fitur yang dibutuhkan!

Seperti:

- Chrome
- Vivaldi
- Edge
- Brave

**Jangan gunakan Firefox** untuk merender PDF!

## Spesifikasi Pesan *Commit*

### Modifikasi Konten

README termasuk pada bagian ini.

- `add:` Menambah dokumen baru.
- `edit:` Menyunting dokumen yang sudah ada.
- `del:` Menghapus dokumen.

### Modifikasi Kode

- `feat:` Menambah fitur baru.
- `ref:` Refaktor kode.
- `fix:` Memperbaiki bug.

## *Math Rendering*

**MathJax** dikonfigurasi di [public/js/mathjax-options.js](public/js/mathjax-options.js) dan dimuat dari CDN di setiap halaman.

## Lisensi

Proyek ini menggunakan ***dual license***:

- **Kode** ([index.js](index.js), CSS, JS, konfigurasi): [MIT License](LICENSE)
	- Bebas digunakan, dimodifikasi, dan didistribusikan untuk tujuan komersial dan non-komersial.
- **Konten** ([*contents*](contents/)): [CC-BY 4.0](LICENSE-CONTENT)
	- Bebas digunakan dan dimodifikasi dengan syarat **memberikan atribusi/kredit**.