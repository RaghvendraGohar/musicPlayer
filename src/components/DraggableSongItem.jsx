import React from 'react';
import styles from './DraggableSongItem.module.css';

function DraggableSongItem({ song, onDragStart }) {
  return (
    <div
      className={styles.container}
      draggable
      onDragStart={onDragStart}
    >
      {song.title}
    </div>
  );
}

export default DraggableSongItem;
