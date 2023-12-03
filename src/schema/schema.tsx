import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .required('Name is required')
    .matches(/^[A-Z][a-z]+$/, 'the one first letter should be uppercase'),
  email: yup.string().email().required('e-mail is required'),
  age: yup
    .number()
    .min(16)
    .max(90)
    .integer()
    .positive()
    .required('age is required'),
});
