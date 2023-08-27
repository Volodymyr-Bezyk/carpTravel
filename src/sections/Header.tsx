'use client';
import { Link } from 'react-scroll';

import Image from 'next/image';
import React, { useState } from 'react';

import { menuLinks } from '@/constants';
import { Container, MobileMenuBtn, MobileMenu } from '@/components';

const Header: React.FC = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

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
            aria-label="scroll to hero section"
            className=" cursor-pointer"
          >
            <Image src="/Logo.svg" alt="Company logo" width={58} height={33} />
          </Link>
          <MobileMenuBtn
            text="menu"
            aria="open mobile menu"
            customStyles="tablet:hidden"
            handleClick={() => setMobMenuOpen(true)}
          />

          <MobileMenu mobMenuOpen={mobMenuOpen} handleClick={setMobMenuOpen} />
          <nav className=" hidden tablet:block">
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
                    aria-label={`${title} link. Scroll to ${title} section`}
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
