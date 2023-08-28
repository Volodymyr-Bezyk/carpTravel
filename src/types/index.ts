export interface SectionProps {
  id: string;
  children: React.ReactNode;
  customStyles?: string;
}

export interface MobileMenuProps {
  mobMenuOpen: boolean;
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MobileMenuBtnProps {
  text: string;
  btnType?: string;
  customStyles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  aria?: string;
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
  aria?: string;
  disabled: boolean;
}

export interface FooterFormDataTypes {
  name: string;
  email: string;
  message: string | undefined;
}

export interface CareerFormDataTypes extends FooterFormDataTypes {
  position: string | undefined;
  tel: string;
  agreement: boolean;
}

export interface ServiceProps {
  order?: number;
  call: string;
  srcMob: string;
  srcTab: string;
  srcDesk: string;
  callPosition?: number;
  desc: string;
  bg?: string;
}

export interface ServiceWithIndexProps {
  service: ServiceProps;
  index: number;
  swiperRef: any;
}

export interface ServicesButtonsListProps {
  index: number;
  swiperRef: any;
}

export interface ServicesImgProps {
  srcMob: string;
  srcTab: string;
  srcDesk: string;
  call: string;
}
