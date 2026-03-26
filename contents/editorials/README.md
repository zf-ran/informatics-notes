# *Editorial*

*Editorial* adalah dokumen solusi dan penjelasan dari soal-soal yang ada di [*problemsets*](/contents/problemsets).

Gunakan nama *file* yang sama dengan *problemset* yang bersesuaian.

Pada saat menjelaskan soal, gunakan bahasa yang formal dan mudah dipahami.

## *Frontmatter*

*Frontmatter* untuk *editorial* sama dengan *problemsets*, dengan penambahan berikut:

```yaml
solver: XXXX
class: XXXX
```

- `solver`: **teks**
	- Nama kontributor/penulis solusi tersebut.
	- Tulislah nama kalian jika kalian merupakan penulis solusi untuk *problemset* tersebut.
- `class`: **teks**
	- Kelas/instansi kontributor solusi.

## Isi

Isi untuk *editorial* kurang lebih sama dengan *problemset*.

### Pernyataan (*Abridged Statement*)

Untuk *abridged statement* (inti pokok soal), tuliskan dalam bentuk **paragraf biasa**.

### Pertanyaan

Untuk setiap soal, buatlah dalam bentuk

```md
> [!question]
> Paragraf pertanyaan di sini.
>
> Jika ada paragraf kedua, letakkan di sini.
```

### Jawaban

Ada tiga tipe jawaban:

- Isian singkat.
- Pilihan ganda.
- Pilihan ganda kompleks.

#### Isian Singkat

Untuk isian singkat, tuliskan jawaban dalam bentuk

```md
> !! Jawaban
```

dalam *blockquote* yang **sama** dengan soal.

#### Pilihan Ganda

Buat dalam bentuk *unordered list* dengan tambahan `( )` atau `(x)` untuk jawaban yang benar. Letakkan pada *blockquote* yang **sama** dengan soal.

```md
> - ( ) Jawaban 1
> - ( ) Jawaban 2
> - (x) Jawaban 3
```

Pada contoh di atas, *Jawaban 3* adalah jawaban yang benar.

#### Pilihan Ganda Kompleks

Sama dengan pilihan ganda, namun menggunakan `[ ]` dan `[x]`, bukan `( )`. Letakkan pada *blockquote* yang **sama** dengan soal.

```md
> - [x] Jawaban 1
> - [x] Jawaban 2
> - [ ] Jawaban 3
```

Pada contoh di atas, *Jawaban 1* dan *Jawaban 2* adalah jawaban-jawaban yang benar.

### Penjelasan

Untuk penjelasan, tuliskan di bawah blok soal menggunakan **paragraf biasa**.