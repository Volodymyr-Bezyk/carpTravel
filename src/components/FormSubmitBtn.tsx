import React from 'react';
import { FormSubmitBtnProps } from '@/types';

const FormSubmitBtn = ({
  text,
  customStyles,
  aria,
  disabled,
}: FormSubmitBtnProps) => (
  <button
    className={`formButton ${customStyles} disabled:pointer-events-none`}
    type="submit"
    aria-label={aria}
    disabled={disabled}
  >
    {text}
  </button>
);

export default FormSubmitBtn;
