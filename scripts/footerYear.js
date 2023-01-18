const updateFooter = document.getElementById('footer-date');

const date = new Date();
const year = date.getFullYear();

updateFooter.innerHTML = `© Alex Rusovici ${year}`;
