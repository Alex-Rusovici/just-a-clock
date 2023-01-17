const updateFooter = document.getElementById('footer-date');

let date = new Date();
const year = date.getFullYear();

updateFooter.innerHTML = `© Alex Rusovici ${year}`;
