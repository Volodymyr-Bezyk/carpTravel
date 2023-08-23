'use client';
import React from 'react';
import { Link } from 'react-scroll';

import { menuLinks } from '@/constants';
import { Container, MobileMenuBtn } from '.';

const MobileMenu = () => {
  return (
    <div className="translate-x-full fixed top-0 right-0 w-full h-full flex justify-center py-11 bg-bgMobMenu backdrop-blur-xl  tablet:hidden">
      <Container>
        <MobileMenuBtn
          text="close"
          aria="close mobile menu"
          customStyles="block mb-28 ml-auto"
        />
        <menu className="grid gap-12 place-items-center">
          {menuLinks.map(({ title, href, rel }) => (
            <Link
              key={title}
              to={href}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              rel={rel}
              className="mobileMenuLink"
              aria-label={`link to ${title} section`}
            >
              {title}
            </Link>
          ))}
        </menu>
      </Container>
    </div>
  );
};

export default MobileMenu;
