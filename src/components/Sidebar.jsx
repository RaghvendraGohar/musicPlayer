import React from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Music Player</div>
      <div className={styles.menu}>
        <span className={styles.menuItem}>Home</span>
        <span className={styles.menuItem}>Library</span>
        <span className={styles.menuItem}>Playlist</span>
      </div>
      <div className={styles.logoutSection}>
        <span className={styles.menuItem}>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;
