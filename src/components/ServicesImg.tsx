import Image from 'next/image';

import React from 'react';
import { ServicesImgProps } from '@/types';

const ServicesImg: React.FC<ServicesImgProps> = ({
  srcMob,
  srcTab,
  srcDesk,
  call,
}) => {
  return (
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
  );
};

export default ServicesImg;
