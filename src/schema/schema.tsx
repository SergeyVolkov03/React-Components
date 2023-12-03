import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(8)
    .required('Name is required')
    .matches(/^[A-Z][a-z]+$/, 'The first letter should be uppercase'),
  email: yup.string().email().required('E-mail is required'),
  age: yup.number().min(8).max(32).required('Age is required'),
});
