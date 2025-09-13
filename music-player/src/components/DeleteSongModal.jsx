import { useRef } from "react";
import { useSongs } from "../contexts/SongsContext";
import Modal from "react-modal";

export default function DeleteSongModal({ show, handleClose }) {
  const { songs, deleteSong } = useSongs();
  const songIdRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    deleteSong(songIdRef.current.value);
    handleClose();
  }
  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
    >
      <div className="modal-title-description">
        <h2>Input Song Information</h2>
        <button className="btn-outline" onClick={handleClose}>
          X
        </button>
      </div>
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Delete a song</label>
          <select ref={songIdRef}>
            {songs.map((song) => {
              return (
                <option key={song.id} value={song.id}>
                  {song.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn-primary">delete</button>
      </form>
    </Modal>
  );
}
