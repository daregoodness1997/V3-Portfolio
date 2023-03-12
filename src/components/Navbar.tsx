import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 bg-primary backdrop-blur-md`}
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
          <button className='text-[14px] bg-tertiary p-1 px-3 rounded-md hover:scale-125 transition duration-700 ease-in-out '>
            Resume
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
