'use client';
import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { servicesInfo, serviceBtns } from '@/constants';
import { formatNumberWithLeadingZero } from '@/utils';
import { Section, Container, SectionTitle } from '@/components';

const Services = () => {
  const swiperRef: any = useRef(null);

  const swipeToSlide = (idx: number, swiperRef: any) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(idx, 300);
    }
  };

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
        {servicesInfo.map(
          ({ order, call, srcMob, srcTab, srcDesk, desc }, index) => (
            <SwiperSlide
              key={index}
              className={`servicesBg${order} servicesSlide py-14 tablet:py-16 desktop:py-104px w-full h-full`}
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
                  <div className=" relative min-w-[260px] mwx-w-[440px] h-auto tablet:w-[463px] tablet:h-[370px] desktop:w-[607px] desktop:h-auto">
                    <picture>
                      <source srcSet={srcDesk} media="(min-width: 1280px)" />
                      <source srcSet={srcTab} media="(min-width: 320px)" />
                      <source srcSet={srcMob} media="(max-width: 319px)" />
                      <Image
                        src={srcDesk}
                        alt={call}
                        width={610}
                        height={430}
                        className="object-cover"
                      />
                    </picture>
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
          )
        )}
      </Swiper>
    </Section>
  );
};

export default Services;
