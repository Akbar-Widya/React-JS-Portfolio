import { useState, useEffect } from "react";
import SongCard from "../components/SongCard";
import { useSongs } from "../contexts/SongsContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MusicController() {
  const { id } = useParams();
  const { songs } = useSongs();
  const navigate = useNavigate();
  const [songCoverUrl, setSongCoverUrl] = useState("");

  const currentSong = songs.find((song) => song.id === id);
  const currentIndex = songs.indexOf(currentSong);

  function switchNextSong() {
    if (songs.length > 0) {
      const nextIndex = (currentIndex + 1) % songs.length;
      const nextSongId = songs[nextIndex].id;
      navigate(`/music-controller/${nextSongId}`);
    }
  }

  function switchPrevSong() {
    if (songs.length > 0) {
      const nextIndex = (currentIndex - 1 + songs.length) % songs.length;
      const nextSongId = songs[nextIndex].id;
      navigate(`/music-controller/${nextSongId}`);
    }
  }

  useEffect(() => {
    if (!currentSong) return;

    async function fetchSongCover() {
      try {
        const response = await fetch("https://picsum.photos/500");
        setSongCoverUrl(response.url);
      } catch (error) {
        console.error("Failed to fetch song cover:", error);
        setSongCoverUrl("https://via.placeholder.com/600x400");
      }
    }

    fetchSongCover();
  }, [currentSong]);

  if (!currentSong) {
    return <div>Song not found.</div>;
  }

  return (
    <div className="music-controller">
      <div className="song-cover">
        <img
          class="thumbnail-image"
          src={songCoverUrl}
          alt={`Cover for ${currentSong.name}`}
        />
      </div>
      <SongCard name={currentSong.name} artistName={currentSong.artistName} />

      <div className="controller-buttons">
        <button onClick={switchPrevSong}>
          <svg
            width="36"
            height="36"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z" />
          </svg>
        </button>
        <button>
          <svg
            width="36"
            height="36"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z" />
          </svg>
        </button>
        <button onClick={switchNextSong}>
          <svg
            width="36"
            height="36"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
