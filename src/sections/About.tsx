import React from 'react';

import { Section, Container, SectionTitle } from '@/components';
import content from '../content/content.json';

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
            {content.about.textTop.strong}
          </strong>
          {content.about.textTop.simple}
        </p>

        <p className=" strongText mb-10 w-45 tablet:w-220px tablet:mb-0 desktop:w-294px">
          <strong className="opacity-100 font-normal">
            {content.about.textCenter.strong}
          </strong>
          {content.about.textCenter.simple}
        </p>

        <div className="  ml-auto w-45 tablet:order-first tablet:ml-0 tablet:w-56 desktop:order-last desktop:mt-auto desktop:w-296px desktop:translate-y-146px">
          <p className="aboutInfoStrong ">{content.about.addInfo.p1}</p>
          <p className="aboutInfoStrong text-right">
            {content.about.addInfo.p2}
          </p>
          <p className="aboutInfo">{content.about.addInfo.p3}</p>
        </div>
      </div>

      <p className="strongText mt-10 tablet:mt-16 tablet:w-463px tablet:ml-auto desktop:mt-72px desktop:ml-0 desktop:w-606px">
        <strong className="opacity-100 font-normal">
          {content.about.textBottom.strong}
        </strong>
        {content.about.textBottom.simple}
      </p>
    </Container>
  </Section>
);

export default About;
