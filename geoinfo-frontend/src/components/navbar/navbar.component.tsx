import React from 'react';
import styles from './navbar.module.css';

import Search from '../search/search.component';

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <Search />
    </div>
  );
};

export default NavBar;