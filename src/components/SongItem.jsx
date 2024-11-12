import React from 'react';
import styles from './SongItem.module.css';

function SongItem({ song, index, onDragStart }) {
  return (
    <div 
      className={styles.songItem} 
      draggable 
      onDragStart={() => onDragStart(song)}  // Initiate drag on start
    >
      <span className={styles.index}>{index}.</span>
      <span className={styles.title}>{song.title}</span>
    </div>
  );
}

export default SongItem;
