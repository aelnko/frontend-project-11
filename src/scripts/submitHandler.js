/* eslint-disable no-param-reassign */
import validate from './validator';
import getData from './getData';
import parse from './parser';

export default (watchedState) => (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const url = formData.get('url');
  validate(url)
    .then((link) => link)
    .then((link) => getData(link))
    .then((data) => parse(data))
    .then(({
      title, description, feedId, posts,
    }) => {
      watchedState.data.feeds.push({ title, description, feedId });
      watchedState.data.posts.push(...posts);
    })
    .catch((error) => {
      watchedState.form.status = 'invalid';
      watchedState.form.result = error;
    });
};
