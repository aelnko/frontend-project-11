import onChange from 'on-change';
import renderTitle from './renderTitle';
import renderForm from './renderForm';
import renderFeedback from './renderFeedback';
import renderFeeds from './renderFeeds';
import renderPosts from './renderPosts';

const initWatchedState = (i18nextInstance, state) => onChange(state, (path, value) => {
  switch (path) {
    case 'form.state':
      renderForm(state, i18nextInstance);
      break;
    case 'form.result':
      renderFeedback(value, i18nextInstance);
      break;
    case 'data.feeds':
      renderFeeds(value);
      break;
    case 'data.posts':
      renderPosts(value, state, i18nextInstance);
      break;
    case 'uiState.read':
      renderPosts(state.data.posts, state, i18nextInstance);
      break;
    case 'lang':
      renderTitle(state, i18nextInstance);
      renderForm(state, i18nextInstance);
      break;
    default:
  }
});

export default initWatchedState;
