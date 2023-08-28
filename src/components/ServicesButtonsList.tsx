import React from 'react';

import { serviceBtns } from '@/constants';
import { ServicesButtonsListProps } from '@/types';
import { swipeToSlide } from '@/utils';

const ServicesButtonsList = ({
  index,
  swiperRef,
}: ServicesButtonsListProps) => {
  return (
    <ul className="grid gap-4 w-[185px] mb-9 tablet:order-first tablet:mb-6 tablet:w-220px desktop:w-64 desktop:gap-6 desktop:mb-230px ">
      {serviceBtns.map((option, idx) => (
        <li key={idx}>
          <button
            className={`servicesButtonText ${idx === index && 'activeService'}`}
            type="button"
            onClick={() => swipeToSlide(idx, swiperRef)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServicesButtonsList;
