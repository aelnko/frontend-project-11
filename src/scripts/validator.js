import * as yup from 'yup';

export default (data) => {
  yup.setLocale({
    mixed: {
      default: 'field_invalid',
    },
    string: {
      url: 'notValidUrl',
    },
  });

  const schema = yup.string().required().url();
  return schema.validate(data);
};
