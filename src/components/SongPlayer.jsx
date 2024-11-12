import React, { useEffect, useRef } from 'react';
import styles from './SongPlayer.module.css';

function SongPlayer({ currentSong, onDropSong }) {
  const audioRef = useRef(null);

  useEffect(() => {
    // If there’s a new song, play it automatically
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.path;
      audioRef.current.play();
    }
  }, [currentSong]);

  const handleDrop = (event) => {
    event.preventDefault();
    const song = JSON.parse(event.dataTransfer.getData("song"));
    onDropSong(song);  // Set the dropped song in the App component
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default to allow drop
  };

  return (
    <div 
      className={styles.player} 
      onDrop={handleDrop} 
      onDragOver={handleDragOver}
    >
      <h3>Now Playing:</h3>
      {currentSong ? (
        <p>{currentSong.title}</p>
      ) : (
        <p>Drag a song here to play</p>
      )}
      <audio ref={audioRef} controls />
    </div>
  );
}

export default SongPlayer;
