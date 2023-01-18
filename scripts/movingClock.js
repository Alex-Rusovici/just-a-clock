const deg = 6;

const hours = document.querySelector('#hr');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');

setInterval(() => {
  const day = new Date();

  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * deg;
  const ss = day.getSeconds() * deg;

  hours.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
});
