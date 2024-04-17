/* eslint-disable no-param-reassign */
import { uniqueId } from 'lodash';
import validate from './validator';
import getData from './getData';
import parse from './parser';
import updatePosts from './updatePosts';

export default (watchedState) => (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const url = formData.get('url');
  validate(url)
    .then((link) => link)
    .then((link) => getData(link))
    .then((data) => parse(data))
    .then(({ title, description, posts }) => {
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
        watchedState.uiState.read.push(
          watchedState.data.posts.find(({ postId }) => postId === button.id),
        );
      }));
    })
    .then(() => setTimeout(updatePosts, 5000, url, watchedState))
    .catch((error) => {
      watchedState.form.status = 'invalid';
      watchedState.form.result = error;
    });
};
