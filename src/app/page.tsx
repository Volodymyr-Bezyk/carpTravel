import {
  Header,
  Hero,
  About,
  Services,
  Career,
  Gallery,
  Contacts,
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
    <Career />
    <Gallery />
    <Contacts />
    <MobileMenu />
  </main>
);

export default Home;
