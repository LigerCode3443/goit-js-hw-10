import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error.svg';
// iziToast.show({
//   title: 'Hey',
//   message: 'What would you like to add?',
// });

const objOk = {
  title: '✅',
  message: ` Fulfilled promise in ()ms`,
  backgroundColor: 'green',
  timeout: 5000,
  position: 'topCenter',
};
const objErro = {};

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(formEl);
  const userData = {
    delay: formData.get('delay'),
    state: formData.get('state'),
  };
  createPromise(userData.delay, userData.state)
    .then(() => {
      setTimeout(() => {
        return iziToast.show(objOk, userData.delay);
      }, userData.delay);
    })
    .catch(() => {
      setTimeout(() => {
        return iziToast.error({
          iconUrl: errorIcon,
          message: ` Rejected promise in ${userData.delay}ms`,
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          timeout: 5000,
          position: 'topLeft',
        });
      }, userData.delay);
    });
});

function createPromise(delay, state) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
  return promise;
}
