import React from 'react';
import { Footer, Navbar } from '../components';
import { AnimatePresence } from 'framer-motion';
interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AnimatePresence mode='wait'>
      <div className='relative z-0 bg-primary'>
        <Navbar />

        {children}

        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
