import React from 'react';
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
  return (
    <Layout isIndex={true}>
      <About />
      <Tech />
      <Projects />
      <Experience />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </Layout>
  );
};

export default Home;
