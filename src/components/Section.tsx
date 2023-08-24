import React from 'react';

import { SectionProps } from '@/types';

const Section = ({ children, id, customStyles }: SectionProps) => (
  <section className={`section ${customStyles}`} id={id}>
    {children}
  </section>
);

export default Section;
