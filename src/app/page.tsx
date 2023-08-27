'use client';
import ScrollToTop from 'react-scroll-to-top';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../sections/Header'));
const Hero = dynamic(() => import('../sections/Hero'));
const About = dynamic(() => import('../sections/About'));
const Services = dynamic(() => import('../sections/Services'));
const Career = dynamic(() => import('../sections/Career'));
const Gallery = dynamic(() => import('../sections/Gallery'));
const Contacts = dynamic(() => import('../sections/Contacts'));

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
    <ScrollToTop
      smooth
      component={<span aria-label="Scroll to top of the page">UP</span>}
      className="scrollUp"
    />
  </main>
);

export default Home;
