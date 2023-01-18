const stopwatch = document.querySelector('#watch');
let milliseconds = 0;
let timer;

function startStopwatch() {
  // add running styling
  watch.classList.add('running');

  // remove paused styling
  watch.classList.remove('paused');

  clearInterval(timer);

  // update stopwatch every 10 ms
  timer = setInterval(() => {
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);

    // add '0' to have a two digit number everytime
    stopwatch.innerHTML =
      ('0' + dateTimer.getUTCMinutes()).slice(-2) +
      ':' +
      ('0' + dateTimer.getUTCSeconds()).slice(-2) +
      ',' +
      ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
  }, 10);
}

function pauseWatch() {
  // remove paused styling
  watch.classList.add('paused');

  // add running styling
  watch.classList.remove('running');

  clearInterval(timer);

  const startButton = document.querySelector('#start');
  startButton.innerHTML = 'Restart';
}

function resetWatch() {
  // remove paused styling
  watch.classList.remove('paused');

  // add running styling
  watch.classList.remove('running');

  clearInterval(timer);

  milliseconds = 0;
  watch.innerHTML = '00:00,00';

  const startButton = document.querySelector('#start');
  startButton.innerHTML = 'Start';
}

document.addEventListener('click', (button) => {
  const element = button.target;

  if (element.id === 'start') {
    startStopwatch();
  }
  if (element.id === 'pause') {
    pauseWatch();
  }

  if (element.id === 'reset') {
    resetWatch();
  }
});
