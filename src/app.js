import i18next from 'i18next';
import ru from './locales/ru';
import initWatchedState from './view/view';
import submitHandler from './scripts/submitHandler';

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
      state: 'filling',
      result: null,
    },
    errors: [],
    data: {
      posts: [],
      feeds: [],
    },
  };

  const watchedState = initWatchedState(i18nextInstance, state);
  watchedState.lang = i18nextInstance.language;

  const form = document.querySelector('form');

  form.addEventListener('submit', submitHandler(watchedState));
};
