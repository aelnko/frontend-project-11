import i18next from 'i18next';
import validate from './scripts/validator';
import ru from './locales/ru';
import initWatchedState from './view/view';

export default () => {
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    resources: {
      ru,
    },
  });

  const state = {
    lang: null,
    form: {
      status: 'filling',
      result: null,
    },
    data: '',
    errors: [],
  };

  const watchedState = initWatchedState(i18nextInstance, state);
  watchedState.lang = i18nextInstance.language;

  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = formData.get('url');
    validate(url).then((link) => {
      watchedState.form.status = 'valid';
      watchedState.data = link;
    }).catch((error) => {
      watchedState.form.status = 'invalid';
      watchedState.form.result = error;
      // watchedState.errors.push(`${error.name}: ${error.message}`);
    });
  });
};
