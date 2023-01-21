// declare the .form
const form = document.querySelector('.form');
// declare the .time-input
const timeInput = document.querySelector('.time-input');
// declare the select[name='format']
const format = document.querySelector("select[name='format']");
// declare the .set-button
const setButton = document.querySelector('#set-button');
// declare the .countdown
const countDownContainer = document.querySelector('.timer');
// declare the .countdown
const countDown = document.querySelector('#countdown');
// declare the .stop-button
const stopButton = document.querySelector('#stop-button');
// declare the .reset-button
const resetButton = document.querySelector('#reset-button');

// variable to store setInterval
let countDownInterval;
// secondsLeft in millisecond
let secondsLeftms;
// end time
let endTime;
// .stop-buttonn clicked or not
let stopButtonClicked = false;

// .form submit listener
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // get the countdown time
  let countDownTime = timeInput.value;

  // check if it is not zero
  if (countDownTime > 0) {
    if (format.value === 'hours') {
      // convert hours to milliseconds
      // 1 hrs = 60min * 60sec * 1000ms
      countDownTime = countDownTime * 3600000;
    } else if (format.value === 'minutes') {
      // 1 minute = 60min * 1000ms
      countDownTime = countDownTime * 60000;
    } else if (format.value === 'seconds') {
      // 1 seconds = 1000 ms
      countDownTime = countDownTime * 1000;
    }

    // change timer color
    countDown.classList.add('color-primary');

    // get current time in milliseconds
    const now = Date.now();
    // calculate the ending time
    endTime = now + countDownTime;

    // activate the countdown at first
    setCountDown(endTime);

    countDownInterval = setInterval(() => {
      setCountDown(endTime);
    }, 10);
  }
});

// .stop-button listener
stopButton.addEventListener('click', () => {
  // toggle the value of 'stopButtonClicked'
  stopButtonClicked = !stopButtonClicked;

  // remove primary color
  countDown.classList.remove('color-white');
  countDown.classList.remove('color-primary');
  // change timer color
  countDown.classList.add('color-black');

  // if STOP button is clicked
  if (stopButtonClicked === true) {
    // change the text to 'Continue'
    stopButton.innerHTML = 'Continue';
    // clear the setInterval() inorder to freeze the countdown timer
    clearInterval(countDownInterval);
  } else if (stopButtonClicked === false) {
    // if Play / Continue button is clicked
    // then change text to 'Stop'
    stopButton.innerHTML = 'Stop';
    // then update endTime
    endTime = secondsLeftms + Date.now();
    // set a new setInterval()
    countDownInterval = setInterval(() => {
      setCountDown(endTime);
    }, 10);

    // remove primary color
    countDown.classList.remove('color-white');
    countDown.classList.remove('color-black');
    // change timer color
    countDown.classList.add('color-primary');
  }
});

// .reset-button click listener
resetButton.addEventListener('click', () => {
  resetCountDown();
});

// setCountDown function
const setCountDown = (endTime) => {
  // calculate how many milliseconds is left to reach endTime from now
  secondsLeftms = endTime - Date.now();
  // convert it to seconds
  const secondsLeft = Math.round(secondsLeftms / 1000);

  // calculate the hours, minutes, seconds and fake milliseconds
  let hours = Math.floor(secondsLeft / 3600);
  let minutes = Math.floor(secondsLeft / 60) - hours * 60;
  let seconds = secondsLeft % 60;
  let milliseconds = Number(Date.now().toString().slice(-3, -1));

  // adding an extra zero infront of digits if it is < 10
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (Math.floor(milliseconds) < 10) {
    milliseconds = `0${milliseconds}`;
  }

  // stopping the timer if the time is up
  if (secondsLeft < 0) {
    resetCountDown();
    return;
  }

  // set the .countdown text
  countDown.innerHTML = `${minutes}:${seconds},${milliseconds}`;
};

// resetCountDown function
const resetCountDown = () => {
  // destroy the setInterval()
  clearInterval(countDownInterval);
  // reset the countdown text
  countDown.innerHTML = '00:00,00';
  // set stopButtonClicked = false
  stopButtonClicked = false;
  // change inner text to Stop
  stopButton.innerHTML = 'Stop';
  // remove timer colors
  countDown.classList.remove('color-black');
  countDown.classList.remove('color-primary');
  // change timer color
  countDown.classList.add('color-white');
};
