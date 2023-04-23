import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Button } from './core';
import { slideAnimation } from '../lib/utils/motion';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = e => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <AnimatePresence mode='wait'>
      <nav
        className={`${styles.paddingX}  flex items-center py-6 fixed top-0 z-20 bg-[transparent] backdrop-blur-md w-screen`}
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
              className='text-[12px] py-2 px-4 rounded-full bg-accent  backdrop-blur-md font-semibold shadow-card xs:block hidden'
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

            <Button
              label={'Resume'}
              onClick={() => {
                window.open('resume.pdf');
              }}
            />
          </motion.ul>
          <motion.div
            className='xs:hidden block cursor-pointer'
            onClick={() => setExpanded(!expanded)}
          >
            <AiOutlineMenu />
          </motion.div>
          {expanded && isMobile && (
            <motion.ul
              {...slideAnimation('down')}
              className='list-none p-8 bg-primary backdrop-blur-md rounded-md absolute top-20 left-2 right-2 '
            >
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  } hover:text-white text-[16px] font-medium cursor-pointer py-4 px-2 rounded-mds`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <Button
                label={'Resume'}
                isFullWidth={true}
                onClick={() => {
                  window.open('resume.pdf');
                }}
              />
            </motion.ul>
          )}
        </div>
      </nav>
    </AnimatePresence>
  );
};

export default Navbar;
