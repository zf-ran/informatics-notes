# *Informatics Notes*

Koleksi materi, latihan, dan solusi latihan untuk pelatihan persiapan OSN 2026 Tim Olimpiade Informatika MAN 2 Kota Pekanbaru.

## Daftar Isi

- [materials/](materials/)
	- Berisi rangkuman materi-materi.
- [problemsets/](problemsets/)
	- Latihan-latihan seiring waktu.
- [editorial/](editorial/)
	- Solusi latihan.

## Menambah Dokumen Baru

- Salin *template* yang sesuai:
  - Materi: [materials/!TEMPLATE.html](materials/!TEMPLATE.html)
  - Latihan: [problemsets/!TEMPLATE.html](problemsets/!TEMPLATE.html)
  - Solusi latihan: [editorial/!TEMPLATE.html](editorial/!TEMPLATE.html)
- Sesuaikan *metadata* di `<style>`, misal untuk soal latihan:
	```css
	:root {
		--meeting-number;
		--question-count;
		--time;
		--problemset-number;
		--date;
	}
	```
- Lalu tulis sesuai semantik HTML yang sesuai.

## *Math Rendering*

**MathJax** dikonfigurasi di [src/js/mathjax-options.js](src/js/mathjax-options.js) dan dimuat dari CDN di setiap halaman.