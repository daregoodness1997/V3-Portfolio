import React, { useEffect } from 'react';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
  Projects,
  StarsCanvas,
  Tech,
} from '../components';
import Layout from '../layout';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <Tech />
      <Projects />
      <Experience />
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;
