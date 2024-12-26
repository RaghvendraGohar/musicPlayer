import React from 'react';
import styles from './SongList.module.css';
import SongItem from './SongItem';

function SongList({ songs, onDragStart }) {
  return (
    <div className={styles.container}>
      {songs.map((song, index) => (
        <SongItem 
          key={song.id} 
          song={song} 
          index={index + 1} 
          onDragStart={() => onDragStart(song)} 
        />
      ))}
    </div>
  );
}

export default SongList;
