import Image from 'next/image';

import React from 'react';
import { ServicesImgProps } from '@/types';

const ServicesImg = ({ srcMob, srcTab, srcDesk, call }: ServicesImgProps) => {
  return (
    <div className=" relative w-full mwx-w-[440px] aspect-mob tablet:w-[463px] tablet:h-[370px] desktop:w-[607px] desktop:h-[429px]">
      <Image
        src={srcDesk}
        alt={`Image of service with call text ${call}`}
        fill
        sizes=" (min-width: 1440px) 70vw, (min-width: 768px) 80vw, 75vw"
        priority={true}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOU9j5yBAADowHw7R0T9QAAAABJRU5ErkJggg=="
        className="object-cover"
      />
    </div>
  );
};

export default ServicesImg;
