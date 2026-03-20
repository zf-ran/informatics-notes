---
chapter: 6
title: Algoritma Rakus
---

Algoritma Rakus (atau dikenal dengan *greedy*) adalah metode penyelesaian masalah dengan mengambil pilihan optimal di **setiap** submasalah untuk mencari solusi optimal di masalah utuh. Metode ini sederhana, namun belum memastikan solusi optimal. *Greedy* tidak bisa digunakan jika mencari solusi optimal submasalah tidak menjamin solusi optimal di masalah utuh.

# *Activity Selection*

Diberikan sebuah larik aktivitas $A = [(s_1, f_1), (s_2, f_2), \dots, (s_n, f_n)]$ di mana $s_i$ dan $f_i$ berturut-turut adalah waktu mulai dan waktu selesai aktivitas ke-$i$. Tujuan *activity selection* adalah untuk menentukan aktivitas apa saja yang perlu dipilih agar banyaknya aktivitas dimaksimalkan dengan batasan hanya bisa mengerjakan satu aktivitas di satu waktu.

Asumsikan larik $A$ sudah diurutkan tidak menurun berdasarkan $f_i$, atau $f_i \leq f_{i+1}$ untuk $1 \leq i < n$. Definisikan himpunan $S$ sebagai aktivitas-aktivitas yang dipilih, dan $t$ sebagai waktu.

Tetapkan $S = \{(s_1, f_1)\}$ dan $t = f_1$. Lanjutkan untuk setiap aktivitas ke-$i$ ($i > 1$): jika $s_i \geq t$, pilih aktivitas ke-$i$ dengan ubah $S := S \cup \{(s_i, f_i)\}$ dan $t := f_i$. Implementasi dapat diperhatikan di kode berikut.

```cpp
struct Activity {
	int start;
	int finish;
};

bool compare_activity(Activity a, Activity b) {
	return a.finish < b.finish;
}

vector<Activity> activity_selection(vector<Activity>& activities) {
	sort(activities.begin(), activities.end(), compare_activity);

	vector<Activity> chosen;
	chosen.push_back(activities[0]);

	int time = activities[0].finish;

	for (int i = 1; i < activities.size(); i++) {
		if (activities[i].start >= time) {
			chosen.push_back(activities[i]);
			time = activities[i].finish;
		}
	}

	return chosen;
}
```

*Activity selection* dikategorikan *greedy* karena kita selalu memilih aktivitas dengan waktu selesai ($f_i$) tercepat. Solusi ini memiliki kompleksitas waktu $O(n \log n)$ di mana *bottleneck* terletak di pengurutan, dan kompleksitas ruang $O(n)$ dengan $n$ adalah banyak aktivitas.