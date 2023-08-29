'use client';
import { Link } from 'react-scroll';

import Image from 'next/image';
import React, { useState } from 'react';

import { menuLinks } from '@/constants';
import { Container, MobileMenuBtn, MobileMenu } from '@/components';

const Header: React.FC = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  return (
    <>
      <header className=" responsive absolute w-full top-0 left-1/2 -translate-x-1/2 z-[1] pt-9 tablet:pt-6">
        <Container>
          <div className="flex justify-between items-center">
            <Link
              to="hero"
              href="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              aria-label="Company logo. Scroll to hero section"
              className=" cursor-pointer"
            >
              <Image
                src="/Logo.svg"
                alt="Company logo"
                width={58}
                height={33}
              />
            </Link>
            <MobileMenuBtn
              text="menu"
              customStyles="tablet:hidden"
              handleClick={() => setMobMenuOpen(true)}
            />

            <nav className=" hidden tablet:block">
              <ul className=" flex gap-6 desktop:gap-14">
                {menuLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      to={href}
                      href="/"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="headerNavLink"
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
      <MobileMenu mobMenuOpen={mobMenuOpen} handleClick={setMobMenuOpen} />
    </>
  );
};

export default Header;
