# *Problemset*

*Problemset* adalah paket soal yang ditulis untuk persiapan olimpiade informatika.

## *Frontmatter*

*Frontmatter* untuk *problemset* adalah

```yaml
problemsetTitle: TTTT
date: D Mmmm YYYY
meetingNumber: 1
questionCount: 1
time: XX jam YY menit
```

- `meetingNumber`: **angka**
	- Pertemuan keberapa *problemset* ini dikerjakan.
- `questionCount`: **angka**
	- Berapa banyak soal pada *problemset* ini.
- `time`: **teks**
	- Berapa lama sepatutnya paket soal ini dikerjakan.
	- Dalam bentuk jam dan/atau menit.
- `problemsetTitle`: **teks**
	- Judul *problemset*.
- `date`: **teks**
	- Tanggal *problemset* ini ditulis.

## Isi

### Judul Soal

Setiap tema soal, mulai dengan *heading* 1 dalam bentuk

```html
# Soal X–Y<br>Judul Soal
```

Jika judul soal tidak ada, **buatlah** judul yang dirasa sesuai dengan tema soal.

### Pertanyaan

Ada dua tipe pertanyaan:

- Isian singkat.
- Benar/salah.

Untuk setiap pertanyaan, diawali dengan `??`. Khusus untuk soal **benar/salah**, mulai dengan `??tof`.

Contoh soal isian singkat:

```md
?? Apa hasil dari `swap(x, y)`?
```

Contoh soal benar/salah:

```md
??tof Hasil dari 2 + 3 adalah 6.
```

‘TOF’ adalah singkatan dari *true or false*.

### Kode

Untuk soal membaca koding, gunakan *codeblock*:

````md
```cpp
// Kode disini
```
````