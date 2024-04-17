import * as yup from 'yup';

export default (data, feeds) => {
  yup.setLocale({
    mixed: {
      default: 'field_invalid',
    },
    string: {
      url: 'notValidUrl',
    },
  });

  const schema = yup.string().required('empty').url('notValidUrl').notOneOf(feeds.map(({ url }) => url), 'duplicate');
  return schema.validate(data);
};
