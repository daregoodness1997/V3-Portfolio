import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'>Dare Goodness</Link>
      </div>
    </nav>
  );
};

export default Navbar;
