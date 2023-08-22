import { MouseEventHandler } from 'react';

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
  err?: string;
  field?: object;
}

export interface FormSubmitBtnProps {
  text: string;
  customStyles?: string;
  handleClick?: React.FormEvent<HTMLFormElement>;
  aria: string;
  disabled: boolean;
}

export interface FooterFormDataTypes {
  name: string;
  email: string;
  message: string | undefined;
}

export interface CareerFormDataTypes extends FooterFormDataTypes {
  position: string;
  tel: string;
  agreement: string;
}
