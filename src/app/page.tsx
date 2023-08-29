'use client';
import ScrollToTop from 'react-scroll-to-top';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../sections/Header'));
const Hero = dynamic(() => import('../sections/Hero'));
const About = dynamic(() => import('../sections/About'));
const Services = dynamic(() => import('../sections/Services'));
const Career = dynamic(() => import('../sections/Career'));
const Gallery = dynamic(() => import('../sections/Gallery'));
const Contacts = dynamic(() => import('../sections/Contacts'));

const Home = () => (
  <div className=" relative">
    <Header />
    <main className="bg-galleryBg relative">
      {/* <div className="hero responsive relative">  </div> */}
      <Hero />
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
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(2, 15, 8, 0.75)',
            color: '#fff',
          },
        }}
      />
    </main>
  </div>
);

export default Home;
