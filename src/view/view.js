import onChange from 'on-change';
import renderTitle from './renderTitle';
import renderForm from './renderForm';
import renderErrors from './renderErrors';

const initWatchedState = (i18nextInstance, state) => onChange(state, (path, value) => {
  switch (path) {
    case 'form.status':
      renderForm(state, i18nextInstance);
      break;
    case 'form.result':
      renderErrors(value, i18nextInstance);
      break;
    case 'lang':
      renderTitle(state, i18nextInstance);
      renderForm(state, i18nextInstance);
      break;
    default:
  }
});

export default initWatchedState;
