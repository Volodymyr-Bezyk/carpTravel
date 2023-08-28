import React from 'react';
import { FormInputProps } from '@/types';

const FormInput: React.FC<FormInputProps> = ({
  labelText,
  inputType = 'text',
  placeholderValue,
  errorMsg,
  labelStyles,
  err,
  field,
}) => {
  return (
    <label className={`relative mb-4 block desktop:mb-6 ${labelStyles}`}>
      <span
        className={`mb-1 block text-xs font-extralight leading-6 tracking-2.4 transition-all duration-300  ${
          err && 'text-error'
        } ${err ? 'opacity-95' : 'opacity-60'}`}
      >
        {labelText}
      </span>
      <input
        className={`formInputText px-2 bg-inputBg w-full desktop:py-2px transition-all duration-300 ${
          err && 'text-error'
        } ${err && 'opacity-95'}`}
        type={inputType || 'text'}
        placeholder={placeholderValue}
        {...field}
      />
      {errorMsg && (
        <span
          className={` error absolute bottom-0 right-0 translate-y-full text-xs font-extralight leading-6 tracking-2.4 text-error flex items-center ${
            err && 'opacity-95'
          }`}
        >
          {errorMsg}
        </span>
      )}
    </label>
  );
};

export default FormInput;
