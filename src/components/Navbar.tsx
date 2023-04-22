import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Button } from './core';
import { slideAnimation } from '../lib/utils/motion';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  return (
    <AnimatePresence mode='wait'>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 bg-[transparent] backdrop-blur-md`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <motion.div
            {...slideAnimation('left')}
            className='flex items-center gap-4'
          >
            <motion.header {...slideAnimation('down')}>
              <Link
                to='/'
                onClick={() => {
                  setActive('');
                  window.scrollTo(0, 0);
                }}
                className='flex gap-2 items-center'
              >
                <img
                  src='logo.png'
                  alt='Dare Goodness Logo'
                  className='w-9 h-9 object-contain'
                />
                <h4> Dare Goodness</h4>
              </Link>
            </motion.header>
            <motion.div
              {...slideAnimation('down')}
              className='text-[12px] py-2 px-4 rounded-full bg-accent  backdrop-blur-md font-semibold shadow-card'
            >
              Portfolio V3, Also currently working on useeducator.com and
              braille ayo
            </motion.div>
          </motion.div>

          <motion.ul
            {...slideAnimation('down')}
            className='list-none hidden sm:flex flex-row gap-10 items-center'
          >
            {navLinks.map(nav => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[14px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <Button label={'Resume'} />
          </motion.ul>
        </div>
      </nav>
    </AnimatePresence>
  );
};

export default Navbar;
