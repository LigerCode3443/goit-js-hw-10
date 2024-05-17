import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error.svg';

const btnStart = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const timer = document.querySelector('.timer');

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      btnStart.disabled = true;
      return iziToast.error({
        message: 'Please choose a date in the future',
        iconUrl: errorIcon,
        title: 'ERROR',
        titleColor: '#fff',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        timeout: 5000,
        position: 'topRight',
      });
    }
    btnStart.disabled = false;
    userSelectedDate = selectedDates[0];
    console.log(selectedDates[0]);
  },
};

//!===============================================================!===================================================================

btnStart.addEventListener('click', evt => {
  btnStart.disabled = true;
  inputEl.disabled = true;
  const setId = setInterval(() => {
    const currentDate = Date.now();
    const diff = userSelectedDate - currentDate;
    const result = convertMs(diff);
    createMarkup(result);
    if (diff < 1000) {
      clearInterval(setId);
      inputEl.disabled = false;
    }
  }, 1000);
});

function createMarkup({ days, hours, minutes, seconds }) {
  timer.querySelector('[data-days]').textContent = addZero(days);
  timer.querySelector('[data-hours]').textContent = addZero(hours);
  timer.querySelector('[data-minutes]').textContent = addZero(minutes);
  timer.querySelector('[data-seconds]').textContent = addZero(seconds);
}

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

function addZero(value) {
  return String(value).padStart(2, '0');
}
flatpickr('#datetime-picker', options);
