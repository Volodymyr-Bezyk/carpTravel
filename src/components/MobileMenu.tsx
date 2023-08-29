'use client';
import { Link } from 'react-scroll';

import React from 'react';

import { MobileMenuProps } from '@/types';
import { menuLinks } from '@/constants';
import { Container, MobileMenuBtn } from '.';

const MobileMenu = ({ mobMenuOpen, handleClick }: MobileMenuProps) => {
  return (
    <div
      className={` centeredMobileMenu responsive  ${
        !mobMenuOpen && 'translate-x-full'
      }  flex justify-center py-11 bg-bgMobMenu backdrop-blur-xl  tablet:hidden transition-all duration-300 `}
    >
      <Container>
        <MobileMenuBtn
          text="close"
          customStyles="block mb-28 ml-auto"
          handleClick={() => handleClick(false)}
        />
        <ul className="grid gap-12 place-items-center ">
          {menuLinks.map(({ title, href }) => (
            <li key={title}>
              <Link
                to={href}
                href="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="mobileMenuLink"
                onClick={() => handleClick(false)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default MobileMenu;
