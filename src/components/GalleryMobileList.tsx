import Image from 'next/image';
import React from 'react';

import { galleryImagesLocal } from '@/constants';

const GalleryMobileList: React.FC = () => {
  return (
    <ul className=" grid px-5 gap-6 tablet:hidden ">
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
  );
};

export default GalleryMobileList;
