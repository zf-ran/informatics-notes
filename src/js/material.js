//* Title
const documentStyle = getComputedStyle(document.documentElement);
const title = documentStyle.getPropertyValue('--title').slice(1, -1);
const chapter = documentStyle.getPropertyValue('--chapter').slice(1, -1);

document.getElementById('title').innerHTML = title;
document.getElementById('chapter').innerHTML = chapter;