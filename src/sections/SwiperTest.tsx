'use client';
import React from 'react';
import { useState, useRef } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import { servicesInfo, serviceBtns } from '@/constants';
import { formatNumberWithLeadingZero } from '@/utils';

SwiperCore.use([Navigation]);
import 'swiper/css';

import { Section, Container, SectionTitle } from '@/components';

interface SwiperRefType {
  swiper?: typeof Swiper;
}

const SwiperTest = () => {
  const swiperRef: any = useRef(null);

  const swipeToSlide = (idx: number, swiperRef: any) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(idx, 300);
    }
  };

  return (
    <section className=" responsive relative" id="#services">
      <Swiper
        tag="div"
        className=""
        modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
        effect={'fade'}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        ref={swiperRef}
      >
        {servicesInfo.map(({ order, call, srcMob, srcDesk, desc }, index) => (
          <SwiperSlide
            key={index}
            className={`servicesBg${order} py-14 tablet:py-16 desktop:py-104px w-full h-full`}
          >
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
                <div className=" min-w-[260px] mwx-w-[440px] h-auto tablet:w-[463px] tablet:h-[370px] desktop:w-[607px] desktop:h-auto">
                  <Image
                    src={srcDesk}
                    alt={call}
                    width={610}
                    height={430}
                    className="object-cover"
                  />
                </div>
                <div className=" sm:h-[394px] md:h-[354px] tablet:h-auto tablet:w-220px tablet:flex tablet:flex-col desktop:w-606px desktop:h-484px desktop:flex-wrap desktop:relative">
                  <p
                    className={`servicesCallText mt-3 mb-6 tablet:mt-0 tablet:mb-8 desktop:mb-0 desktop:w-294px desktop:absolute desktop:left-72 top-0 `}
                  >
                    {call}
                  </p>

                  <ul className="grid gap-4 w-[185px] mb-9 tablet:order-first tablet:mb-6 tablet:w-220px desktop:w-64 desktop:gap-6 desktop:mb-230px ">
                    {serviceBtns.map((option, idx) => (
                      <li key={idx}>
                        <button
                          className={`servicesButtonText ${
                            idx === index && 'activeService'
                          }`}
                          type="button"
                          onClick={() => swipeToSlide(idx, swiperRef)}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <p className="opacity-50 text-sm font-extralight leading-5 tablet:text-13 tablet:text-justify desktop:mt-auto desktop:w-294px desktop:text-lg desktop:leading-6">
                    {desc}
                  </p>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperTest;

// SwiperCore.use([Navigation]);
//     <Swiper navigation>
//       <SwiperSlide>{/* Content for Slide 1 */}</SwiperSlide>
//       <SwiperSlide>{/* Content for Slide 2 */}</SwiperSlide>
//     </Swiper>;
