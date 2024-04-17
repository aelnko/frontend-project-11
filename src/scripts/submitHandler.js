/* eslint-disable no-param-reassign */
import { uniqueId } from 'lodash';
import validate from './validator';
import getData from './getData';
import parse from './parser';
import updatePosts from './updatePosts';

export default (watchedState, input) => (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const url = formData.get('url').trim();
  let link;
  watchedState.form.state = 'loading';
  watchedState.form.result = 'loading';
  validate(url, watchedState.data.feeds)
    .then((data) => {
      link = data;
      return link;
    })
    .then((data) => getData(data))
    .then((data) => parse(data, link))
    .then(({ title, description, posts }) => {
      watchedState.form.state = 'success';
      watchedState.form.result = 'success';
      const id = uniqueId();
      watchedState.data.feeds.push({
        url,
        title,
        description,
        id,
      });
      watchedState.data.posts = [
        ...posts.map((post) => ({ ...post, feedId: id })),
      ];
      const viewButtons = document.querySelectorAll('.open-modal');
      viewButtons.forEach((button) => button.addEventListener('click', () => {
        watchedState.data.posts.find(({ postId }) => postId === button.id).touched = true;
        watchedState.uiState.read.push(button.id);
      }));
    })
    .then(() => setTimeout(updatePosts, 5000, url, watchedState))
    .catch((error) => {
      watchedState.form.state = 'invalid';
      watchedState.form.result = error;
    });
  input.value = '';
  input.focus();
};
