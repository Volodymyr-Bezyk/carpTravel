import React from 'react';
import { FormSubmitBtnProps } from '@/types';

const FormSubmitBtn = ({ text, customStyles, aria }: FormSubmitBtnProps) => (
  <button
    className={`formButton ${customStyles}`}
    type="submit"
    aria-label={aria}
  >
    {text}
  </button>
);

export default FormSubmitBtn;
