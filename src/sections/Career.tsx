import React from 'react';

import { advantagesOptions } from '@/constants';
import { Section, Container, SectionTitle, CareerForm } from '@/components';

const Career: React.FC = () => (
  <Section id="career" customStyles="responsive career desktop:pb-4">
    <Container>
      <div className=" tablet:flex tablet:mb-1 desktop:mb-6">
        <SectionTitle
          text="CHOOSE"
          strongText="US"
          customStyles="mb-6 tablet:mb-0 tablet:leading-none desktop:leading-normal"
        />

        <p className="simpleText text-start mb-9 ml-auto w-45 tablet:mb-0 tablet:w-56 tablet:text-13 tablet:leading-5 tablet:text-justify desktop:w-296px desktop:text-lg desktop:leading-6">
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>
      </div>

      <h3 className="careerSubTitle mb-9 ml-auto w-45 tablet:mb-14 tablet:ml-0 tablet:mr-auto tablet:px-20 tablet:w-auto  desktop:mb-11 desktop:px-32 ">
        WHY US
      </h3>

      <div className=" tablet:flex ">
        <ul className=" mb-28 w-45 text-right tablet:w-220px tablet:mr-5 tablet:mb-0 desktop:w-606px desktop:mr-6 ">
          {advantagesOptions.map(({ title, desc }) => (
            <li
              key={title}
              className=" mb-4 tablet:mb-6 desktop:flex desktop:justify-between"
            >
              <h4 className="careerAdvantageName mb-2 desktop:w-294px desktop:mb-0 ">
                {title}
              </h4>
              <p className=" opacity-60 text-xs font-extralight leading-5 desktop:w-72 desktop:text-left desktop:leading-6">
                {desc}
              </p>
            </li>
          ))}
        </ul>

        <CareerForm />
      </div>
    </Container>
  </Section>
);

export default Career;
