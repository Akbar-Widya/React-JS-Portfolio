import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import PlayList from "./pages/PlayList";
import MusicController from "./pages/MusicController";
import AddSongModal from "./components/AddSongModal";
import DeleteSongModal from "./components/deleteSongModal";
import "./style.css";

function App() {
  const [showAddSongModal, setShowAddSongModal] = useState(false);
  const [showDeleteSongModal, setShowDeleteSongModal] = useState(false)

  return (
    <>
      <nav>
        <span className="brand-name">Solamuze</span>
        <button
          onClick={() => setShowAddSongModal(true)}
          className="btn-outline"
        >
          Add song
        </button>
        <button
          onClick={() => setShowDeleteSongModal(true)}
          className="btn-outline"
        >
          Delete song
        </button>
        <ul>
          <li>
            <Link className="btn-outline" to="/">
              Songs
            </Link>
          </li>
          <li>
            <Link className="btn-outline disabled" disabled>
              MP3 Player
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<PlayList />} />
          <Route path="/music-controller/:id" element={<MusicController />} />
        </Routes>
      </div>
      <AddSongModal
        show={showAddSongModal}
        handleClose={() => setShowAddSongModal(false)}
      />
      <DeleteSongModal show={showDeleteSongModal} handleClose={() => setShowDeleteSongModal(false)} />
    </>
  );
}

export default App;
