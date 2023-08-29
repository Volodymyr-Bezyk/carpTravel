'use client';

import Image from 'next/image';
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
            className={` relative servicesSlide serviceBgLayer py-14 tablet:py-16 desktop:py-104px w-full h-full`}
          >
            <Image
              src={`/servicesBgDesk${service.order}2x.jpg`}
              alt={`sevices nature img ${service.order}`}
              fill
              sizes=" (min-width: 320px) 100vw, 100vw"
              priority={index === 0 ? true : false}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOU9j5yBAADowHw7R0T9QAAAABJRU5ErkJggg=="
              className=" object-cover "
            />

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
