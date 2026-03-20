---
chapter: 7
title: Pemrograman Dinamis
---

Pemrograman dinamis (atau dikenal dengan *dynamic programming*) adalah metode penyelesaian masalah dengan memecahnya menjadi submasalah yang “tumpang tindih”, menyelesaikan submasalah tersebut dan menyimpan solusinya (dengan memoisasi atau tabulasi) agar tidak perlu menghitung ulang.

# *Coin Change*

Permasalahan *coin change* mencari banyak koin paling sedikit untuk mencapai suatu nilai, dengan suplai koin yang tak terhingga.

Diberikan $n$ jenis koin pada larik $A = [A_1, A_2, \dots, A_n]$ di mana $A_i$ adalah nilai koin jenis ke-$i$, dan suatu nominal $k$.