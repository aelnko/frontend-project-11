import onChange from 'on-change';
import validate from './scripts/validator';
import render from './view/view';

export default () => {
  const state = {
    form: {
      status: 'filling',
    },
    data: '',
    errors: [],
  };

  const watchedState = onChange(state, render);

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
      watchedState.errors.push(`${error.name}: ${error.message}`);
    });
  });

  render(state);
};
