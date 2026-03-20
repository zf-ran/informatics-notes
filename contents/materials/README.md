# *Frontmatter*

*Frontmatter* untuk materi adalah

```yaml
chapter: 1
title: XX
```

- `chapter`: **angka**
	- Bab berapa materi ini. Saat ini, penomoran bab berdasar pada [TLX](https://tlx.toki.id/).
- `title`: **teks**
	- Judul bab.

# Isi

Saat menulis materi, gunakan bahasa yang formal dan mudah dimengerti.

## *Statement Block*

*Statement block* adalah paragraf yang merupakan definisi, teorema, lemma, dan korolari.

Sintaks untuk *statement block* adalah:

```md
> [!definisi] Ini adalah paragraf definisi.
```

Untuk jenis *statement* yang lain, ganti `definisi` dengan jenis yang bersesuaian.

Jika terdapat dua atau lebih paragraf pada blok yang sama, maka tulis seperti:

```md
> [!definisi] Ini adalah paragraf pertama.
>
> Lalu ini paragraf kedua.
>
> Terakhir, ini paragraf ketiga.
```

## Kode

Untuk menulis kode program, gunakan *codeblock*:

	```cpp
	// Kode disini
	```