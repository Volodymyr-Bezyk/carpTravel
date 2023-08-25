import Image from 'next/image';
import React from 'react';

import { Container, SectionTitle, ServicesButtonsList, ServicesImg } from '.';
import { servicesInfo } from '@/constants';
import { formatNumberWithLeadingZero, swipeToSlide } from '@/utils';
import { ServiceProps } from '@/types';

interface ServiceWithIndexProps {
  service: ServiceProps;
  index: number;
  swiperRef: any;
}
const ServicesSwiperSlide: React.FC<ServiceWithIndexProps> = ({
  service: { order, call, srcMob, srcTab, srcDesk, desc },
  index,
  swiperRef,
}) => {
  return (
    <Container>
      <div className="tablet:flex tablet:justify-between tablet:mb-9">
        <SectionTitle
          text="WE "
          strongText="OFFER"
          customStyles="mb-6 tablet:mb-0"
        />

        <p className="servicesInfoText mb-4 tablet:pr-14 desktop:pr-368px ">
          <span>{formatNumberWithLeadingZero(index)}</span>/
          <span className=" text-secondaryText">
            {formatNumberWithLeadingZero(servicesInfo.length - 1)}
          </span>
        </p>
      </div>

      <div className=" tablet:flex tablet:h-[393px]  tablet:justify-between desktop:h-auto">
        <ServicesImg
          srcMob={srcMob}
          srcTab={srcTab}
          srcDesk={srcDesk}
          call={call}
        />
        <div className=" sm:h-[394px] md:h-[354px] tablet:h-auto tablet:w-220px tablet:flex tablet:flex-col desktop:w-606px desktop:h-484px desktop:flex-wrap desktop:relative">
          <p
            className={`servicesCallText mt-3 mb-6 tablet:mt-0 tablet:mb-8 desktop:mb-0 desktop:w-294px desktop:absolute desktop:left-72 top-0 `}
          >
            {call}
          </p>

          <ServicesButtonsList index={index} swiperRef={swiperRef} />
          <p className="opacity-50 text-sm font-extralight leading-5 tablet:text-13 tablet:text-justify desktop:mt-auto desktop:w-294px desktop:text-lg desktop:leading-6">
            {desc}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ServicesSwiperSlide;