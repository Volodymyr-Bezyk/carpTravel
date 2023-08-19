import Image from 'next/image';

import Container from '@/components/Container';

const Home = () => (
  <main className="">
    <div className="hero responsive">
      <header className=" pt-9 tablet:pt-6">
        <Container>
          <div className="flex justify-between items-center">
            <a href='/' rel='noopener noreferrer nofollow'>
              <Image
                src="/Logo.svg"
                alt="Company logo"
                width={ 58 }
                height={ 33 }
              />
            </a>
            <button
              className=" uppercase text-sm  leading-normal tracking-widest tablet:hidden"
              type="button"
              aria-label="open mobile menu"
            >
              menu
            </button>
            <nav className=" hidden tablet:block" aria-label="Main navigation">
              <ul className=" flex gap-6 desktop:gap-14">
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer nofollow"
                    className=" headerNavLink"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer nofollow"
                    className=" headerNavLink"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer nofollow"
                    className=" headerNavLink"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer nofollow"
                    className=" headerNavLink"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer nofollow"
                    className=" headerNavLink"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>

      <section className=" pt-9 pb-14 tablet:pt-66px tablet:pb-16 desktop:pt-72px desktop:pb-104px" id="#hero">
        <Container>
          <div className=' tablet:flex tablet:flex-col tablet:flex-wrap tablet:content-between tablet:h-345px desktop:h-529px '>
            <div className=" mb-6 ml-auto w-72 tablet:mb-auto tablet:ml-0 tablet:w-230px desktop:w-auto">
              <p className=" text-end uppercase text-37 leading-normal tablet:text-67 desktop:text-98 ">
                <span className=" font-medium desktop:mr-2">7</span>
                <span className=" font-thin tracking-1.67 tablet:tracking-8.71">days</span>
              </p>
              <p className=" -mt-4 text-right uppercase text-xs font-light leading-normal tracking-9.48 tablet:text-sm tablet:tracking-25.9 tablet:-mt-5 desktop:text-base desktop:leading-normal desktop:tracking-36.48">
                journey
              </p>
            </div>


            <div className=' tablet:order-first tablet:w-426px tablet:h-full tablet:flex tablet:flex-col tablet:justify-between desktop:w-646px'>
              <h1 className=" mb-6 w-72 heroTitleMob tablet:mb-0 tablet:w-426px heroTitleTab desktop:w-646px heroTitleDesk ">
                <strong className=" font-medium">Uncover</strong>{ ' ' }
                Carpathian&rsquo;s Secrets
              </h1>
              <p className=" mb-6 w-40 text-10 font-extralight leading-4 tablet:mb-0 tablet:w-72 tablet:text-sm tablet:leading-4 tablet:tracking-1.26" >
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
                Bukovel
              </p>
            </div>

            <div className=' tablet:w-230px'>
              <p className=" mb-6 text-sm font-extralight leading-5 tablet:mb-7 tablet:text-base tablet:leading-tight">
                We offer you unforgettable trips to the most beautiful parts of
                the Carpathians. Enjoy stunning views, exciting expeditions, and
                the best service!
              </p>
              <button
                className=" relative w-full max-w-xs ml-auto mr-auto block px-16 py-4.5 text-lg font-bold leading-none bg-mainBtnBg customHeroButtonBorder hover:bg-mainBtnBgHover focus:bg-mainBtnBgHover transition-colors duration-300 tablet:py-14px tablet:leading-normal"
                type="button"
                aria-label="Join now button"
              >
                JOIN NOW
              </button>
            </div>

          </div>
        </Container>
      </section>
    </div>

    <section className=" py-14 about responsive tablet:py-16">
      <Container>

        <div className=' tablet:flex tablet:flex-col tablet:flex-wrap tablet:content-between tablet:h-436px'>
          <h2 className=" mb-2  uppercase text-40 font-thin leading-snug -tracking-1.6 tablet:mb-12 tablet:order-first tablet:w-408px tablet:h-3/4 tablet:text-67 tablet:-tracking-2.68">
            WHO <strong className=" font-medium">WE ARE</strong>
          </h2>


          <p className=" mb-5 w-45 aboutTextMob tablet:w-220px tablet:mb-4 tablet:aboutTextTab">
            <strong className=" font-normal">a team of enthusiasts </strong>
            who are fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the mountains,
            but to provide you with a deep immersion in their magical atmosphere.
          </p>
          <p className=" mb-10 w-45 aboutTextMob tablet:w-220px tablet:mb-0 tablet:aboutTextTab">
            <strong className=" font-normal">We believe </strong>
            that nature has the power to inspire, strengthen character and provide
            new perspectives. Therefore, each of our tours is aimed at unlocking
            your potential, enriching your spiritual world and creating
            unforgettable memories.
          </p>

          <div className="  ml-auto w-45 tablet:order-first tablet:ml-0 tablet:w-56">
            <p className=" uppercase text-sm font-normal leading-5 tablet:text-base tablet:leading-tight">
              From vacationers
            </p>
            <p className=" uppercase text-right text-sm font-normal leading-5 tablet:text-base tablet:leading-tight">
              to active travelers
            </p>
            <p className=" text-sm text-right font-extralight leading-5 -tracking-0.14 tablet:text-base tablet:leading-tight tablet:tracking-0.32">
              we have a tour for everyone.
            </p>
          </div>

        </div>

        <p className=" mt-10 aboutTextMob tablet:mt-16 tablet:aboutTextTab tablet:w-463px tablet:ml-auto">
          <strong className=" font-normal"> We use methods</strong>
          that are time-tested and proven. Our expert guides with in-depth
          knowledge of the Carpathian landscapes lead you safely through the
          mysteries of these mountains.
        </p>

      </Container>
    </section>
  </main>
);

export default Home;
