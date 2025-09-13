import { useRef } from "react";
import { useSongs } from "../contexts/SongsContext";
import Modal from "react-modal";

export default function AddSongModal({ show, handleClose }) {
  // const customStyles = {
  //   overlay: {
  //     backgroundColor: "rgba(0, 0, 0, 0.75)",
  //   },
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //     padding: "2em",
  //     display: "flex",
  //     flexDirection: "column",
  //     gap: "2rem",
  //   },
  // };
  const nameRef = useRef();
  const artistNameRef = useRef();
  const { addSong } = useSongs();

  function handleSubmit(e) {
    e.preventDefault();
    addSong({
      name: nameRef.current.value,
      artistName: artistNameRef.current.value,
    });
    handleClose();
  }

  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      // style={customStyles}
      overlayClassName="custom-modal-overlay"
      className="custom-modal"
    >
      <div className="modal-title-description">
        <h2>Input Song Information</h2>
        <button className="btn-outline" onClick={handleClose}>X</button>
      </div>
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name : </label>
          <input ref={nameRef} required />
        </div>
        <div className="form-group">
          <label>Artist Name : </label>
          <input ref={artistNameRef} required />
        </div>
        <button className="btn-primary" type="submit">save</button>
      </form>
    </Modal>
  );
}
