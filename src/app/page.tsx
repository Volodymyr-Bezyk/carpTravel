import Image from 'next/image';

import Container from '@/components/Container';

const Home = () => (
  <main className="">
    <div className="hero responsive">
      <header className=" pt-9">
        <Container>
          <div className="flex justify-between items-center">
            <a>
              <Image
                src="/Logo.svg"
                alt="Company logo"
                width={ 58 }
                height={ 33 }
              />
            </a>
            <button
              className=" uppercase text-sm  leading-normal tracking-widest"
              type="button"
              aria-label="open mobile menu"
            >
              menu
            </button>
          </div>

          <menu>
            <nav></nav>
          </menu>
        </Container>
      </header>

      <section className=" pt-9 pb-14" id="#hero">
        <Container>
          <div className=" mb-6 ml-auto w-72">
            <p className=" text-end uppercase text-37 leading-normal">
              <span className=" font-medium">7</span>
              <span className=" font-thin tracking-1.67">days</span>{ ' ' }
            </p>
            <p className=" -mt-4 text-right uppercase text-xs font-light leading-normal tracking-9.48 ">
              journey
            </p>
          </div>
          <h1 className=" mb-6 w-72 uppercase text-40 font-thin leading-snug -tracking-1.6">
            <strong className=" font-medium">Uncover</strong> Carpathian&rsquo;s
            Secrets
          </h1>
          <p className=" mb-6 w-40 text-10 font-extralight leading-4">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
          <p className=" mb-6 text-sm font-extralight leading-5">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <button
            className=" relative w-full max-w-xs ml-auto mr-auto block px-16 py-4.5 text-lg font-bold leading-none bg-mainBtnBg customButtonBorder hover:bg-mainBtnBgHover focus:bg-mainBtnBgHover transition-colors duration-300 "
            type="button"
            aria-label="Join now button"
          >
            JOIN NOW
          </button>
        </Container>
      </section>
    </div>

    <section className=" py-14 about responsive">
      <Container>
        <h2 className=" mb-2  uppercase text-40 font-thin leading-snug -tracking-1.6">
          WHO <strong className=" font-medium">WE ARE</strong>
        </h2>
        <p className=" mb-5 w-45 aboutText">
          <strong className=" font-normal">a team of enthusiasts </strong>
          who are fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className=" mb-10 w-45 aboutText">
          <strong className=" font-normal">We believe </strong>
          that nature has the power to inspire, strengthen character and provide
          new perspectives. Therefore, each of our tours is aimed at unlocking
          your potential, enriching your spiritual world and creating
          unforgettable memories.
        </p>

        <div className=' mb-10 ml-auto w-45'>
          <p className=' uppercase text-sm font-normal leading-5'>From vacationers</p>
          <p className=' uppercase text-right text-sm font-normal leading-5'>to active travelers</p>
          <p className=' text-sm text-right font-extralight leading-5 -tracking-0.14'>we have a tour for everyone.</p>
        </div>

        <p className=" aboutText">
          <strong className=" font-normal"> We use methods</strong>
          that are time-tested and proven. Our expert guides with
          in-depth knowledge of the Carpathian landscapes lead you safely
          through the mysteries of these mountains.
        </p>
      </Container>
    </section>
  </main>
);

export default Home;
