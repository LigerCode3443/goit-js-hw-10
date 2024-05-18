import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error.svg';
import okIcon from '../img/ok.svg';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(formEl);
  const userData = {
    delay: Number(formData.get('delay')),
    state: formData.get('state'),
  };

  createPromise(userData.delay, userData.state)
    .then(() => {
      return iziToast.success({
        iconUrl: okIcon,
        title: 'OK',
        message: ` Fulfilled promise in ${userData.delay} ms`,
        messageColor: '#fff',
        titleColor: '#fff',
        backgroundColor: '#59a10d',
        timeout: 5000,
        position: 'topRight',
      });
    })
    .catch(() => {
      return iziToast.error({
        iconUrl: errorIcon,
        title: 'ERROR',
        titleColor: '#fff',
        message: ` Rejected promise in ${userData.delay} ms`,
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        timeout: 5000,
        position: 'topRight',
      });
    });

  evt.target.reset();
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
