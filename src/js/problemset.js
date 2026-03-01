//* Questions
const questions = document.getElementsByClassName('question');

//* Metadata
const bodyStyle = getComputedStyle(document.documentElement);
const meetingNumber = bodyStyle.getPropertyValue('--meeting-number');
const questionCount = `"${questions.length} butir"`;
const time = bodyStyle.getPropertyValue('--time');
const problemsetNumber = bodyStyle.getPropertyValue('--problemset-number');
const date = bodyStyle.getPropertyValue('--date');

document.getElementById('meeting-number').innerHTML = meetingNumber.slice(1, -1);
document.getElementById('question-count').innerHTML = questionCount.slice(1, -1);
document.getElementById('time').innerHTML = time.slice(1, -1);

document.documentElement.style.setProperty('--question-count', `${questionCount}`);

//* True or false questions.
const tofs = document.getElementsByClassName('tof');

for (const tof of tofs) {
	tof.innerHTML = '<ins><strong>BENAR</strong> atau <strong>SALAH</strong>:</ins> ' + tof.innerHTML;
}