import * as yup from 'yup';

export const footerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^(?!\s)[A-Za-z\s]*\s+[A-Za-z][A-Za-z\s]*$/,
      'Name must contain at least one space followed by a non-space character and cannot start with a space'
    )
    .required('Name is required'),
  email: yup
    .string()
    .email()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required(),
  message: yup.string(),
});

export const careerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^(?!\s)[A-Za-z\s]*\s+[A-Za-z][A-Za-z\s]*$/,
      'Name must contain at least one space followed by a non-space character and cannot start with a space'
    )
    .required('Name is required'),
  email: yup
    .string()
    .email()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required(),
  message: yup.string(),
  position: yup.string(),
  tel: yup.string().min(15).max(15).required(),
  agreement: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms')
    .required(),
});
