'use client';
// import ScrollToTop from 'react-scroll-to-top';
import { Link } from 'react-scroll';

import React from 'react';

import { MobileMenuProps } from '@/types';
import { menuLinks } from '@/constants';
import { Container, MobileMenuBtn } from '.';

const MobileMenu = ({ mobMenuOpen, handleClick }: MobileMenuProps) => {
  return (
    <>
      <div
        className={` centeredMobileMenu responsive  ${
          !mobMenuOpen && 'translate-x-full'
        }  flex justify-center py-11 bg-bgMobMenu backdrop-blur-xl  tablet:hidden transition-all duration-300 `}
      >
        <Container>
          <MobileMenuBtn
            text="close"
            aria="close mobile menu"
            customStyles="block mb-28 ml-auto"
            handleClick={() => handleClick(false)}
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
                onClick={() => handleClick(false)}
              >
                {title}
              </Link>
            ))}
          </menu>
        </Container>
        {/* <ScrollToTop smooth component={<p style={{ color: 'blue' }}>UP</p>} /> */}
      </div>
    </>
  );
};

export default MobileMenu;
