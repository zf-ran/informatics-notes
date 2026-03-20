---
chapter: 2
title: Matematika Diskret
---

Matematika diskret adalah cabang matematika yang mempelajari objek matematika yang dapat dihitung (*countable*), semisal bilangan-bilangan bulat (*integers*), graf, logika proposisi. Matematika diskret **tidak** menyentuh bilangan riil, kalkulus, trogonometri, dan lain-lain.

# Bilangan Prima

> [!definisi] Bilangan prima adalah bilangan asli yang tepat memiliki dua faktor, yaitu 1 dan dirinya sendiri: 2, 3, 5, 7, ….

Dengan definisi tersebut, kita definisikan bilangan komposit.

> [!definisi] Bilangan komposit adalah bulat yang lebih dari 1 yang memiliki lebih dari dua faktor.

Dari definisi tersebut, perlu dicatat bahwa 1 bukanlah bilangan prima dan bukanlah bilangan komposit.

> [!teorema] Setiap bilangan bulat yang lebih dari 1 adalah bilangan prima atau dapat ditulis sebagai hasil kali beberapa bilangan prima.

Dengan kata lain, setiap bilangan komposit memiliki faktorisasi primanya masing-masing, yaitu hasil kali bilangan-bilangan prima.

## Sifat-Sifat Bilangan Prima

Dari pengertian tersebut, dapat diturunkan sifat-sifat berikut. Misalkan $p$ adalah bilangan prima.

> [!lemma] *Lemma Euklid.* Jika $p$ habis membagi $ab$, maka $p$ habis membagi $a$ *atau* habis membagi $b$ untuk bilangan bulat $a$ dan $b$.

*Atau* yang dimaksud adalah OR, bukan XOR. Bisa saja $p$ habis membagi $a$ dan $b$. Bisa saja hanya membagi $a$ atau $b$, tidak keduanya.

Sebagai contoh, 3 habis membagi 54, 3 habis membagi 6 dan 3 habis membagi 9. Contoh lainnya, 5 habis membagi 20, 5 habis membagi 5, tapi tidak habis membagi 4.

> [!korolari] Jika $p$ habis membagi $a^n$, maka $p$ habis membagi $a$ untuk bilangan bulat $a$ dan bilangan bulat tak negatif $n$.

Contoh, 3 habis membagi $6^4$, maka 3 habis membagi 6.

> [!teorema] *Teorema Bertrand–Chebyshev.* Untuk bilangan bulat $n > 1$, terdapat setidaknya satu bilangan prima $p$ sehingga $n < p < 2n$.

Teorema ini jarang digunakan pada soal-soal. Untuk bacaan lanjutan, silakan ke [*Bertrand's postulate*](https://en.wikipedia.org/wiki/Bertrand%27s_postulate). Dari teorema di atas dapat diturunkan sifat berikut.

> [!korolari] Misalkan $p_k$ adalah bilangan prima ke-$k$. Untuk setiap bilangan asli $n$, $p_{n+1} < 2p_n$.

Untuk setiap bilangan prima, bilangan tersebut pasti kurang dari dua kali bilangan prima sebelumnya.

## Pengecekan Bilangan Prima

Pada soal-soal, terkadang kita perlu menentukan suatu bilangan $n$ prima atau bukan. Cara pertama yang mungkin terpikir adalah mengecek dari 2 sampai $n - 1$. Jika ada bilangan di rentang tersebut yang habis membagi $n$, maka $n$ bukan prima.

Namun dengan cara tersebut, jika $n > 20$ jelas akan lama menghitung dengan kertas maupun dengan komputer. Ternyata, cukup cek hingga $\sqrt{n}$ saja. Kenapa? Karena faktor suatu bilangan pasti berpasangan. Misalkan $n = ab$, maka salah satu dari $a$ dan $b$ akan kurang dari $\sqrt{n}$ dan yang lainnya lebih dari $\sqrt{n}$. Jika keduanya lebih besar dari $\sqrt{n}$, tentu $ab > \sqrt{n}\sqrt{n}$. Hal ini berkontradiksi dengan $n = ab$

Contoh implementasinya pada kode di bawah.

```cpp
bool is_prime(int n) {
	if (n <= 1)
		return false;

	int root = sqrt(n);

	for (int i = 2; i < root; i++)
		if (n % i == 0)
			return false;

	return true;
}
```

## Mencari Bilangan Prima: *Sieve of Eratosthenes*

*Sieve of Eratosthenes* digunakan untuk mencari bilangan-bilangan prima pada rentang 1 sampai $n$.

Algoritmanya sebagai berikut:

1. Misalkan sebuah *list* bilangan bulat dari 2 sampai $n$.
2. Pertama-tama, tetapkan $p = 2$.
3. Coret semua kelipatan $p$ pada *list* tersebut, kecuali $p$ itu sendiri. (Coret $2p$, $3p$, $4p$, dan seterusnya sampai $n$)$^\dagger$.
4. Cari bilangan terkecil yang lebih besar dari $p$ yang tidak tercoret.
   - Jika tidak ada, berhenti.
   - Jika ada, ubah $p$ menjadi bilangan ini dan ulang dari langkah 3.
5. Maka semua bilangan yang tidak tercoret adalah bilangan prima dari 2 sampai $n$.

^: $^\dagger$Cukup mulai dari $p^2$, karena kelipatan yang lebih kecil sudah dicoret oleh bilangan prima yang lebih kecil.

Kode *sieve of Eratosthenes* sebagai berikut. Kompleksitas waktu dari algoritma ini adalah $O(n \log \log n)$.

```cpp
vector<int> primes_up_to(int N) {
	bool is_prime[N + 1];
	is_prime[0] = false;
	is_prime[1] = false;
	for (int p = 2; p <= N; p++)
		is_prime[p] = true;

	int root = sqrt(N);
	for (int p = 2; p <= root; p++)
		if (is_prime[p])
			for (int i = p * p; i <= N; i += p)
				is_prime[i] = false;

	vector<int> primes;
	for (int p = 2; p <= N; p++)
		if (is_prime[p])
			primes.push_back(p);

	return primes;
}
```

# Faktor Bilangan

> [!definisi] Misalkan $a$ dan $b$ adalah bilangan bulat dengan $a \neq 0$. Kita mengatakan bahwa $a$ adalah *faktor* dari $b$ jika dan hanya jika terdapat bilangan bulat $k$ sehingga $b = ka$. Dalam hal ini ditulis $a \mid b$ atau '$a$ habis membagi $b$.'

Sebagai contoh, 5 adalah faktor dari 15, karena terdapat $k = 3$ sehingga $15 = 3(5)$. Namun, 6 bukanlah faktor dari 14, karena tidak ada bilangan bulat $k$ sehingga $14 = 6k$.