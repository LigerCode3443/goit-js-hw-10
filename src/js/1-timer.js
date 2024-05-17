import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);

//!===================================================================
// iziToast.show({
//   title: 'Hey',
//   message: 'What would you like to add?',
// });
//!===================================================================

// const inputEl = document.querySelector('#datetime-picker');

// const btnStart = document.querySelector('data-start');
// console.log(btnStart);
