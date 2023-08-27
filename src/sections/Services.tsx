'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import React, { useRef } from 'react';

import { servicesInfo } from '@/constants';
import { Section, ServicesSwiperSlide } from '@/components';

const Services: React.FC = () => {
  const swiperRef: any = useRef<typeof Swiper | null>(null);

  return (
    <Section
      customStyles=" responsive py-0 tablet:py-0 desktop:py-0 "
      id="services"
    >
      <Swiper
        tag="div"
        className=""
        modules={[EffectFade, A11y]}
        effect={'fade'}
        slidesPerView={1}
        ref={swiperRef}
      >
        {servicesInfo.map((service, index) => (
          <SwiperSlide
            key={index}
            className={`servicesBg${service.order} servicesSlide py-14 tablet:py-16 desktop:py-104px w-full h-full`}
          >
            <ServicesSwiperSlide
              service={service}
              index={index}
              swiperRef={swiperRef}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Services;
