/* eslint-disable no-param-reassign */

const getPosts = (doc) => {
  const items = doc.querySelectorAll('item');
  return Array.from(items).map((item) => {
    const postTitle = item.querySelector('title').textContent;
    const postURL = item.querySelector('link').textContent;
    const pubDate = new Date(item.querySelector('pubDate').textContent).getTime();
    return {
      postTitle, postURL, pubDate,
    };
  });
};

const parseFeed = ({ contents }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(contents, 'application/xml');
  const title = doc.querySelector('title').textContent;
  const description = doc.querySelector('description').textContent;
  const posts = getPosts(doc);
  const pubDate = new Date(doc.querySelector('pubDate').textContent).getTime();
  return {
    title, description, posts, pubDate,
  };
};

export default (data) => {
  try {
    return parseFeed(data);
  } catch (e) {
    throw new Error('notValidRss');
  }
};
