import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Button } from './core';

const Navbar = () => {
  const [active, setActive] = useState('');
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 bg-[transparent] backdrop-blur-md`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
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
          Dare Goodness
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
