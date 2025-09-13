import React from "react";

export default function SongCard({ id, name, artistName }) {
  return (
    <div>
      <div className="song-card" id={id}>
        <span className="song-name">{name}</span>
        <span className="artist-name">{artistName}</span>
      </div>
    </div>
  );
}
