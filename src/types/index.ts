import { MouseEventHandler } from 'react';
// import { Field } from 'react-hook-form';

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  customStyles?: string;
}

export interface MobileMenuBtnProps {
  text: string;
  btnType?: string;
  customStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  aria: string;
}

export interface SectionTitleProps {
  text: string;
  strongText: string;
  customStyles?: string;
}

export interface FormInputProps {
  labelText: string;
  inputType: string;
  placeholderValue?: string;
  errorMsg?: string;
  labelStyles?: string;
}

export interface FormSubmitBtnProps {
  text: string;
  customStyles?: string;
  handleClick?: React.FormEvent<HTMLFormElement>;
  aria: string;
}
