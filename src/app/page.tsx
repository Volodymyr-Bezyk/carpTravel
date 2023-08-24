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
  <main>
    <div className="hero responsive relative">
      <Header />
      <Hero />
    </div>

    <About />
    <Services />
    <SwiperTest />
    <Career />
    <Gallery />
    <Contacts />
    <MobileMenu />
  </main>
);

export default Home;
