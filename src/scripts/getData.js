/* eslint-disable no-param-reassign */
import axios from 'axios';

export default (url) => {
  const proxifiedUrl = `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`;
  return axios.get(proxifiedUrl).then((resp) => resp.data)
    .catch(() => {
      throw new Error('network');
    });
};
