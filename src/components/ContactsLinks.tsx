import Link from 'next/link';
import React from 'react';
import { socialLinks } from '@/constants';

const ContactsLinks: React.FC = () => (
  <div className=" tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-104px tablet:items-end tablet:content-around tablet:mb-16 desktop:flex-nowrap">
    <div className=" mb-6 flex justify-end items-baseline desktop:mb-16 ">
      <div className=" mr-5">
        <Link
          className=" block text-sm leading-6 tablet:text-base desktop:text-lg desktop:leading-6 hover:text-mainBtnBgHover transition-colors duration-300"
          href="tel:+380981234567"
          target="_blank"
        >
          +38 (098) 12 34 567
        </Link>
        <Link
          className=" block text-sm leading-6 tablet:text-base desktop:text-lg desktop:leading-6 hover:text-mainBtnBgHover transition-colors duration-300"
          href="tel:+380731234567"
          target="_blank"
        >
          +38 (073) 12 34 567
        </Link>
      </div>
      <p className=" opacity-60 w-86px text-xs font-extralight leading-5 desktop:leading-6">
        Phone number
      </p>
    </div>

    <div className=" mb-6 flex justify-end items-baseline tablet:mb-0 desktop:mb-32">
      <Link
        className="block text-sm leading-6 tablet:text-base desktop:text-lg desktop:leading-6 hover:text-mainBtnBgHover transition-colors duration-300"
        href="mailto:support@carptravel.com"
        target="_blank"
      >
        support@carptravel.com
      </Link>
      <p className="opacity-60 w-86px ml-5 text-xs font-extralight leading-5 desktop:leading-6">
        E-mail
      </p>
    </div>

    <div className=" mb-3 flex justify-end items-baseline tablet:mb-0 tablet:ml-90px">
      <p className="opacity-60 mr-5  text-xs font-extralight leading-5 desktop:leading-6 desktop:order-last desktop:w-86px desktop:ml-5 desktop:mr-0">
        Follow us
      </p>
      <ul>
        {socialLinks.map(({ title, src }) => (
          <li key={title} className="w-86px desktop:text-right">
            <Link
              className="contactsSocialLink  "
              href={src}
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ContactsLinks;
