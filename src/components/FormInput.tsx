import React from 'react';
import { FormInputProps } from '@/types';

const FormInput = ({
  labelText,
  inputType = 'text',
  placeholderValue,
  errorMsg,
  labelStyles,
  err,
  field,
}: FormInputProps) => (
  <label className={`relative mb-4 block desktop:mb-6 ${labelStyles}`}>
    <span className=" opacity-60 mb-1 block text-xs font-extralight leading-6 tracking-2.4">
      {labelText}
    </span>
    <input
      className="formInputText px-2 bg-inputBg w-full outline-none desktop:py-2px"
      type={inputType || 'text'}
      placeholder={placeholderValue}
      {...field}
    />
    {errorMsg && (
      <span className=" error absolute bottom-0 right-0 translate-y-full text-xs font-extralight leading-6 tracking-2.4 text-error flex items-center">
        {errorMsg}
      </span>
    )}
  </label>
);

export default FormInput;
