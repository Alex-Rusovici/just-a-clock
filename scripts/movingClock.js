const deg = 6;

const hours = document.querySelector('#hr');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');

setInterval(() => {
  let day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hours.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
});
