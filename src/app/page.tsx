import Image from 'next/image';

import Img01 from '@/../public/services/01.jpg';
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
                    href="#services"
                    rel="noopener noreferrer nofollow"
                    className=" headerNavLink"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#career"
                    rel="noopener noreferrer nofollow"
                    className=" headerNavLink"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    rel="noopener noreferrer nofollow"
                    className=" headerNavLink"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
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
              <p className=" -mt-4 heroMessage tablet:-mt-5 ">journey</p>
            </div>

            <div className=" tablet:order-first tablet:w-426px tablet:h-full tablet:flex tablet:flex-col tablet:justify-between desktop:w-646px">
              <h1 className=" mb-6 w-72 heroTitle tablet:mb-0 tablet:w-426px  desktop:w-646px  ">
                <strong className=" font-medium">Uncover</strong>{ ' ' }
                Carpathian&rsquo;s Secrets
              </h1>
              <p className=" heroPlaceList mb-6 w-40  tablet:mb-0 tablet:w-72 desktop:w-646px  ">
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
                Bukovel
              </p>
            </div>

            <div className=" tablet:w-230px desktop:w-294px">
              <p className="simpleText mb-6 tablet:mb-7 ">
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
        <div className=" tablet:flex tablet:flex-col tablet:flex-wrap tablet:content-between tablet:h-436px desktop:h-498px">
          <h2 className=" sectionTitle mb-2 tablet:mb-auto tablet:order-first tablet:w-408px tablet:h-3/4 desktop:mb-0 desktop:w-606px desktop:h-full ">
            WHO <strong className=" font-medium">WE ARE</strong>
          </h2>

          <p className=" strongText mb-5 w-45 tablet:w-220px tablet:mb-4 desktop:w-294px desktop:mb-auto desktop:pt-6 ">
            <strong className=" opacity-100 font-normal">
              a team of enthusiasts{ ' ' }
            </strong>
            who are fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p className=" strongText mb-10 w-45 tablet:w-220px tablet:mb-0 desktop:w-294px">
            <strong className="opacity-100 font-normal">We believe </strong>
            that nature has the power to inspire, strengthen character and
            provide new perspectives. Therefore, each of our tours is aimed at
            unlocking your potential, enriching your spiritual world and
            creating unforgettable memories.
          </p>

          <div className="  ml-auto w-45 tablet:order-first tablet:ml-0 tablet:w-56 desktop:order-last desktop:mt-auto desktop:w-296px desktop:translate-y-146px">
            <p className="aboutInfoStrong ">From vacationers</p>
            <p className="aboutInfoStrong text-right">to active travelers</p>
            <p className="aboutInfo">we have a tour for everyone.</p>
          </div>
        </div>

        <p className="strongText mt-10 tablet:mt-16 tablet:w-463px tablet:ml-auto desktop:mt-72px desktop:ml-0 desktop:w-606px">
          <strong className="opacity-100 font-normal"> We use methods </strong>
          that are time-tested and proven. Our expert guides with in-depth
          knowledge of the Carpathian landscapes lead you safely through the
          mysteries of these mountains.
        </p>
      </Container>
    </section>

    {/* ******SERVICES SECTION */ }
    <section
      className=" py-14 services responsive tablet:py-16 desktop:py-104px"
      id="services"
    >
      <Container>
        <div className="tablet:flex tablet:justify-between tablet:mb-9">
          <h2 className="sectionTitle mb-6 tablet:mb-0">
            WE <strong className=" opacity-100 font-medium">OFFER</strong>
          </h2>
          <p className="servicesInfoText mb-4 tablet:pr-14 desktop:pr-368px ">
            <span>01</span>/<span className=" text-secondaryText">05</span>
          </p>
        </div>

        <div className=" tablet:flex tablet:justify-between">
          <Image
            src={ Img01 }
            alt="mountains enternainment"
            width={ 460 }
            height={ 250 }
            className=" tablet:w-463px desktop:w-606px"
          />
          <div className="tablet:w-220px tablet:flex tablet:flex-col desktop:w-606px desktop:h-484px desktop:flex-wrap">
            <p className=" servicesCallText mt-3 mb-6 tablet:mt-0 tablet:mb-8 desktop:w-294px desktop:mb-auto">
              Feel the adrenaline rush
            </p>

            <ul className="grid gap-4 w-44 mb-9 tablet:order-first tablet:mb-6 tablet:w-220px desktop:w-64 desktop:gap-6 desktop:mb-230px ">
              <li>
                <button
                  className="activeService servicesButtonText"
                  type="button"
                >
                  ATVs Traveling
                </button>
              </li>
              <li>
                <button className="servicesButtonText" type="button">
                  Rock climbing
                </button>
              </li>
              <li>
                <button className="servicesButtonText" type="button">
                  Hot air ballooning
                </button>
              </li>
              <li>
                <button className="servicesButtonText" type="button">
                  Skydiving
                </button>
              </li>
              <li>
                <button className="servicesButtonText" type="button">
                  Rafting
                </button>
              </li>
            </ul>

            <p className="opacity-50 text-sm font-extralight leading-5 tablet:text-13 tablet:text-justify desktop:w-294px desktop:text-lg desktop:leading-6">
              Join exciting rafting expeditions on the waterways of the
              Carpathians. Go through challenging waterways and overcome gusty
              waves, feel the adrenaline, and enjoy the incredible views of the
              surrounding mountains.
            </p>
          </div>
        </div>
      </Container>
    </section>

    {/* ***********CAREER SECTION */ }
    <section
      className="  responsive career py-14 tablet:py-16 desktop:pt-104px desktop:pb-4"
      id="career"
    >
      <Container>
        <div className=" tablet:flex tablet:mb-1 desktop:mb-6">
          <h2 className="sectionTitle mb-6 tablet:mb-0 tablet:leading-none desktop:leading-normal">
            CHOOSE <strong className=" font-medium">US</strong>
          </h2>
          <p className="simpleText text-start mb-9 ml-auto w-45 tablet:mb-0 tablet:w-56 tablet:text-13 tablet:leading-5 tablet:text-justify desktop:w-296px desktop:text-lg desktop:leading-6">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
        </div>
        <h3 className="careerSubTitle mb-9 ml-auto w-45 tablet:mb-14 tablet:ml-0 tablet:mr-auto tablet:px-20 tablet:w-auto  desktop:mb-11 desktop:px-32 ">
          WHY US
        </h3>

        <div className=" tablet:flex ">
          <ul className=" mb-28 w-45 text-right tablet:w-220px tablet:mr-5 tablet:mb-0 desktop:w-606px desktop:mr-6 ">
            <li className=" mb-4 tablet:mb-6 desktop:flex desktop:justify-between">
              <h4 className="careerAdvantageName mb-2 desktop:w-294px desktop:mb-0 ">
                Professional development
              </h4>
              <p className=" text-xs font-extralight leading-5 desktop:w-72 desktop:text-left desktop:leading-6">
                We offer growth opportunities and a creative environment to
                nurture your talents.
              </p>
            </li>
            <li className=" mb-4 tablet:mb-6 desktop:flex desktop:justify-between">
              <h4 className="careerAdvantageName mb-2 desktop:w-294px desktop:mb-0">
                Teamwork
              </h4>
              <p className=" text-xs font-extralight leading-5 desktop:w-72 desktop:text-left desktop:leading-6 ">
                Join our close-knit family, where support and inspiration
                abound.
              </p>
            </li>
            <li className=" mb-4 tablet:mb-6 desktop:flex desktop:justify-between">
              <h4 className="careerAdvantageName mb-2 desktop:w-294px desktop:mb-0 ">
                Stimulating work environment
              </h4>
              <p className=" text-xs font-extralight leading-5 desktop:w-72 desktop:text-left desktop:leading-6 ">
                Flexibility and remote options for a comfortable experience.
              </p>
            </li>
            <li className=" desktop:flex desktop:justify-between">
              <h4 className="careerAdvantageName mb-2 desktop:w-294px desktop:mb-0 ">
                Exciting challenges
              </h4>
              <p className=" text-xs font-extralight leading-5 desktop:w-72 desktop:text-left desktop:leading-6 ">
                Unleash your potential through unforgettable projects showcasing
                Carpathian beauty.
              </p>
            </li>
          </ul>

          <form className="tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-408px tablet:w-220px tablet:content-between desktop:h-466px desktop:w-72 desktop:-translate-y-86px">
            <p className="secondaryText ml-auto mb-6 w-45 tablet:ml-0 tablet:mb-7 tablet:w-220px desktop:mb-14px desktop:w-60 ">
              Don&rsquo;t miss your opportunity! Fill out the form right now and
              join our team!
            </p>
            <label className=" relative mb-4 block desktop:mb-6">
              <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                Full name
              </span>
              <input
                className="formInputText px-2 bg-inputBg w-full placeholder:text-opacity-20 text-13 font-extralight leading-6 outline-none desktop:text-xl desktop:leading-6 desktop:py-2px"
                type="text"
                placeholder="John Smith"
              />
              <span className=" error absolute bottom-0 right-0 translate-y-full text-xs font-extralight leading-6 tracking-2.4 text-error flex items-center">
                Invalid name
              </span>
            </label>

            <label className=" relative mb-4 block desktop:mb-6">
              <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                E-mail
              </span>
              <input
                className="formInputText px-2 bg-inputBg w-full placeholder:text-opacity-20 outline-none desktop:py-2px"
                type="email"
                placeholder="johnsmith@email.com"
              />
              <span className=" error absolute bottom-0 right-0 translate-y-full text-xs font-extralight leading-6 tracking-2.4 text-error flex items-center">
                Incorrect email
              </span>
            </label>

            <label className=" mb-4 block desktop:mb-6">
              <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                Position
              </span>
              <input
                className="formInputText px-2 bg-inputBg w-full placeholder:text-opacity-20 outline-none desktop:py-2px"
                type="text"
                placeholder="Movie maker"
              />
            </label>

            <label className=" relative mb-4 block desktop:mb-9">
              <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                Phone
              </span>
              <input
                className="formInputText px-2 bg-inputBg w-full placeholder:text-opacity-20 outline-none desktop:py-2px"
                type="tel"
                placeholder="+ 38 (097) 12 34 567"
              />
              <span className=" error absolute bottom-0 right-0 translate-y-full text-xs font-extralight leading-6 tracking-2.4 text-error flex items-center">
                Incorrect phone
              </span>
            </label>

            <label className=" mb-4 block tablet:ml-5 tablet:w-220px tablet:order-2 tablet:mt-auto tablet:mb-2 desktop:w-294px desktop:mb-8 desktop:ml-6 ">
              <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                Message
              </span>
              <textarea className="formInputText px-2 h-196px resize-none bg-inputBg w-full outline-none tablet:h-230px desktop:py-2px desktop:h-268px" />
            </label>

            <label className=" mb-4 flex tablet:mb-0">
              <input className=" hidden peer" type="checkbox" />
              <span className=" checkboxFrame relative shrink-0 w-22px h-22px border-1 border-white bg-inputBg peer-checked:bg-white transition-colors duration-300"></span>
              <p className=" ml-2 text-xs font-extralight leading-1.83 desktop:leading-6">
                I confirm my consent to the processing of personal data.
              </p>
            </label>

            <button
              className="formButton ml-auto block w-20 tablet:order-2 tablet:w-auto "
              type="submit"
              aria-label="Submit form button"
            >
              send
            </button>
          </form>
        </div>
      </Container>
    </section>

    {/* *****GALLERY */ }
    <section
      className="responsive gallery py-14 tablet:py-16 desktop:py-104px"
      id="gallery"
    >
      <Container>
        <h2 className="sectionTitle mb-6 tablet:mb-72px tablet:text-center tablet:leading-tight desktop:mb-6 desktop:leading-normal desktop:text-left">
          OUR <strong className=" font-medium">GALLERY</strong>
        </h2>
        <ul className=" grid place-items-center gap-6 tablet:grid-flow-col ">
          <li className=" relative  tablet:h-full tablet:col-span-1 tablet:flex tablet:flex-col tablet:justify-center ">
            <div className="relative galleryLayer">
              <Image
                width={ 460 }
                height={ 250 }
                src="https://s3-alpha-sig.figma.com/img/6df7/220e/14fc7939fe2cc296422c5658790ca536?Expires=1693785600&Signature=PVr9OeKF74mUIPZSyIB7q-SzKXaRCWjPaI4AC0XKTQeaJJTLv9Vb4TIA1W4fYIDcKFOHW6aPfiZwlCSnogJ5RDZ3ljF2D0WLgGEjGJzU2NOGm9tsD-dxMALU6XR6haZoge1ukuCVnReSVjArUabOX9Yd3uSsKxsD7oJII94gImU5F4CzqdizDFJ3HXTaTc9bBvmxiXz0YHskt0olKxJUFgIcAj0QcmdS69HyrJdLhrBpJc0hmgbTsqbhbzGWgyxiU8WgWMwl6dGCI9W6Fm1BRO4r1OwlC2lEIJEp5B3coNNgeSBmkCYPx~mEx6sPkQfh1jfjVgM3f3zAoPI~FAZ~lQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Mountains"
                className="tablet:w-120px desktop:w-300px"
              />
            </div>

            <button
              className=" hidden absolute bottom-4 left-0  w-full text-right text-33 font-thin leading-normal tablet:block desktop:bottom-0"
              type="button"
              aria-label="Previous image"
            >
              BACK{ ' ' }
            </button>
          </li>

          <li className=" tablet:col-span-1">
            <div>
              <Image
                width={ 460 }
                height={ 250 }
                src="https://s3-alpha-sig.figma.com/img/e0c0/1047/09e209ca76e04687e2606f05fade702e?Expires=1693785600&Signature=KMiG6lbRDfNzeIhuyQwHdxQv5SGNjy37lSqAt0zwG7le9umiayXcssDwC05ZpfWdJtWjxhmGwylLniZ-VaV2ckaBvzQMVRC4LUQyo30bc-2GrUfAWB-6bV~5WPSD6rqwLD6CyOijsNQ7EcMz5uDvZ~LIKD2n-sYEogkJJd6xpJ-RD9YsyuwoZYGkXDJwsKPN55FGTpVv-LfT6Oy1eNOv82p33TG61kT8fK~dTWj7ldIQ0P75427jQgEBA2K~D2Rs2esnE7dBfL8A7JXDTAuBKMN579l-ax9bNy40cSAZd4wZ8QZ9KmlSbuY5FXSyCO5pDEsl53vi1hqZGXKd~aXJXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Mountains"
                className=" desktop:w-606px desktop:h-436px"
              />
            </div>
          </li>

          <li className=" relative  tablet:h-full tablet:col-span-1 tablet:flex tablet:flex-col tablet:justify-center ">
            <div className="relative galleryLayer">
              <Image
                width={ 460 }
                height={ 250 }
                src="https://s3-alpha-sig.figma.com/img/32ac/5b43/c0109965c0d25370810e123963404844?Expires=1693785600&Signature=XDeG13y04CdJ5tUNmggMtV7vmz9N9VwIHnMoSAfjsRmvIkbwR~meTDSRl~4JTwgPhaSUhGfRjhpSI2~Mxn5pd~kzT4CVQQlvRS2ezU8~F7KF2hS5DSsnF-eFrKr3mfAU4PEiQWK1ELTF-bHujVy~faJKT2oc0nrPTopvoCu9uERefwgrJIvrjT9KNmyyhcJI3qnknHArxMCZsLiAqrH3DgLwa2NCrJz0HRIPkupzUPXWb1rq9Y2a~Zlx5rnYCVuQmUvinyKwOJ0EY528YluDdOEziSF2VLKDzAYfGr0rzVMpgFQaH4Ih5hQXahf5rui~~FFc22Lg6BXKzXAicIxwjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Mountains"
                className=" tablet:w-120px desktop:w-300px"
              />
            </div>
            <button
              className="hidden absolute bottom-4 left-0 w-full text-left text-33 font-thin leading-normal tablet:block desktop:bottom-0"
              type="button"
              aria-label="Next image"
            >
              { ' ' }
              NEXT
            </button>
          </li>
        </ul>
      </Container>
    </section>

    {/* *********FOOTER */ }
    <footer
      className="  responsive footer py-14 tablet:py-16 desktop:py-104px "
      id="footer"
    >
      <Container>
        <h2 className="sectionTitle mb-9 tablet:mb-9 tablet:leading-none desktop:mb-71px desktop:leading-normal ">
          Contact <strong className=" font-medium">US</strong>
        </h2>

        <div className=" desktop:flex desktop:items-start desktop:justify-between">
          <div className=" tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-104px tablet:items-end tablet:content-around tablet:mb-16 desktop:flex-nowrap">
            <div className=" mb-6 flex justify-end items-baseline desktop:mb-16 ">
              <div className=" mr-5">
                <a
                  className=" block text-sm leading-6 tablet:text-base desktop:text-lg desktop:leading-6 hover:text-mainBtnBgHover transition-colors duration-300"
                  href="tel:+380981234567"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  aria-label="phone call"
                >
                  +38 (098) 12 34 567
                </a>
                <a
                  className=" block text-sm leading-6 tablet:text-base desktop:text-lg desktop:leading-6 hover:text-mainBtnBgHover transition-colors duration-300"
                  href="tel:+380731234567"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  aria-label="phone call"
                >
                  +38 (073) 12 34 567
                </a>
              </div>
              <p className=" w-86px text-xs font-extralight leading-5 desktop:leading-6">
                Phone number
              </p>
            </div>

            <div className=" mb-6 flex justify-end items-baseline tablet:mb-0 desktop:mb-32">
              <a
                className="block text-sm leading-6 tablet:text-base desktop:text-lg desktop:leading-6 hover:text-mainBtnBgHover transition-colors duration-300"
                href="mailto:support@carptravel.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
                aria-label="write email"
              >
                support@carptravel.com
              </a>
              <p className=" w-86px ml-5 text-xs font-extralight leading-5 desktop:leading-6">
                E-mail
              </p>
            </div>

            <div className=" mb-3 flex justify-end items-baseline tablet:mb-0 tablet:ml-90px">
              <p className=" mr-5  text-xs font-extralight leading-5 desktop:leading-6 desktop:order-last desktop:w-86px desktop:ml-5 desktop:mr-0">
                Follow us
              </p>
              <ul>
                <li className="w-86px desktop:text-right">
                  <a
                    className="footerSocialLink  "
                    href="/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    aria-label="likt to socials"
                  >
                    facebook
                  </a>
                </li>
                <li className="w-86px desktop:text-right">
                  <a
                    className="footerSocialLink"
                    href="/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    aria-label="likt to socials"
                  >
                    instagram
                  </a>
                </li>
                <li className="w-86px desktop:text-right">
                  <a
                    className="footerSocialLink "
                    href="/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    aria-label="likt to socials"
                  >
                    youtube
                  </a>
                </li>
                <li className="w-86px desktop:text-right">
                  <a
                    className="footerSocialLink "
                    href="/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    aria-label="likt to socials"
                  >
                    tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form className="tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-305px desktop:flex-row desktop:h-auto desktop:w-606px ">
            <label className=" relative mb-6 block tablet:mb-7 tablet:w-56 desktop:w-294px desktop:mb-0 ">
              <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                Full name
              </span>
              <input
                className="formInputText px-2 bg-inputBg w-full placeholder:text-opacity-20 outline-none desktop:py-2px"
                type="text"
                placeholder="John Smith"
              />
              <span className=" error absolute bottom-0 right-0 translate-y-full text-xs font-extralight leading-6 tracking-2.4 text-error flex items-center">
                Invalid name
              </span>
            </label>

            <label className=" relative mb-6 block tablet:w-56 desktop:w-294px desktop:mb-0 desktop:ml-auto ">
              <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                E-mail
              </span>
              <input
                className="formInputText px-2 bg-inputBg w-full placeholder:text-opacity-20 outline-none desktop:py-2px"
                type="email"
                placeholder="johnsmith@email.com"
              />
              <span className=" error absolute bottom-0 right-0 translate-y-full text-xs font-extralight leading-6 tracking-2.4 text-error flex items-center">
                Incorrect email
              </span>
            </label>

            <label className=" mb-4 block tablet:ml-5 tablet:w-463px tablet:h-244px desktop:ml-0 desktop:w-606px desktop:mt-10   ">
              <span className=" mb-1 block text-xs font-extralight leading-6 tracking-2.4">
                Message
              </span>
              <textarea className="formInputText px-2 h-196px resize-none bg-inputBg w-full outline-none tablet:h-220px desktop:py-2px" />
            </label>

            <button
              className="formButton ml-auto block w-20 tablet:w-auto"
              type="submit"
              aria-label="Submit form button"
            >
              send
            </button>
          </form>
        </div>
      </Container>
    </footer>
  </main>
);

export default Home;
