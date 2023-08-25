import React from 'react';

import { Section, Container, SectionTitle } from '@/components';

const About: React.FC = () => (
  <Section id="about" customStyles="about responsive">
    <Container>
      <div className=" tablet:flex tablet:flex-col tablet:flex-wrap tablet:content-between tablet:h-436px desktop:h-498px">
        <SectionTitle
          text=" WHO"
          strongText="WE ARE"
          customStyles="mb-2 tablet:mb-auto tablet:order-first tablet:w-408px tablet:h-3/4 desktop:mb-0 desktop:w-606px desktop:h-full"
        />

        <p className=" strongText mb-5 w-45 tablet:w-220px tablet:mb-4 desktop:w-294px desktop:mb-auto desktop:pt-6 ">
          <strong className=" opacity-100 font-normal">
            a team of enthusiasts{' '}
          </strong>
          who are fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>

        <p className=" strongText mb-10 w-45 tablet:w-220px tablet:mb-0 desktop:w-294px">
          <strong className="opacity-100 font-normal">We believe </strong>
          that nature has the power to inspire, strengthen character and provide
          new perspectives. Therefore, each of our tours is aimed at unlocking
          your potential, enriching your spiritual world and creating
          unforgettable memories.
        </p>

        <div className="  ml-auto w-45 tablet:order-first tablet:ml-0 tablet:w-56 desktop:order-last desktop:mt-auto desktop:w-296px desktop:translate-y-146px">
          <p className="aboutInfoStrong ">From vacationers</p>
          <p className="aboutInfoStrong text-right">to active travelers</p>
          <p className="aboutInfo">we have a tour for everyone.</p>
        </div>
      </div>

      <p className="strongText mt-10 tablet:mt-16 tablet:w-463px tablet:ml-auto desktop:mt-72px desktop:ml-0 desktop:w-606px">
        <strong className="opacity-100 font-normal"> We use methods </strong>
        that are time-tested and proven. Our expert guides with in-depth
        knowledge of the Carpathian landscapes lead you safely through the
        mysteries of these mountains.
      </p>
    </Container>
  </Section>
);

export default About;
