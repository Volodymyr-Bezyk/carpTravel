import React from 'react';

import { SectionTitleProps } from '@/types';

const SectionTitle = ({
  text,
  strongText,
  customStyles,
}: SectionTitleProps) => (
  <h2 className={`sectionTitle ${customStyles}`}>
    {text} <strong className=" font-medium">{strongText}</strong>
  </h2>
);

export default SectionTitle;
