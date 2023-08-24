import {
  Header,
  Hero,
  About,
  Services,
  Career,
  Gallery,
  Contacts,
  SwiperTest,
} from '@/sections';

import { MobileMenu } from '@/components';

const Home = () => (
  <main className=" bg-galleryBg">
    <div className="hero responsive relative">
      <Header />
      <Hero />
    </div>

    <About />
    <Services />
    <Career />
    <Gallery />
    <SwiperTest />
    <Contacts />
    <MobileMenu />
  </main>
);

export default Home;
