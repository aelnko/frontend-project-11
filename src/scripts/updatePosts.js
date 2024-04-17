/* eslint-disable no-param-reassign */
import getData from './getData';
import parse from './parser';

const updatePosts = (link, watchedState) => {
  const promises = getData(link)
    .then((data) => data)
    .then((data) => parse(data))
    .then((data) => {
      const { posts } = data;
      const pubDates = watchedState.data.posts.map(({ pubDate }) => pubDate);
      const newPosts = posts.filter(
        ({ pubDate }) => !pubDates.includes(pubDate),
      );
      watchedState.data.posts.unshift(...newPosts);
      return newPosts;
    })
    .then(() => {
      const viewButtons = document.querySelectorAll('.open-modal');
      viewButtons.forEach((button) => button.addEventListener('click', () => {
        watchedState.data.posts.find(({ postId }) => postId === button.id).touched = true;
        watchedState.uiState.read.push(button.id);
      }));
    });
  return promises.then(() => setTimeout(updatePosts, 5000, link, watchedState));
};

export default updatePosts;
