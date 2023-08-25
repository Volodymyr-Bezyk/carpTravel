import React from 'react';

import { Container, SectionTitle, FooterLinks, FooterForm } from '@/components';

const Contacts: React.FC = () => (
  <footer
    className="  responsive footer py-14 tablet:py-16 desktop:py-104px "
    id="contacts"
  >
    <Container>
      <SectionTitle
        text="Contact"
        strongText="US"
        customStyles="mb-9 tablet:mb-9 tablet:leading-none desktop:mb-71px desktop:leading-normal"
      />

      <div className=" desktop:flex desktop:items-start desktop:justify-between">
        <FooterLinks />
        <FooterForm />
      </div>
    </Container>
  </footer>
);

export default Contacts;
