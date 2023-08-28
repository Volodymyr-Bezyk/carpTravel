import React from 'react';

import {
  Section,
  Container,
  SectionTitle,
  ContactsLinks,
  ContactsForm,
} from '@/components';

const Contacts: React.FC = () => (
  <Section customStyles="responsive contacts" id="contacts">
    <Container>
      <SectionTitle
        text="Contact"
        strongText="US"
        customStyles="mb-9 tablet:mb-9 tablet:leading-none desktop:mb-71px desktop:leading-normal"
      />

      <div className=" desktop:flex desktop:items-start desktop:justify-between">
        <ContactsLinks />
        <ContactsForm />
      </div>
    </Container>
  </Section>
);

export default Contacts;
