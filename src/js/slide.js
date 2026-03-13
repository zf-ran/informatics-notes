//* Cover Page
const documentStyle = getComputedStyle(document.documentElement);
const title = documentStyle.getPropertyValue('--title').slice(1, -1);
const subtitle = documentStyle.getPropertyValue('--subtitle').slice(1, -1);

document.getElementById('title').innerHTML = title;
document.getElementById('subtitle').innerHTML = subtitle;