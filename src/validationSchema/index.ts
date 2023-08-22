import * as yup from 'yup';

export const footerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^(?!\s)[A-Za-z\s]*\s+[A-Za-z][A-Za-z\s]*$/,
      'Name must contain at least one space followed by a non-space character and cannot start with a space'
    )
    .required('Name is required'),
  email: yup.string().email().required(),
  message: yup.string(),
});
