'use client';
import React from 'react';
import Image from 'next/image';

import Img01 from '@/../public/services/01.jpg';
import { Section, Container, SectionTitle } from '@/components';

const Services = () => (
  <Section id="services" customStyles="services responsive">
    <Container>
      <div className="tablet:flex tablet:justify-between tablet:mb-9">
        <SectionTitle
          text="WE "
          strongText="OFFER"
          customStyles="mb-6 tablet:mb-0"
        />

        <p className="servicesInfoText mb-4 tablet:pr-14 desktop:pr-368px ">
          <span>01</span>/<span className=" text-secondaryText">05</span>
        </p>
      </div>

      <div className=" tablet:flex tablet:justify-between">
        <Image
          src={Img01}
          alt="mountains enternainment"
          width={460}
          height={250}
          className=" tablet:w-463px desktop:w-606px"
        />
        <div className="tablet:w-220px tablet:flex tablet:flex-col desktop:w-606px desktop:h-484px desktop:flex-wrap">
          <p className=" servicesCallText mt-3 mb-6 tablet:mt-0 tablet:mb-8 desktop:w-294px desktop:mb-auto">
            Feel the adrenaline rush
          </p>

          <ul className="grid gap-4 w-44 mb-9 tablet:order-first tablet:mb-6 tablet:w-220px desktop:w-64 desktop:gap-6 desktop:mb-230px ">
            <li>
              <button
                className="activeService servicesButtonText"
                type="button"
              >
                ATVs Traveling
              </button>
            </li>
            <li>
              <button className="servicesButtonText" type="button">
                Rock climbing
              </button>
            </li>
            <li>
              <button className="servicesButtonText" type="button">
                Hot air ballooning
              </button>
            </li>
            <li>
              <button className="servicesButtonText" type="button">
                Skydiving
              </button>
            </li>
            <li>
              <button className="servicesButtonText" type="button">
                Rafting
              </button>
            </li>
          </ul>

          <p className="opacity-50 text-sm font-extralight leading-5 tablet:text-13 tablet:text-justify desktop:w-294px desktop:text-lg desktop:leading-6">
            Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome gusty
            waves, feel the adrenaline, and enjoy the incredible views of the
            surrounding mountains.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

export default Services;
