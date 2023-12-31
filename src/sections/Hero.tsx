'use client';
import { Link } from 'react-scroll';

import React from 'react';
import { Section, Container } from '@/components';
import content from '../content/content.json';

const Hero: React.FC = () => (
  <Section
    id="hero"
    customStyles="hero responsive relative pt-[105px] pb-14 tablet:pt-[123px] tablet:pb-16 desktop:pt-[129px] desktop:pb-104px"
  >
    <Container>
      <div className=" tablet:flex tablet:flex-col tablet:flex-wrap tablet:content-between tablet:h-345px desktop:h-529px ">
        <div className=" mb-6 ml-auto w-72 tablet:mb-auto tablet:ml-0 tablet:w-230px desktop:w-auto">
          <p className=" text-end uppercase text-37 leading-normal tablet:text-67 desktop:text-98 ">
            <span className=" font-medium desktop:mr-2">7</span>
            <span className=" font-thin tracking-1.67 tablet:tracking-8.71">
              days
            </span>
          </p>
          <p className=" -mt-4 heroMessage tablet:-mt-5 ">journey</p>
        </div>

        <div className=" tablet:order-first tablet:w-426px tablet:h-full tablet:flex tablet:flex-col tablet:justify-between desktop:w-646px">
          <h1 className=" mb-6 w-72 heroTitle tablet:mb-0 tablet:w-426px  desktop:w-646px  ">
            <strong className=" font-medium">
              {content.hero.title.strong}
            </strong>
            {content.hero.title.simple}
          </h1>
          <p className=" heroPlaceList mb-6 w-40  tablet:mb-0 tablet:w-72 desktop:w-646px  ">
            {content.hero.placeList}
          </p>
        </div>

        <div className=" tablet:w-230px desktop:w-294px">
          <p className="simpleText mb-6 tablet:mb-7 ">{content.hero.text}</p>
          <Link
            className=" cursor-pointer relative w-full h-53px max-w-xs ml-auto mr-auto block px-16 py-4.5 text-center text-lg font-bold leading-none bg-mainBtnBg customHeroButtonBorder hover:bg-mainBtnBgHover focus:bg-mainBtnBgHover transition-colors duration-300 tablet:py-14px tablet:leading-normal desktop:py-4 desktop:text-32 desktop:h-71px"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="contacts"
            href="/"
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </Container>
  </Section>
);

export default Hero;
