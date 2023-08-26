import Image from 'next/image';

import React from 'react';
import { ServicesImgProps } from '@/types';

const ServicesImg = ({ srcMob, srcTab, srcDesk, call }: ServicesImgProps) => {
  return (
    <div className=" relative min-w-[260px] mwx-w-[440px] h-auto tablet:w-[463px] tablet:h-[370px] desktop:w-[607px] desktop:h-auto">
      <picture>
        <source srcSet={srcDesk} media="(min-width: 1440px)" />
        <source srcSet={srcTab} media="(min-width: 768px)" />
        <source srcSet={srcMob} media="(max-width: 767px)" />
        <Image
          src={srcDesk}
          alt={call}
          width={610}
          height={430}
          loading="lazy"
          className="object-cover"
        />
      </picture>
    </div>
  );
};

export default ServicesImg;
