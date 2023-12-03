import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .required('name is required')
    .matches(/^[A-Z][a-z]+$/, 'the only first letter should be uppercase'),
  email: yup.string().email().required('e-mail is required'),
  age: yup
    .number()
    .typeError('age should be a number')
    .min(16)
    .max(90)
    .integer()
    .positive()
    .required('age is required'),
  password: yup
    .string()
    .required('password is required')
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      'password should contain one lowercase character, one uppercase, one special character, one number'
    ),
  confirmPassword: yup
    .string()
    .required('confirm password is required')
    .test('passwords-match', 'password must be confirmed', function (value) {
      return this.parent.password === value;
    }),
  gender: yup.string().required('gender is required'),
  accept: yup.boolean().required().oneOf([true], 'please read and accept'),
  country: yup.string().required('country is required'),
});
