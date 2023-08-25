'use client';

import { useWindowSize } from '@uidotdev/usehooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { GallerySliderButtons } from '.';
import { galleryImages } from '@/constants';

const GallerySlider = () => {
  const { width } = useWindowSize();
  const swiperRef: any = useRef(null);

  useEffect(() => {
    if (width !== null && width >= 1440 && swiperRef.current) {
      swiperRef.current.swiper.params.coverflowEffect.modifier = 0.8;
    }
    if (width !== null && width < 1440 && swiperRef.current) {
      swiperRef.current.swiper.params.coverflowEffect.modifier = 1.32;
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
      slideToClickedSlide={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 350,
        scale: 0.55,
        modifier: 1.32,
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
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}

      <GallerySliderButtons />
    </Swiper>
  );
};

export default GallerySlider;
