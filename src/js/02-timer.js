import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  days: document.querySelectorAll('.value'),
  btnStart: document.querySelector('button[data-start]'),
};

refs.btnStart.addEventListener('click', callbackStartTimer);
refs.btnStart.setAttribute('disabled', 'disabled');

const DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const time = selectedDates[0] - new Date();
    if (time < 0) {
      alert('Please choose a date in the future');
      return;
    }
    refs.btnStart.removeAttribute('disabled');
    const dataInput = convertMs(time);
    setDataToStart(dataInput);
  },
};

function callbackStartTimer(evt) {
  const idTimer = setInterval(() => {
    setDataToStart(valueDifferenceDate());
    if (valueDifferenceDate() < DELAY) {
      clearInterval(idTimer);
    }
  }, DELAY);
}

function setDataToStart(evt) {
  const key = Object.values(evt);
  for (let i = 0; i < key.length; i++) {
    refs.days[i].textContent = addLeadingZero(key[i]);
  }
}

function valueDifferenceDate() {
  return convertMs(new Date(refs.input.value) - new Date());
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const flatpickr = require('flatpickr');
flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
