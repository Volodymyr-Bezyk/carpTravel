import Image from 'next/image';

import Container from '@/components/Container';

const Home = () => (
  <main>
    <div className="hero responsive">
      {/* *********HEADER */ }
      <header className=" pt-9 tablet:pt-6">
        <Container>
          <div className="flex justify-between items-center">
            <a href="#hero" rel="noopener noreferrer nofollow">
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
                    href="#about"
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

      {/* ******HERO SECTION */ }
      <section
        className=" pt-9 pb-14 tablet:pt-66px tablet:pb-16 desktop:pt-72px desktop:pb-104px"
        id="hero"
      >
        <Container>
          <div className=" tablet:flex tablet:flex-col tablet:flex-wrap tablet:content-between tablet:h-345px desktop:h-529px ">
            <div className=" mb-6 ml-auto w-72 tablet:mb-auto tablet:ml-0 tablet:w-230px desktop:w-auto">
              <p className=" text-end uppercase text-37 leading-normal tablet:text-67 desktop:text-98 ">
                <span className=" font-medium desktop:mr-2">7</span>
                <span className=" font-thin tracking-1.67 tablet:tracking-8.71">
                  days
                </span>
              </p>
              <p className=" -mt-4 text-right uppercase text-xs font-light leading-normal tracking-9.48 tablet:text-sm tablet:tracking-25.9 tablet:-mt-5 desktop:text-base desktop:leading-normal desktop:tracking-36.48">
                journey
              </p>
            </div>

            <div className=" tablet:order-first tablet:w-426px tablet:h-full tablet:flex tablet:flex-col tablet:justify-between desktop:w-646px">
              <h1 className=" mb-6 w-72 heroTitleMob tablet:mb-0 tablet:w-426px heroTitleTab desktop:w-646px heroTitleDesk ">
                <strong className=" font-medium">Uncover</strong>{ ' ' }
                Carpathian&rsquo;s Secrets
              </h1>
              <p className=" mb-6 w-40 text-10 font-extralight leading-4 tablet:mb-0 tablet:w-72 tablet:text-sm tablet:leading-4 tablet:tracking-1.26 desktop:w-646px desktop:text-base desktop:leading-normal desktop:tracking-1.44">
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
                Bukovel
              </p>
            </div>

            <div className=" tablet:w-230px desktop:w-294px">
              <p className=" mb-6 text-sm font-extralight leading-5 tablet:mb-7 tablet:text-base tablet:leading-tight desktop:text-lg desktop:leading-snug">
                We offer you unforgettable trips to the most beautiful parts of
                the Carpathians. Enjoy stunning views, exciting expeditions, and
                the best service!
              </p>
              <button
                className=" relative w-full h-53px max-w-xs ml-auto mr-auto block px-16 py-4.5 text-lg font-bold leading-none bg-mainBtnBg customHeroButtonBorder hover:bg-mainBtnBgHover focus:bg-mainBtnBgHover transition-colors duration-300 tablet:py-14px tablet:leading-normal desktop:py-4 desktop:text-32 desktop:h-71px"
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

    {/* **********ABOUT SECTION */ }
    <section
      className=" py-14 about responsive tablet:py-16 desktop:py-104px"
      id="about"
    >
      <Container>
        <div className=" tablet:flex tablet:flex-col tablet:flex-wrap tablet:content-between tablet:h-436px desktop:h-474px">
          <h2 className=" mb-2  uppercase text-40 font-thin leading-snug -tracking-1.6 tablet:mb-auto tablet:order-first tablet:w-408px tablet:h-3/4 tablet:text-67 tablet:-tracking-2.68 desktop:mb-0 desktop:w-606px desktop:h-full desktop:text-98 desktop:-tracking-3.92">
            WHO <strong className=" font-medium">WE ARE</strong>
          </h2>

          <p className=" mb-5 w-45 aboutTextMob tablet:w-220px tablet:mb-4 tablet:aboutTextTab desktop:w-294px desktop:mb-auto desktop:pt-6  desktop:text-lg desktop:leading-snug ">
            <strong className=" font-normal">a team of enthusiasts </strong>
            who are fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p className=" mb-10 w-45 aboutTextMob tablet:w-220px tablet:mb-0 tablet:aboutTextTab desktop:w-294px desktop:text-lg desktop:leading-snug">
            <strong className=" font-normal">We believe </strong>
            that nature has the power to inspire, strengthen character and
            provide new perspectives. Therefore, each of our tours is aimed at
            unlocking your potential, enriching your spiritual world and
            creating unforgettable memories.
          </p>

          <div className="  ml-auto w-45 tablet:order-first tablet:ml-0 tablet:w-56 desktop:order-last desktop:mt-auto desktop:w-296px desktop:translate-y-146px">
            <p className=" uppercase text-sm font-normal leading-5 tablet:text-base tablet:leading-tight desktop:text-lg desktop:leading-snug">
              From vacationers
            </p>
            <p className=" uppercase text-right text-sm font-normal leading-5 tablet:text-base tablet:leading-tight desktop:text-lg desktop:leading-snug">
              to active travelers
            </p>
            <p className=" text-sm text-right font-extralight leading-5 -tracking-0.14 tablet:text-base tablet:leading-tight tablet:tracking-0.32 desktop:text-lg desktop:leading-snug desktop:tracking-2.11">
              we have a tour for everyone.
            </p>
          </div>
        </div>

        <p className=" mt-10 aboutTextMob tablet:mt-16 tablet:aboutTextTab tablet:w-463px tablet:ml-auto desktop:mt-72px desktop:ml-0 desktop:w-606px desktop:text-lg desktop:leading-snug">
          <strong className=" font-normal"> We use methods</strong>
          that are time-tested and proven. Our expert guides with in-depth
          knowledge of the Carpathian landscapes lead you safely through the
          mysteries of these mountains.
        </p>
      </Container>
    </section>

    <section className="  responsive career py-14 tablet:py-16" id="career">
      <Container>
        <div className=" tablet:flex tablet:mb-1">
          <h2 className=" mb-6 uppercase text-40 font-thin leading-snug -tracking-1.6 tablet:mb-0 tablet:text-67 tablet:leading-none tablet:-tracking-2.68 ">
            CHOOSE <strong className=" font-medium">US</strong>
          </h2>
          <p className=" mb-9 ml-auto w-45 text-sm font-extralight tablet:mb-0 tablet:w-56 tablet:text-13 tablet:leading-5">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
        </div>
        <h3 className=" mb-9 ml-auto w-45 uppercase text-3xl font-extralight leading-normal tablet:mb-14 tablet:ml-0 tablet:mr-auto tablet:px-20 tablet:w-auto tablet:text-3xl">
          WHY US
        </h3>

        <div className=' tablet:flex '>
          <ul className=" mb-28 w-45 text-right tablet:w-220px tablet:mr-5 tablet:mb-0">
            <li className=" mb-4 tablet:mb-6">
              <h4 className=" mb-2 text-sm tablet:text-base tablet:leading-5">Professional development</h4>
              <p className=" text-xs font-extralight leading-5  ">
                We offer growth opportunities and a creative environment to
                nurture your talents.
              </p>
            </li>
            <li className=" mb-4 tablet:mb-6">
              <h4 className=" mb-2 text-sm tablet:text-base tablet:leading-5">Teamwork</h4>
              <p className=" text-xs font-extralight leading-5 ">
                Join our close-knit family, where support and inspiration abound.
              </p>
            </li>
            <li className=" mb-4 tablet:mb-6">
              <h4 className=" mb-2 text-sm tablet:text-base tablet:leading-5">Stimulating work environment</h4>
              <p className=" text-xs font-extralight leading-5 ">
                Flexibility and remote options for a comfortable experience.
              </p>
            </li>
            <li>
              <h4 className=" mb-2 text-sm tablet:text-base tablet:leading-5">Exciting challenges</h4>
              <p className=" text-xs font-extralight leading-5 ">
                Unleash your potential through unforgettable projects showcasing
                Carpathian beauty.
              </p>
            </li>
          </ul>

          <div className=' tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-96'>
            <p className=" ml-auto mb-6 w-45 text-sm font-extralight tablet:ml-0 tablet:mb-8 tablet:w-220px tablet:text-13 tablet:leading-5">
              Don&rsquo;t miss your opportunity! Fill out the form right now and
              join our team!
            </p>
            <form className=' tablet:w-220px'>
              <label className=" mb-4 block">
                <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                  Full name
                </span>
                <input
                  className=" px-2 bg-inputBg w-full placeholder:text-opacity-20 text-13 font-extralight leading-6 outline-none "
                  type="text"
                  placeholder="John Smith"
                />
              </label>

              <label className=" mb-4 block">
                <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                  E-mail
                </span>
                <input
                  className=" px-2 bg-inputBg w-full placeholder:text-opacity-20 text-13 font-extralight leading-6 outline-none "
                  type="email"
                  placeholder="johnsmith@email.com"
                />
              </label>

              <label className=" mb-4 block">
                <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                  Position
                </span>
                <input
                  className=" px-2 bg-inputBg w-full placeholder:text-opacity-20 text-13 font-extralight leading-6 outline-none "
                  type="text"
                  placeholder="Movie maker"
                />
              </label>

              <label className=" mb-4 block">
                <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                  Phone
                </span>
                <input
                  className=" px-2 bg-inputBg w-full placeholder:text-opacity-20 text-13 font-extralight leading-6 outline-none "
                  type="tel"
                  placeholder="+ 38 (097) 12 34 567"
                />
              </label>

              <label className=" mb-4 block">
                <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                  Message
                </span>
                <textarea className=" px-2 h-196px resize-none bg-inputBg w-full placeholder:text-opacity-20 text-13 font-extralight leading-6 outline-none " />
              </label>

              <label className=" mb-4 flex">
                <input className=" hidden peer" type="checkbox" />
                <span className=" checkboxFrame relative shrink-0 w-22px h-22px border-1 border-white bg-inputBg peer-checked:bg-white transition-colors duration-300"></span>
                <p className=" ml-2 text-xs font-extralight leading-1.83">
                  I confirm my consent to the processing of personal data.
                </p>
              </label>

              <button
                className=" ml-auto block w-20 uppercase text-3xl font-normal leading-normal"
                type="submit"
                aria-label="Submit form button"
              >
                send
              </button>
            </form>
          </div>
        </div>

      </Container>
    </section>
  </main>
);

export default Home;
