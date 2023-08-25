'use client';
import ScrollToTop from 'react-scroll-to-top';

import {
  Header,
  Hero,
  About,
  Services,
  Career,
  Gallery,
  Contacts,
} from '@/sections';

const Home = () => (
  <main className="bg-galleryBg relative">
    <div className="hero responsive relative">
      <Header />
      <Hero />
    </div>

    <About />
    <Services />
    <Career />
    <Gallery />
    <Contacts />
    <ScrollToTop smooth component={<span>UP</span>} className="scrollUp" />
  </main>
);

export default Home;
