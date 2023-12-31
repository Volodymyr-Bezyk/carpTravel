'use client';

import { useWindowSize } from '@uidotdev/usehooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { galleryImagesLocal } from '@/constants';
import { GallerySliderButtons } from '.';

const GallerySlider: React.FC = () => {
  const { width } = useWindowSize();
  const swiperRef: any = useRef<typeof Swiper | null>(null);

  useEffect(() => {
    if (width !== null && width >= 1440 && swiperRef.current) {
      swiperRef.current.swiper.params.coverflowEffect.modifier = 0.8;
      swiperRef.current.swiper.update();
    }
    if (width !== null && width < 1440 && swiperRef.current) {
      swiperRef.current.swiper.params.coverflowEffect.modifier = 1.32;
      swiperRef.current.swiper.update();
    }
  }, [width]);

  return (
    <Swiper
      ref={swiperRef}
      updateOnWindowResize={true}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      initialSlide={0}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 350,
        scale: 0.55,
        modifier: width !== null && width >= 1440 ? 0.8 : 1.32,
      }}
      navigation={{
        nextEl: '.nextSlide',
        prevEl: '.prevSlide',
      }}
      modules={[EffectCoverflow, Navigation, A11y]}
      className=" swiperStyles"
    >
      {galleryImagesLocal.map((src, idx) => (
        <SwiperSlide key={idx} className=" gallerySlide z-10">
          <div className=" relative w-[415px] h-[294px] desktop:w-[606px] desktop:h-[430px]">
            <Image
              src={src}
              alt={`gallery image with nature number ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 1440px) 70vw, 100vw"
              priority={idx <= 2 ? true : false}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOU9j5yBAADowHw7R0T9QAAAABJRU5ErkJggg=="
            />
          </div>
        </SwiperSlide>
      ))}

      <GallerySliderButtons />
    </Swiper>
  );
};

export default GallerySlider;
