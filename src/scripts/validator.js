import { string } from 'yup';

export default (data) => {
  const schema = string().required().url();
  return schema.validate(data);
};
