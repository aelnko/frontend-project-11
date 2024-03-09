/* eslint-disable no-param-reassign */
import { uniqueId } from 'lodash';

const getPosts = (doc, feedId) => {
  const items = doc.querySelectorAll('item');
  return Array.from(items).map((item) => {
    const postTitle = item.querySelector('title').textContent;
    const postURL = item.querySelector('link').textContent;
    return { postTitle, postURL, feedId };
  });
};

const createFeed = (doc) => {
  const title = doc.querySelector('title').textContent;
  const description = doc.querySelector('description').textContent;
  return { title, description };
};

const parseFeed = ({ contents }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(contents, 'application/xml');
  const feedId = uniqueId();
  const posts = getPosts(doc, feedId);
  return { ...createFeed(doc), feedId, posts };
};

export default (data) => {
  try {
    return parseFeed(data);
  } catch (e) {
    throw new Error('notValidRss');
  }
};
