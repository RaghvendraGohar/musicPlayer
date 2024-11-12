import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <span className={styles.menuItem}>Music</span>
        <span className={styles.menuItem}>Podcast</span>
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
      </div>
    </div>
  );
}

export default Navbar;
