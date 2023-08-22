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
