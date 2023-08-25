'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, EffectCoverflow } from 'swiper/modules';
import React from 'react';
import Image from 'next/image';

import { Section, SectionTitle } from '@/components';
import { galleryImages, galleryImagesLocal } from '@/constants';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
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

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          initialSlide={0}
          slidesPerView={'auto'}
          slideToClickedSlide={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 350,
            scale: 0.55,
            modifier: window.innerWidth >= 1440 ? 0.8 : 1.32,
          }}
          navigation={{
            nextEl: '.nextSlide',
            prevEl: '.prevSlide',
          }}
          modules={[EffectCoverflow, Navigation, A11y]}
          className=" swiperStyles"
        >
          {galleryImages.map((src, idx) => (
            <SwiperSlide key={idx} className=" gallerySlide">
              <div className=" relative w-[415px] h-[294px] desktop:w-[606px] desktop:h-[430px]">
                <Image
                  src={src}
                  alt={`gallery image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (min-width: 1200px) 70vw, 100vw"
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="  hidden tablet:flex justify-between px-16 absolute w-full bottom-[17px] left-0 z-20 desktop:px-56 desktop:bottom-0 ">
            <button
              className=" prevSlide opacity-50 text-right text-33 font-thin leading-normal tablet:block hover:opacity-100 transition-opacity duration-300"
              type="button"
              aria-label="Previous image"
            >
              BACK
            </button>
            <button
              className=" nextSlide opacity-50 text-left text-33 font-thin leading-normal tablet:block hover:opacity-100 transition-opacity duration-300"
              type="button"
              aria-label="Next image"
            >
              NEXT
            </button>
          </div>
        </Swiper>

        <ul className=" grid px-5 gap-6 tablet:grid-flow-col tablet:hidden ">
          {galleryImagesLocal.map((src, idx) => (
            <li key={idx}>
              <Image
                src={src}
                width={460}
                height={250}
                alt={`gallery image ${idx + 1}`}
                className="shadow-galleryShadow"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default SwiperTest;
