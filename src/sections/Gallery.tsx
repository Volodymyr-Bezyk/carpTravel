import React from 'react';

import {
  Section,
  SectionTitle,
  GallerySlider,
  GalleryMobileList,
} from '@/components';

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" customStyles="responsive gallery">
      <div className="w-full md:max-w-480 tablet:max-w-screen-tablet desktop:max-w-screen-desktop desktop:px-20">
        <SectionTitle
          text="OUR "
          strongText="GALLERY"
          customStyles="mb-6 tablet:mb-72px tablet:text-center tablet:leading-tight desktop:mb-6 desktop:leading-normal desktop:text-left px-5 tablet:px-8 desktop:px-[24px]"
        />

        <GallerySlider />
        <GalleryMobileList />
      </div>
    </Section>
  );
};

export default Gallery;
