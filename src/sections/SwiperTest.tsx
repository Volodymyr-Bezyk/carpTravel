'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  A11y,
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectFade,
} from 'swiper/modules';

import { Section, Container, SectionTitle } from '@/components';
import { galleryImages, galleryImagesLocal } from '@/constants';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperTest = () => {
  return (
    <Section id="gallery" customStyles="responsive gallery">
      <div className="w-full md:max-w-480 tablet:max-w-screen-tablet desktop:max-w-screen-desktop desktop:px-20">
        <SectionTitle
          text="OUR "
          strongText="GALLERY"
          customStyles="mb-6 tablet:mb-72px tablet:text-center tablet:leading-tight desktop:mb-6 desktop:leading-normal desktop:text-left px-5 tablet:px-8 desktop:px-[24px]"
        />
        {/* <Swiper
          tag="div"
          className=""
          loop={true}
          spaceBetween={20}
          modules={[EffectCoverflow, Navigation, A11y]}
          effect={'fade'}
          coverflowEffect={
            {
              // rotate: 90,
              // stretch: 0,
              // depth: 100,
              // modifier: 2.5,
              // slideShadows: true,
            }
          }
          // slidesPerView={3}
          centeredSlides={true}
        > */}

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // spaceBetween={20}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 350,
            scale: 0.55,
            modifier: 0.8,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          // navigation={{
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // }}
          modules={[EffectCoverflow, EffectFade, Pagination, Navigation]}
          className=""
        >
          {galleryImages.map((src, idx) => (
            <SwiperSlide key={idx} className=" gallerySlide">
              {/* <div className=" relative h-[225px] w-[312px] overflow-hidden "> */}
              <div className=" w-[606px]  h-[430px]">
                <Image
                  src={src}
                  alt={`gallery image ${idx + 1}`}
                  // width={606}
                  // height={430}
                  fill
                  className=" object-cover"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>
    </Section>
  );
};

export default SwiperTest;
