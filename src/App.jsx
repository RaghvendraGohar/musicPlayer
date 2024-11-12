import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';

function App() {
  const [songs] = useState([
    { id: 1, title: "Song 1", path: "/path/to/song1.mp3" },
    { id: 2, title: "Song 2", path: "/path/to/song2.mp3" },
    { id: 3, title: "Song 3", path: "/path/to/song3.mp3" },
  ]);

  const [currentSong, setCurrentSong] = useState(null);

  const handleDropSong = (song) => {
    setCurrentSong(song);  // Set the dropped song as the current song to play
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <SongList 
          songs={songs} 
          onDragStart={(song) => {
            // Setting data for drag event
            document.ondragstart = (event) => {
              event.dataTransfer.setData("song", JSON.stringify(song));
            };
          }} 
        />
      </div>
      <SongPlayer currentSong={currentSong} onDropSong={handleDropSong} />
    </div>
  );
}

export default App;
