'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

import { menuLinks } from '@/constants';
import { Container, MobileMenuBtn } from '@/components';

const Header = () => {
  return (
    <header className=" pt-9 tablet:pt-6">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="hero"
            rel="noopener noreferrer nofollow"
          >
            <Image src="/Logo.svg" alt="Company logo" width={58} height={33} />
          </Link>

          <MobileMenuBtn
            text="menu"
            aria="open mobile menu"
            customStyles="tablet:hidden"
          />

          <nav className=" hidden tablet:block" aria-label="Main navigation">
            <ul className=" flex gap-6 desktop:gap-14">
              {menuLinks.map(({ title, href, rel }) => (
                <li key={title}>
                  <Link
                    to={href}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    rel={rel}
                    className="headerNavLink"
                    aria-label={`link to ${title} section`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
