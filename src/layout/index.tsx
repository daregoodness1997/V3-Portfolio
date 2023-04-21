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
interface Props {
  isIndex?: boolean;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ isIndex, children }) => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        {isIndex && <Hero />}
      </div>
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
