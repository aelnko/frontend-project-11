/* eslint-disable no-param-reassign */

import { uniqueId } from 'lodash';

const getPosts = (doc) => {
  const items = doc.querySelectorAll('item');
  return Array.from(items).map((item) => {
    const postTitle = item.querySelector('title').textContent;
    const postURL = item.querySelector('link').textContent;
    const pubDate = new Date(item.querySelector('pubDate').textContent).getTime();
    const description = item.querySelector('description').textContent;
    const postId = uniqueId();
    const touched = null;
    return {
      postTitle, postURL, pubDate, postId, description, touched,
    };
  });
};

const parseFeed = ({ contents }, url) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(contents, 'application/xml');
  const title = doc.querySelector('title').textContent;
  const description = doc.querySelector('description').textContent;
  const posts = getPosts(doc);
  const pubDate = new Date(doc.querySelector('pubDate').textContent).getTime();
  return {
    title, description, posts, pubDate, url,
  };
};

export default (data, url) => {
  try {
    return parseFeed(data, url);
  } catch (e) {
    throw new Error('notValidRss');
  }
};
