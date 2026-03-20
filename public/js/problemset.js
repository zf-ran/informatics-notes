//* True or false questions.
const tofs = document.getElementsByClassName('tof');

for (const tof of tofs) {
	tof.innerHTML = '<ins><strong>BENAR</strong> atau <strong>SALAH</strong>:</ins> ' + tof.innerHTML;
}