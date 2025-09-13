import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const SongsContext = React.createContext();

export function useSongs() {
  return useContext(SongsContext);
}

export function SongsProvider({ children }) {
  const [songs, setSongs] = useLocalStorage("songs", []);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   function switchNextSong() {
//    setCurrentSongIndex(prevIndex => (prevIndex + 1) % songs.length)
//   }

  function openSong(id) {
    return songs.filter((song) => song.id === id);
  }

  function addSong({ name, artistName }) {
    setSongs((prevSongs) => {
      if (prevSongs.find((song) => song.name === name)) {
        return prevSongs;
      }
      return [...prevSongs, { id: uuidV4(), name, artistName }];
    });
  }

  function deleteSong(id) {
      setSongs(prevSongs => {
         return prevSongs.filter(song => song.id !== id)
      })
  }

  return (
    <SongsContext.Provider
      value={{
        songs,
        openSong,
        addSong,
        deleteSong
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}
